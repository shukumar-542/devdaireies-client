import React from 'react';

const PopularPosts = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-6'>
                <div className='shadow-xl rounded-xl hover:shadow-2xl p-4'>
                    <div className='relative'>
                        <img className='postsImg rounded-md ' src="https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-97395.jpg?w=740&t=st=1688635172~exp=1688635772~hmac=4feaccdaea2f572e7730fa7f429a6697a44d4c8ff7a46701703d4272888a2f4a" alt="" width={400} height={400} />
                        <p className='absolute top-0 text-white px-2 py-1 m-2 rounded-xl bg-slate-700 bg-opacity-60 border border-slate-900'>category</p>
                        <p className='absolute right-0 bottom-0 text-white px-2 py-1 m-2 rounded-xl bg-slate-700 bg-opacity-60 border border-slate-900'>sub-category</p>

                    </div>
                    <div className=''>
                        <h2 className='text-2xl font-bold mt-3'>Title: How to code your life!</h2>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis doloribus iure eaque sequi! Molestias...</p>
                        <button className='btn'>read more</button>
                        <div className='divider p-0 mb-2'></div>
                        <div className='flex justify-between '>
                            <p>author name</p>
                            <p>publish date</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PopularPosts;