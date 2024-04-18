import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Autoplay } from 'swiper/modules';


import "../CssFile/slider.css"

const SwiperSlider = () => {

    return (
        <div className='mb-10 '>
            <div className=''>
                <Swiper className='w-[1300px] rounded-xl'
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    loop={true}
                    autoplay={
                        {
                            delay: 2000

                        }
                    }
                >
                    <SwiperSlide>
                        <div className='slide slide1'>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide slide2'>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide slide3'>
                           
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide slide4'>
                           
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide slide5'>
                           
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide slide6'>
                           
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide slide7'>
                           
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default SwiperSlider;