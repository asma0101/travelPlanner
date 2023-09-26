import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = (props:any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
      slidesToScroll: 1,
   autoplay: true, 
    autoplaySpeed: 1500, 
    };
    const calculateRating = (rating:any) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<span key={i}>⭐</span>);
        }
        return stars;
    };

    return (
        <>
            {
                props.data.length > 0 ?
                <div className="max-w-screen-xl mx-auto mt-6">
                        <Slider {...settings}>
                            {
                                props.data.map((review:any, index:number) => {
                                    return <div key={ index } className="max-w-xs mx-2 mb-4 bg-white rounded shadow-md border border-gray-300">
                                        <div className="p-4 text-center">
                                            <img
                                                src="/userIcon.png"
                                                alt="User Image"
                                                className="w-12 h-12 rounded-full mx-auto mb-2"
                                            />
                                            <h3 className="text-xl font-semibold mb-2">{review.user.name}</h3>
                                            <p className="text-gray-800">
                                                {review.comments}
                                            </p>
                                            <p className="text-gray-800">
                                                {
                                                    calculateRating(review.rating)
                                                }
                                            </p>
                                        </div>
                                    </div>
                                })
                            }
                        
                    </Slider>
                </div>
                
                
                : null
            }
            
    
            </>
  );
};

export default Carousel;
