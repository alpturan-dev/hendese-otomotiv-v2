import React from 'react'
import Line from '../line'
import Image from 'next/image'
import { twJoin } from 'tailwind-merge';
import Link from 'next/link';
import { Product } from '@/types/types';

export default async function AllProducts() {
    const data = await fetch(process.env.API_URL + '/api/products');
    const products = await data.json();
    return (
        <div className='max-w-4xl mx-auto pt-4 px-4 md:px-0'>
            <div className='flex justify-between'>
                <div className='relative'>
                    <h4 className='text-xl font-bold'>
                        Tüm Parçalar
                    </h4>
                    <div className='absolute -bottom-1'>
                        <Line width={110} />
                    </div>
                </div>
                <div>
                    <span className='text-xs'>
                        Toplam {products.count} parça{" "}
                        <Link href="/tum-parcalar">
                            <span className='underline text-primary'>devamı...</span>
                        </Link>
                    </span>
                </div>
            </div>
            <div className='py-4 grid grid-cols-2 md:grid-cols-5 gap-4'>
                {products.data.map((product: Product, index: number) => {
                    if (index < 10) {
                        return (
                            <Link key={index} href={`/parca/${product._id}`}>
                                <div key={index} className='rounded-xl h-80 border shadow-md py-[10px] px-4'>
                                    <div className='h-[120px]'>
                                        <Image src={product.images[0]} alt={product.name} className='h-full' width={120} height={120} />
                                    </div>
                                    <div className='h-[120px] flex flex-col gap-1'>
                                        <span className='text-[10px] font-extralight'>Motor Mekanik</span>
                                        <span className='h-[75px] overflow-hidden text-base font-semibold'>{product.name}</span>
                                        <span className='text-xs font-extralight'>
                                            Oem: {product.oem}
                                        </span>
                                    </div>
                                    <div className='h-[60px] flex justify-between items-center gap-1'>
                                        <span className={twJoin(
                                            'font-semibold',
                                            product.price === "FİYAT SORUNUZ" ? 'text-sm' : 'text-xl'
                                        )}>
                                            {product.price === "FİYAT SORUNUZ" ? "FİYAT SORUNUZ" : product.stock === 0 ? "" : product.price + ' ₺'}
                                        </span>
                                        <button className='h-8 rounded-md bg-primary text-white py-0 px-2'>
                                            İncele
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                })}
            </div>
        </div>
    )
}