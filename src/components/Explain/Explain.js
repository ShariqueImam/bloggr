import React from 'react'
import ExplainImgDesktop from '../../assets/svg/explain/desktop.svg'
import ExplainImgMobile from '../../assets/svg/explain/mobile.svg'
import Slide from 'react-reveal/Slide'
const Explain = () => {
  const width = window.innerWidth
  return (
    <Slide bottom>
      <div className='h-full w-[85%] flex mx-auto flex-col sm:flex-row '>

        {/* left side of the section for the content */}
        <section className="flex w-[100%] sm:w-[50%] flex-col">
          {/* free and open */}
          <section className="flex">

            <HeadingAndContent heading={'Free Open And Simple'} paragraph={'Blogerr Bee is a powerful serivce which is backed by a powerful community and is trusted by our 10k+ users. It includes fast social media platforms intergration such as facebook and linkedin.The archhitecture of Bloggerr Bee is very easy and simple to use. It also include the support of Google analytics.'} />
          </section>
          {/* powerful tooling */}
          <section className="flex">
            <HeadingAndContent heading={'Powerful Tooling'} paragraph={'We have built a simple tools and a powerful CLI system which can be used to manipulate or edit our blogs and posts easily. Our powerful deployment includes most of the heavy sites that work seamlessly on out network.'} />
          </section>
        </section>
        {/* right side of the section for image */}
        <section className="flex w-[100%] sm:w-[50%] mx-auto h-[45vh] sm:h-[90%] my-6 sm:my-0">
          <img src={width < 500 ? ExplainImgMobile : ExplainImgDesktop} alt="" className='scale-x-[1.1] scale-y-[0.7] sm:scale-y-[0.7] mx-auto md:scale-y-[1.1]' />
        </section>
      </div>
    </Slide>
  )
}

const HeadingAndContent = (props) => {
  return (
    <div className="flex flex-col h-full w-full">
      <h2 className='text-gray-900 text-2xl sm:text-xl md:text-4xl my-8 sm:my-8 md:my-12 text-center sm:text-left' style={{
        fontFamily: 'Open Sans, sans-serif'
      }} >{props.heading}</h2>
      <p className="flex text-md sm:text-md md:text-lg leading-[1.5rem] text-gray-800">{props.paragraph}</p>
    </div>
  )
}
export default Explain