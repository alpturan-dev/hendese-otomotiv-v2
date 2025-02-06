import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import ImageSection from '@/components/parca/image-section';
import { CarIcon, PackageIcon, TruckIcon } from 'lucide-react';
import { twJoin } from 'tailwind-merge';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const slug = (await params).slug;
    const data = await fetch(process.env.API_URL + '/api/products/' + slug);
    const product = await data.json();
    return {
        title: product.name + "| Hendese Otomotiv",
        description: product.description,
        openGraph: {
            title: product.name + "| Hendese Otomotiv",
            description: product.description,
            url: `https://www.hendeseoto.com/parca/` + product.part + '/' + product._id,
            siteName: 'hendeseoto.com',
            type: 'website',
            images: [
                {
                    url: product.images[0],
                    width: 300,
                    height: 300,
                }
            ]
        }
    }
}

export default async function Page({ params }: Props) {
    const slug = (await params).slug;
    const data = await fetch(process.env.API_URL + '/api/products/' + slug);
    const product = await data.json();
    console.log(product)
    return (
        <div className='max-w-4xl mx-auto px-5 md:px-0'>
            <hr className='block md:hidden' />
            <Breadcrumb className='pt-4'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/tum-parcalar">Tüm Parçalar</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href={`/kategori/${product.part}`}>{product.part}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{product.name}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='w-full flex flex-col md:grid md:grid-cols-4 md:gap-10'>
                <ImageSection images={product.images} />
                <div className="py-4 flex flex-col gap-4 items-start md:col-span-2">
                    <div className="grid gap-4">
                        <h1 className="font-medium text-2xl sm:pb-4">{product.name}</h1>
                        <div className="grid gap-2 text-sm font-light">
                            <div className="flex items-center gap-2">
                                <TruckIcon className={twJoin("w-5 h-5",
                                    product.stock === 0 ? "text-red-500" : "text-[#406800]")} />
                                <span className={twJoin("font-medium", product.stock === 0 ? "text-red-500" : "text-[#406800]")}>
                                    {product.stock === 0 ? "Stokta yok!" : "Stokta var - 1-2 iş günü içerisinde kargoya verilir"}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <PackageIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                <span className="text-gray-500 dark:text-gray-400">OEM: {product.oem}</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <CarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                <span className="text-gray-500 dark:text-gray-400">Araç Uyumu: {product?.models.map((model: string, i: number) => model + ((i !== product?.models.length - 1) ? ' | ' : ""))}</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full grid gap-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {product.description}
                        </p>
                        <div className="flex flex-col gap-4 sm:gap-5 pt-2">
                            {product.stock > 0 &&
                                <div className="text-3xl font-bold">
                                    {product.price === "FİYAT SORUNUZ" ? "FİYAT SORUNUZ" : product.price + ' ₺'}
                                </div>
                            }
                            {/* <div className="flex ">
                            <a href="tel:+90-530-360-4105" className="text-xl py-4">
                                <div className='rounded-lg bg-primary py-2 px-4 text-white'>Bizi Arayın +90 530 360 41 05</div>
                            </a>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4 h-[0.5px] bg-[#bfc0c3] w-full'></div>
            <div className='py-4 flex flex-col gap-4'>
                <span className='text-base font-light'>
                    Daha fazla yedek parça
                </span>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                    {Array.from([1, 2, 3, 4]).map((index) => (
                        <Link key={index} href={`/parca/${product._id}`}>
                            <div className='rounded-xl h-[240px] border shadow-md py-[10px] px-5'>
                                <div className='h-[120px]'>
                                    <Image src={product.images[0]} alt={product.name} className='h-full' width={120} height={120} />
                                </div>
                                <div className='h-[120px] flex flex-col gap-1'>
                                    <span className='text-[10px] font-extralight'>Motor Mekanik</span>
                                    <span className='h-[75px] overflow-hidden text-base font-semibold'>{product.name}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
