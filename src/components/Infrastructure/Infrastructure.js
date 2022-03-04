import React from 'react'
import infrastructureImg from '../../assets/svg/infrastructure/infrastructure.svg'
import { InfrastructureBackground } from '../styled-components/home-style'
import InfrastructureContent from './InfrastructureContent'
import Slide from 'react-reveal/Slide';


// skew-x-[-45deg]
const Infrastructure = () => {
  return (
    <Slide bottom duration={400}>
      <InfrastructureBackground className='flex h-[80%] w-full flex-col-reverse sm:flex-row'>
        {/* left side of the section for image */}
        <Slide bottom duration={700}>
          <section className="flex  w-[100%] sm:w-[50%] h-[30%] sm:h-[100%]" >
            <img src={infrastructureImg} alt="" className='mx-auto scale-y-[2] scale-x-[2] sm:scale-x-[1.1] sm:scale-y-[1.4] md:scale-[1.5]' />
          </section>
          {/* right side for the content */}
          <section className="flex w-[100%] sm:w-[40%] h-[70%] sm:h-[100%]">
            <InfrastructureContent />
          </section>
        </Slide>
      </InfrastructureBackground>
    </Slide>
  )
}

export default Infrastructure