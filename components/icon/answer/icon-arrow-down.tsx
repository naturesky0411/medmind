import {FC} from 'react';

interface IconAtProps {}

const IconAt : FC < IconAtProps > = () => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <mask
                id="mask0_2312_2668"
                style={{maskType:"alpha"}}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20">
                <rect width="20" height="20" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_2312_2668)">
                <path
                    d="M10 12.774L5.28857 8.06253L6.06253 7.28857L10 11.2261L13.9375 7.28857L14.7115 8.06253L10 12.774Z"
                    fill="#8B8A91"/>
            </g>
        </svg>

    );
};

export default IconAt;
