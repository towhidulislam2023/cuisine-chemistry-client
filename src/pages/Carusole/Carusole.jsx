/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
const Carusole = () => {
    // it use in home components 
    return (
        <div className='md:w-[75%] h-96 mb-20 md:h-[70vh] mx-auto px-5 md:my-28'>
            <h1 className='text-4xl font-bold text-center my-6'>Food we serve</h1>
        <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><img className='' src="https://soliloquywp.com/wp-content/uploads/2018/10/nb_dfs_cover.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[25vh]' src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?w=826&t=st=1682982562~exp=1682983162~hmac=8bd6560e6cb980549387d83d6018cb07525fd911655f9e7596036ca9583874bc" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[25vh]' src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=826&t=st=1682982885~exp=1682983485~hmac=1499f9be879d958c67219b3c18aaf08dcd7af1a0d51f50035e814d4f297bdb13" alt="" /></SwiperSlide>
            
        </Swiper>
        </div>
    );
};

export default Carusole;