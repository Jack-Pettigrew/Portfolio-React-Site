"use client"

import { Sun } from '@phosphor-icons/react/dist/ssr/Sun';
import { MoonStars } from '@phosphor-icons/react/dist/ssr/MoonStars';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
    const [isToggled, setIsToggled] = useState(false);

    const toggleDarkMode = function () {
        setIsToggled(!isToggled);
    };

    useEffect(() => {
        if (isToggled) {
            document.querySelector('html')?.classList.add('dark');
        }
        else {
            document.querySelector('html')?.classList.remove('dark');
        }
    }, [isToggled]);

    return (
        <div className='fixed bottom-0 right-0 lg:left-0 lg:right-auto z-10 mx-5 my-3'>
            <div className='group rounded-full bg-purple-500 p-2 bg-gradient-to-r from-indigo-500 hover:cursor-pointer shadow-default' onClick={() => toggleDarkMode()}>
                {
                    !isToggled ?
                        <Sun size={32} color='white' className='duration-200 group-hover:rotate-[45deg]' />
                        :
                        <MoonStars size={32} color='white' className='duration-200 group-hover:rotate-[45deg]' />
                }
            </div>
        </div>
    )
}
