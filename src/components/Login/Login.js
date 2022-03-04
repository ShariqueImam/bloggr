// will add the bg in whole screen and then on right side we will 
// add the card for the login page
import React from 'react'
import { LoginBackground } from '../styled-components/home-style'
import LoginContent from './LoginContent'
const Login = () => {

  return (
    <LoginBackground className='h-screen w-screen grid md:grid-cols-11'>
      {/* left side of the page */}
      <section className="w-[0%] md:col-span-6"></section>
      {/* main content side of the image */}
      <section className="flex md:col-span-4 md:ml-auto w-full h-[90vh] sm:h-[100vh] md:h-full m-auto">
        <LoginContent />
      </section>
      {/* right side border */}
      <section className="w-[0%] md:col-span-1">
      </section>
    </LoginBackground>
  )
}

export default Login