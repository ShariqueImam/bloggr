import React from 'react'
import Logo from '../Navbar/Logo'
import { Link } from 'react-router-dom'
const LoginHeading = () => {
    return (
        <div className='flex h-full w-full items-end'>

            {/* the welcome page */}
            <section className="flex w-[70%] ">
                <h2 className='mx-auto text-5xl sm:text-7xl md:text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#ff8f70] to-slate-700' style={{ fontFamily: 'Lobster, cursive' }}>Welcome Back,</h2>
            </section>
            {/* the logo */}
            <section className="flex h-full w-[30%] text-slate-700 items-end">
            <Link to="/" className='md:mt-auto lg:m-auto'>
                <Logo />
            </Link>
            </section>
        </div>
    )
}

export default LoginHeading