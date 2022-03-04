import React from 'react'
import MainHeading from './MainHeading'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


const HomeContent = (props) => {
    // will trigger when the get started button is clicked
    const getStartedClickHandler = () => {
        props.onScroll('started')
    }
    return (
        <div className='flex-col h-[85%] my-auto grid grid-rows-2 md:grid-rows-6'>
            {/* adding the heading of the site */}
            <Fade>
                <section className="flex md:row-span-3">
                    <MainHeading />
                </section>
            </Fade>

            <Slide bottom>
                {/* adding the main details of the page */}
                <section className="flex md:row-span-2 w-full h-full justify-center items-center">
                    {/* creating a border */}
                    <div className='border-b-2 border-gray-700 md:w-[30%] mx-auto sm:mx-4 md:mx-4'></div>
                    <p style={{
                        fontFamily: "PT Sans Narrow, sans-serif",
                    }} className="text-gray-700 leading-loose tracking-wide md:tracking-wider text-sm sm:text-md md:text-lg  text-center">Grow your audience and build your online brand.Start your blogging journey with Blogerr Bee's powerful ecosystem.
                    </p>
                </section>



                {/* adding the button to visit the site */}

                <section className="flex md:row-span-1 w-full h-full cursor-pointer" onClick={getStartedClickHandler}>
                    <div className="bg-gray-100 hover:bg-gray-300 transition-all duration-700 hover:translate-y-2  rounded-xl tracking-wide text-md sm:text-xl md:text-xl flex h-[100%] sm:h-[80%] md:h-[50%] items-center p-2 sm:p-4 md:p-8 px-12 sm:px-16 md:px-16 mx-auto" style={{
                        fontFamily: "PT Sans Narrow, sans-serif",
                    }}>Get Started</div>
                </section>
            </Slide>
        </div>
    )
}

export default HomeContent
