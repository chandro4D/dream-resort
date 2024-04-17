import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";






const Login = () => {
    
   
    
        
    const { signIn,googleLogin,GithubLogin } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                alert("LogIn successfully")
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
                alert("Please Provide Correct Email And Password")
            })
    }
    const handleGoogleLogin = (e ) =>{
        e.preventDefault();
        googleLogin()
        .then(result =>{
            console.log(result.user)
            alert("Log in Successfully")
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            console.log(error.message);
            alert(error.message)
        })
    }
    const handleGithubLogin = (e) =>{
        e.preventDefault();
        GithubLogin()
        .then(result =>{
            console.log(result.user)
            alert("Log in Successfully")
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
         console.log(error.message);
         alert(error.message)

        })
    }
    return (
        <div className="w-[500px] h-[600px] bg-gray-400  ml-[500px] mt-10 mb-10 rounded-xl">
            <div className=" pt-14">
                <h2 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" className="text-center text-2xl font-bold text-white mb-2">WELCOME TO DREAM RESORTS</h2>
                <p data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1100" className="text-center text-xl font-semibold text-black">Login to your account by entering your <br /> mobile number and password</p>
            </div>
            <form onSubmit={handleLogIn} className="pt-10 pl-12">
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1200" className=" w-[400px] h-[50px]">
                    <input className="w-full h-full rounded-lg text-center" type="email" placeholder="Your Email" required name="email" />
                </div>
                <br />
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1300" className=" w-[400px] h-[50px] ">
                    <input className="w-full h-full text-center rounded-lg" type="password" placeholder="Enter Your Password" required name="password" />
                </div>
                <br />
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1400" className=" w-[400px]  h-[50px] bg-lime-400 rounded-2xl">
                    <button className="w-full h-full text-white"> LOGIN</button>
                </div>
            </form>
            <br />
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1450">
                <h3 className="text-center text-2xl font-semibold text-yellow-600">Don`t Have An Account? <Link to={"/Register"}><span className="text-lime-300" >Register</span></Link></h3>
            </div>
            <br />
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div  className="divider divider-neutral text-xl font-medium ml-14 mr-14">
                    Continue With
                </div>
            
                <div className="flex ml-40 mt-6">
                    <div>
                        <button onClick={handleGoogleLogin} className="btn mr-5 bg-lime-400 w-20 h-10 text-center pt-1 rounded-md">Google</button>
                    </div>
                    <div>
                        <button onClick={handleGithubLogin} className=" btn mr-5 bg-lime-400 w-20 h-10 text-center pt-1 rounded-md">Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;