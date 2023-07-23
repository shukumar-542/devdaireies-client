import React from 'react';
import avater from '../../../public/blankUser.gif'
import Image from 'next/image';
const Comment = ({ com }) => {
    console.log(com);

    return (
        <div className="w-3/4 mx-auto my-4">
            <div className='flex gap-2'>

                {com && com?.photoURL ? <div className="avatar">
                    <div className="w-[50px] h-[50px] rounded-full">
                        <img src={com.photoURL}  className="h-[50px] mt-2 w-[50px] rounded-full"  />
                    </div>
                </div> :
                    <Image src={avater} alt="" height={170} width={200} className="h-[50px] mt-2 w-[50px] rounded-full" />
                }

                <div className="bg-slate-100 p-5  rounded-md ">
                    <h1 className='font-bold text-[#575757] mb-4'>{com?.displayName}</h1>
                    <p>{com.post}</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;