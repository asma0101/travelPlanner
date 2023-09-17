import Banner from "./components/banner/page";
import GoogleMap from "./components/googleMap/page";
import Services from "./services/page";
import Trips from "./trips/page";

const MainComponent = () => {
  return (
	  <>
		  <div className="min-h-screen ">
        <div className="mt-16">
			<div className="bg-white py-16 text-center">
				<Banner></Banner>
					  {/* @ts-expect-error Server Component */}
					  <Services></Services>
       		</div>
			<div className="flex justify-center mb-4 max-w-screen-xl mx-auto">
				<GoogleMap></GoogleMap>
					  {/* @ts-expect-error Server Component */}
					  <Trips></Trips>
			</div>
        </div>
      </div>
    </>
  );
}

export default MainComponent;