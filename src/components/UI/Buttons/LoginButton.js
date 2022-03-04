import React from 'react'
import styled from 'styled-components'
const BgBlur = styled.div`
background: rgba(255, 255, 255, 0.2);
border-radius: 6px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(7.9px);
`;
const LoginButton = () => {
  return (
    <BgBlur className='py-2 md:py-2 px-4 md:px-8 w-full flex bg-transparent hover:bg-gray-200 hover:bg-opacity-[0.8] hover:translate-y-2 transition-all duration-700'><button className=' mx-auto font-semibold tracking-wide md:tracking-wider text-gray-800'>Login</button></BgBlur>
  )
}

export default LoginButton