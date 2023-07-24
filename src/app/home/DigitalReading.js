import img from '../../asset/digitalReading.jpg'
const DigitalReading = () => {
    return (
        <div className='section-gap'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(https://www.pearson.com/content/dam/one-dot-com/one-dot-com/ped-blogs/blogs-images/blog-hero-digital-reading-blog-1600x800.jpg.transform/big-size-xl/img.jpeg)` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-white">
                    <div className="">
                        <h2 className="mb-5 text-3xl font-bold">Digital Reading</h2>
                        <h2 className="mb-5 text-5xl font-bold text-lightOrange">DevDiaries</h2>
                        <p className="mb-5 w-1/2 text-lg">
                            Immerse yourself in the world of digital reading at DevDiaries, where captivating articles and engaging stories await to enrich your online journey</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalReading;