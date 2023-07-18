import Image from 'next/image';
import logo from '../../asset/DD-horizontal.png'
const AboutUs = () => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                <div className='col-span-2 space-y-3'>
                    <div>
                        <p className='font-semibold text-lg'>Welcome to </p>
                        <p className='text-6xl font-bold'>DevDiaries</p>
                        <p className='text-2xl font-bold'>Your Coding and Programming Language Blogging Haven!</p>
                    </div>
                    <p>At DevDiaries, we provide a dedicated platform for all coding enthusiasts, developers, and tech aficionados to chronicle their coding journey. Explore a treasure trove of captivating content covering JavaScript, Python, PHP, Go, and beyond. Whether you're a seasoned pro or just stepping into the coding realm, you'll find a supportive community eager to engage and learn from your experiences.</p>
                    <p>Share your coding insights, projects, tutorials, and stories. Connect with like-minded individuals, exchange knowledge, and fuel your passion for coding. DevDiaries is your go-to hub for expanding your coding skills, building connections, and leaving your mark in the coding world. Embrace the coding adventure and start penning your DevDiaries today!</p>
                </div>
                <div className=''>
                    <div className='flex justify-center items-center h-full'>
                        <Image src={logo} className='w-[350px] h-[200px]' alt='' height={200} width={350} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;