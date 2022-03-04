import React from 'react'

const Logo = () => {
    return (
        <div className='flex h-[60%] my-auto rotate-[45deg] scale-[0.65] sm:scale-[0.8] md:scale-[0.8] md:mx-auto'>
            {/* creating a border and the cotnent in it */}
            <section className="flex border-[1px] border-gray-100 flex-col text-white m-auto">
                {/* line 1 */}
                <section className='flex'>
                    <p className='mx-2 sm:mx-2 md:mx-2'>B</p>
                    <p className='mx-2 sm:mx-2 md:mx-2'>L</p>
                    <p className='mx-2 sm:mx-2 md:mx-2'>O</p>

                </section>
                {/* line 2 */}
                <section className='flex'>
                    <p className='mx-2 sm:mx-2 md:mx-2'>G</p>
                    <p className='mx-2 sm:mx-2 md:mx-2'>R</p>
                    <p className='mx-2 sm:mx-2 md:mx-2'>R</p>
                </section>
                {/* line 3 */}
                <section className='flex bg-[#ff3d54] rounded-xl'>
                    <p className='mx-2 sm:mx-2 md:mx-2'>B</p>
                    <p className='mx-2 sm:mx-2 md:mx-2'>E</p>
                    <p className='mx-2 sm:mx-2 md:mx-2'>E</p>
                </section>

            </section>

        </div>
    )
}

export default Logo
