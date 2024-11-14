'use client'

import IconFeedback from '@/components/icon/home/icon-feedback';
import IconClose from '@/components/icon/home/icon-close';
import Dropdown from '@/components/dropdown';
import {IRootState} from '@/store';
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';

const Feedback = ({onFeedbackSubmit}:{
    onFeedbackSubmit:(payload : {payload:any}) => void
}) => {
    const isDarkMode = useSelector((state : IRootState) => state.themeConfig.isDarkMode);
    const isRtl = useSelector((state : IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const [showModal, setShowModal] = useState<boolean>(false)
    const [description, setDescription] = useState<string>("");
    const [benefits, setBenefits] = useState<string>("");
    const [comments, setComments] = useState<string>("");

    const onSubmit = () => {
        // Submit the form here
        setShowModal(false);
        //@ts-ignore
        onFeedbackSubmit({description, benefits, comments})
    }

    return (
        <div className='absolute -bottom-8 right-0'>
            <div onClick={() => setShowModal(!showModal)}
                className = 'relative cursor-pointer bg-[#F0EFED] hover:bg-[#dad9d7] w-[60px] h-[60px] rounded-full flex items-center justify-center' > 
                <IconFeedback/>
            </div>
            {showModal && <div className='relative'>
                <form className="absolute right-0 bottom-20 space-y-5 text-[#636262] w-[600px] bg-[#ffffff] shadow-md pt-1 p-6 rounded-lg">
                    <div className='relative'>
                        <div className='cursor-pointer absolute -right-4 top-1' onClick={() => setShowModal(false)}>
                            <IconClose />
                        </div>
                    </div>
                    <div className='pb-0 text-xl font-medium relative'>
                        We value your feedback.
                    </div>
                    <div className=''>
                        <label htmlFor="feature_description">Feature Description</label>
                        <input
                            id="feature_description"
                            type="text"
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Describe the feature(s) here."
                            className="form-input"/>
                    </div>
                    <div className=''>
                        <label htmlFor="feature_benefits">Feature Benefits</label>
                        <textarea
                            id="feature_benefits"
                            style={{resize: "none", height: "72px"}}
                            onChange={e => setBenefits(e.target.value)}
                            placeholder="Please share how it would help you."
                            className="form-input"/>
                    </div>
                    <div className=''>
                        <label htmlFor="feature_addtional">Additional Comments & Feedback</label>
                        <textarea
                            id="feature_addtional"
                            style={{resize: "none", height: "72px"}}
                            onChange={e => setComments(e.target.value)}
                            placeholder="Please share anything else here."
                            className="form-input"/>
                    </div>
                    <div onClick={onSubmit} 
                        className="cursor-pointer rounded-md bg-[#636262] hover:bg-[#555454] !mt-6 px-3 py-2 font-medium float-end text-sm text-[#ffffff]">
                        Submit
                    </div>
                </form>
            </div>}
        </div>
    )
}

export default Feedback;