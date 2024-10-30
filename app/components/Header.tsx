import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  return (
    <>
      <div className="w-full flex justify-center items-center ">
        <div className="flex justify-between items-center w-[1200px] p-4">
          <div>
            <Image src="/images/logo.svg" alt="logo" width={70} height={10} />
          </div>

          <div className="flex justify-center items-center gap-12">
            {navbar.map((items, index) => (
              <div key={index}>
                <Link href={items.link} className="font-inter font-bold">
                  {items.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
