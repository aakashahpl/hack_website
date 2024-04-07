import React, {  useState ,useEffect} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ideathonImage from "../assets/ideathon2.jpg"
import semicolonImage from "../assets/semicolon.JPG"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './gallery.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Gallery2() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const isMobile = windowWidth < 768;
  const navigationConfig = isMobile ? false : true;

  return (
    <div className='gallery'>
    <h1 className='gallery-heading'>Gallery</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}  
        navigation={navigationConfig}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={semicolonImage} alt="" /></SwiperSlide>
        <SwiperSlide><img src={ideathonImage} alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://wrlandconservancy.org/wp-content/themes/western-reserve/img/placeholder.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://beasleysjewelry.com/wp-content/uploads/2020/04/calm-1.jpg" alt="" /></SwiperSlide>   
      </Swiper>
    </div>
  );
}
