'use client'

import useBlogs from "@/hooks/useAllBLogs";
import useUsers from "@/hooks/useUsers";
import BlogChart from "./components/BlogChart";
import AnalyticsChart from "./components/AnalyticsChart";
import { FaUserAlt, FaReadme } from "react-icons/fa";

const Page = () => {
    const { allBlogs } = useBlogs();
    const { allUsers } = useUsers();
    // console.log("from admin", allBlogs, "users:", allUsers);
    return (
        <div className="w-full bg-slate-100 rounded-md p-4">
            <div className=" flex gap-4">
                <h2 className="font-bold flex items-center p-4 bg-slate-200 text-purple rounded-md "><FaReadme className="me-3 text-4xl" /> <span className="text-3xl">{allBlogs.length}</span> </h2>
                <h2 className="font-bold flex items-center p-4 bg-slate-200 text-purple rounded-md "><FaUserAlt className="me-3 text-4xl" /> <span className="text-3xl">{allUsers?.length}</span> </h2>
            </div>
            <div className="flex justify-evenly mt-8">
                <BlogChart />
                <AnalyticsChart />
            </div>
        </div>
    );
};

export default Page;