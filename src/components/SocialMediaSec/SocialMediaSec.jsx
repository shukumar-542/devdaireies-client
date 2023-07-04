import React from 'react';
import { FaFacebook, FaSearch, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialMediaSec = () => {
    return (
        <div className="flex gap-4 items-center text-xl">
        <FaFacebook></FaFacebook>
        <FaTwitter></FaTwitter>
        <FaYoutube></FaYoutube>
        <FaSearch></FaSearch>
        </div>
    );
};

export default SocialMediaSec;