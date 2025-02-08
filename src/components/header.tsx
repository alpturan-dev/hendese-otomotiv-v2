import { Mail, Map, Menu } from 'lucide-react'
import Image from 'next/image'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Logo from '../../public/logo.png';
import { Input } from './ui/input';
import Line from './line';
import { menus } from '@/constants/constants';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div className='bg-primary/5 border-b-[0.5px] border-primary/50 py-1 flex flex-col md:flex-row md:items-center md:justify-center gap-1 md:gap-6'>
                <div className='flex items-center justify-center gap-1'>
                    <Map className='text-primary w-5 h-5' />
                    <span className='text-xs'>Arifbey, Adnan Menderes Caddesi No:33A, 54580 Arifiye/SAKARYA</span>
                </div>
                <div className='flex items-center justify-center gap-1'>
                    <Mail className='text-primary w-5 h-5' />
                    <span className='text-xs'>hendeseoto@gmail.com</span>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center py-5 gap-4 md:gap-20 md:container md:mx-auto'>
                <Link href="/">
                    <Image src={Logo} alt='Logo' width={160} height={95} priority />
                </Link>
                <div className='w-full md:w-auto px-6 flex items-center gap-4'>
                    <Menubar className='block md:hidden'>
                        <MenubarMenu>
                            <MenubarTrigger><Menu className='text-primary' /></MenubarTrigger>
                            <MenubarContent>
                                <Link href="/tum-parcalar">
                                    <MenubarItem>
                                        Tüm Parçalar
                                    </MenubarItem>
                                </Link>
                                <MenubarSeparator />
                                {menus.map((menu, index) => (
                                    <Link key={index} href={`/kategori/${menu.href}`}>
                                        <MenubarItem >
                                            {menu.label}
                                        </MenubarItem>
                                    </Link>
                                ))}
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                    <div className='w-full md:w-[400px]'>
                        <div className='relative h-10 flex items-center gap-2'>
                            <Input type="text" placeholder="Suzuki Yedek Çıkma Parça ara..." className="text-xs pr-12 pl-4" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-0 bottom-0 w-6 h-6 my-auto right-3 text-primary"
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
                    </div>
                </div>
                <div className='hidden md:block'>
                    <div className='relative flex flex-col gap-1 justify-center items-center'>
                        <div className='flex gap-1 items-center justify-center'>
                            <span className='text-xs'>
                                WhatsApp İletişim
                            </span>
                        </div>
                        <span className='text-lg text-primary tracking-wider font-semibold'>
                            +90 530 360 41 05
                        </span>
                        <div className='absolute -bottom-1'>
                            <Line width={160} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex bg-primary h-11 py-0 justify-center items-center">
                <div className="flex justify-center gap-7 items-center">
                    <div>
                        <Menubar className="border-none rounded-none h-4">
                            <MenubarMenu>
                                <MenubarTrigger className="cursor-pointer rounded-none px-0 py-0 text-base font-normal">
                                    <div className="flex gap-1 items-center bg-primary text-white">
                                        <Menu />
                                        <span>TÜMÜ</span>
                                    </div>
                                </MenubarTrigger>
                                <MenubarContent>
                                    <Link href="/tum-parcalar">
                                        <MenubarItem>
                                            Tüm Parçalar
                                        </MenubarItem>
                                    </Link>
                                    <MenubarSeparator />
                                    {menus.map((menu, index) => (
                                        <Link key={index} href={`/kategori/${menu.href}`}>
                                            <MenubarItem >
                                                {menu.label}
                                            </MenubarItem>
                                        </Link>
                                    ))}
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                    <ul className="flex justify-center items-center gap-6 text-white">
                        {menus.map((menu, index) => {
                            if (index < 7) {
                                return (
                                    <Link key={index} href={`/kategori/${menu.href}`}>
                                        <li className="cursor-pointer hover:opacity-70">
                                            {menu.label}
                                        </li>
                                    </Link>
                                )
                            }
                        }
                        )}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header