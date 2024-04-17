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
        <div className="mt-10">
            <Helmet>
                <title>Dream Resorts//Home</title>
            </Helmet>
            <ChoiceFirst></ChoiceFirst>
            <Slider></Slider>
            <Choose></Choose>
            <div className="grid grid-cols-2 mr-[80px] ml-[140px]">
                {
                    resorts.map(resort => <Resort key={resort.id} resorts={resort}></Resort>)
                }

            </div>
            <SwiperSlider></SwiperSlider>
        </div>
    );
};

export default Home;