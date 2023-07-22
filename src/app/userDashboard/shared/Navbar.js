import Link from "next/link";

const Navbar = () => {
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
                    <ul className="menu p-4 w-40 h-full">
                        {/* Sidebar content here */}
                        <li>
                            <Link href="/userDashboard/myBlogs">My Blogs</Link>
                        </li>
                        <li>
                            <Link href="/userDashboard/createBlog">Create A Blog</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;