"use client"
import Lottie from 'react-lottie-player'
import SectionTitle from "@/components/SectionTitle";
import { FaUserCheck } from "react-icons/fa";
import lottieJson from '../../asset/newScene.json'
const PostTimeline = () => {
    return (
        <>
            <SectionTitle
                heading={"Create A Blog"}
                subHeading={"Process of creating a blog"}
            ></SectionTitle>
            {/* Process */}
            <div className="grid grid-cols-2 gap-4">
                <ul className="steps steps-vertical">
                    <li className="step step-primary">Login</li>
                    <li className="step step-primary">Open dashboard</li>
                    <li className="step step-secondary">Go to Create A Blog</li>
                    <li className="step step-secondary">Now write your blog</li>
                    <li className="step step-success">Click on Publish Blog</li>
                    <li className="step step-success">If needed Admin will give feedback</li>
                    <li className="step step-success">After reviewing your blog an Admin will approve your blog</li>
                    <li className="step step-warning">You cant delete your published blogs</li>
                </ul>
                {/* Image */}
                <div className='flex justify-center items-center'>
                    <Lottie
                        loop
                        animationData={lottieJson}
                        play
                        // style={{ width: 150, height: 150 }}
                        className='h-500px'
                    />
                </div>
            </div>
        </>
    );
};

export default PostTimeline;