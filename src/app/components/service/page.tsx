"use client";

import Link from 'next/link';
import React from 'react';

const Service = (props:any) => {

    return (
        <>
            <div className="w-1/4 mx-2 border border-gray-300  p-4 relative overflow-hidden group transform scale-100 transition-transform duration-300 hover:scale-105">
                <img src={props.img} alt="Card 1" className="mx-auto w-full h-40 object-cover mb-4" />
                <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                    <h3 className=" font-bold mb-2 text-10xl">{props.title}</h3>
                </div>
                <div className="text-center">
                    <p className="text-gray-700 mb-4">{props.description}</p>
                    <Link href={props.link} className="text-blue-500 underline">Explore more</Link>
                </div>
            </div>




        </>
    );
}

export default Service;