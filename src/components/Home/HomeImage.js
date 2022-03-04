import React from 'react'
import SideImg from '../../assets/images/background/sideimage2.jpg'
const HomeImage = () => {
  return (
    <div className='opacity-[0.9] h-[60%] w-full m-auto rotate-[-4.5deg] cursor-pointer'>
        <img src={SideImg} alt="" className='rounded-3xl scale-[1] sm:scale-[1] md:scale-[0.75] hover:scale-[0.9] transition-all duration-[300ms]'/>
    </div>
  )
}

export default HomeImage