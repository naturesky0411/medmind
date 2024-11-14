'use client';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toggleSidebar } from '@/store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { IRootState } from '@/store';
import { useState, useEffect } from 'react';
import IconCaretsDown from '@/components/icon/icon-carets-down';
import IconMenuDashboard from '@/components/icon/menu/icon-menu-dashboard';
import IconLogo from '@/components/icon/icon-logo';
import IconCaretDown from '@/components/icon/icon-caret-down';
import IconMinus from '@/components/icon/icon-minus';
import IconMenuChat from '@/components/icon/menu/icon-menu-chat';
import IconMenuMailbox from '@/components/icon/menu/icon-menu-mailbox';
import IconMenuTodo from '@/components/icon/menu/icon-menu-todo';
import IconMenuNotes from '@/components/icon/menu/icon-menu-notes';
import IconMenuScrumboard from '@/components/icon/menu/icon-menu-scrumboard';
import IconMenuContacts from '@/components/icon/menu/icon-menu-contacts';
import IconMenuInvoice from '@/components/icon/menu/icon-menu-invoice';
import IconMenuCalendar from '@/components/icon/menu/icon-menu-calendar';
import IconMenuComponents from '@/components/icon/menu/icon-menu-components';
import IconMenuElements from '@/components/icon/menu/icon-menu-elements';
import IconMenuCharts from '@/components/icon/menu/icon-menu-charts';
import IconMenuWidgets from '@/components/icon/menu/icon-menu-widgets';
import IconMenuFontIcons from '@/components/icon/menu/icon-menu-font-icons';
import IconMenuDragAndDrop from '@/components/icon/menu/icon-menu-drag-and-drop';
import IconMenuTables from '@/components/icon/menu/icon-menu-tables';
import IconMenuDatatables from '@/components/icon/menu/icon-menu-datatables';
import IconMenuForms from '@/components/icon/menu/icon-menu-forms';
import IconMenuUsers from '@/components/icon/menu/icon-menu-users';
import IconMenuPages from '@/components/icon/menu/icon-menu-pages';
import IconMenuAuthentication from '@/components/icon/menu/icon-menu-authentication';
import IconMenuDocumentation from '@/components/icon/menu/icon-menu-documentation';
import IconHome from '@/components/icon/sidebar/icon-home';
import IconHistory from '@/components/icon/sidebar/icon-history';
import IconLibrary from '@/components/icon/sidebar/icon-library';
import IconMedConnect from '@/components/icon/sidebar/icon-medconnect';
import { usePathname } from 'next/navigation';
import { getTranslation } from '@/i18n';
import FileExplorerTree from '../library/FileExploreTree';
import _files from '@/data/files.json';

const Sidebar = () => {
    const files: any = _files;
    const dispatch = useDispatch();
    const { t } = getTranslation();
    const pathname = usePathname();
    const router = useRouter();
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const isDarkMode = useSelector((state: IRootState) => state.themeConfig.isDarkMode);
    const toggleMenu = (value: string) => {
        router.push('/library');
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
       
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        setActiveRoute();
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
    }, [pathname]);

    const setActiveRoute = () => {
        if(window.location.pathname !== '/library'){
            setCurrentMenu('');
        }
        let allLinks = document.querySelectorAll('.sidebar ul a.active');
        for (let i = 0; i < allLinks.length; i++) {
            const element = allLinks[i];
            element?.classList.remove('active');
        }
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        selector?.classList.add('active');
    };

    return (
        <div className={semidark ? 'dark' : ''}>
            <nav
                className={`sidebar fixed bottom-0 top-0 lg:top-[44px] z-50 h-full min-h-[calc(100vh - 44px)] w-[260px] shadow-[0_0_0_0_rgba(94,92,154,0.1)] transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            >
                <div className="h-full bg-white dark:bg-black">
                    <div className="flex items-center justify-between px-4 py-3">
                        <Link href="/" className="main-logo flex shrink-0 items-center">
                            <IconLogo fill={isDarkMode ? "white" : "#636262"} />
                        </Link>

                        <button
                            type="button"
                            className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconCaretsDown className="m-auto rotate-90" />
                        </button>
                    </div>
                    <PerfectScrollbar className="relative h-[calc(100vh-118px)]">
                        <ul className="relative space-y-0.5 p-4 pt-9 font-semibold">
                            <li className="nav-item">
                                <ul>
                                    <li className="nav-item">
                                        <Link href="/home" className="group">
                                            <div className="flex items-center">
                                                <IconHome className="shrink-0 group-hover:!text-primary" fill={isDarkMode ? "white" : "black"} />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#c9ced6] hover:underline dark:group-hover:text-white-dark">{t('Home')}</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="menu nav-item">
                                        <Link href='/library' className={`nav-link group w-full`} onClick={() => toggleMenu('invoice')} >
                                            <div className="flex items-center">
                                                <IconLibrary className="shrink-0 group-hover:!text-primary" fill={isDarkMode ? "white" : "black"} />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] hover:underline dark:group-hover:text-white-dark">{t('Library')}</span>
                                            </div>
                                        </Link>
                                        {currentMenu == 'invoice' ? (
                                            <div className='pl-[40px] py-[10px]'>
                                                <h1 className='mb-[10px]'>My collections:</h1>
                                                <FileExplorerTree files={files} />
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/history" className="group">
                                            <div className="flex items-center">
                                                <IconHistory className="shrink-0 group-hover:!text-primary" fill={isDarkMode ? "white" : "black"} />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#c9ced6] hover:underline dark:group-hover:text-white-dark">{t('History')}</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/medconnect" className="group">
                                            <div className="flex items-center">
                                                <IconMedConnect className="shrink-0 group-hover:!text-primary" fill={isDarkMode ? "white" : "black"} />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#c9ced6] hover:underline dark:group-hover:text-white-dark">{t('MedConnect')}</span>
                                            </div>
                                        </Link>
                                    </li>

                                    <li className="menu nav-item hidden">
                                        <button type="button" className={`${currentMenu === 'invoice' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('invoice')}>
                                            <div className="flex items-center">
                                                <IconMenuInvoice className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('invoice')}</span>
                                            </div>

                                            <div className={currentMenu !== 'invoice' ? '-rotate-90 rtl:rotate-90' : ''}>
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'invoice' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <Link href="/apps/invoice/list">{t('list')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/apps/invoice/preview">{t('preview')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/apps/invoice/add">{t('add')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/apps/invoice/edit">{t('edit')}</Link>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li>
                                </ul>
                            </li>


                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
