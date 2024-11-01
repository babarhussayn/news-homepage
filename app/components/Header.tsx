"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Nabar {
  name: string;
  link: string;
}

const navbar: Nabar[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "New",
    link: "/new",
  },
  {
    name: "Popular",
    link: "/pop",
  },
  {
    name: "Trending",
    link: "/new",
  },
  {
    name: "Categories",
    link: "/new",
  },
];

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const handleOpen = () => {
    setIsShow((prev) => !prev);
    console.log("handleOpen");
  };
  return (
    <>
      <div className="w-full flex justify-center items-center ">
        <div className="flex justify-between items-center w-[1200px] p-4">
          <div>
            <Image src="/images/logo.svg" alt="logo" width={70} height={10} />
          </div>
          <div className="hidden md:block">
            <div className="flex justify-center items-center gap-12 ">
              {navbar.map((items, index) => (
                <div key={index}>
                  <Link href={items.link} className="font-inter font-bold">
                    {items.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden ">
            <div>
              {isShow || (
                <Image
                  src="/images/icon-menu-close.svg"
                  alt="close"
                  width={30}
                  height={50}
                  onClick={handleOpen}
                />
              )}
              <div
                className={`flex justify-center right-0 flex-col absolute bg-white transition-all duration-300 ease-in h-full  ${
                  isShow ? "w-0" : "w-[70%] p-8 gap-8"
                }`}
              >
                {navbar.map((items, index) => (
                  <>
                    <div key={index}>
                      <div className="">
                        <Link
                          href={items.link}
                          className="font-inter font-bold"
                        >
                          {items.name}
                        </Link>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            <Image
              src="/images/icon-menu.svg"
              alt="close"
              width={30}
              height={50}
              onClick={handleOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
