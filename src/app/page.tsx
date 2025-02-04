import Image from "next/image";
import CarouselImage from '../../public/carousel.jpg';
import { menus } from "@/constants/constants";
import { Menu } from 'lucide-react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"
import AllProducts from "@/components/home/all-products";

export default function Home() {
  return (
    <div>
      <div className="hidden md:flex bg-primary h-14 py-2 justify-center items-center">
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
                  <MenubarItem>
                    Tüm Parçalar
                  </MenubarItem>
                  <MenubarSeparator />
                  {menus.map((menu, index) => (
                    <MenubarItem key={index}>{menu.label}</MenubarItem>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
          <ul className="flex justify-center items-center gap-6 text-white">
            {menus.map((menu, index) => {
              if (index < 7) {
                return (
                  <li key={index} className="cursor-pointer hover:opacity-70">
                    {menu.label}
                  </li>)
              }
            }
            )}
          </ul>
        </div>
      </div>
      <div className="w-full h-[350px] md:h-[260px] bg-gradient-to-r from-primary via-[#15483b] to-[#4f8678] px-5 py-4">
        <div className="w-full flex flex-col md:justify-center md:flex-row gap-4 md:gap-36">
          <div className="flex flex-col gap-2 md:gap-4 text-white md:w-[400px] md:pt-4">
            <h4 className="text-2xl font-bold md:text-4xl md:tracking-tight">
              Suzuki Yedek Çıkma Parçalar
            </h4>
            <span className="text-base font-medium md:text-2xl md:tracking-tight">
              En kaliteli Suzuki yedek parçaları uygun fiyatlarla
            </span>
          </div>
          <Image src={CarouselImage} alt="CarouselImage" className="bg-cover rounded-sm" />
        </div>
      </div>
      <AllProducts />
    </div>
  );
}
