import React from "react";
import {
  Search,
  Calendar,
  CreditCard,
  Truck,
  Heart,
  Package,
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  MoveRight,
  CornerRightDown,
  CornerDownLeft,
  MoveLeft,
  CornerDownRight,
  Gift,
} from "lucide-react";

const HowToRent = () => {
  return (
    <div className="py-20 bg-softLavender">
      <div className="container">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold mb-3 font-heading text-zinc-900">
            Bagaimana Cara Menyewa Gaun Pengantin?
          </h2>
          <p className="text-base font-thin text-zinc-500 font-subHeading">
            Mudah dan Cepat dalam Beberapa Langkah Sederhana
          </p>
        </div>
        <div className="grid grid-cols-10 gap-y-10">
          <div className="flex justify-center h-full items-center">
            <CornerDownRight size={40} />
          </div>

          <div className="bg-blue-950 text-white w-full p-6 col-span-2 gap-4 flex flex-col rounded-lg">
            <div className="flex justify-between items-center">
              <Search size={40} />
              <p className="text-[32px] px-4  bg-blue-800 rounded-lg">1</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">Jelajahi Koleksi Kami</h3>
              <p className="font-light text-slate-300">
                Telusuri koleksi gaun pengantin kami yang eksklusif dan pilih
                gaun yang paling sesuai dengan gaya dan kebutuhan Anda.
              </p>
            </div>
          </div>
          {/* 1 */}

          <div className="flex justify-center h-full items-center">
            <MoveRight size={40} />
          </div>

          <div className="bg-blue-950 text-white w-full p-6 col-span-2 gap-4 flex flex-col rounded-lg">
            <div className="flex justify-between items-center">
              <Calendar size={40} />
              <p className="text-[32px] px-4  bg-blue-800 rounded-lg">2</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">
                Pilih Ukuran dan Jadwal Sewa
              </h3>
              <p className="font-light text-slate-300">
                Pilih ukuran gaun yang tepat dan tentukan tanggal penyewaan
                Anda. Kami menyediakan berbagai ukuran untuk memastikan
                kenyamanan Anda.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex justify-center h-full items-center">
            <MoveRight size={40} />
          </div>

          <div className="bg-blue-950 text-white w-full p-6 col-span-2 gap-4 flex flex-col rounded-lg">
            <div className="flex justify-between items-center">
              <CreditCard size={40} />
              <p className="text-[32px] px-4  bg-blue-800 rounded-lg">3</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">Reservasi dan Pembayaran</h3>
              <p className="font-light text-slate-300">
                Lakukan reservasi gaun pilihan Anda dan selesaikan pembayaran
                secara online. Kami menawarkan berbagai metode pembayaran yang
                aman dan mudah.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex justify-center h-full items-center">
            <CornerRightDown size={40} />
          </div>

          <div className="flex justify-center h-full items-center">
            <Gift size={40} />
          </div>

          <div className="bg-blue-950 text-white w-full p-6 col-span-2 gap-4 flex flex-col rounded-lg">
            <div className="flex justify-between items-center">
              <Package size={40} />
              <p className="text-[32px] px-4  bg-blue-800 rounded-lg">6</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">Pengembalian Gaun</h3>
              <p className="font-light text-slate-300">
                Setelah acara selesai, kembalikan gaun ke toko kami atau melalui
                layanan pengiriman. Kami akan mengurus proses pembersihan dan
                perawatan gaun.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="flex justify-center h-full items-center">
            <MoveLeft size={40} />
          </div>
          <div className="bg-blue-950 text-white w-full p-6 col-span-2 gap-4 flex flex-col rounded-lg">
            <div className="flex justify-between items-center">
              <Heart size={40} />
              <p className="text-[32px] px-4  bg-blue-800 rounded-lg">5</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">
                Kenakan Gaun di Hari Istimewa
              </h3>
              <p className="font-light text-slate-300">
                Tampil menawan di hari pernikahan Anda dengan gaun pengantin
                pilihan Anda. Nikmati momen spesial dengan gaun yang elegan dan
                nyaman.
              </p>
            </div>
          </div>

          {/* 5 */}
          <div className="flex justify-center h-full items-center">
            <MoveLeft size={40} />
          </div>
          <div className="bg-blue-950 text-white w-full p-6 col-span-2 gap-4 flex flex-col rounded-lg">
            <div className="flex justify-between items-center">
              <Truck size={40} />
              <p className="text-[32px] px-4  bg-blue-800 rounded-lg">4</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">Pengambilan atau Pengiriman</h3>
              <p className="font-light text-slate-300">
                Ambil gaun di toko kami atau pilih layanan pengiriman ke alamat
                Anda. Kami memastikan gaun sampai dalam kondisi sempurna.
              </p>
            </div>
          </div>

          {/* 6 */}
          <div className="flex justify-center h-full items-center">
            <CornerDownLeft size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToRent;
