"use client"

import { useEffect, useState } from 'react';
import ImageViewer from './ImageViewer';
import Image from 'next/image';

export default function ImageGallery({ images = [], videos = [] }: { images?: Array<string>, videos?: Array<string>}) {
    const [imageIndex, setImageIndex] = useState(0);
    const [cachedImages, setCachedImages] = useState<{[key:string]:string}>({});
    const [viewerVisibility, setViewerVisibility] = useState(false);

    let mediaCount = -1;

    useEffect(() => {
        preloadImages(images);
    }, images);

    const preloadImages = async (imageUrls: Array<string>) => {
        for (const url of imageUrls) {
            await loadImage(url);  
        }
    };

    const loadImage = async (url: string) => {
        if (!cachedImages[url]) {
            const response = await fetch(url);
            const objectURL = URL.createObjectURL(await response.blob());
            setCachedImages(prevState => ({ ...prevState, [url]: objectURL }));
        }
    };
    
    const showImage = (imageSrc: string, index: number) => {
        setImageIndex(index);
        setViewerVisibility(true);
    }

    const nextImage = () => {
        setImageIndex((imageIndex + 1) % images.length);
    };

    const prevImage = () => {
        // JavaScript Modulo is broken for negatives???????
        // setImageIndex((imageIndex - 1) % images.length);

        setImageIndex((imageIndex - 1) < 0 ? images.length - 1 : imageIndex - 1);
    };

    return (
        <>
            <div id="image-carousel" className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    videos.map(function (element, index) {
                        mediaCount++;
                        return (
                            <div key={index} className={mediaCount == 0 ? 'lg:row-span-2 lg:col-span-2' : ''}>
                                <video controls controlsList='nodownload' className='w-full h-full aspect-video rounded-xl' preload='metadata'>
                                    <source src={element} />
                                </video>
                            </div>
                        );
                    })
                }

                {
                    images.map(function (element, index) {
                        mediaCount++;
                        return (
                            <div key={index} className={mediaCount == 0 ? 'lg:row-span-2 lg:col-span-2' : ''}>
                                <Image alt='' src={element} width={200} height={200} className="w-full h-full aspect-video object-cover object-center rounded-xl cursor-pointer" onClick={() => showImage(element, index)} />
                            </div>
                        )
                    })
                }
            </div>

            <ImageViewer imagePath={cachedImages[images[imageIndex]]} className={viewerVisibility ? 'block' : 'hidden'} onNextButton={nextImage} onPrevButton={prevImage} onOutsideClick={() => setViewerVisibility(false)} />
        </>
    )
}
