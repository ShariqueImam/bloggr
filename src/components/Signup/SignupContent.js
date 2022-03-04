import React from 'react'
import Logo from '../Navbar/Logo'
import { orange } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox'
import Slide from 'react-reveal/Slide'
import { Link } from 'react-router-dom'
const SignupContent = () => {
    const [isChecked, setIsChecked] = React.useState(false)
    // for the checkbox
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className='w-full flex flex-col sm:h-[100%]'>

            {/* main heading of the form */}
            <Slide bottom duration={700}>
                <section className="mx-auto flex h-[15%] sm:h-[15%] md:h-[20%] w-[90%] sm:w-[100%] md:w-[] bg-gray-800 items-center transform rounded-tr-[50px] rounded-bl-[50px]">
                    <section className="flex w-full items-center">
                        {/* adding the logo */}
                        <Link to="/" className='m-auto'>
                            <section className="flex w-[20%]"><Logo /></section>
                        </Link>
                        {/* adding the heading on the page */}
                        <section className="flex w-[80%] ">
                            <h1 className='text-3xl sm:text-3xl md:text-5xl text-gray-300' style={{ fontFamily: 'Lobster, cursive' }}>Welcome To Blogrr BEE</h1>
                        </section>
                    </section>
                </section>
            </Slide>
            {/* main form of the page */}
            <Slide bottom duration={1100}>
                <section className="flex h-[85%] sm:h-[70%] md:h-[95%] lg:h-[75%] w-[] sm:w-[] md:w-[] flex-col">
                    <form action="" className="flex flex-col h-full w-full justify-around">
                        {/* enter email */}
                        <section className="flex mx-auto -my-2">
                            <input type="text" placeholder='Enter Email' size="35" className='bg-white outline-none m-2 px-4 sm:px-4 md:px-8 py-4 border-[1px] rounded-lg' />
                        </section>  {/* enter password */}
                        <section className="flex mx-auto -my-2">
                            <input type="password" placeholder='Enter Password' size="35" className='bg-white outline-none m-2 px-4 sm:px-4 md:px-8 py-4 border-[1px] rounded-lg' />
                        </section>  {/* enter username */}
                        <section className="flex mx-auto -my-2">
                            <input type="text" placeholder='Enter Username' size="35" className='bg-white outline-none m-2 px-4 sm:px-4 md:px-8 py-4 border-[1px] rounded-lg' />
                        </section>
                        {/* place the button */}
                        <section className="flex mx-auto -my-2">
                            <button className=" rounded-xl flex bg-gradient-to-r from-[#ff8f70] to-[#ff3d54] px-16 sm:px-16 md:px-16 py-2 sm:py-2 md:py-4">Sign Up</button>
                        </section>
                        {/* subscribe the emails */}
                        <section className="flex items-center">
                            <Checkbox
                                {...label}
                                checked={isChecked}
                                onChange={() => setIsChecked(oldValue => !oldValue)}

                                sx={{
                                    color: orange[900],
                                    '&.Mui-checked': {
                                        color: orange[900],
                                    },
                                }}
                            />
                            <p style={{
                                fontFamily: 'Open Sans, sans-serif'
                            }} className='tracking-normal cursor-pointer text-gray-700' onClick={() => setIsChecked(oldValue => !oldValue)}>I don't want to receive promotional emails from Blogrr BEE</p>
                        </section>
                    </form>
                    <p className='text-gray-700'>Already have an account? <Link to="/login"><span className='underline'>Signin</span></Link></p>
                </section>
                {/* extra data and footer of the form */}

            </Slide>
        </div>
    )
}

export default SignupContent;

