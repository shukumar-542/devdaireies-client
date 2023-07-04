import React from "react";
import logo from "../../../../public/devdaireies.png";
import Image from "next/image";
import Link from "next/link";
import SocialMediaSec from "@/components/SocialMediaSec/SocialMediaSec";
import { FaBars } from "react-icons/fa";
import Navigation from "@/components/Navigations/Navigation";
const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Image
          src={logo}
          width={200}
          height={200}
          alt="Picture of the author"
        />
        <div className="flex items-center gap-6">
            <SocialMediaSec></SocialMediaSec>
            <div>
                <button className="bg-blue-300 px-3 py-2 rounded ">Subscribe Now</button>
            </div>
        </div>
      </div>
      <div className="flex  items-center justify-between">
      <Navigation></Navigation>
        <div>
            <FaBars className="text-2xl"></FaBars>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
