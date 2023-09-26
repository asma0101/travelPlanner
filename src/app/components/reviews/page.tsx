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

           {/* <div className="flex justify-center mb-2 max-w-screen-xl mx-auto mt-12 ">
                <div className="max-w-xs mx-2 mb-4 bg-white rounded shadow-md border border-gray-300">
                    <div className="p-4 text-center">
                    <img src="/userIcon.png" alt="User Image" className="w-12 h-12 rounded-full mx-auto mb-2" />
                    <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                    <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className="max-w-xs mx-2 mb-4 bg-white rounded shadow-md border border-gray-300">
                    <div className="p-4 text-center">
                    <img src="/userIcon.png" alt="User Image" className="w-12 h-12 rounded-full mx-auto mb-2" />
                    <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
                    <p className="text-gray-800">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className="max-w-xs mx-2 mb-4 bg-white rounded shadow-md border border-gray-300">
                    <div className="p-4 text-center">
                    <img src="/userIcon.png" alt="User Image" className="w-12 h-12 rounded-full mx-auto mb-2" />
                    <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                    <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className="max-w-xs mx-2 mb-4 bg-white rounded shadow-md border border-gray-300">
                    <div className="p-4 text-center">
                    <img src="/userIcon.png" alt="User Image" className="w-12 h-12 rounded-full mx-auto mb-2" />
                    <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                    <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                

            </div> */}
 
        </>      
    );
}

export default Reviews;