import React from 'react'
import styled from 'styled-components'
import Logo from '../Navbar/Logo'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Slide from 'react-reveal/Slide'

export const BgImgFooter = styled.div`
	background: radial-gradient(#1f2937, #1f2937);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-attachment: auto;

`;


const Footer = () => {
    const width = window.innerWidth
    return (
        <div className='flex h-full w-full'>
            {/* placing the bg image or color for the footer */}
            <BgImgFooter className={`h-full w-full flex flex-col ${width < 500 ? 'rounded-tr-[100px] rounded-bl-[90px]' : width < 1000 && width > 500 ? 'rounded-tr-[170px] rounded-bl-[150px]' : 'rounded-tr-[200px] rounded-bl-[150px]'}`}>
                {/* adding the main content of the footer */}
                <section className='sm:w-[100%] md:w-[80%] h-[70%] m-auto flex flex-col'>
                    <section className="w-full h-full flex flex-col md:flex-row">
                        {/* adding the logo of the site */}
                        <section className=''>
                            <Logo />
                        </section>
                        {/* adding the navigation for the site  column 1*/}
                        <section className="flex w-[100%] justify-around h-[100%] my-6">
                            <Slide bottom duration={200}>
                                <section className="flex flex-col h-[70%] mx-5 my-auto">
                                    <h1 className="text-gray-200 text-md sm:text-lg md:text-2xl h-[30%]">Products</h1>
                                    <ul className="flex flex-col justify-around h-[50%] text-gray-400 tracking-normal md:tracking-wide">
                                        <li className="text-sm sm:text-sm md:text-md ">Overview</li>
                                        <li className="text-sm sm:text-sm md:text-md">Pricing</li>
                                        <li className="text-sm sm:text-sm md:text-md "> Marketplace</li>
                                        <li className="text-sm sm:text-sm md:text-md "> Features</li>
                                        <li className="text-sm sm:text-sm md:text-md ">Integrations</li>
                                    </ul>
                                </section>
                            </Slide>
                            {/* adding the column 2 */}
                            <Slide bottom duration={700}>
                                <section className="flex flex-col h-[70%] mx-5 my-auto">
                                    <h1 className="text-gray-200 text-md sm:text-lg md:text-2xl h-[30%]">Company</h1>
                                    <ul className="flex flex-col justify-around h-[50%] text-gray-400 tracking-normal md:tracking-wide">
                                        <li className="text-sm sm:text-sm md:text-md ">About</li>
                                        <li className="text-sm sm:text-sm md:text-md ">Team</li>
                                        <li className="text-sm sm:text-sm md:text-md ">Blog</li>
                                        <li className="text-sm sm:text-sm md:text-md ">Career</li>
                                    </ul>
                                </section>
                            </Slide>
                            {/* adding the col 3 */}
                            <Slide bottom duration={1200}>
                                <section className="flex flex-col h-[70%] mx-5 my-auto">
                                    <h1 className="text-gray-200 text-md sm:text-lg md:text-2xl h-[30%]">Connect</h1>
                                    <ul className="flex flex-col justify-around h-[50%] text-gray-400 tracking-normal md:tracking-wide">
                                        <li className="text-sm sm:text-sm md:text-md ">Contact</li>
                                        <li className="text-sm sm:text-sm md:text-md ">Newsletter</li>
                                        <li className="text-sm sm:text-sm md:text-md ">Linekdin</li>
                                    </ul>
                                </section>
                            </Slide>
                        </section>
                    </section>



                    {/* adding the social media icons */}
                    <section className="flex text-gray-200 m-auto w-[40%] sm:w-[35%] md:w-[15%] justify-around">
                        <FacebookIcon style={{ fontSize: width < 500 ? 20 : width > 500 && width < 1000 ? 23 : 30 }} />
                        <TwitterIcon style={{ fontSize: width < 500 ? 20 : width > 500 && width < 1000 ? 23 : 30 }} />
                        <LinkedInIcon style={{ fontSize: width < 500 ? 20 : width > 500 && width < 1000 ? 23 : 30 }} />
                        <GitHubIcon style={{ fontSize: width < 500 ? 20 : width > 500 && width < 1000 ? 23 : 30 }} />
                    </section>


                </section>
                {/* adding the copy writes page */}
                <section className='flex h-[10%] w-[80%] mx-auto'>
                    <p className="flex mx-auto tracking-wider text-gray-200 text-xs text-center">@2022 Blogrr Bee Inc.| Design and crafted by Sharique</p>
                </section>

            </BgImgFooter>
        </div>
    )
}

export default Footer
