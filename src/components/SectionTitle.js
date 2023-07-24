import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className=' my-10'>
            <h1 className='text-3xl uppercase font-bold text-indigo-800' >{heading}</h1>
            <p className='mt-1 text-xl font-semibold'>{subHeading}</p>
            <div className="divider"></div>
        </div>
    );
};

export default SectionTitle;