import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgClassName='object-cover'
            bgImage={img} 
            bgImageAlt="cover image"
            strength={-200}
        >
            <div className="hero h-[460px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 style={{ fontVariant: 'small-caps' }} className="mb-5 text-7xl font-semibold">{title}</h1>
                        <p  className="mb-5">
                           {subTitle}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;
