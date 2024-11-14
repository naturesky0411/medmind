"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import IconLogo from '@/components/icon/icon-logo';
import IconLogoA from '@/components/icon/answer/icon-logo-answer';
import IconBook4 from '@/components/icon/home/icon-book4';
import Dropdown from '@/components/dropdown';
import IconUser from '@/components/icon/header/icon-profile';
import IconSetting from '@/components/icon/header/icon-setting';
import IconLogout from '@/components/icon/header/icon-logout';
import Image from 'next/image';
import QuestionInput from '@/components/home/question-input2';
import PdfViewer from '@/components/PdfViewer';
import IconMode from '@/components/icon/home/icon-mode';
import IconHome from '@/components/icon/sidebar/icon-home';
import IconHistory from '@/components/icon/sidebar/icon-history';
import IconLibrary from '@/components/icon/sidebar/icon-library';
import IconList from '@/components/icon/answer/icon-list';
import IconCopy from '@/components/icon/answer/icon-copy';
import IconShareWindow from '@/components/icon/answer/icon-share-window';
import IconThumbUp from '@/components/icon/answer/icon-thumb-up';
import IconThumbDown from '@/components/icon/answer/icon-thumb-down';
import IconArrowDown from '@/components/icon/answer/icon-arrow-down';
import IconStudy from '@/components/icon/home/icon-study';
import IconClinical from '@/components/icon/home/icon-clinical';
import IconAcacemic from '@/components/icon/home/icon-academic';
import IconStandard from '@/components/icon/home/icon-standard';
import IconResearch from '@/components/icon/home/icon-research';
import IconRightArrow from '@/components/icon/home/icon-right-arrow';
import ThumbDownPopUp from '@/components/answer/thumbDownPopUp';
import CopyMsg from '@/components/answer/copyMsg';

const modeText: { [key: string]: string } = {
    research: "Research",
    academic: "Academic",
    clinical: "Clinical",
    standard: "Standard",
    study: "Study",
}

const Answer = () => { 
    const pdfUrl = 'example.pdf';
    const [responseLength, setResponseLength] = useState<string>('standard');
    const [mode, setMode] = useState<string>('standard');
    const [hiddenCopyMsg, setHiddenCopyMsg] = useState<boolean>(true);
    const [hiddenCitation, setHiddenCitation] = useState<boolean>(true);

    const onEnter = () => {
        console.log("on Enter")
    }

    const onNewDoc = () => {
        console.log("on New Doc")
    }

    const onCopy = () => {
        console.log("on Copy")
        setHiddenCopyMsg(false);
        setTimeout(() => setHiddenCopyMsg(true), 2000);
    }

    const onShareWindow = () => {
        console.log("on Share Window")
    }

    const onThumbUp = () => {
        console.log("on ThumbUp")
    }

    const onThumbDown = ({options, comments} : {options:any, comments:any}) => {
        console.log("on ThumbDown")
        console.log(options, comments)
    }
    return (
        <div>
            <div className='flex gap-2 h-[100vh] bg-[#F0EFED]'>
                <div className=' h-[100vh] bg-[#FBFAF8] w-[calc(50vw-8px)]'>
                    <div className='flex justify-between items-center px-[30px] pt-10 pb-2'>
                        <div>
                            <div className='text-base px-4 text-[#636262] bg-[#F0EFED] hover:bg-[#ECF1FF] cursor-pointer flex items-center  gap-1 p-1 rounded-md'>
                                <IconBook4 /> New Conversation
                            </div>
                        </div>
                        <div>
                            <Link href="/" className="main-logo flex shrink-0 items-center">
                                <IconLogo fill={"#636262"} />
                            </Link>
                        </div>
                        <div>
                            <div className="horizontal-logo dropdown flex  pr-4">
                                <Dropdown
                                    offset={[0, 8]}
                                    placement={`bottom-end`}
                                    btnClassName="relative group block"
                                    button={<div className="h-9 w-9 bg-white-light/40 p-2 hover:bg-white-light/90 dark:bg-dark/40 dark:hover:bg-dark/60 rounded-full object-cover saturate-50 group-hover:saturate-100"><Image src="/assets/images/menu.png" alt="menu" width="50" height="50" /></div>}
                                >
                                    <ul className="w-[150px] bg-white !py-0 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">

                                        <li>
                                            <Link href="/home" className="dark:hover:text-white text-[#636262]">
                                                <IconHome className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" fill={"#636262"} />
                                                <div className='pl-2'>Home</div>                                                
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/library" className="dark:hover:text-white text-[#636262]">
                                                <IconLibrary className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" fill={"#636262"} />
                                                <div className='pl-2'>Library</div>                                                
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/history" className="dark:hover:text-white text-[#636262]">
                                                <IconHistory className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" fill={"#636262"} />
                                                <div className='pl-2'>History</div>                                                
                                            </Link>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    {/* content view */}
                    <div className='px-[30px] flex flex-col justify-between text-[#636262] pb-4 pt-0 h-[calc(100vh-98px)]'>
                        <div className='h-[calc(100vh-270px)] overflow-y-scroll'>
                            <div className='flex items-center py-3 gap-3'>
                                <div>
                                    <div className='rounded-full bg-[#F0EFED] text-[#636262] text-[20px] !w-[40px] h-[40px] flex justify-center items-center'>RA</div>
                                </div>
                                <div><p className='bg-[#F0EFED] rounded-md p-[10px] text-[14px]'>What are the indications of RSV vaccine in infants to prevent bronchiolitis?</p></div>
                            </div>
                            <div className='flex items-center py-3 gap-3'>
                                <div className='rounded-full ]'><IconLogoA/></div>
                                <div><p className=' rounded-md p-[10px] text-[18px]'>Indications of RSV Vaccine in Infants to Prevent Bronchiolitis</p></div>
                            </div>
                            <div className='pl-[50px] max-h-[55vh]  my-[10px]'>
                                <h1 className='text-[16px] my-[15px]'>Overview of RSV and Risk Factors</h1>

                                <p className='my-[10px]'>
                                    Respiratory Syncytial Virus (RSV) is a significant cause of bronchiolitis and pneumonia in infants, especially affecting those in their first year of life. Approximately 20% to 30% of infants infected with RSV develop lower respiratory tract diseases such as bronchiolitis. Signs typically include rhinitis, cough, and increased respiratory effort, which can progress to more severe symptoms like wheezing and retractions         .
                                </p>
                                <p className='my-[10px]'>
                                    The highest rates of RSV hospitalizations occur in infants under six months of age, with certain risk factors increasing the likelihood of severe disease:
                                </p>
                                <ul className='list-disc pl-[20px]'>
                                    <li>Prematurity (especially those born before 29 weeks of gestation)</li>
                                    <li>Chronic lung disease of prematurity</li>
                                    <li>Anatomic pulmonary abnormalities</li>
                                    <li>Neuromuscular disorders</li>
                                    <li>Neuromuscular disorders</li>
                                </ul>

                                <h1 className='text-[16px] my-[15px]'>Indications for RSV Immunoprophylaxis</h1>

                                <p className='my-[10px]'>Immunoprophylaxis using palivizumab is recommended for specific high-risk infant populations to prevent RSV-related hospitalizations. The following groups are advised to receive this prophylaxis:
                                </p>
                                <ul className='pl-[10px]'>
                                    <li><span className='font-bold'>1. Premature Infants:</span> Infants born before 29 weeks of gestation are highly encouraged to receive prophylaxis during their first RSV season.</li>
                                    <li><span className='font-bold'>2. Infants with Chronic Lung Disease:</span> Those with a history of chronic lung disease of prematurity should receive prophylaxis.</li>
                                    <li><span className='font-bold'>3. Congenital Heart Disease (CHD):</span> Infants with certain heart conditions may qualify for prophylaxis based on their medical history.</li>
                                    <li><span className='font-bold'>4. Neuromuscular Disorders:</span> Infants with conditions that impair cough or secretion clearance may be considered for prophylaxis.</li>
                                    <li><span className='font-bold'>5. Immunocompromised Children:</span> Children undergoing treatments or with conditions that weaken their immune systems may be eligible.</li>
                                    <li><span className='font-bold'>6. Infants with Specific Anatomical Issues:</span> Those with pulmonary abnormalities may require prophylaxis during RSV season.</li>
                                </ul>
                                <h1 className='text-[16px] my-[10px]'> Special Considerations</h1>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-4 items-center justify-start py-4'>                                
                                <div className='dropdown'>
                                    <div onClick={() => setHiddenCitation(!hiddenCitation)} 
                                        className = 'text-base px-4 bg-[#F0EFED] hover:bg-[#ECF1FF] cursor-pointer flex items-center justify-between gap-1 p-1 rounded-md' > 
                                        <IconList/>Citation<IconArrowDown/>
                                    </div>
                                    {false && <Dropdown
                                        offset={[0, 8]}
                                        placement={`top-start`}
                                        btnClassName="relative group block"
                                        button={<div className = 'text-base px-4 bg-[#F0EFED] hover:bg-[#ECF1FF] cursor-pointer flex items-center justify-between gap-1 p-1 rounded-md' > 
                                                <IconList/>{modeText[mode]}<IconArrowDown/>
                                            </div>}
                                    >
                                        <ul
                                            className="font-normal w-[150px] p-3 !py-0 text-darkbg bg-[#F0EFED] dark:text-white-dark dark:text-white-light/90">
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
                                    </Dropdown>}
                                </div>
                                <div className='cursor-pointer relative' onClick={onCopy}>
                                    <IconCopy/>
                                    <CopyMsg hidden={hiddenCopyMsg}/>
                                </div>
                                <div className='cursor-pointer' onClick={onShareWindow}>
                                    <IconShareWindow/>
                                </div>
                                <div className='cursor-pointer' onClick={onThumbUp}>
                                    <IconThumbUp/>
                                </div>
                                <div className='relative'>
                                    <ThumbDownPopUp onThumbDown={onThumbDown}/>
                                </div>
                            </div>
                            {!hiddenCitation && <div>
                                Citation
                            </div>}
                            <QuestionInput
                                responseLength={responseLength} setResponseLength={setResponseLength}
                                mode={mode} setMode={setMode} onEnter={onEnter} onNewDoc={onNewDoc}
                            />
                        </div>
                    </div>
                </div>
                <PdfViewer pdfUrl={pdfUrl}/>
            </div>
        </div>
    );
};

export default Answer;
