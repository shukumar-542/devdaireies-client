import Image from "next/image";
import { FaThumbsUp, FaChevronCircleRight } from "react-icons/fa";

const SubCategory = ({ post }) => {
    const { author, category, date, description, image, likes, subcategory, title } = post;
    return (
        <div>
            <div className="flex">
                <Image src={image} className="w-[450px] h-[400]" alt="" height={400} width={450} />
                <div className="ms-6 flex flex-col justify-evenly">
                    <p className="">{date}</p>
                    <h3 className="text-3xl font-bold">{title}</h3>
                    <h4 className="text-lg">{description.slice(0, 120)}...
                        <button class="px-3 py-1 ms-2 bg-gradient-to-r from-purple to-deepOrange text-white bg-clip-text text-transparent font-semibold rounded-md transition-transform transform-gpu hover:translate-x-2 hover:shadow-lg">
                            Read More
                        </button>
                    </h4>
                    <p className="flex text-xl font-semibold items-center"><FaThumbsUp className="text-deepOrange me-3" /> {likes}</p>
                    <p className="text-lg font-bold">Author: <span className="italic">{author}</span></p>
                </div>
            </div>
        </div>
    );
};

export default SubCategory;