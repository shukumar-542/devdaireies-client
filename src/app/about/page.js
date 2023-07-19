import Team from '@/components/Team';
import React from 'react';
import AboutUs from './AboutUs';
import Partner from './Partner';

const page = () => {
    return (
        <div>
            <AboutUs />
            <Partner />
            {/* Team */}
            <Team />
        </div>
    );
};

export default page;