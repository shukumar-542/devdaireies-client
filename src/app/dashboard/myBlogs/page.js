'use client'
import { useEffect, useState } from "react";
import MySingleBlog from "../components/MySingleBlog";
import useAuth from "@/hooks/useAuth";

const page = () => {
    const { user } = useAuth();
    console.log(user?.email);
    const [allBlogs, setAllBlogs] = useState([]);
    useEffect(() => {

        fetch(`http://localhost:5000/blog/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllBlogs(data)
            })

    }, [user?.email]);
    // console.log("My Blogs", user?.email, allBlogs);
    return (
        <div className="bg-slate-100 mb-6 p-6 rounded-md w-full">
            <h1 className="font-bold text-2xl p-4">Published Blogs</h1>
            <div>
                {
                    allBlogs.map(singleBlog => {
                        return (
                            <MySingleBlog key={singleBlog._id} singleBlog={singleBlog}></MySingleBlog>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default page;