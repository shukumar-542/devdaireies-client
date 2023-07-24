'use client'
import useUserRole from "@/hooks/useUserRole";
import Link from "next/link";

const Navbar = () => {
    const { role } = useUserRole();
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-48 h-full space-y-2 text-lg font-bold">
                        {/* Sidebar content here */}
                        {/* admin */}
                        {
                            role === "admin" &&
                            <>
                                <li>
                                    <Link href="/dashboard/manageBlogs">Manage Blogs</Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/manageRole">Manage Role</Link>
                                </li>
                            </>
                        }
                        {/* user */}
                        {
                            role === "user" &&
                            <>
                                <li>
                                    <Link href="/dashboard/myBlogs">My Blogs</Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/createBlog">Create A Blog</Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;