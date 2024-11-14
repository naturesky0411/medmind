'use client'

import Dropdown from '@/components/dropdown';
import Link from 'next/link';
import IconUser from '@/components/icon/header/icon-profile';
import IconSetting from '@/components/icon/header/icon-setting';
import IconLogout from '@/components/icon/header/icon-logout';
import { IRootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';

const ProfileBtn = () => {
    const isDarkMode = useSelector((state: IRootState) => state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

    return (
        <div className="dropdown lg:flex absolute shrink-0 hidden right-3 top-3">
            <Dropdown
                offset={[0, 8]}
                placement={`${isRtl
                ? 'bottom-start'
                : 'bottom-end'}`}
                btnClassName="relative group block"
                button={<div className="h-9 w-9 bg-white-light/40 p-2 hover:bg-white-light/90 dark:bg-dark/40 dark:hover:bg-dark/60 rounded-full object-cover saturate-50 group-hover:saturate-100"> JD</div>}
                >
                <ul
                    className="w-[150px] !py-0 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">
                    <li className='hidden'>
                        <div className="flex items-center px-4 py-4">
                            <IconUser/>
                            <div className="truncate ltr:pl-4 rtl:pr-4">
                                <h4 className="text-base">
                                    John Doe
                                    <span
                                        className="rounded bg-success-light px-1 text-xs text-success ltr:ml-2 rtl:ml-2">Pro</span>
                                </h4>
                                <button
                                    type="button"
                                    className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white">
                                    johndoe@gmail.com
                                </button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href="/users/profile" className="dark:hover:text-white">
                            <IconUser
                                className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2"
                                fill={isDarkMode
                                ? "white"
                                : "black"}/>
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link href="/apps/mailbox" className="dark:hover:text-white">
                            <IconSetting
                                className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2"
                                fill={isDarkMode
                                ? "white"
                                : "black"}/>
                            Setting
                        </Link>
                    </li>
                    <li>
                        <Link href="/auth/boxed-lockscreen" className="dark:hover:text-white">
                            <IconLogout
                                className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2"
                                fill={isDarkMode
                                ? "white"
                                : "black"}/>
                            Logout
                        </Link>
                    </li>
                </ul>
            </Dropdown>
        </div>
    )
}
export default ProfileBtn;