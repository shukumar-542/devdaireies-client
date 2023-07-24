import React from 'react';
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import img1 from '../../../src/asset/partners/boeing.3037b0a6.png'
import img2 from '../../../src/asset/partners/download (1).png'
import img3 from '../../../src/asset/partners/download.png'
import img4 from '../../../src/asset/partners/ibm.bcec6b9a.png'
import img5 from '../../../src/asset/partners/lucasfilm.ef28c5a6.png'
import img6 from '../../../src/asset/partners/microsoft.4a9a93f0.png'
import img7 from '../../../src/asset/partners/mit.1af911d7.png'
import SectionTitle from '@/components/SectionTitle';

const Partner = () => {
    return (
        <>
            <SectionTitle
                heading={"Our partners"}
                subHeading={"meet with our sponsors"}
            ></SectionTitle>
            <Marquee
                className="flex items-center justify-center"
                pauseOnHover='true'
                autoFill='true'
            >
                <Image src={img1} alt='' className='mx-5 w-48' height={150} width={200} />
                <Image src={img2} alt='' className='mx-5 w-48' height={150} width={200} />
                <Image src={img3} alt='' className='mx-5 w-48' height={150} width={200} />
                <Image src={img4} alt='' className='mx-5 w-48' height={150} width={200} />
                <Image src={img5} alt='' className='mx-5 w-48' height={150} width={200} />
                <Image src={img6} alt='' className='mx-5 w-48' height={150} width={200} />
                <Image src={img7} alt='' className='mx-5 w-48' height={150} width={200} />
            </Marquee >
        </>
    );
};

export default Partner;