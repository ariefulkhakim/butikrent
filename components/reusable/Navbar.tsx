"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Shirt } from "lucide-react";
import { DataNav } from "@/utils/data/DataNav";
import Link from "next/link";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";

const NavbarMobile = dynamic(() => import("./NavbarMobile"), { ssr: false });

const NavbarHeader = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;

    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });
  return (
    <>
      <motion.div
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.2 }}
        variants={{
          hidden: {
            y: "-100%",
          },
          visible: {
            y: "0%",
          },
        }}
        className="fixed top-0 z-10 w-full bg-softLavender"
      >
        <div className="container hidden md:flex justify-between items-center py-6">
          <div className="flex space-x-1 items-center">
            <Shirt fill="" size={20} className="text-primary" />
            <h2 className="font-semibold text-[20px] text-primary">Butik</h2>
          </div>
          <div>
            <ul className="flex space-x-10">
              {DataNav.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.link}
                    className="cursor-pointer font-medium text-zinc-950"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex space-x-3">
            <>
              <Button onClick={() => {}}>Kontak Kami</Button>
            </>
          </div>
        </div>
        <NavbarMobile />
      </motion.div>
    </>
  );
};

export default NavbarHeader;
