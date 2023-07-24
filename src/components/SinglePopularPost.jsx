import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaUserEdit, FaThumbsUp, FaRegCalendarAlt, FaAngleDoubleRight } from "react-icons/fa";

const SinglePopularPosts = ({ post }) => {
    // console.log("posts", post);
    const { author, category, date, description, image, likes, subcategory, title, _id } = post;
    return (
        <div>
            <div className='shadow-xl rounded-xl hover:shadow-2xl p-4  '>
                <div className='relative overflow-hidden'>
                    <Image className='postsImg rounded-md h-[200px] hover:scale-110 transition duration-500 cursor-pointer object-cover' src={image} alt="" width={400} height={400} />
                    <p className='absolute top-0 text-white px-2 py-1 rounded-md bg-slate-700 bg-opacity-60 border border-slate-900'>{category}</p>
                    <p className='absolute right-0 bottom-0 text-white px-2 py-1 rounded-xl bg-slate-700 bg-opacity-60 border border-slate-900'>{subcategory}</p>
                </div>
                <div className=''>
                    <h2 className='text-[22px] font-bold my-3'>{title.slice(0, 50)}...</h2>
                    <p className=''>{description.slice(0, 70)}...</p>
                    <div className='flex justify-between cursor-pointer mt-3'>
                        <Link href={`allBlogs/${_id}`}>
                            <button className='flex items-center font-bold border-b border-transparent hover:border-purple'>read more <FaAngleDoubleRight className='text-purple mt-1 ms-2' /></button>
                        </Link>
                        <p className='text-lg font-semibold flex items-center'><FaThumbsUp className='text-deepOrange me-2' /> {likes}</p>
                    </div>
                    <div className='divider p-0 mb-2'></div>
                    <div className='flex justify-between '>
                        <p className='flex items-center'><FaUserEdit className='text-xl text-purple me-2' /> {author}</p>
                        <p className='flex items-center'><FaRegCalendarAlt className='text-xl text-purple me-2' /> {date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePopularPosts;
