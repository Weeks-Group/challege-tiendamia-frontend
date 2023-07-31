import React from 'react';

type Props = {
    value: string | number;
    text: string;
}
const Tooltip = ({text, value}: Props) => {
    return (
        <span
            className="absolute top-2 right-2 inline-block bg-gray-200 rounded-full px-1.5 py-1 text-sm font-semibold text-gray-700 duration-300">
                            <a href="#"
                               className="group relative inline-block text-gray-700  hover:text-red-500 duration-300">
                                {value}
                                <span
                                    className="absolute hidden group-hover:flex -top-1 right-[7.5rem] translate-x-full w-20 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2  before:left-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-gray-700">{text}</span>
                            </a>

                        </span>
    );
};

export default Tooltip;
