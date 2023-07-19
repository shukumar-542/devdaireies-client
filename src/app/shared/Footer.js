import Image from 'next/image';
import logo from '../../../public/DD-f.png'
import Link from 'next/link';
import { FaFacebook, FaWhatsappSquare, FaTelegram, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className='bg-purple m-0'>
            <div>
                <div className="grid grid-cols-4 gap-x-10 text-lg bg-slate-800 text-white p-6">
                    <div className=''>
                        <Image src={logo} alt='' height={150} width={300} />
                        <p className=' text-xl mt-4'>Your Coding and Programming Language Blogging Haven!</p>
                    </div>
                    {/* contact */}
                    <div>
                        <h3 className='text-lg font-semibold uppercase mb-4'>Contact Information</h3>
                        <p>Bangladesh</p>
                        <p>devdiaries@gmail.com</p>
                        <p>+880-171111111</p>
                        <p>+880-190000000</p>
                    </div>
                    {/* Links */}
                    <div>
                        <h3 className='text-lg font-semibold uppercase mb-4'>Quick links</h3>
                        <ul className='space-y-1'>
                            <li><Link href='/' className='underline'>Home</Link></li>
                            <li><Link href='' className='underline'>All Blogs</Link></li>
                            <li><Link href='' className='underline'>JavaScript</Link></li>
                            <li><Link href='' className='underline'>Python</Link></li>
                            <li><Link href='' className='underline'>PHP</Link></li>
                            <li><Link href='' className='underline'>Go</Link></li>
                        </ul>
                    </div>
                    {/* Socials */}
                    <div>
                        <h3 className='uppercase text-lg font-semibold'>Social Links</h3>
                        <div className='text-3xl flex space-x-3 my-4'>
                            <FaFacebook className='text-purple hover:text-lightOrange cursor-pointer' />
                            <FaWhatsappSquare className='text-purple hover:text-lightOrange cursor-pointer' />
                            <FaTelegram className='text-purple hover:text-lightOrange cursor-pointer' />
                            <FaInstagramSquare className='text-purple hover:text-lightOrange cursor-pointer' />
                        </div>
                        <h3 className='text-lg font-semibold uppercase'>Subscribe our newsletter</h3>
                        <div className='flex mt-4'>
                            <input type="email" name="email" placeholder='email' className='border-2 p-2 rounded-md border-purple  focus:outline-deepOrange w-full' id="" />
                            <button className='bg-purple text-white font-semibold p-2 rounded-md ms-[-15px] hover:bg-deepOrange'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center text-white p-6 text-lg  font-semibold'>ALl right reserved by &copy; DevDiaries</p>
            </div>

        </footer>
    );
};

export default Footer;