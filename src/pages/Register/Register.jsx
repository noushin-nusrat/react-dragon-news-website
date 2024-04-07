import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const userName = form.get('userName');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(userName, photo, email, password);

        //create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error);
        })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-4xl font-semibold my-10 text-center">Please Register</h2>
                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Your Name</span>
                        </label>
                        <input type="Text" name="userName" placeholder="Enter your name" className="input input-bordered  bg-gray-100" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Please enter the url of your image" className="input input-bordered  bg-gray-100" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Email address</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your Email Address" className="input input-bordered  bg-gray-100" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-base" >Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered bg-gray-100" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-base">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white bg-gray-600 font-semibold">Register</button>
                    </div>
                </form>
                <p className="text-center mt-6">Already Have An Account ? <Link to='/login' className="text-red-600 font-semibold">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;