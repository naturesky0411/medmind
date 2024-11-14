'use client'

import IconChecked from '@/components/icon/answer/icon-checked';

const CopyMsg = ({hidden}:{
    hidden:boolean
}) => {
    return (
        !hidden ? <div className={'absolute transition-all top-6 -left-10 w-[188px] h-[50px] bg-[#636262] text-white rounded-[10px] flex items-center justify-center text-[16px] '}>
            <IconChecked /> Message Copied.
        </div>
        : null
    )
}

export default CopyMsg;