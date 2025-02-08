'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { twJoin } from 'tailwind-merge';

export default function ImageSection({ images }: { images: Array<string> }) {
    const [imgIndex, setImgIndex] = useState(0);
    //TODO: will implement later
    // const handleImgIndex = (direction: string) => {
    //     if (direction === "right" && imgIndex === images.length - 1) {
    //         setImgIndex(0)
    //         return
    //     }
    //     if (direction === "left" && imgIndex === 0) {
    //         setImgIndex(images.length - 1)
    //         return
    //     }
    //     setImgIndex(direction === "left" ? imgIndex - 1 : imgIndex + 1)
    // }

    return (
        <div id="images" className='pt-4 flex flex-col md:flex-row-reverse gap-4 md:col-span-2'>
            <div className='h-[350px] md:h-[420px]'>
                <Image src={images[imgIndex]} alt={images[imgIndex]} width={350} height={350} className='border border-primary/20 rounded-lg h-full shadow-lg shadow-primary/30' />
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
