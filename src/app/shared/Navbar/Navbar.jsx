import Image from "next/image";
import Link from "next/link";
import fakeUser from "../../../../public/fakeuser.png"
import logo from "../../../../public/DD-f.png"

const Navbar = () => {
    const navBarLinks = <>
        <li> <Link href="/">Home</Link> </li>
        <li tabIndex={0}>
            <details>
                <summary >JavaScript</summary>
                <ul className="bg-slate-900 text-white bg-opacity-50">
                    <li><Link href="/" className="hover:font-semibold hover:bg-slate-900 hover:text-white">JavaScript</Link> </li>
                    <li><Link href="/" className="hover:font-semibold hover:bg-slate-900 hover:text-white">React JS</Link> </li>
                    <li><Link href="/" className="hover:font-semibold hover:bg-slate-900 hover:text-white">Express JS</Link> </li>
                    <li><Link href="/" className="hover:font-semibold hover:bg-slate-900 hover:text-white">Node JS</Link> </li>
                    <li><Link href="/" className="hover:font-semibold hover:bg-slate-900 hover:text-white">Express JS</Link> </li>
                </ul>
            </details>
        </li>
        <li> <Link href="/allBlogs">All Blogs</Link></li>
    </>

    return (
        <div className="w-full sticky top-0 z-10 bg-white">
            <div className="navbar bg-opacity-25 py-2">
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
                    <div className="avatar online ms-4">
                        <div className="w-16 rounded-full">
                            <Image alt="" src={fakeUser} height={60} width={60} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;