"use client"
import Banner from "../components/banner/page";
import Footer from "../components/footer/page";
import GoogleMap from "../components/googleMap/page";
import Header from "../components/header/page";
import Reviews from "../components/reviews/page";
import Services from "../services/page";
import Trips from "../trips/page";


const Home = (props:any) => {
	
	
  return (
    <>
    <div className="min-h-screen ">
        <div className="mt-16">
			<div className="bg-white py-16 text-center">
				    <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
       		</div>
        <div className="flex justify-center mb-4 max-w-screen-xl mx-auto">
          <GoogleMap></GoogleMap>
          
          <Trips></Trips>
        </div>
        </div>
      
      </div>
      </>
  );
};
export default Home;