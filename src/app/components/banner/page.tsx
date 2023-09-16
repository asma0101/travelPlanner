const Banner = () => {
    return (
        <>
            <div className="bg-white text-center relative">
                <div className="w-full max-w-screen-xl mx-auto">
                    <div className="transition-transform transform hover:scale-105">
                    <img
                        src="/banner.jpg"
                        alt="Banner"
                        className="mx-auto mb-8 w-full"
                    />
                    </div>
                </div>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="text-white">
                    <h2 className="text-4xl font-bold mb-4">Explore Amazing Places</h2>
                    <p className="text-lg mb-8">
                        Find your next adventure and create unforgettable memories.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-blue-600">
                        Get Started
                    </button>
                    </div>
                </div>
            </div>



        </>
    );
}

export default Banner;