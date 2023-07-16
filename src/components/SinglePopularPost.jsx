import Image from 'next/image';
import React from 'react';

const SinglePopularPosts = ({ post }) => {
    console.log("posts", post);
    const { author, category, date, description, image, likes, subcategory, title } = post;
    return (
        <div>
            <div className='shadow-xl rounded-xl hover:shadow-2xl p-4'>
                <div className='relative'>
                    <Image className='postsImg rounded-md h-[200px]' src={image} alt="" width={400} height={400} />
                    <p className='absolute top-0 text-white px-2 py-1 m-2 rounded-xl bg-slate-700 bg-opacity-60 border border-slate-900'>{category}</p>
                    <p className='absolute right-0 bottom-0 text-white px-2 py-1 m-2 rounded-xl bg-slate-700 bg-opacity-60 border border-slate-900'>{subcategory}</p>
                </div>
                <div className=''>
                    <h2 className='text-[22px] font-bold my-3'>{title.slice(0, 50)}...</h2>
                    <p className=''>{description.slice(0, 70)}...</p>
                    <button className='btn'>read more</button>
                    <div className='divider p-0 mb-2'></div>
                    <div className='flex justify-between '>
                        <p>{author}</p>
                        <p>{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePopularPosts;
