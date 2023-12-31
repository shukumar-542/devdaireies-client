'use client'
import Image from "next/image";
import Link from "next/link";
import fakeUser from "../../../../public/fakeuser.png"
import logo from "../../../../public/DD-f.png"
import UseAuth from "@/hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "@/Context/AuthProvider";
import { BiSolidUser } from "react-icons/bi";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import useUserRole from "@/hooks/useUserRole";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log("Nav:", user);

    const { role } = useUserRole();
    // console.log(role);

    const navBarLinks = <>
        <li> <Link href="/">Home</Link> </li>
        <li> <Link href="/allBlogs">All Blogs</Link></li>
        <li tabIndex={0}>
            <details>
                <summary >JavaScript</summary>
                <ul className="bg-slate-900 text-white bg-opacity-50 rounded-none">
                    <li><Link href="/javaScript" className="hover:font-semibold hover:bg-slate-900 hover:text-white">JavaScript</Link> </li>
                    <li><Link href="/reactjs" className="hover:font-semibold hover:bg-slate-900 hover:text-white">React JS</Link> </li>
                    <li><Link href="/nodejs" className="hover:font-semibold hover:bg-slate-900 hover:text-white">Node JS</Link> </li>
                    <li><Link href="/expressjs" className="hover:font-semibold hover:bg-slate-900 hover:text-white">Express JS</Link> </li>
                    <li><Link href="/mongodb" className="hover:font-semibold hover:bg-slate-900 hover:text-white">MongoDB</Link> </li>
                </ul>
            </details>
        </li>
        <li> <Link href="/about">About Us</Link></li>
        {
            role == "admin" ?
                (<li><Link href="/dashboard">Dashboard</Link></li>)
                :
                role == "user" ?
                    (<li><Link href="/dashboard/myBlogs">Dashboard</Link></li>)
                    :
                    ""
        }
    </>


    const handleSignOut = () => {
        logOut();
    }

    return (
        <div className="w-full my-container sticky top-0 z-10 bg-white">
            <div className="navbar bg-opacity-25 py-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-xl">
                            {navBarLinks}
                        </ul>
                    </div>
                    <a className="ps-1 text-3xl font-bold">
                        {/* <img src={logo} alt="" /> */}
                        <Image src={logo} alt="" height={170} width={200} className="h-[40px] w-[230px]" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                        {navBarLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            {
                                user.photoURL ? <div className="avatar online ms-4">
                                    <div className="w-10 rounded-full">
                                        <Image src={user?.photoURL} className="" alt="" height={60} width={60} />
                                    </div>
                                </div>
                                    :
                                    <>
                                        <BiSolidUser className="h-[60px]" />
                                    </>
                            }
                        </>
                            :
                            <div className="hover:bg-gray-300 px-3 py-2 rounded-md "><Link href="/signin"><FaSignInAlt className="text-2xl text-[#5B54A3]"></FaSignInAlt></Link></div>
                    }
                    {
                        user && <button onClick={handleSignOut} className="hover:bg-gray-300 px-3 py-2 ms-2 rounded-md "><FaSignOutAlt className="text-2xl text-[#5B54A3]"></FaSignOutAlt></button>
                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;