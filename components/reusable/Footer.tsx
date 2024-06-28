import { Facebook, Instagram } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="py-20 bg-blue-900 text-white">
        <div className="container">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-2 flex flex-col gap-5">
              <h3 className="font-bold text-2xl">Alamat Kami</h3>
              <ul className="flex flex-col gap-2 text-slate-300">
                <li>
                  Alamat: Jl. Mawar No.123, Jakarta Pusat, DKI Jakarta,
                  Indonesia
                </li>
                <li>Telp: (021) 123-4567</li>
                <li>Email: info@sewagraun.com</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-2xl">Menu Link</h3>
              <ul className="flex flex-col gap-2 text-slate-300">
                <li>Home</li>
                <li>Product</li>
                <li>Tentang Kami</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-2xl">Ikuti Kami</h3>
              <div className="flex gap-2 text-slate-300">
                <Instagram size={20} />
                <Facebook size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-950 py-5 text-center text-white">
        <p>&copy; 2024 SewaGaun. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
