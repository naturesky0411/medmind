'use client'
import IconEditNote from '@/components/icon/home/icon-edit-note';
import IconBook4 from '@/components/icon/home/icon-book4';
import Dropdown from '@/components/dropdown';
import {IRootState} from '@/store';
import {useDispatch, useSelector} from 'react-redux';

const lengthText: { [key: string]: string } = {
    standard: "Length",
    short: "Short",
    long: "Long",
}

const ResponseLength = ({responseLength, setResponseLength} : {
    responseLength: string,
    setResponseLength: (responseLength: string) => void
}) => {
    const isDarkMode = useSelector((state: IRootState) => state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

    return (
        <div className='dropdown'>
            <Dropdown
                offset={[0, 8]}
                placement={`${isRtl
                ? 'top-start'
                : 'top-end'}`}
                btnClassName="relative group block"
                button={<div className = 'text-base px-4 bg-[#F0EFED] hover:bg-[#ECF1FF] cursor-pointer flex items-center justify-between gap-1 p-1 rounded-md' > 
                        <IconEditNote/>{lengthText[responseLength]} 
                    </div>}
            >
                <ul
                    className="font-normal w-[150px] p-3 !py-0 text-dark dark:text-white-dark dark:text-white-light/90">
                    {responseLength != "short" && <li onClick={() => {setResponseLength("short")}}>
                        <div className="dark:hover:text-white hover:bg-gray-200 text-right p-3 cursor-pointer text-base">
                            Short Response
                        </div>
                    </li>}
                    {responseLength != "long" && <li onClick={() => {setResponseLength("long")}}>
                        <div className="dark:hover:text-white hover:bg-gray-200 text-right p-3 cursor-pointer text-base">
                            Long Response
                        </div>
                    </li>}
                    {responseLength != "standard" && <li onClick={() => {setResponseLength("standard")}}>
                        <div className="dark:hover:text-white hover:bg-gray-200 text-right p-3 cursor-pointer text-base">
                            Standard
                        </div>
                    </li>}
                </ul>
            </Dropdown>
        </div>
    )
}

export default ResponseLength;