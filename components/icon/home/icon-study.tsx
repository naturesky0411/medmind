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
                id="mask0_2312_1987"
                style={{maskType:"alpha"}}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24">
                <rect width="24" height="24" fill={fill}/>
            </mask>
            <g mask="url(#mask0_2312_1987)">
                <path
                    d="M6.1155 21.5C5.389 21.5 4.77142 21.2476 4.26275 20.7428C3.75425 20.2379 3.5 19.6249 3.5 18.9038V5.1155C3.5 4.389 3.75425 3.77142 4.26275 3.26275C4.77142 2.75425 5.389 2.5 6.1155 2.5H16.8077V17.8077H6.1155C5.8065 17.8077 5.54333 17.9126 5.326 18.1223C5.10867 18.3321 5 18.5921 5 18.9023C5 19.2122 5.10867 19.4727 5.326 19.6838C5.54333 19.8946 5.8065 20 6.1155 20H19V4.5H20.5V21.5H6.1155ZM8.69225 16.3077H15.3077V4H8.69225V16.3077ZM7.19225 16.3077V4H6.1155C5.79933 4 5.53442 4.10867 5.32075 4.326C5.10692 4.54333 5 4.8065 5 5.1155V16.598C5.173 16.516 5.34983 16.4471 5.5305 16.3913C5.71117 16.3356 5.90617 16.3077 6.1155 16.3077H7.19225Z"
                    fill={fill}/>
            </g>
        </svg>

    );
};

export default IconAt;
