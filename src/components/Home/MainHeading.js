import React from 'react'


const MainHeading = () => {
    return (

        <div className='flex flex-col w-[90%] sm:[90%] md:w-[65%] h-full text-white' style={{ fontFamily: 'Roboto Mono, monospace' }}>

            <h1 className='h-1/3  text-3xl tracking-wide sm:text-5xl md:text-5xl lg:text-7xl mx-0 md:-mx-8'>A</h1>

            <h1 className='h-1/3 ml-auto text-3xl tracking-wide sm:text-5xl md:text-5xl lg:text-7xl'> <span className=''>M</span>odern <span className=''>B</span>logging</h1>

            <h1 className='h-1/3 ml-auto text-3xl tracking-wide sm:text-5xl md:text-5xl lg:text-7xl'><span className=''>P</span>latform</h1>


        </div>


    )
}

export default MainHeading





