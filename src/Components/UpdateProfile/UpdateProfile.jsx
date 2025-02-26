import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";




const UpdateProfile = () => {
    const { user,updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();


    const handleUpdateProfile = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const PhotoURL = e.target.PhotoURL.value;
        console.log(name,PhotoURL)
        updateUserProfile(name,PhotoURL)
        
        alert("Update Your Profile successfully")
        navigate("/");


    }

    return (
        <div className="lg:ml-[400px] sm:ml-0 mt-5 mb-5 ">
            <Helmet>
                <title>Dream Resorts//UpdateProfile</title>
            </Helmet>
            <div className="lg:w-[800px] sm:w-[400px] lg:h-[400px] sm:h-[350px] bg-slate-500 mb-5 rounded-lg">
                <h2 className="text-center text-3xl font-bold text-emerald-100 pt-5"> YOUR PROFILE</h2>
                <h2 className="text-center text-2xl font-semibold text-sky-100 pt-4"> Your Name : {user.displayName || "Please Provide Your Name"}</h2>
                <h2 className="text-center text-2xl font-semibold text-sky-100 pt-4"> Your email :{user.email || " Please Provide Your Email"}</h2>
                <h3 className="lg:ml-[200px] sm:ml-0 pt-5 pb-5 rounded-lg"><img className="w-[400px] h-[200px] rounded-lg" src={user.photoURL || "https://web.programming-hero.com/static/media/profileImage.934e5b10.png"} /></h3>
            </div>
            <div className="lg:w-[800px] lg:h-[350px] sm:w-[400px] bg-slate-500 rounded-lg">
                <h2 className="text-center text-3xl font-bold text-emerald-100 pt-8">UPDATE YOUR PROFILE</h2>
                <form onSubmit={handleUpdateProfile} className="lg:ml-[200px] sm:ml-0 mt-10">
                    <div className=" lg:w-[400px] sm:w-[300px] h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="name" placeholder="Your Name" required name="name" />
                    </div>
                    <br />
                    <div className=" lg:w-[400px] sm:w-[300px] h-[50px] ">
                        <input className="w-full h-full text-center rounded-lg" type="text" placeholder="Enter Your Photo URL" required name="PhotoURL" />
                    </div>
                    <br />
                    <div className=" lg:w-[400px] sm:w-[300px]  h-[50px] bg-lime-400 rounded-2xl">
                        <button className="w-full h-full text-white"> UPDATE</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdateProfile;