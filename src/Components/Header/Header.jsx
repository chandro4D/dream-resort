import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleSignOut = () => {
        logOut()
            .then(result =>{
                console.log(result.user);
                alert("Logout Successfully");
            })
            .catch()
    }
    const links = <>

        <li className="mr-3"><Link to="/">Home</Link></li>
        <li className="mr-3"><Link to="/UpdateProfile">Update Profile</Link></li>
        <li><button><Link to="/login">LOGIN</Link></button></li>
        <li><button><Link to="/Register">Register</Link></button></li>

    </>
    return (
        <div className="navbar bg-indigo-600   rounded-lg ">
            <div className="navbar-start mr-60">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="text-xl font-medium text-yellow-600 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold text-amber-600">Dream Resorts</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl font-medium text-yellow-600">
                    {links}
                </ul>
            </div>

            {
                user ?
                    <div className="flex navbar-end">
                        <div>
                            <div className=" tooltip tooltip-right" data-tip={user.email }  >
                                <img className="rounded-full w-14" src="https://web.programming-hero.com/static/media/profileImage.934e5b10.png" />
                            </div>
                        </div>
                        <div className="ml-5">
                            <Link to=""><button onClick={handleSignOut} className="btn mr-16 bg-green-600 text-xl font-medium ">SING OUT</button></Link>
                        </div>
                    </div>
                    :
                    <div className="navbar-end">
                        <Link to="/login"><button className="btn mr-16 bg-green-600 text-xl font-medium ">LOGIN</button></Link>
                    </div>

            }

        </div>
    );
};

export default Header;