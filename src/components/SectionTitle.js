import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='mx-auto text-center my-10'>
            <h2 className='text-4xl font-bold uppercase'><span>&#x276E;</span> {heading} <span>&#47;&#10095;</span></h2>
            <h4 className='text-2xl font-semibold mt-2'>{subHeading}</h4>
        </div>
    );
};

export default SectionTitle;