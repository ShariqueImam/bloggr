import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import LoginButton from "../UI/Buttons/LoginButton";
import SignupButton from "../UI/Buttons/SignupButton";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const onScroll = (value) => {
    props.onScroll(value);
  };
  return (
    <div className="w-full sm:w-[100%] md:w-[75%] mx-auto grid sm:grid-cols-3 h-full">
      {/* adding the main nav bar content (50% of75%)*/}
      <section className="flex w-[100%] sm:col-span-2">
        {/* adding the logo  */}
        <section className="flex w-[80%] sm:w-[20%] h-[10vh] sm:h-[100%]">
          <Logo />
        </section>
        {/* adding the nav links */}
        <section className="flex w-[20%] sm:w-[80%] h-[10vh] sm:h-[100%]">
          <Navigation onScroll={onScroll} />
        </section>
      </section>
      {/* adding the login and signup button (25% og 75%)*/}
      <section className="hidden sm:flex sm:col-span-1 mx-auto w-[90%] md:w-[80%] lg:w-[60%] justify-around items-center">
        {/* this button will redirect the page to the login page */}
        <div className="w-[40%] flex">
          <Link to="/login">
            <LoginButton />
          </Link>
        </div>
        {/* this button will redirect to sign up page */}
        <div className="w-[40%] flex ">
          <Link to="/signup">
            <SignupButton />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
