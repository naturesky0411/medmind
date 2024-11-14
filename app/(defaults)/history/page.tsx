import { Metadata } from 'next';
import React from 'react';
import HistoryItem from '@/components/historyItem';

export const metadata: Metadata = {
    title: 'History',
};

const Page = () => {
    return(
        <div className='p-6'>
            <div className='h-[70px]'>
                <p className="block text-[#636262] text-[36px]">
                    History
                </p>
            </div>
            <div>
                <div className='flex items-center h-[42px]'>
                    <p className="block text-[#8B8A91] text-[14px]">Today</p>
                </div>
                <div className='pl-8'>
                    <HistoryItem topic='Hello this is history item!'></HistoryItem>
                    <HistoryItem></HistoryItem>
                    <HistoryItem></HistoryItem>
                    <HistoryItem></HistoryItem>
                    <HistoryItem></HistoryItem>
                </div>
            </div>
            <div className='mt-[30px]'>
                <div className='flex items-center h-[42px]'>
                    <p className="block text-[#8B8A91] text-[14px]">Last 7 Days</p>
                </div>
                <div className='pl-8'>
                    <HistoryItem></HistoryItem>
                    <HistoryItem></HistoryItem>
                    <HistoryItem></HistoryItem>
                    <HistoryItem></HistoryItem>
                    <HistoryItem></HistoryItem>
                </div>
            </div>
        </div>
    );
};

export default Page;
