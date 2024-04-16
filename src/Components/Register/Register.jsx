import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const Register = () => {
    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const { createUser,setUser,updateUserProfile } = useContext(AuthContext)
    console.log(createUser)
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const PhotoURL = e.target.PhotoURL.value;
        console.log(email, password, name, PhotoURL);

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters');
            alert("Password should be at least 6 characters")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case letter');
            alert("Your password should have at least one upper case letter")
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should have at least one lower case letter');
            alert("Your password should have at least one lower case letter")
            return;
        }
        setRegisterError('');
        setSuccess('');


        createUser(email, password, name, PhotoURL)
            .then(result => {
                
                console.log(result.user);
                setUser(result.user)
                setSuccess("Account Created successfully");
                alert("Account Created successfully")
                updateUserProfile(name,PhotoURL)
                .then()
                navigate("/");
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message);
            })
    }
    return (
        <div className="w-[500px] h-[630px] bg-slate-400 ml-[500px] mt-10 mb-10 rounded-xl">
            <div className=" pt-10">
                <h2 className="text-center text-2xl font-bold text-white mb-2">WELCOME TO DREAM RESORTS</h2>
                <p className="text-center text-xl font-semibold text-black">Register to your account </p>
            </div>
            <form onSubmit={handleRegister} className="pt-8 pl-12">
                <div className=" w-[400px] h-[50px]">
                    <input className="w-full h-full rounded-lg text-center" type="name" placeholder="Your Name" required name="name" />
                </div>
                <br />
                <div className=" w-[400px] h-[50px]">
                    <input className="w-full h-full rounded-lg text-center" type="email" placeholder="Your Email" required name="email" />
                </div>
                <br />
                <div className="flex">
                    <div>
                        <input className="text-black rounded-lg text-center   w-[400px] h-[50px]" placeholder="password" required
                            type={showPassword ? "text" : "password"} name="password" />
                    </div>
                    <div className="mt-3  ">
                        <span className="" onClick={() => { setShowPassword(!showPassword) }}>
                            {
                                showPassword ? <FaEyeSlash className="w-10 h-5"></FaEyeSlash> : <FaEye className="w-10 h-5"></FaEye>
                            }
                        </span>
                    </div>
                </div>


                <br />
                <div className=" w-[400px] h-[50px] ">
                    <input className="w-full h-full text-center rounded-lg" type="text" placeholder="Enter Your Photo URL" required name="PhotoURL" />
                </div>
                <br />
                <div className=" w-[400px]  h-[50px] bg-lime-400 rounded-2xl">
                    <button className="w-full h-full text-white"> Register</button>
                </div>
            </form>
            {
                registerError && <p className="text-red-700 text-center text-xl font-semibold mt-5">{registerError}</p>
            }
            {
                success && <p className="text-green-500 text-center text-xl font-semibold mt-5">{success}</p>
            }
            <br />
            <div>
                <h3 className="text-center text-xl font-medium text-amber-600">Already Have An Account? <Link to={"/login"}><span className="text-lime-300" >LOGIN</span></Link></h3>
            </div>
        </div>
    )
};

export default Register;