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
            width="27"
            height="24"
            viewBox="0 0 27 24"
            className={className}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg">
            <mask
                id="mask0_2312_1122"
                style={{maskType:"alpha"}}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="27"
                height="24">
                <rect x="0.558594" width="25.4897" height="24" fill={fill}/>
            </mask>
            <g mask="url(#mask0_2312_1122)">
                <path
                    d="M11.3863 19.0157L17.8166 11.7567H13.3097L14.1697 5.36121L8.38062 13.2437H12.262L11.3863 19.0157ZM9.66811 21.4425L10.7302 14.5002H5.81812L14.5698 2.60596H15.877L14.8253 10.5002H20.6664L10.9753 21.4425H9.66811Z"
                    fill={fill}/>
            </g>
        </svg>

    );
};

export default IconAt;
