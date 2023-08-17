import React from 'react';
import banner from "../../public/banner/image.webp"
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="mt-8">
           <Image className="h-[95vh]" src={banner} alt=''></Image>
        </div>
    );
};

export default Banner;