import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResortDataHooks from "../Hooks/ResortDataHooks";
import { Helmet } from "react-helmet-async";


const Details = () => {

    const { id } = useParams();
    const [singleData, setSingleData] = useState({});
    const { info, loading } = ResortDataHooks();

    useEffect(() => {
        if (info) {
            const singleData = info.find((item) => item.id == id);
            setSingleData(singleData);
            // console.log(singleData);
        }
    }, [info, id])

    const { title, image, segment_name, description, price, status, location, facilities } = singleData || {};
    return (
        <div className="flex mt-20 ml-[160px] mb-20">
            <Helmet>
                <title>Dream Resorts//Details</title>
            </Helmet>
        <div className="bg-slate-400 w-[570px] h-[600px] ">
            <img  className="w-[500px] h-[550px] mt-6 ml-8 rounded-xl" src={image} alt="" />
        </div>
        <div className="bg-slate-200 w-[570px] h-[600px] ">
            <div className="mt-12">
                <h3 className="text-4xl font-bold text-center text-[#131313]">{title}</h3>
                <br />
                <h4 className=" text-xl text-center text-yellow-600 font-medium ml-14">{segment_name}</h4>
                <h3 className="ml-14">_______________________________________________________________________</h3>
                
                
                <p className="ml-14 text-xl font-medium text-[#131313] "><span className="text-xl font-bold"></span>{description}</p>
                <br />
                <br />
                
                <h3 className="ml-14">_______________________________________________________________________</h3>

            </div>
            <div className=" ml-14 mt-10">
                <div className="text-[#131313B3] text-base font-medium mr-10">
                    <h1 className=" text-2xl font-bold text-black">{ location}</h1>
                    <br />
                    <h1 className=" text-lg font-bold text-yellow-600">{ facilities}</h1>
                    <br />
                    <h1 className="text-center text-lg font-bold text-black ">{  price}</h1>
                    <h3 className="text-center text-green-600 text-xl font-medium">{status} Now</h3>
                </div>
            </div>


        </div>
    </div>
    );
};

export default Details;