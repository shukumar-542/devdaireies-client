import Image from "next/image";
import { FaAngleDoubleRight, FaThumbsUp } from "react-icons/fa";
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
            <main className="section-gap">
                <div className="flex">
                    {/* Image Section */}
                    <Image src={image} className="h-[300px] w-[500px]" alt="" height={300} width={450} />
                    {/* Content Section */}
                    <div className="ms-8 text-lg space-y-3">
                        <p>{date}</p>
                        <div className="flex items-center space-x-3 text-purple">
                            {
                                category && (<p>Category: {category}</p>)
                            }
                            <FaAngleDoubleRight />
                            {
                                subcategory && (<p>Subcategory: {subcategory}</p>)
                            }
                        </div>
                        <h3 className="text-4xl font-bold my-4">{title}</h3>
                        <p>{description}</p>
                        <p className="flex text-xl font-semibold items-center"><FaThumbsUp className="text-deepOrange me-3" /> {likes}</p>
                        <p className="text-lg font-bold">Author: <span className="italic">{author}</span></p>
                        <p>Tags: {tag}</p>

                        {/* Social Share */}
                        <div>

                        </div>

                    </div>
                </div>
                {/* Comment Section */}
                <div>
                    <h3 className="text-xl font-bold text-deepOrange my-4">All comments:</h3>
                    <div>
                        <p className="font-semibold font-lg text-purple">Name</p>
                        <p>Comment Here</p>
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