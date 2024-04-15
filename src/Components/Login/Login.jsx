import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext);

    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const handleLogIn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
       console.log(email,password); 
       signIn(email,password)
       .then(result =>{
        console.log(result.user);
        alert("LogIn successfully")
        navigate(location?.state ? location.state : '/');
       })
       .catch(error =>{
        console.log(error);
       })
    }
    return (
        <div className="w-[500px] h-[600px] bg-indigo-400 ml-[500px] mt-10 mb-10 rounded-xl">
            <div className=" pt-14">
                <h2 className="text-center text-2xl font-bold text-white mb-2">WELCOME TO DREAM RESORTS</h2>
                <p className="text-center text-xl font-semibold text-black">Login to your account by entering your <br /> mobile number and password</p>
            </div>
            <form onSubmit={handleLogIn} className="pt-10 pl-12">
                <div className=" w-[400px] h-[50px]">
                    <input className="w-full h-full rounded-lg text-center" type="email" placeholder="Your Email" required name="email" />
                </div>
                <br />
                <div className=" w-[400px] h-[50px] ">
                    <input className="w-full h-full text-center rounded-lg" type="password" placeholder="Enter Your Password" required name="password" />
                </div>
                <br />
                <div className=" w-[400px]  h-[50px] bg-lime-400 rounded-2xl">
                   <button className="w-full h-full text-white"> LOGIN</button>
                </div>
            </form>
            <br />
            <div>
                <h3 className="text-center text-2xl font-semibold text-yellow-600">Don`t Have An Account? <Link to={"/Register"}><span className="text-lime-300" >Register</span></Link></h3>
            </div>
        </div>
    );
};

export default Login;