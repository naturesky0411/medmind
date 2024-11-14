'use client'

import IconFeedback from '@/components/icon/home/icon-feedback';
import IconClose from '@/components/icon/home/icon-close';
import Dropdown from '@/components/dropdown';
import {IRootState} from '@/store';
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';

const FeedbackSuccess = ({hidden}:{
    hidden:boolean
}) => {
    return (
        <div className={'fixed transition-all top-6 w-[356px] h-[86px] bg-[#636262] text-white rounded-[10px] flex items-center justify-center text-[16px] ' + 
            (hidden ? "-right-96" : "right-6")
        }>
            Thank you!<br/>
            We&apos;ll review your submission shortly.
        </div>
    )
}

export default FeedbackSuccess;