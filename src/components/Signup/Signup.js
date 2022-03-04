import React from 'react'
import { SignupBackground } from '../styled-components/home-style'
import SignupImg from '../../assets/images/signup/sideimg.png'
import SignupContent from './SignupContent'
import Roll from 'react-reveal/Roll'

const Signup = () => {
  return (
    // give the background image the whole screen
    <SignupBackground className='h-screen w-screen flex'>
      {/* adding the card for the signup */}
      <section className="flex h-[100%] sm:h-[70%] md:h-[80%] w-[100%] sm:w-[95%] md:w-[55%] m-auto justify-center items-center">
        {/* main card left side*/}
        <section className='h-[70%] sm:h-full w-[100%] sm:w-[60%] opacity-100 flex'>
          <SignupContent />
        </section>
        {/* right side of the card for the image */}
        <Roll right>
          <section className="hidden sm:flex w-[0%] sm:w-[45%] h-full">
            <img src={SignupImg} alt="" className='h-[50%] m-auto w-[100%] scale-[] sm:scale-[0.7] md:scale-[1]'  />
          </section>
        </Roll>
      </section>
    </SignupBackground >
  )
}

export default Signup