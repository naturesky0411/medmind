"use client";
import react from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeedbackForm = () => {

    const onClose = (e: any) => {
        e.preventDefault();
    }
    return (
        <div className='absolute w-[40%] bottom-[70px] right-[50px] bg-[#ffffff] rounded-lg shadow-lg text-[#636262] '>
            <div className='flex flex-row-reverse'>
                <Link href={""} onClick={(e) => onClose(e)}><Image src={"/assets/images/close_small.svg"} alt='close icon' width={30} height={30}></Image></Link>
            </div>
            <div className='px-[50px] pb-[50px]'>
                <div className='text-[20px] mt-[20px]'>
                    <h1>We value your feedback.</h1>
                </div>
                <div className='mt-[20px]'>
                    <h1 className='mb-[5px]'>Feature Description</h1>
                    <input type='text' placeholder='Describe the feature(s) here.' className='w-full rounded border border-[#C0C0C0] p-[5px] focus:border focus:border-[#c0c0c0]'/>
                </div>
            </div>
        </div>
    )
}

export default FeedbackForm;