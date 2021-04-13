import React from 'react';
import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';

import clsx from 'clsx';

interface Props {
    isSelected: boolean,
    text: string,
    pathName: string,
    Image?: IconType
    ImageOnHover?: IconType
}



const Option: React.FC<Props> = ({ text, pathName, isSelected, Image, ImageOnHover }: Props) => {
    return (
        <div className={clsx("h-10 mx-auto rounded-sm",
            {
                "bg-gray-300 bg-opacity-20 ": isSelected === true,
                "bg-none": isSelected === false
            })}
            style={{ width: "95%" }}
        >
            <Link to={pathName} className="inline-flex items-center h-full w-full">
                <div className="ml-5">
                    {((Image && !isSelected) || (Image && !ImageOnHover && isSelected)) && <Image color="white" size="20" />}
                    {ImageOnHover && isSelected && <ImageOnHover color="white" size="20" />}
                </div>

                <div className={clsx(" font-semibold pl-4",{
                    "text-secondary " : isSelected === true,
                    "text-secondary-darker" : isSelected === false
                    })} style={{ fontSize: "0.78rem" }}>
                    {text}
                </div>
            </Link>
        </div>

    );
}

export default Option;