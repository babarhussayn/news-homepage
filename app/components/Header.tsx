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
    name: "New",
    link: "/new",
  },
  {
    name: "New",
    link: "/new",
  },
];

const Header = () => {
  return (
    <>
      <div>
        {navbar.map((items, index) => (
          <div key={index}>
            <Link href={items.link}>{items.name}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;
