'use client'

import useBlogs from "@/hooks/useAllBLogs";
import useUsers from "@/hooks/useUsers";
import BlogChart from "./components/BlogChart";

const page = () => {
    const { allBlogs } = useBlogs();
    const { allUsers } = useUsers();
    console.log("from admin", allBlogs, "users:", allUsers);
    return (
        <div className="w-full bg-slate-100 rounded-md p-4">
            <div className="flex justify-between">
                <h2 className="font-bold text-2xl p-4 bg-slate-200 text-purple rounded-md ">Total Blogs: <span className="text-3xl">{allBlogs.length}</span> </h2>
                <h2 className="font-bold text-2xl p-4 bg-slate-200 text-purple rounded-md ">Total Users: <span className="text-3xl">{allUsers?.length}</span> </h2>
            </div>
            <div>
                <BlogChart />
            </div>
        </div>
    );
};

export default page;