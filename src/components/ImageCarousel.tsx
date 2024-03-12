"use client"

import { useRef, useState } from 'react';
import ImageViewer from './ImageViewer';

export default function ImageCarousel({ images }: { images: Array<string> }) {
    const [imageIndex, setImageIndex] = useState(0);
    const [imageSrc, setImageSrc] = useState("");
    const [viewerVisibility, setViewerVisibility] = useState(false);
    
    const showImage = (imageSrc: string, index: number) => {
        setImageIndex(index);
        setImageSrc(imageSrc);
        setViewerVisibility(true);
    }

    const nextImage = () => {
        setImageIndex((imageIndex + 1) % images.length);
        setImageSrc(images[imageIndex]);
    };

    const prevImage = () => {
        // JavaScript Modulo is broken for negatives???????
        // setImageIndex((imageIndex - 1) % images.length);
        
        setImageIndex((imageIndex - 1) < 0 ? images.length - 1 : imageIndex - 1);
        setImageSrc(images[imageIndex]);
    };

    return (
        <>
            <div id="image-carousel" className="flex w-full gap-1 overflow-auto">
                {
                    images.map(function (element, index) {
                        return (
                            <img key={index} src={element} width={200} className="aspect-video object-cover object-center rounded-xl cursor-pointer" onClick={() => showImage(element, index)} />
                        )
                    })
                }
            </div>

            <ImageViewer imagePath={imageSrc} className={ viewerVisibility ? 'block' : 'hidden' } onNextButton={nextImage} onPrevButton={prevImage} onOutsideClick={() => setViewerVisibility(false)} />
        </>
    )
}
