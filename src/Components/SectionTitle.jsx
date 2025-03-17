import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-center md: w-3/12 mx-auto my-14'>
            <p className='text-[#D99904] p-2 text-xl '> ---{subHeading} --- </p>
            <h3 className='uppercase text-4xl font-semibold p-4 border-y-4 '>{heading}</h3>
        </div>
    );
};

export default SectionTitle;