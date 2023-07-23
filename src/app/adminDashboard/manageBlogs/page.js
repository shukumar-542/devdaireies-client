'use client'
import SubCategory from "@/components/SubCategory";
import useBlogs from "@/hooks/useAllBLogs";
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";
const page = () => {
    const { allBlogs } = useBlogs();
    return (
        <div className="bg-slate-100 w-full p-4 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Manage Blogs</h2>
            <div>
                {
                    allBlogs.map(singleBlog => {
                        const { author, category, date, description, image, likes, subcategory, title, _id } = singleBlog;
                        return (
                            <div key={singleBlog._id}>
                                <div className="my-8 shadow-md hover:shadow-lg rounded-md p-4 bg-white">
                                    <div>
                                        <div className="">
                                            <div className="ms-6 flex flex-col space-y-3 justify-evenly">
                                                <p className="">{date}</p>
                                                <p className="flex items-center">{category} <FaAngleDoubleRight /> {subcategory}</p>
                                                <p className="text-lg font-bold">Author: <span className="italic">{author}</span></p>
                                                <h3 className="text-3xl font-bold">{title}</h3>
                                                <h4 className="text-lg">{description}
                                                </h4>
                                                <div className="w-1/3 flex justify-between my-5">
                                                    <button className="bg-slate-200 text-purple font-bold text-lg py-1 px-3 rounded-md hover:bg-purple hover:text-white">Approve</button>
                                                    <button className="bg-slate-200 text-purple font-bold text-lg py-1 px-3 rounded-md hover:bg-purple hover:text-white">Deny</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default page;