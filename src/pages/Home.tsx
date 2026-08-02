import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import banner from "../assets/banner.jpeg";
import banner1 from "../assets/banner1.jpeg";
import banner2 from "../assets/banner2.jpeg";
import banner3 from "../assets/banner3.jpeg";
import banner4 from "../assets/banner4.jpeg";
import banner5 from "../assets/banner5.jpeg";
import banner6 from "../assets/banner6.jpeg";
import banner7 from "../assets/banner7.jpeg";
import banner8 from "../assets/banner8.jpeg";
import banner9 from "../assets/banner9.jpeg";
import banner10 from "../assets/banner10.jpeg";
import banner11 from "../assets/banner11.jpeg";
import banner12 from "../assets/banner12.jpeg";
import banner13 from "../assets/banner13.jpeg";
import banner14 from "../assets/banner14.jpeg";
// import banner15 from "../assets/banner15.jpeg";



const HomePage = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md w-full">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}
          showStatus={false}
          swipeable
        >
          <div>
            <img
              src={banner}
              alt="Banner"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <img
              src={banner1}
              alt="Second"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <img
              src={banner2}
              alt="Second"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <img
              src={banner3}
              alt="Second"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <img
              src={banner4}
              alt="Second"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <img
              src={banner5}
              alt="Second"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <img
              src={banner6}
              alt="Second"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <img
              src={banner7}
              alt="Second"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <img
              src={banner8}
              alt="Second"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <img
              src={banner9}
              alt="Second"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <img
              src={banner10}
              alt="Second"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <img
              src={banner11}
              alt="Second"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <img
              src={banner12}
              alt="Second"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <img
              src={banner13}
              alt="Second"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <img
              src={banner14}
              alt="Second"
              className="w-full h-auto object-cover"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;