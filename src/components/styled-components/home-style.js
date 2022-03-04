import styled from "styled-components";
import HomeTabletBg2 from "../../assets/images/background/tabletbg.png";
import HomeMobileBg1 from "../../assets/images/background/mobilebg.png";
import HomeDesktopBg from "../../assets/images/background/desktopbg.png";
import LoginBg from '../../assets/images/login/img4.jpg'
import SignupBgDesktop from '../../assets/images/signup/signupbgdesktop.png'
import SignupBgLaptop from '../../assets/images/signup/signupbglaptop.png'
import SignupBgMobile from '../../assets/images/signup/signupbgmobile.png'
const screenWidth = window.innerWidth;

export const HomeBackground = styled.div`
	background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
		url(${(screenWidth < 500 && HomeMobileBg1) ||
	(screenWidth > 500 && screenWidth < 1000 && HomeTabletBg2) ||
	(screenWidth > 1000 && HomeDesktopBg)});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-attachment: auto;
	width: 100vw;
`;



export const InfrastructureBackground = styled.div`
	background: radial-gradient(hsl(237, 23%, 32%), hsl(237, 17%, 21%));
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-attachment: auto;

border-top-right-radius:100px;
border-bottom-left-radius:100px;
`;
export const LoginBackground = styled.div`
background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
url(${(screenWidth < 500 && LoginBg) ||
(screenWidth > 500 && screenWidth < 1000 && LoginBg) ||
(screenWidth > 1000 && LoginBg)});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-attachment: auto;
`;


export const SignupBackground = styled.div`
background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
url(${(screenWidth < 500 && SignupBgMobile) ||
(screenWidth > 500 && screenWidth < 1000 && SignupBgLaptop) ||
(screenWidth > 1024 && SignupBgDesktop)});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-attachment: auto;
`;


