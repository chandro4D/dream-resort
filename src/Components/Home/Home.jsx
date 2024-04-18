import { useLoaderData } from "react-router-dom";
import Resort from "../Resort/Resort";
import Slider from "../Slider/Slider";
import Choose from "../Choose/Choose";
import ChoiceFirst from "../ChoiceFirst/ChoiceFirst";
import SwiperSlider from "../SwiperSlider/SwiperSlider";
import { Helmet } from "react-helmet-async";



const Home = () => {
    const resorts = useLoaderData();

    return (
        <div className="mt-10 mb-9">
            <Helmet>
                <title>Dream Resorts//Home</title>
            </Helmet>
            <ChoiceFirst></ChoiceFirst>
            <Slider></Slider>
            <Choose></Choose>

            <div className=" lg:grid lg:grid-cols-2 lg:mr-[80px] lg:ml-[140px] sm:grid-cols-1 sm:ml-[60px] sm:mr-[80px]">
                {
                    resorts.map(resort => <Resort key={resort.id} resorts={resort}></Resort>)
                }

            </div>
            <h3 className="text-slate-950 text-center font-bold mb-9 text-4xl">YOU CAN SEE OUR SOME RESORTS</h3>
            <SwiperSlider></SwiperSlider>

        </div>
    );
};

export default Home;