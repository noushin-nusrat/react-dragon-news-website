import { Link, NavLink } from "react-router-dom";
import userPic from '../../../assets/user.png'


const Navbar = () => {
    const navLinks = <>
        <li><NavLink className={'font-semibold'} to='/'>Home</NavLink></li>
        <li><NavLink className={'font-semibold'} to='/about'>About</NavLink></li>
        <li><NavLink className={'font-semibold'} to='/career'>Career</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 my-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <img src={userPic} />
                    </div>
                </div>
                <Link>
                    <button className="btn border border-gray-500">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;