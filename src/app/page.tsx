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
