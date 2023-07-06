import Image from 'next/image';
import React from 'react';
import logo from "../../../../public/devdaireies.png";
import Navigation from '@/components/Navigations/Navigation';
import SocialMediaSec from '@/components/SocialMediaSec/SocialMediaSec';

const Footer = () => {
    return (
        <div className=' bg-gray-100 py-10'>
            <div className='flex items-center justify-center flex-col gap-10'>
            <Image
          src={logo}
          width={300}
          height={300}
          alt="Picture of the author"
        />
            <Navigation></Navigation>
            <SocialMediaSec></SocialMediaSec>
            <p>© 2023 DevDaires - All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;