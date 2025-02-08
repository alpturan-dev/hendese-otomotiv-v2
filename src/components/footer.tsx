import React from 'react'
import Logo from '../../public/logo.png';
import Facebook from '../../public/facebook.svg';
import WhatsApp from '../../public/whatsapp.svg';
import Line from './line';
import Image from 'next/image';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='w-full bg-primary/10'>
            <div className='flex flex-col md:flex-row items-center md:items-start justify-center gap-10 px-8 py-8 md:py-8 md:container md:mx-auto'>
                <div className='md:self-center'>
                    <Image src={Logo} alt='Logo' width={160} height={95} />
                </div>
                <div className='flex flex-col items-center justify-center gap-4 md:gap-4'>
                    <div className='relative md:pr-36'>
                        <span className='text-xl font-medium'>Bize Ulaşın</span>
                        <div className='absolute -bottom-1 -left-1'>
                            <Line width={100} />
                        </div>
                    </div>
                    <div className='pl-2 w-2/3 flex flex-col gap-1 items-start font-light'>
                        <span>Arifbey, Adnan Menderes Caddesi No:33A, 54580 Arifiye/SAKARYA</span>
                        <span><b>Numara:</b> +90 530 360 41 05</span>
                        <span><b>E-mail:</b> hendeseoto@gmail.com</span>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 md:gap-3'>
                    <div className='relative md:pr-14'>
                        <span className='text-xl font-medium'>Çalışma Saatleri</span>
                        <div className='absolute -bottom-1'>
                            <Line width={130} />
                        </div>
                    </div>
                    <div className='pl-2 flex flex-col gap-1 items-start font-light'>
                        <span><b>Pazartesi - Cuma:</b> 09:00 - 19:00</span>
                        <span><b>Cumartesi:</b> 09:00 - 16:00 </span>
                        <span><b>Pazar:</b> Kapalı  </span>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center md:items-start gap-4'>
                    <div className='relative'>
                        <span className='text-xl font-medium'>Bizi Takip Edin</span>
                        <div className='absolute -bottom-1'>
                            <Line width={120} />
                        </div>
                    </div>
                    <div className='flex flex-row gap-3 items-center'>
                        <Image src={Facebook} alt='Facebook' width={20} height={20} />
                        <Image src={WhatsApp} alt='WhatsApp' width={20} height={20} />
                    </div>
                </div>
            </div>
            <div className='bg-primary h-11 px-3 py-1 flex items-center justify-center'>
                <span className='text-base text-white'>
                    Hendese Otomotiv © {year} | Made by{" "}
                    <a href="https://github.com/alpturan-dev" className='underline'>alpturan-dev</a>
                </span>
            </div>
        </footer>
    )
}

export default Footer