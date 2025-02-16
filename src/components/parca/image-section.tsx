'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'
import { twJoin } from 'tailwind-merge';

export default function ImageSection({ images }: { images: Array<string> }) {
    const [imgIndex, setImgIndex] = useState(0);
    const handleImgIndex = (direction: string) => {
        setImgIndex((prev) =>
            direction === "left"
                ? prev === 0 ? images.length - 1 : prev - 1
                : prev === images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div id="images" className='pt-4 flex flex-col md:flex-row-reverse gap-4 md:col-span-2'>
            <div className='h-[350px] md:h-[420px]'>
                <div className="relative flex items-center justify-center select-none h-full">
                    <button className="z-50 cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 h-full flex items-center" onClick={() => handleImgIndex("left")}>
                        <div className="ml-2 rounded h-8 w-8 bg-primary/90 flex items-center">
                            <ArrowLeft strokeWidth={4} className="pl-2 text-white" />
                        </div>
                    </button>
                    <Image src={images[imgIndex]} alt={images[imgIndex]} width={350} height={350} className='border border-primary/20 rounded-lg h-full shadow-lg shadow-primary/30' />
                    <button className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 h-full flex items-center" onClick={() => handleImgIndex("right")}>
                        <div className="mr-2 rounded h-8 w-8 bg-primary/90 flex items-center">
                            <ArrowRight strokeWidth={4} className="pl-2 text-white" />
                        </div>
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-2 md:grid-cols-1 md:grid-rows-4'>
                {images.map((img: string, index: number) => {
                    if (index < 4)
                        return <div key={index} className='h-[80px] md:h-[100px]' onClick={() => setImgIndex(index)}>
                            <Image src={img} alt={img} width={100} height={100} className={twJoin(
                                'border rounded-lg h-full',
                                imgIndex === index && "border-2 border-primary"
                            )} />
                        </div>
                })}
            </div>
        </div>
    )
}
