"use client";
import React, { useState } from "react";
import logo from "../../../../public/devdaireies.png";
import Image from "next/image";
import SocialMediaSec from "@/components/SocialMediaSec/SocialMediaSec";
import { FaBars, FaCross } from "react-icons/fa";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between sm:hidden md:block">
        <div className="flex items-center justify-between">
          <Image src={logo} width={200} height={200} alt="Picture of the author" />
          <div>
          <SocialMediaSec />
        </div>
        <button className="bg-blue-300 px-3 py-2 rounded">Subscribe Now</button>
      </div>
          </div>
      <div className="flex items-center justify-between">
        {/* Navigation */}
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            {/* Dropdown */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <FaBars />
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {/* Navigation Items */}
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {/* Navigation Items */}
            </ul>
          </div>
          <div className="navbar-end">
            {/* Drawer */}
            <div>
              <button onClick={toggleDrawer}>
                <FaBars />
              </button>
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
      </div>
    </div>
  );
};

export default Header;
