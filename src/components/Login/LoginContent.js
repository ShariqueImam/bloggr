import React from 'react'
import LoginHeading from './LoginHeading'
import LoginForm from './Form/LoginForm'
import Slide from 'react-reveal/Slide'
const LoginContent = () => {
    return (
        <div className='px-8 w-full h-[90%] m-auto flex flex-col rounded-tr-[100px] rounded-bl-[100px]'>
            {/* headings of the form */}
            <Slide right>
       
                <section className='m-auto w-full h-[20%]'>
                    <LoginHeading />
                </section>
            </Slide>
            {/* the login info page */}
            <section className="flex h-[80%] w-full">
                <LoginForm />
            </section>
        </div>
    )
}

export default LoginContent