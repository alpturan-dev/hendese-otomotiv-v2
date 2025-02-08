'use client';

import React, { useState } from 'react';
import { Input } from './ui/input';
import { useDebounce } from '../hooks/useDebounce';
import useSWR from 'swr';
import { Product } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

// Fetcher function for SWR
const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
};

export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 300);
    // Construct the API URL
    const searchUrl = debouncedSearchTerm
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/products/search?query=${encodeURIComponent(debouncedSearchTerm)}`
        : null; // Pass null to disable the request when there's no search term

    // Use SWR for data fetching
    const { data: products } = useSWR<Product[]>(
        searchUrl,
        fetcher,
        {
            revalidateOnFocus: false, // Disable automatic revalidation on window focus
            dedupingInterval: 2000, // Dedupe similar requests within 2 seconds
        }
    );

    return (
        <div className='w-full md:w-[400px]'>
            <div className='relative h-10 flex items-center gap-2'>
                <Input
                    type="text"
                    placeholder="Suzuki Yedek Çıkma Parça ara..."
                    className="text-xs pr-12 pl-4"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label="Search products"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute top-0 bottom-0 w-6 h-6 my-auto right-3 text-primary`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>

            {products && products.length > 0 &&
                <div className='w-[270px] md:w-[400px] md:mt-2 bg-[#fff] z-50 absolute flex flex-1 flex-col justify-start mb-6 md:mb-0 border shadow-lg'>
                    {products.map((product) =>
                        <Link key={product._id} href={`/parca/${product._id}`} onClick={() => setSearchTerm("")}>
                            <div className='flex items-start justify-start border-b-2 rounded-sm cursor-pointer hover:opacity-90 hover:bg-gray-50 h-[50px]'
                            >
                                <Image src={product.images[0]} className='w-[50px] h-[50px]' alt='product.images[0]' width={50} height={50} priority={false} loading='lazy' suppressHydrationWarning />
                                <div className='flex flex-col py-1 px-2'>
                                    <span className='font-light text-xs'>{product.part} | {product?.models[0]}</span>
                                    <span className='text-sm truncate whitespace-nowrap max-w-[200px]'>{product.name}</span>
                                </div>
                            </div></Link>
                    )
                    }
                </div>
            }
        </div>
    );
}