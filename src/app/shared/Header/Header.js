"use client";
import React, { useState } from "react";
import logo from "../../../../public/devdaireies.png";
import Image from "next/image";
import Link from "next/link";
import SocialMediaSec from "@/components/SocialMediaSec/SocialMediaSec";
import { FaBars, FaCross } from "react-icons/fa";
import Navigation from "@/components/Navigations/Navigation";

import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between sm:hidden md:block">
        <Image
          src={logo}
          width={200}
          height={200}
          alt="Picture of the author"
        />
        <div className="flex items-center gap-6">
          <SocialMediaSec />
          <div>
            <button className="bg-blue-300 px-3 py-2 rounded ">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex  items-center justify-between">
        {/* <Navigation /> */}


      {/* start navbar code here */}
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <Navigation></Navigation>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <Navigation></Navigation>
    </ul>
  </div>
  <div className="navbar-end">
  <div>
          <button onClick={toggleDrawer}><FaBars></FaBars></button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="bla bla bla"
          >
            <div>Hello World</div>
          </Drawer>
        </div>
  </div>
</div>
{/* end Here */}








      
      </div>
    </div>
  );
};

export default Header;
