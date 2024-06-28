import React from "react";
import { User, ShoppingBag, Scissors } from "lucide-react";

const ServiceSection = () => {
  return (
    <div className="py-20 bg-softLavender">
      <div className="mb-10 container text-center">
        <h2 className="text-4xl font-bold mb-3 font-heading text-zinc-900">
          Layanan Kami
        </h2>
        <p className="text-base font-thin text-zinc-500 font-subHeading">
          Kami Menawarkan Layanan Terbaik untuk Membantu Anda Tampil Memesona di
          Hari Istimewa
        </p>
      </div>
      <div className="container flex gap-3">
        <div className="bg-white p-8 flex flex-col items-center gap-4 rounded-lg">
          <div className="bg-softLavender p-3 rounded-full">
            <User size={40} className="text-zinc-800" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h3 className="font-bold text-zinc-900 text-lg">
              Konsultasi Pribadi
            </h3>
            <p className="text-gray-500 font-light leading-[26px] text-base text-center">
              Dapatkan konsultasi eksklusif dengan stylist profesional kami yang
              siap membantu Anda memilih gaun pengantin yang sempurna. Kami akan
              mendengarkan keinginan Anda dan memberikan saran berdasarkan tren
              terkini serta gaya pribadi Anda.
            </p>
          </div>
        </div>
        <div className="bg-white p-8 flex flex-col items-center gap-4 rounded-lg">
          <div className="bg-softLavender p-3 rounded-full">
            <ShoppingBag size={40} />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h3 className="font-bold text-zinc-900 text-lg">
              Penyewaan Gaun Eksklusif
            </h3>
            <p className="text-gray-500 font-light leading-[26px] text-center">
              Pilih dari koleksi gaun pengantin eksklusif kami yang dirancang
              untuk membuat Anda tampil anggun dan memukau. Kami menawarkan
              berbagai ukuran dan desain untuk memastikan Anda menemukan gaun
              yang sesuai dengan selera dan kebutuhan Anda.
            </p>
          </div>
        </div>
        <div className="bg-white p-8 flex flex-col items-center gap-4 rounded-lg">
          <div className="bg-softLavender p-3 rounded-full">
            <Scissors size={40} />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h3 className="font-bold text-zinc-900 text-lg">
              Penyesuaian dan Alterasi
            </h3>
            <p className="text-gray-500 font-light leading-[26px] text-center">
              Pastikan gaun pengantin Anda pas sempurna dengan layanan
              penyesuaian dan alterasi kami. Tim penjahit profesional kami akan
              bekerja dengan teliti untuk menyesuaikan gaun pilihan Anda agar
              sesuai dengan bentuk tubuh Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
