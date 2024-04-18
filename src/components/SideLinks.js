"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideLinks = () => {
  const path = usePathname();

  let navItems = [
    {
      name: "Dashboard",
      to: "/",
      icon: "",
    },
    {
      name: "Projects",
      to: "/projects",
      icon: "",
    },
    {
      name: "Resume",
      to: "/resume",
      icon: "",
    },
    {
      name: "Form Data",
      to: "/formdata",
      icon: "",
    },
  ];

  return (
    <>
      {navItems?.map((item) => {
        return (
          <Link
            href={item?.to}
            className={`${
              path === item?.to ? "active-side-link" : ""
            } py-3 px-6 hover:bg-gray-200 cursor-pointer rounded-lg`}
          >
            {item?.name}
          </Link>
        );
      })}
    </>
  );
};

export default SideLinks;
