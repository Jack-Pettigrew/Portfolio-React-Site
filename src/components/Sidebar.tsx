"use client"

import Link from "next/link";
import CardLinks from "./CardLinks";
import ProfileImage from "./ProfileImage";
import SocialLinks from "./SocialLinks";
import { useEffect, useState } from "react";

export default function Sidebar() {
    const [toggledSidebar, setToggledSidebar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setToggledSidebar(window.scrollY > 50);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const mobileSidebar = (
        <aside id="sidebar" className="lg:hidden sticky top-0 z-10">
            <div id="sidebar-content" className={"flex justify-between items-center duration-100 mb-0 px-3 py-3 bg-purple-500 backdrop-blur-lg shadow-default " + (toggledSidebar ? "m-5 rounded-xl" : "")}>
                <Link href='/' className="flex gap-3 items-center">
                    <ProfileImage imageSrc="/images/profile-images/image_200.webp" size={64} roundedStrength="xl" />
                    <h1 className="text-white">Jack Pettigrew</h1>
                </Link>

                <div className="text-white hidden sm:block">
                    <p className='text-sm italic'>Sofware Developer.</p>
                    <p className='text-sm italic'>Full Stack.</p>
                    <p className='text-sm italic'>Aspiring Game Developer.</p>
                </div>
            </div>
        </aside>
    );

    const DesktopSidebar = (
        <aside id='sidebar' className='hidden lg:flex relative lg:sticky lg:top-0 flex-col justify-center items-center basis-1/5 lg:max-h-screen px-10 bg-slate-100 dark:bg-slate-700 dark:text-white'>
            {/* Profile */}
            <div className='flex flex-col items-center gap-3'>
                <Link href="/">
                    <ProfileImage imageSrc='/images/profile-images/image_800.webp' size={225} />
                </Link>

                <h1 className='w-auto text-center text-2xl'>Jack Pettigrew 👨🏼‍💻</h1>

                <div className='text-center'>
                    <p className='text-sm italic'>Sofware Developer.</p>
                    <p className='text-sm italic'>Full Stack.</p>
                    <p className='text-sm italic'>Aspiring Game Developer.</p>
                </div>

                <div className="flex flex-col gap-3">
                    <CardLinks title="Games" href="/games" />
                    <CardLinks title="Projects" href="/projects" />
                    <CardLinks title="YouTube" href="/youtube" />
                    <CardLinks title="Other" href="/other" />
                </div>

                <nav className='text-center mt-3'>
                    <SocialLinks />
                </nav>

            </div>

            {/* Tagline */}
            <div className='flex pt-3 lg:pt-10 pb-5'>
                <p className='hover:animate-pulse'>Powered by Coffee <span className='text-2xl pl-1'>☕️</span></p>
            </div>
        </aside>
    );

    return (
        <>
            {mobileSidebar}
            {DesktopSidebar}
        </>
    );

}
