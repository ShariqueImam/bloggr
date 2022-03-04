import React from 'react'
import { Transition } from "@headlessui/react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
const Navigation = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);


    const navClickHandler = (clickedNav) => {
        props.onScroll(clickedNav)
        setIsOpen(false);
    };


    return (
        <div className="flex z-40" >
            <nav
                className={`m-auto w-full h-full flex z-40 opacity-[0.97]`}
            >
                {/* this is visible only for the tab and desktop */}
                <div className=" h-[100%]  flex">
                    <div className="flex w-full flex-col my-auto">
                        {/* this is displayed on large pages */}
                        <div className="hidden sm:flex">
                            <div
                                className="m-auto text-center flex tracking-wide"
                                style={{
                                    fontFamily: "PT Sans Narrow, sans-serif",
                                }}
                            >
                         
                                    <div
                                        onClick={() => { navClickHandler('products') }}
                                        className={`text-white sm:px-1 py-2  text-sm font-medium md:mx-8 flex  cursor-pointer transform hover:translate-y-1 tracking-widest xl:tracking-wide `}
                                    >
                                        <p className="text-gray-200 mx-1">Products</p>
                                        <KeyboardArrowDownIcon />
                                    </div>
                              
                                {/* products dropdown */}
                         
                                    <div
                                        onClick={() => { navClickHandler('company') }}
                                        className={`text-white sm:px-1 py-2  text-sm font-medium md:mx-8 flex   cursor-pointer transform hover:translate-y-1 tracking-widest xl:tracking-wide`}
                                    >
                                        <p className="text-gray-200 mx-1">
                                            Company
                                        </p>
                                        <KeyboardArrowDownIcon />

                                    </div>
                              
                                {/* the connects  */}
                         
                                    <div
                                        onClick={() => { navClickHandler('connect') }}
                                        className={` text-white sm:px-1 py-2  text-sm font-medium md:mx-8 flex   cursor-pointer transform hover:translate-y-1 tracking-widest xl:tracking-wide`}
                                    >
                                        <p className="text-gray-200 mx-1">Connect</p>
                                        <KeyboardArrowDownIcon />

                                    </div>
                              
                            </div>
                        </div>
                        {/* adding the transiton for small screens */}
                        {/* this is visible on mobile screens only */}
                        <div className="flex sm:hidden flex-col">
                            {/* hamburger */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-[#ff3d54] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#ff3d54] focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-100 focus:ring-white outline-none focus:text-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        viewBox="0 0 100 80"
                                        width="30"
                                        height="20"
                                        style={{ fill: "white" }}
                                    >
                                        <rect width="100" height="20"></rect>
                                        <rect y="30" width="100" height="20"></rect>
                                        <rect y="60" width="100" height="20"></rect>
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 100 80" width="30" height="20" style={{ fill: "white" }}>
                                        <rect width="100" height="20"></rect>
                                        <rect y="30" width="100" height="20"></rect>
                                        <rect y="60" width="100" height="20"></rect>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <Transition
                        show={isOpen}
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-[0.1] scale-0 w-[0vw]"
                        enterTo="opacity-[1] scale-0 w-[0vw]"
                        // leave="transition ease-in duration-50 transform"
                        leaveFrom="opacity-[1] scale-0 w-[0vw]"
                        leaveTo="opacity-[0.1] scalee-0 w-[0vw]"
                    >
                        {(ref) => (
                            <div
                                className="sm:hidden flex justify-center bg-white opacity-[1.5] absolute inset-x-6 inset-y-32 px-8 rounded-3xl "
                                id="mobile-menu"
                            >
                                <div ref={ref} className="h-full w-full flex flex-col ">
                                    {/* adding the navbar buttons */}
                                    <section className="flex flex-col h-[70%] justify-center">


                                        <div
                                            onClick={() => { navClickHandler('products') }}
                                            className={`mx-auto my-6 text-white lg:px-3 py-2  text-md font-medium xl:mx-16 flex  cursor-pointer transform hover:translate-y-1 tracking-widest xl:tracking-wide"}`}
                                        >
                                            <p className="text-gray-800 mx-1">Products</p>
                                        </div>
                                        <div
                                            onClick={() => { navClickHandler('company') }}
                                            className={`mx-auto my-6 text-white lg:px-3 py-2  text-md font-medium xl:mx-16 flex   cursor-pointer transform hover:translate-y-1 tracking-widest xl:tracking-wide"}`}
                                        >
                                            <p className="text-gray-800 mx-1">Company</p>
                                        </div>
                                        <div
                                            onClick={() => { navClickHandler('connect') }}
                                            className={`mx-auto my-6 text-white lg:px-3 py-2  text-md font-medium xl:mx-16 flex   cursor-pointer transform hover:translate-y-1 tracking-widest xl:tracking-wide"}`}
                                        >
                                            <p className="text-gray-800 mx-1">Connect</p>
                                        </div>
                                        {/* adding a kind of divider */}
                                        <section className="border-b-2 border-gray-200 w-[80%] mx-auto"></section>
                                    </section>


                                    {/* adding the login and signup buttons for gradient borders */}
                                    <section className="flex h-[30%] flex-col justify-around" style={{
                                        fontFamily: "PT Sans Narrow, sans-serif",
                                    }}>
                                        <Link to="/login" className="">
                                            <div className=' mx-auto w-[50%] p-[0.12rem] rounded-md' style={{ background: 'linear-gradient(to right,#ff8f70,#ff3d54)' }}>
                                                <button className='font-semibold tracking-wider w-full rounded-md p-[0.6rem] bg-white text-gray-800' >Login</button>
                                            </div>
                                        </Link>
                                        <Link to="/signup" className="">
                                            <div className='w-[50%] mx-auto'>
                                                <button className='w-full font-semibold tracking-wider mx-auto rounded-md bg-gradient-to-r from-[#ff8f70] to-[#ff3d54] p-[0.6rem] text-gray-800'>Signup</button>
                                            </div>
                                        </Link>
                                    </section>

                                </div>
                            </div>
                        )}
                    </Transition>
                </div>
            </nav>

        </div>
    );
};

export default Navigation




