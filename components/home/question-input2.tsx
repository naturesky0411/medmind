'use client'

import IconEditNote from '@/components/icon/home/icon-edit-note';
import IconBook4 from '@/components/icon/home/icon-book4';
import IconMode from '@/components/icon/home/icon-mode';
import IconMic from '@/components/icon/home/icon-mic';
import IconBolt from '@/components/icon/home/icon-bolt';
import IconStudy from '@/components/icon/home/icon-study';
import IconClinical from '@/components/icon/home/icon-clinical';
import IconAcacemic from '@/components/icon/home/icon-academic';
import IconStandard from '@/components/icon/home/icon-standard';
import IconResearch from '@/components/icon/home/icon-research';
import IconRightArrow from '@/components/icon/home/icon-right-arrow';
import IconAddDoc from '@/components/icon/answer/icon-add-doc';
import Dropdown from '@/components/dropdown';
import {IRootState} from '@/store';
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import Image from 'next/image';

const modeText: { [key: string]: string } = {
    research: "Research",
    academic: "Academic",
    clinical: "Clinical",
    standard: "Standard",
    study: "Study",
}

const micStateFill: { [key: string]: string } = {
    ready: "#8B8A91",
    preparing: "#628EFF",
    recording: "#13EF93",
}

const OptionBar = ({mode, setMode, onEnter, onNewDoc} : {
    mode: string,
    setMode: (responseLength: string) => void
    onNewDoc: () => void
    onEnter: () => void
}) => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const isDarkMode = useSelector((state: IRootState) => state.themeConfig.isDarkMode);
    const [micState, setMicState] = useState<'ready'|'preparing'|'recording'>("ready")

    const handleMic = () => {
        if(micState == "ready"){
            setMicState("preparing")
            setTimeout(() => setMicState("recording"), 1000)
        } else if(micState == "recording"){
            setMicState("ready")
        }
    }

    return (
        <div className='flex justify-between pr-1'>
            <div className='flex justify-start gap-1 items-center'>
                <div onClick={handleMic}><IconMic className='cursor-pointer' fill={micStateFill[micState]} /></div>
                <div title="Add Doc" onClick={onNewDoc} className='cursor-pointer flex gap-1  text-base px-3 p-1 rounded-md'>
                    <IconAddDoc/>
                </div>           
            </div>
            <div onClick={onEnter}
                className='cursor-pointer w-10 h-10 shadow-md hover:bg-slate-50 rounded-full flex items-center bg-[#ffffff] justify-center text-[30px]'>
                <IconRightArrow />
            </div>
        </div>
    )
}

const QuestionInput = ({responseLength, setResponseLength, mode, setMode, onEnter, onNewDoc} : {
    responseLength: string,
    setResponseLength: (responseLength: string) => void
    mode: string,
    setMode: (responseLength: string) => void,
    onEnter: () => void
    onNewDoc: () => void
}) => {
    const isDarkMode = useSelector((state: IRootState) => state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

    return (
        <div className='border-[2px] h-[108px] rounded-md p-1 flex flex-col justify-between'>
            <div className='px-2 pt-2'>
                <input 
                    className='w-full text-lg py-1 bg-inherit'
                    placeholder='Ask a follow-up...'/>
            </div>
            <OptionBar mode={mode} setMode={setMode} onEnter={onEnter} onNewDoc={onNewDoc}/>
        </div>
    )
}

export default QuestionInput;