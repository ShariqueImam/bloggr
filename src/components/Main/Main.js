import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Future from '../Future/Future'
import Infrastructure from '../Infrastructure/Infrastructure'
import Explain from '../Explain/Explain'
import Footer from '../Footer/Footer'
import { HomeBackground } from '../styled-components/home-style'
import ProgressBar from '../ProgressBar/ProgressBar'    
import {scroller} from 'react-scroll'

const Main = (props) => {
    const [scroll, setScroll] = React.useState(0)
    // set the scroller to scrolled from the navbar
    const onScroll = (value) => {
		scroller.scrollTo(`${value}`, {
			duration: 600,
			delay: 0,
			smooth: "easeInOutQuart",
		});
	};
    // for the progress bar on the top
    const listenToScrollEvent = () => {
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
                // Calculates the scroll distance
                calculateScrollDistance();
            });
        });
    };
    const getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }
    //   to get how much the user has scrolled
    const calculateScrollDistance = () => {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = getDocHeight();
        const totalDocScrollLength = docHeight - windowHeight;
        const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)
        setScroll(scrollPostion)
    }
    // calling the scroll event
    listenToScrollEvent()
    return (
        <div className='w-[100vw] z-10'>
            {/* adding the first page of the site */}
            <HomeBackground className='flex flex-col h-screen w-full z-10'>
                {/* adding the progress bar */}
                <section className={`bg-white`}>
                    <ProgressBar ScrollLength={scroll + '%'} />
                </section>
                {/* adding the nav bar of the page */}
                <nav className='flex h-[14vh] z-40'>
                    <Navbar onScroll={onScroll}/>
                </nav>
                {/* adding the home page of the site */}
                <section className="flex h-[85vh] md:h-[75vh]">
                    <Home onScroll={onScroll}/>
                </section>
            </HomeBackground>
            {/* adding the future page of the site */}
            <div className='flex w-full started my-8 sm:my-8 md:my-24 lg:my-16'>
                <Future />
            </div>
            {/* adding the infrastructure page */}
            <section className="flex h-[100vh] sm:h-[50vh] md:h-[60vh] lg:[50vh] w-full products">
                <Infrastructure />

            </section>
            {/* adding the Explain page  */}
            <section className="flex w-full company my-8 sm:my-8 md:my-16 lg:my-8">
                <Explain />

            </section>
            {/* adding the footer of the site */}
            <footer className="flex w-screen h-[60vh] connect">
                <Footer />
            </footer>
        </div>
    )
}

export default Main