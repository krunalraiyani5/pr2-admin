import React from "react";
import SideLinks from "./SideLinks";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen min-w-80 bg-white text-gray-800 relative top-0 left-0 shadow-lg overflow-y-auto">
      <div className="p-4">
        <Link href={"/"} className="flex items-center gap-2 mb-6 mt-2 mx-3">
          <img src="/images/logo.png" alt="" className="w-10" />
          <h1 className="text-[25px] font-bold">Sidebar</h1>
        </Link>
        <div className="mt-4 flex flex-col gap-2">
          <SideLinks />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
