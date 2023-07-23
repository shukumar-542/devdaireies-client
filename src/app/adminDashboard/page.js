'use client'
import useAllBlogs from "@/hooks/useAllBLogs";

const page = () => {
    const { allBLogs } = useAllBlogs();
    console.log("all blogs from admin", allBLogs);
    return (
        <div>
            <div>
                <h2 className="font-bold text-2xl">Total Blogs: {allBLogs.length}</h2>
            </div>

        </div>
    );
};

export default page;