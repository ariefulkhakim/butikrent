"use client";
import { Button } from "@/components/ui/button";
import { DataNav } from "@/utils/data/DataNav";
import { Shirt, SquareMenu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
const NavbarMobile = () => {
  return (
    <div className="container md:hidden flex items-center py-6 space-x-0">
      <Sheet>
        <SheetTrigger>
          <Button size={"icon"}>
            <SquareMenu size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="flex h-auto flex-col justify-between"
        >
          <SheetHeader>
            <div className="pt-10">
              <ul className="flex flex-col space-y-5">
                {DataNav.map((item) => (
                  <li key={item.key}>
                    <a className="cursor-pointer font-medium text-zinc-950 hover:text-primary">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </SheetHeader>
          <SheetFooter>
            <div className="flex flex-col space-y-3">
              <Button>Kontak Kami</Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <div className="flex space-x-1 items-center flex-1 justify-center">
        <Shirt size={20} className="text-primary" />
        <h2 className="font-semibold text-[20px] text-primary">Butik</h2>
      </div>
    </div>
  );
};

export default NavbarMobile;
