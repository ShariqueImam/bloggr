import React from 'react'
import futureImgDesktop from '../../assets/svg/future/desktop.svg'
import futureImgmobile from '../../assets/svg/future/mobile.svg'
import FutureDetails from './FutureDetails'
import Spin from 'react-reveal/Spin';

const FutureContent = () => {
    const width = window.innerWidth
    return (
        <div className='w-full flex flex-col sm:flex-row'>
            {/* adding the main data of the content */}
            <section className="flex w-[100%] sm:w-[60%]">
                <FutureDetails />
            </section>
            {/* adding the side image of the content */}
            <Spin duration={1000}>
                <section className='flex w-[100%] sm:w-[40%]'>
                    <img src={width < 500 ? futureImgmobile : futureImgDesktop} alt="" className='scale-[0.9] sm:scale-y-[0.6] md:scale-[1]' />
                </section>
            </Spin>
        </div>
    )
}

export default FutureContent