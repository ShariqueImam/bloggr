import React from 'react'
import Flip from 'react-reveal/Flip';

const FutureDetails = () => {
  return (
    <Flip bottom>
      <div className='w-[80%] flex flex-col mx-auto'>
        {/* first heading of the details content */}
        <section className="flex ">
          <HeadingAndContent heading={'Extensible Editor'} paragraph={'Blogrr features an exceedingly intuitive interface which lets you focus on one thing: creating content. You can handle multiple blogs at a time and can edit any blog very easily. Using Blogrr you can puslish your first blog with very small knowledge of the editor.'} />
        </section>
        {/* second heading and content */}
        <section className='flex'>
          <HeadingAndContent heading={'Robust Content Management'} paragraph={'Flexible content management enables the user to jump through the posts real quick. You can dive in different sections, comments or categories of the post easily.There is section where you can perform analysis on your different posts or blogs so you can improve your blog.'} />

        </section>
      </div>
    </Flip>
  )
}


const HeadingAndContent = (props) => {
  return (
    <div className="flex flex-col">
      <h2 className='text-gray-900 text-lg sm:text-2xl md:text-4xl my-8 sm:my-8 md:my-12' style={{
        fontFamily: 'Open Sans, sans-serif'
      }} >{props.heading}</h2>
      <p className="flex text-sm sm:text-md md:text-lg leading-[1.5rem] tracking-wide">{props.paragraph}</p>
    </div>
  )
}
export default FutureDetails