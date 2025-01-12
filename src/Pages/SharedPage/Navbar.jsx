import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import useCart from '../../hooks/useCart';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    // console.log(cart);
    // console.log(user);
    const links = <>
        <li><NavLink style={{ fontVariant: 'small-caps' }} to={'/'}>Home</NavLink></li>
        <li><NavLink style={{ fontVariant: 'small-caps' }} to={'/menu'}>Menu</NavLink></li>
        <li><NavLink style={{ fontVariant: 'small-caps' }} to={'/order/salad'}>Order Food</NavLink></li>
        <li><NavLink style={{ fontVariant: 'small-caps' }} to={'/secret'}>Secret</NavLink></li>
        {
            user ?
                <> </>
                :
                <li><NavLink style={{ fontVariant: 'small-caps' }} to={'/login'}>Login</NavLink></li>

        }

    </>

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('Log Out Successful')
            })
            .catch(error => {
                toast.error({ error })
            })
    }
    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-25 text-white lg:px-28">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-gray-500">
                        {links}

                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-2xl xl:text-3xl" style={{ fontVariant: 'small-caps' }}>Bistro Boss</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3 mr-5">
                    {links}
                </ul>

                <div className="flex-none ">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item">{cart.length}</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body text-slate-800">
                                <span className="text-lg font-bold">{cart.length} Items</span>
                                <span className="text-info">Subtotal: ${totalPrice.toFixed(2)}</span>
                                <div className="card-actions">
                                    <Link to={'/dashboard/cart'} className="btn btn-neutral btn-block">View cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end ">
                    <div className="w-12 rounded-full">
                        {
                            user?.photoURL ?
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                        <li>
                                            <p className='text-slate-800'>{user?.displayName}</p>
                                        </li>
                                        <li>
                                        </li>

                                    </ul>
                                </div>
                                :
                                <div></div>

                        }
                    </div>
                </div>

                {
                    user &&
                    <button onClick={handleLogout} className="btn btn-ghost hover:bg-neutral ">Log Out</button>
                }
            </div>
            <div className="navbar-end lg:hidden">
                <div className="flex-none ">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item">{cart.length}</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body text-slate-800">
                                <span className="text-lg font-bold">{cart.length} Items</span>
                                <span className="text-info">Subtotal: ${totalPrice.toFixed(2)}</span>
                                <div className="card-actions">
                                    <Link to={'/dashboard/cart'} className="btn btn-neutral btn-block">View cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    user &&
                    <button onClick={handleLogout} className="btn btn-ghost hover:bg-neutral ">Log Out</button>
                }
            </div>
        </div>
    );
};

export default Navbar;