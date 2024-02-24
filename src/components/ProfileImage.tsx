import Image from "next/image";

export default function ProfileImage({ imageSrc, size, roundedStrength = "full" }: { imageSrc: string, size: number, roundedStrength?: string }) {
    return (
        <>
            <Image src={imageSrc} alt="Profile Image" width={size} height={size} className={"rounded-" + roundedStrength + " duration-200 hover:rotate-[10deg]"} priority />
        </>
    );
}