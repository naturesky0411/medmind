'use client'

import IconFeedback from '@/components/icon/home/icon-feedback';
import IconClose from '@/components/icon/home/icon-close';
import Dropdown from '@/components/dropdown';
import {IRootState} from '@/store';
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import IconThumbDown from '@/components/icon/answer/icon-thumb-down';
import IconRightArrow from '@/components/icon/home/icon-right-arrow';

const ThumbDownPopUp = ({onThumbDown}:{
    onThumbDown:({ options, comments } : { options:any, comments:any }) => void
}) => {
    const isDarkMode = useSelector((state : IRootState) => state.themeConfig.isDarkMode);
    const isRtl = useSelector((state : IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const [showModal, setShowModal] = useState<boolean>(false)
    const [comments, setComments] = useState<string>("");
    const [options, setOptions] = useState<any>({});

    const onClick = () => {
        setShowModal(false);
        //@ts-ignore
        onThumbDown({options, comments})
    }

    const onCheckboxClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        console.log(options)
        console.log(e.currentTarget.checked)
        setOptions({
            ...options,
            [e.currentTarget.id]: e.currentTarget.checked
        })
    }

    return (
        <div className=''>
            <div onClick={() => setShowModal(!showModal)}
                className = 'relative cursor-pointer' > 
                <IconThumbDown/>
            </div>
            {showModal && <div className='relative'>
                <form className="absolute left-0 bottom-8 text-[#636262] w-[400px] bg-[#ffffff] shadow-md pt-1 p-6 rounded-lg">
                    <div className='relative'>
                        <div className='cursor-pointer absolute -right-4 top-1' onClick={() => setShowModal(false)}>
                            <IconClose />
                        </div>
                    </div>
                    <div className='pb-0 pt-5 text-xl font-medium'>
                        How can we improve the response?
                    </div>
                    <div className='pt-0 mt-0 pb-0 text-[12px] font-base'>
                        Please select all that apply.
                    </div>
                    <div className='flex pt-5 flex-wrap gap-y-5'>
                        <div className='flex w-1/2 gap-1 justify-start items-center'>
                            <input className='cursor-pointer custom-checkbox checkbox-mark'
                                id="checkbox_inaccurate"
                                type="checkbox" onClick={onCheckboxClick}/>
                            <label htmlFor="checkbox_inaccurate" className='mb-0 font-normal cursor-pointer'>Inaccurate</label>
                        </div>
                        <div className='flex w-1/2 gap-1 justify-start items-center'>
                            <input className='cursor-pointer custom-checkbox checkbox-mark'
                                id="checkbox_not_helpful"
                                type="checkbox" onClick={onCheckboxClick}/>
                            <label htmlFor="checkbox_not_helpful" className='mb-0 font-normal cursor-pointer'>Not helpful or relevant</label>
                        </div>
                        <div className='flex w-1/2 gap-1 justify-start items-center'>
                            <input className='cursor-pointer custom-checkbox checkbox-mark'
                                id="checkbox_missing_infomation"
                                type="checkbox" onClick={onCheckboxClick}/>
                            <label htmlFor="checkbox_missing_infomation" className='mb-0 font-normal cursor-pointer'>Missing information</label>
                        </div>
                        <div className='flex w-1/2 gap-1 justify-start items-center'>
                            <input className='cursor-pointer custom-checkbox checkbox-mark'
                                id="checkbox_dint_understand"
                                type="checkbox" onClick={onCheckboxClick}/>
                            <label htmlFor="checkbox_dint_understand" className='mb-0 font-normal cursor-pointer'>Didn’t understand me</label>
                        </div>
                    </div>
                    <div className='mt-5 pr-8'>
                        <label htmlFor="feature_comments">Any Additional Comments?</label>
                        <textarea
                            id="feature_comments"
                            style={{resize: "none", height: "72px"}}
                            onChange={e => setComments(e.target.value)}
                            placeholder="Type any additional comments."
                            className="form-input"/>
                    </div>                    
                    <div onClick={onClick}
                        className='absolute right-4  bottom-8 bg-[#636262] cursor-pointer w-8 h-8 shadow-md hover:bg-[#797777] rounded-full flex items-center justify-center text-[30px]'>
                        <IconRightArrow fill={"white"}/>
                    </div>
                </form>
            </div>}
        </div>
    )
}

export default ThumbDownPopUp;