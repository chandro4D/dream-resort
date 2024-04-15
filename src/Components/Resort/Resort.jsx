import { Link } from "react-router-dom";


const Resort = ({ resorts }) => {
    const { title, image, id, segment_name, description, price, status, location, facilities } = resorts;
    return (

        <div className="card  bg-base-100 shadow-xl mb-14 mr-[40px]">
            <figure><img src={image} /></figure>
            <div className="card-body">
                <h2 className="text-center text-3xl font-bold text-black">{title}</h2>
                <h2 className="text-center text-2xl font-bold text-amber-500">{segment_name}</h2>
                <p className="text-xl font-normal text-center text-zinc-800">{description}</p>
                <div className="divider"></div>
                <div className="flex text-xl font-bold text-center text-black">
                    <div className="mr-[250px]">
                        <h2>{price}</h2>
                    </div>
                    <div className="text-amber-500">
                        <h2>{status}</h2>
                    </div>
                </div>

                <div className="text-xl font-bold  text-black">
                    <h3>{location}</h3>
                </div>

                <div className="card-actions justify-center">
                    <Link to={`/resorts/${id}`}><button className="btn btn-primary">View Property</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Resort;