import Image from "next/image";

export default function ProfileImage({ imageSrc }: { imageSrc: string }) {
    return (
        <>
            <Image src={imageSrc} alt="Profile Image" width={225} height={225} className="rounded-full duration-200 hover:rotate-[10deg]" priority />
        </>
    );
}