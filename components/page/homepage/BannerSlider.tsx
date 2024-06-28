import React from "react";
import Image from "next/image";
import Slider, { Settings, CustomArrowProps } from "react-slick";
import { motion } from "framer-motion";
import { DataSlider } from "@/utils/data/DataSlider";

import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  CircleChevronLeft,
  CircleChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PrevNavCustom = ({ onClick }: CustomArrowProps) => {
  return (
    <div
      onClick={onClick}
      className="absolute top-0 left-20 h-full flex justify-center items-center z-50 cursor-pointer"
    >
      <ChevronLeft size={40} color="#fff" />
    </div>
  );
};

const NextNavCustom = ({ onClick }: CustomArrowProps) => {
  return (
    <div
      onClick={onClick}
      className="absolute top-0 right-20 h-full flex justify-center items-center cursor-pointer"
    >
      <ChevronRight size={40} color="#fff" />
    </div>
  );
};

const BannerSlider = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevNavCustom />,
    nextArrow: <NextNavCustom />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {DataSlider.map((items) => (
          <motion.div
            key={items.id}
            className={cn(
              `h-screen relative bg-cover bg-no-repeat overlay`,
              items.img
            )}
          >
            <div className="container h-full">
              <div className="flex flex-col gap-5 justify-center h-full text-white w-1/2 ml-24 pt-12">
                <h2 className="font-heading text-6xl font-bold">
                  {items.title}
                </h2>
                <p className="font-subHeading text-xl font-light">
                  {items.subTitle}
                </p>
                <Button className="w-[12em] h-[3em] px-1 bg-blue-950 text-[#FFF] mt-5 rounded-lg font-bold">
                  {items.titleButton}
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
