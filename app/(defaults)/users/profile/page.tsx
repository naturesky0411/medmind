import { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'profile',
};

const Page = () => {
    return (
        <div className='flex p-[30px] text-[#636262]'>
            <div className='w-[60%]'>
                <h1 className='text-[36px] my-[20px]'>Hi Rachel,</h1>
                <p className='text-[18px] my-[10px]'>Let MedMinded get to know you.</p>
                <p className='text-[18px] my-[10px]'>Share more about yourself so our AI can learn your style and personalize your experience. </p>
                <textarea rows={20} className='text-[18px] bg-[#fff] shadow-lg w-[80%] my-[10px] p-4 rounded'>I’m someone who loves learning and keeping up with the latest medical research.</textarea>
            </div>
            <div className='w-[40%] p-5'>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='rounded-full'><Image src="/assets/images/user-profile.jpeg" alt="" width="50" height="50" className='rounded-full'/></div>
                    <div className='flex items-start'><span className='text-[36px]'>Profile</span><div><Image src="/assets/images/edit.png" alt="" width={24} height="24"/></div></div>
                </div>
                <div>
                    <ul className='text-[18px] p-4'>
                        <li className='my-[20px]'><span className='font-bold'>First Name: </span>Rachel</li>
                        <li className='my-[20px]'><span className='font-bold'>Last Name: </span>Alamar</li>
                        <li className='my-[20px]'><span className='font-bold'>Email:</span> ralamar@medminded.ai</li>
                        <li className='my-[20px]'><span className='font-bold'>Organization:</span>MedMinded</li>
                        <li className='my-[20px]'><span className='font-bold'>Profession: </span>Physician, MD</li>
                        <li className='my-[20px]'><span className='font-bold'>Specialty:</span>Pediatrics</li>
                        <li className='my-[20px]'><span className='font-bold'>Subspecialty:</span>Cardiology</li>
                        <li className='my-[20px]'><span className='font-bold'>Joined:</span>10/25/2024</li>
                        <li className='my-[20px]'><span className='font-bold'>Location:</span>Pennsylvania, USA</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Page;
