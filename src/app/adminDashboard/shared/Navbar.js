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
                    <ul className="menu p-4 w-48 h-full space-y-2 text-lg font-bold">
                        {/* Sidebar content here */}
                        <li>
                            <Link href="/adminDashboard/manageBlogs">Manage Blogs</Link>
                        </li>
                        <li>
                            <Link href="/adminDashboard/manageRole">Manage Role</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;