'use client'
import Image from "next/image";
import { FaAngleDoubleRight, FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaThumbsUp, FaTwitter, FaWhatsapp } from "react-icons/fa";

import {
    EmailShareButton,
    FacebookShareButton,
    FacebookShareCount,
    InstapaperShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappShareButton
} from "react-share";

const page = async ({ params }) => {
    // console.log(params.id);
    const id = params.id;
    const url = `http://localhost:5000/blogs/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    const { author, category, date, description, image, likes, subcategory, title } = data;
    const tag = data.tags.join(', ');

    return (
        <>
            <main className=" my-container">
                <div className="p-5 shadow-xl rounded-md m-10">
                    {/* Image Section */}
                    <Image src={image} className="w-full h-80 " alt="" height={300} width={450} />
                    {/* Content Section */}
                    <div className=" text-lg space-y-3">
                        <h3 className="text-4xl font-bold my-4">{title}</h3>
                        <div className="flex items-center  gap-10">
                            <div className="flex items-center gap-4">
                                <BiSolidUser className="text-blue-500 text-3xl bg-blue-100 p-1 rounded-full"></BiSolidUser>
                                <p className="text-lg"> {author}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <FcCalendar className="text-3xl"></FcCalendar>
                                <p>{date}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 ">
                            {
                                category && (<p>Category: {category}</p>)
                            }
                            <FaAngleDoubleRight />
                            {
                                subcategory && (<p>Subcategory: {subcategory}</p>)
                            }
                        </div>
                        <p>{description}</p>
                        

                        {/* Social Share */}
                        <div>
                            <div>
                                <p className="text-xl font-bold my-2">Social Share:</p>
                            </div>
                            <div className="space-x-3">
                                <TwitterShareButton url={url} title={title}>
                                    <FaTwitter className="text-4xl text-[#05ABED]" />
                                </TwitterShareButton>
                                <WhatsappShareButton url={url} title={title}>
                                    <FaWhatsapp className="text-4xl text-[#5CDE8C]" />
                                </WhatsappShareButton>
                                <FacebookShareButton url={url} title={title}>
                                    <FaFacebook className="text-4xl text-[#0081ED]" />
                                </FacebookShareButton>
                                <LinkedinShareButton url={url} title={title}>
                                    <FaLinkedin className="text-4xl text-[#0A66C2]" />
                                </LinkedinShareButton>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Comment Section */}
                <div className="m-10">
                    <h3 className="text-xl font-bold text-deepOrange my-4">All comments:</h3>
                    <div>
                        <p className="font-semibold font-lg text-purple">Name</p>
                        <p>200 Comment</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-deepOrange mt-4 mb-1">Please give feedback:</h3>
                        <div className='flex w-1/3'>
                            <input type="email" name="email" placeholder='email' className='border-2 p-2 rounded-md border-purple  focus:outline-deepOrange w-full' id="" />
                            <button className='bg-purple text-white font-semibold p-2 rounded-md ms-[-15px] hover:bg-deepOrange'>Submit</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default page;