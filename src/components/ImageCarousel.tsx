"use client"

import { useEffect, useState } from 'react';
import ImageViewer from './ImageViewer';

export default function ImageCarousel({ images = [], videos = [], youtubeVideoIds = [] }: { images?: Array<string>, videos?: Array<string>, youtubeVideoIds?: Array<string> }) {
    const [imageIndex, setImageIndex] = useState(0);
    const [imageSrc, setImageSrc] = useState("");
    const [viewerVisibility, setViewerVisibility] = useState(false);
    let mediaCount = -1;

    const showImage = (imageSrc: string, index: number) => {
        setImageIndex(index);
        setImageSrc(imageSrc);
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

    useEffect(function () {
        setImageSrc(images[imageIndex]);
    }, [imageIndex]);

    return (
        <>
            <div id="image-carousel" className="grid gap-2 grid-cols-2 lg:grid-cols-4">
                {
                    youtubeVideoIds.map(function (element, index) {
                        mediaCount++;
                        return (
                            <iframe key={index} className={(mediaCount == 0 ? 'lg:row-span-2 lg:col-span-2' : '') + ' rounded-xl w-full h-full'} src={"https://www.youtube.com/embed/" + element} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        );
                    })
                }

                {
                    videos.map(function (element, index) {
                        mediaCount++;
                        return (
                            <div key={index} className={mediaCount == 0 ? 'lg:row-span-2 lg:col-span-2' : ''}>
                                <video controls controlsList='nodownload' className='w-full h-full aspect-vide rounded-xl'>
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
                                <img src={element} width={200} className="w-full h-full aspect-video object-cover object-center rounded-xl cursor-pointer" onClick={() => showImage(element, index)} />
                            </div>
                        )
                    })
                }
            </div>

            <ImageViewer imagePath={imageSrc} className={viewerVisibility ? 'block' : 'hidden'} onNextButton={nextImage} onPrevButton={prevImage} onOutsideClick={() => setViewerVisibility(false)} />
        </>
    )
}
