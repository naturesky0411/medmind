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
import Dropdown from '@/components/dropdown';
import {IRootState} from '@/store';
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';

const modeText: { [key: string]: string } = {
    research: "Research",
    academic: "Academic",
    clinical: "Clinical",
    standard: "Standard",
    study: "Study",
}

const micStateFill: { [key: string]: string } = {
    ready: "#636262",
    preparing: "#628EFF",
    recording: "#13EF93",
}

const OptionBar = ({mode, setMode, onEnter} : {
    mode: string,
    setMode: (responseLength: string) => void
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
            <div className='flex justify-start gap-3 items-center'>
                <div onClick={handleMic}><IconMic className='cursor-pointer' fill={micStateFill[micState]} /></div>
                <div className='cursor-pointer flex gap-1 bg-[#FCFFCF] hover:bg-[#f6fabd] text-base px-3 p-1 rounded-md'>
                    <IconBolt />
                    Quick Upload
                </div>
                <div className='dropdown'>
                    <Dropdown
                        offset={[0, 8]}
                        placement={`${isRtl
                        ? 'bottom-end'
                        : 'bottom-start'}`}
                        btnClassName="relative group block"
                        button={<div className = 'text-base px-4 bg-[#F0EFED] hover:bg-[#ECF1FF] cursor-pointer flex items-center justify-between gap-1 p-1 rounded-md' > 
                                <IconMode/>{modeText[mode]} 
                            </div>}
                    >
                        <ul
                            className="font-normal w-[150px] p-3 !py-0 text-dark dark:text-white-dark dark:text-white-light/90">
                            <li onClick={() => {setMode("academic")}}>
                                <div className="dark:hover:text-white flex gap-1 hover:bg-gray-200 p-3 cursor-pointer text-base">
                                    <IconAcacemic/> {modeText['academic']}
                                </div>
                            </li>
                            <li onClick={() => {setMode("clinical")}}>
                                <div className="dark:hover:text-white flex gap-1 hover:bg-gray-200 p-3 cursor-pointer text-base">
                                    <IconClinical/> {modeText['clinical']}
                                </div>
                            </li>
                            <li onClick={() => {setMode("research")}}>
                                <div className="dark:hover:text-white flex gap-1 hover:bg-gray-200 p-3 cursor-pointer text-base">
                                    <IconResearch/> {modeText['research']}
                                </div>
                            </li>
                            <li onClick={() => {setMode("study")}}>
                                <div className="dark:hover:text-white flex gap-1 hover:bg-gray-200 p-3 cursor-pointer text-base">
                                    <IconStudy/> {modeText['study']}
                                </div>
                            </li>
                            <li onClick={() => {setMode("standard")}}>
                                <div className="dark:hover:text-white flex gap-1 hover:bg-gray-200 p-3 cursor-pointer text-base">
                                    <IconStandard/> {modeText['standard']}
                                </div>
                            </li>
                        </ul>
                    </Dropdown>
                </div>   
            </div>
            <div onClick={onEnter}
                className='cursor-pointer w-10 h-10 shadow-md hover:bg-slate-50 rounded-full flex items-center bg-[#ffffff] justify-center text-[30px]'>
                <IconRightArrow />
            </div>
        </div>
    )
}

const QuestionInput = ({responseLength, setResponseLength, mode, setMode, onEnter} : {
    responseLength: string,
    setResponseLength: (responseLength: string) => void
    mode: string,
    setMode: (responseLength: string) => void,
    onEnter: () => void
}) => {
    const isDarkMode = useSelector((state: IRootState) => state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

    return (
        <div className='border-[2px] h-[108px] rounded-md p-1 flex flex-col justify-between'>
            <div className='px-2 pt-2'>
                <input 
                    className='w-full text-lg py-1'
                    placeholder='Ask a question... Reference your library sources with @. Ex: @doc, @folder, @collection, @mylibrary'/>
            </div>
            <OptionBar mode={mode} setMode={setMode} onEnter={onEnter}/>
        </div>
    )
}

export default QuestionInput;