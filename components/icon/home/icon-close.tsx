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
                id="mask0_2312_2291"
                style={{
                maskType: "alpha"
            }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24">
                <rect width="24" height="24" fill={fill}/>
            </mask>
            <g mask="url(#mask0_2312_2291)">
                <path
                    d="M8.22707 16.8365L7.16357 15.773L10.9366 12L7.16357 8.25198L8.22707 7.18848L12.0001 10.9615L15.7481 7.18848L16.8116 8.25198L13.0386 12L16.8116 15.773L15.7481 16.8365L12.0001 13.0635L8.22707 16.8365Z"
                    fill={fill}/>
            </g>
        </svg>

    );
};

export default IconAt;
