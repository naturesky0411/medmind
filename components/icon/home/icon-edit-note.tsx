import {FC} from 'react';

interface IconAtProps {
    className?: string;
    fill?: string;
}

const IconAt : FC < IconAtProps > = ({
    className,
    fill = "#636262"
}) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={className}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg">
            <mask
                id="mask0_2312_2190"
                style={{maskType:"alpha"}}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24">
                <rect width="24" height="24" fill={fill}/>
            </mask>
            <g mask="url(#mask0_2312_2190)">
                <path
                    d="M4 14V12H11V14H4ZM4 10V8H15V10H4ZM4 6V4H15V6H4ZM13 20V16.925L18.525 11.425C18.675 11.275 18.8417 11.1667 19.025 11.1C19.2083 11.0333 19.3917 11 19.575 11C19.775 11 19.9667 11.0375 20.15 11.1125C20.3333 11.1875 20.5 11.3 20.65 11.45L21.575 12.375C21.7083 12.525 21.8125 12.6917 21.8875 12.875C21.9625 13.0583 22 13.2417 22 13.425C22 13.6083 21.9667 13.7958 21.9 13.9875C21.8333 14.1792 21.725 14.35 21.575 14.5L16.075 20H13ZM14.5 18.5H15.45L18.475 15.45L18.025 14.975L17.55 14.525L14.5 17.55V18.5ZM18.025 14.975L17.55 14.525L18.475 15.45L18.025 14.975Z"
                    fill={fill}/>
            </g>
        </svg>

    );
};

export default IconAt;
