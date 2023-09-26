"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ServiceDetails from '../detailsModel/page';

const Service = (props:any) => {

    const [showModel, setShowModel] = useState(false);
    const toggleServiceDetails = () => {
        setShowModel(!showModel);
    }

    useEffect(() => {

    }, [showModel])
    return (
        <>
            <div className="w-1/4 mx-2 border border-gray-300  p-4 relative overflow-hidden group transform scale-100 transition-transform duration-300 hover:scale-105">
                <img src={props.img} alt="Card 1" className="mx-auto w-full h-40 object-cover mb-4 mt-5" />
                <div className="flex items-center justify-center text-center text-white">
                    <h3 className=" font-bold mb-2 text-10xl absolute top-0 bg-gray-800 w-full">{props.title}</h3>
                </div>
                <div className="text-center">
                    <p className="text-gray-700 mb-4">{props.description}</p>
                    <a  onClick={toggleServiceDetails} className="text-blue-500 underline cursor-pointer">Explore more</a>
                </div>
            </div>


            {
                showModel ? <ServiceDetails toggleServiceDetails={toggleServiceDetails} title={props.title}></ServiceDetails> : null
            }




        </>
    );
}

export default Service;