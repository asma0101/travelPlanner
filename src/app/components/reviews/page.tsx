"use client"
import { getReviews } from "@/app/shared/services";
import { useEffect, useState } from "react";
import Carousel from "../carousal/page";

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            let response = await getReviews();
            if (response) {
                setReviews(response);
            }
        }
        fetchReviews();
    }, []);
    return (
        <>
            <div className="text-[1.5rem] font-bold max-w-screen-xl mx-auto bg-gray-800 text-white font-cursive">
                <h1 >Hear what our customers say about TripMates...</h1>
            </div>
            <Carousel data={reviews}></Carousel>
        </>      
    );
}

export default Reviews;