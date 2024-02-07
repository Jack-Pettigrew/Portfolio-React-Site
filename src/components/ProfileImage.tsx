import Image from "next/image";

export default function ProfileImage({ imageSrc }: { imageSrc: string }) {
    return (
        <>
            <Image src="/logo_450.webp" alt="Profile Image" width={225} height={225} className="rounded-full" />
        </>
    );
}