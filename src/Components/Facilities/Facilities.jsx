import { Helmet } from "react-helmet-async";
import SwiperSlider from "../SwiperSlider/SwiperSlider";

const Facilities = () => {
    return (
        <div>
            <Helmet>
                <title>Dream Resorts//Facilities</title>
            </Helmet>
            <div>
                <div data-aos="flip-down" data-aos-duration="1000" className="animate__animated  animate__delay-4s animate__swing text-4xl text-center text-slate-950 font-bold mt-10 mb-10">
                    <h2 data-aos="flip-down" data-aos-duration="1000">THINGS TO DO</h2>
                    <p className="text-yellow-600 mt-4 text-2xl">ENJOY YOUR TIME WITH PLEASURE</p>
                </div>
                <div className="lg:flex sm:grid-cols-1 lg:ml-28 sm:ml-0 mt-20">
                    <div className="w-[400px] h-[500px] mr-5" >
                        <img data-aos="zoom-out-down" src="https://i.ibb.co/bBR9XN0/pexels-julia-m-cameron-8841157-1.jpg" />
                        <h2 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" className="text-2xl text-slate-950 font-bold text-center mt-5 mb-2">OUTDOOR BBQ</h2>
                        <p data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1100" className="text-xl text-yellow-600  font-medium text-center">Outdoor BBQ Is A Truely Unique & Interactive Experience</p>
                    </div>
                    <div className="w-[400px] h-[500px] mr-5">
                        <img data-aos="zoom-out-down" className="" src="https://i.ibb.co/Ch5bszh/oziel-gomez-Ib-LZj-Kcelp-M-unsplash.jpg" />
                        <h2 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" className="mb-2 text-2xl text-slate-950 font-bold text-center mt-5">NATURE WALK</h2>
                        <p data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1200" className="text-xl text-yellow-600  font-medium text-center">Stroll Around And Fill Your Lungs With Pure Oxygen</p>
                    </div>
                    <div className="w-[400px] h-[500px]">
                        <img data-aos="zoom-out-down" src="https://i.ibb.co/wR3jyYM/eleanor-carter-2-Wyi2hse-KAk-unsplash.jpg"/>
                        <h2 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" className="mb-2 text-2xl text-slate-950 font-bold text-center mt-5">LAKE SWIMMING</h2>
                        <p data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1100" className="text-xl text-yellow-600  font-medium text-center">The Water Is Very Clean,Freash And Safe That best For Your Health</p>
                    </div>
                </div>
                <h3 className="text-slate-950 text-center font-bold mb-9 text-4xl">YOU CAN SEE OUR SOME RESORTS</h3>
                <SwiperSlider></SwiperSlider>
            </div>
        </div>
    );
};

export default Facilities;