import { Button } from "@/components/ui/button";
import { DataTopCollection } from "@/utils/data/DataTopCollection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatRupiah } from "@/utils/formatCurrency";

const PrevNavCustom = ({ onClick }: CustomArrowProps) => {
  return (
    <div
      onClick={onClick}
      className="absolute top-0 left-0 h-full flex justify-center items-center z-50 cursor-pointer"
    >
      <div className="bg-zinc-900">
        <ChevronLeft size={40} color="#fff" />
      </div>
    </div>
  );
};

const NextNavCustom = ({ onClick }: CustomArrowProps) => {
  return (
    <div
      onClick={onClick}
      className="absolute top-0 right-0 h-full flex justify-center items-center cursor-pointer"
    >
      <div className="bg-zinc-900">
        <ChevronRight size={40} color="#fff" />
      </div>
    </div>
  );
};

const TopCollection = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevNavCustom />,
    nextArrow: <NextNavCustom />,
  };

  return (
    <div className="py-20">
      <div className="container">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2 font-heading text-zinc-900">
            Produk Terbaik Kami
          </h2>
          <p className="text-base font-thin text-zinc-500 font-subHeading">
            Temukan Koleksi Gaun Pengantin Paling Popular
          </p>
        </div>

        <Slider {...settings}>
          {DataTopCollection.map((item) => (
            <div key={item.id} className="card_product px-4 cursor-pointer">
              <Image
                src={item.img}
                alt="img-collection"
                height={600}
                // width={300}
                className="rounded-lg card_product_img object-contain"
              />
              <div className="card_product_text px-10 flex flex-col gap-4 justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 card_product_title mb-2">
                    {item.name}
                  </h3>
                  <p className="text-zinc-800 line-clamp-4 card_product_body">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  <div>
                    <p className="mb-2">Pilih Ukuran :</p>
                    <RadioGroup defaultValue="s" className="flex gap-5">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="s" id="s" />
                        <Label htmlFor="s">S</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="m" id="m" />
                        <Label htmlFor="m">M</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="l" id="l" />
                        <Label htmlFor="l">L</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="xl" id="xl" />
                        <Label htmlFor="xl">XL</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p>Harga Sewa:</p>
                    <p className="font-bold">
                      {formatRupiah(item.priceRent)} / hari
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button>Sewa Langsung</Button>
                  <Button variant={"outline"} className="bg-transparent">
                    Detail
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopCollection;
