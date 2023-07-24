import Image from 'next/image';
import { FcCalendar, FcManager, FcRight } from "react-icons/fc";
import img1 from '../../../../public/DD-f-logo.png';
import Link from 'next/link';
const MySingleBlog = ({ singleBlog }) => {
    const { title, image, _id, description, author, date } = singleBlog;
    return (
        <>
            <div className='flex relative items-center p-5 bg-white rounded-md hover:shadow-lg'>
                <div className='me-8 '>
                    <Image src={image} className='relative' alt='' height={150} width={300} />
                </div>
                <p className='absolute top-0 right-0 py-4 px-8 text-3xl bg-purple text-white font-bold'>1</p>
                <div>
                    <h2 className='text-2xl font-bold my-4'>{title}</h2>
                    <p>{description.slice(0, 50)}...</p>
                    <div className='flex justify-between mt-3'>
                        <p className='flex items-center text-lg'><FcManager className='text-3xl' /> By {author} </p>
                        <p className='flex items-center text-lg'><FcCalendar className='text-3xl' /> {date} </p>
                        {/* TODO-> Read more need to fix */}
                        <Link href={`allBlogs/${_id}`}>
                            <p className='flex items-center text-lg'><FcRight className='text-3xl' /> Read More</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MySingleBlog;