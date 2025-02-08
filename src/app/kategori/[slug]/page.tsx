import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { menus } from '@/constants/constants';
import Link from 'next/link';
import { twJoin } from 'tailwind-merge';
import Image from 'next/image';
import { Product } from '@/types/types';

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
    const slug = (await params).slug;
    const menu = menus.filter((el) => slug === el.href.substring(1, el.href.length))[0];
    const data = await fetch(process.env.API_URL + '/api/products/part/' + menu?.label);
    const products = await data.json();
    return (
        <div className='max-w-4xl mx-auto px-5 md:px-0 pb-20'>
            <hr className='block md:hidden' />
            <Breadcrumb className='pt-4'>
                <BreadcrumbList className='text-base'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/tum-parcalar">Tüm Parçalar</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{menu?.label}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='py-4 grid grid-cols-2 md:grid-cols-5 gap-4'>
                {products.map((product: Product, index: number) => (
                    <Link key={index} href={`/parca/${product._id}`}>
                        <div className='rounded-xl h-80 border shadow-md py-[10px] px-4'>
                            <div className='h-[120px]'>
                                <Image src={product.images[0]} alt={product.name} className='h-full' width={120} height={120} />
                            </div>
                            <div className='h-[120px] flex flex-col gap-[2px] pt-1'>
                                <span className='text-[10px] font-extralight'>{product.part}</span>
                                <span className='h-[75px] overflow-hidden text-base font-semibold'>{product.name}</span>
                                <span className='text-xs font-extralight'>
                                    Oem: {product.oem}
                                </span>
                            </div>
                            <div className='h-[60px] flex justify-between items-center'>
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
                ))}
            </div>
        </div>
    )
}
