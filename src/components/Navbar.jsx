import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut, toggleTheme } = useContext(AuthContext);
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/" >All Foods</NavLink></li>
        <li><NavLink to="/login" >Gallery</NavLink></li>
   
        {
            user && <li><NavLink to='/addequipment' >My Foods</NavLink></li>
        }
        {
            user && <li><NavLink to='/mylist' >My Orders </NavLink></li>
        }
        {
            user && <li><NavLink to='/mylist' >Add Food </NavLink></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 h-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-[1000] p-2 shadow absolute top-full left-0">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl hover:bg-lime-900 hover:text-white rounded-none">ABC Restaurant </Link>
            </div>
            <div className="navbar-center hidden lg:flex">

                <ul className="hidden md:flex gap-6">
                    {links}
                </ul>
            </div>
            {/* text */}


            {/* text */}

            <div className="navbar-end">
                {
                    user && user?.email ?
                        <div className='flex gap-3'>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className=" m-1">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user && user?.photoURL} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow">
                                    <li>{user && user?.displayName}</li>

                                </ul>
                            </div>
                            <div><button className='btn'><a onClick={logOut}>Logout</a></button> </div>
                        </div>

                        : <Link to='/login' className="btn bg-[#A9C80D] text-white rounded-none">Login</Link>
                }
                {/* {
                    user && user?.email ? <button onClick={logOut} className="btn btn-neutral rounded-none">logout</button> : <Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>
                } */}

                {/* <Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link> */}
            </div>
            <div className="flex justify-end ml-3">
                {/* lll */}
                <input type="checkbox" onClick={toggleTheme} value="synthwave" className="toggle theme-controller" />
                {/* lll */}
            </div>
        </div>
    );
};

export default Navbar;
