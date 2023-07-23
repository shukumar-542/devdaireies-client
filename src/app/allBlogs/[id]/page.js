'use client'
import Image from "next/image";
import { FaAngleDoubleRight, FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaThumbsUp, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { FcCalendar } from "react-icons/fc";
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
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/Context/AuthProvider";
import Comment from "@/components/Comment/Comment";

const page = ({ params }) => {
    const { user } = useContext(AuthContext);
    // console.log(user?.displayName, user?.photoURL);
    // console.log(params.id);
    // const { user } = useAuth()
    // console.log(user);

    const id = params.id;
    const [data, setData] = useState(null);
    const [comment, setComment] = useState(null)


    // console.log(comment);
    const url = `http://localhost:5000/blogs/${id}`

    useEffect(() => {
        const url = `http://localhost:5000/blogs/${id}`;
        fetch(url).then(res => res.json()).then(data => setData(data))
    }, [id])

    useEffect(() => {
        fetch(`http://localhost:5000/comment/${id}`)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [id])
    const { author, category, date, description, image, likes, subcategory, title } = data || {};
    // const tag = data?.tags.join(', ');

    const handlePostSubmit = (e) => {
        e.preventDefault();
        const post = e.target.comment.value;
        // console.log(post ,id);
        const newComment = { id, post ,
             displayName : user?.displayName, 
             photoURL : user?.photoURL 
            }
        fetch(`http://localhost:5000/comment`, {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newComment)

        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    fetch(`http://localhost:5000/comment/${id}`)
                        .then(res => res.json())
                        .then(data => setComment(data))
                }
            })
        e.target.comment.value = ''



    }

    return (
        <>
            <main className=" my-container">
                <div className="p-5 shadow-xl rounded-md m-10">
                    {/* Image Section */}
                    <Image src={image} className="w-full h-96 " alt="" height={300} width={450} />
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
                <div className="w-3/4 mx-auto p-6 rounded-md bg-slate-100">
                    <div className="flex justify-between text-xl font-semibold mb-3">
                        <p>{comment?.length} Comments</p>
                        <p className="flex items-center text-xl">{likes}<FaThumbsUp className=" text-lightOrange mb-1 ms-2" /></p>
                    </div>
                    <form onSubmit={handlePostSubmit}>
                        <input type="text" name="comment" className="w-full h-20 p-2 border-2 border-purple focus:outline-deepOrange rounded-md" placeholder="your comment here" />
                        <br />
                        <div className="text-end w-full">
                            <button className="bg-gray-600 hover:bg-deepOrange p-2 mt-4 text-white font-semibold w-36 mx-auto rounded-md">Post Comment</button>
                        </div>
                    </form>
                </div>


                {
                    comment?.map((com, id) => <Comment
                        key={id}
                        com={com}
                    ></Comment>)
                }


                {/* <div className="m-10">
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
                </div> */}
            </main>
        </>
    );
};

export default page;