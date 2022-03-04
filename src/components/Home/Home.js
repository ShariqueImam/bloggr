// this is the main content page of the site
import React from "react";
import HomeContent from "./HomeContent";
import HomeImage from "./HomeImage";
import Roll from "react-reveal/Roll";

const Home = (props) => {
  const onScroll = (value) => {
    props.onScroll(value);
  };
  return (
    <div className="h-full w-[85%] mx-auto flex flex-col md:flex-row">
      {/* left side of the home page */}
      <section className="flex w-[100%] sm:w-[90%] md:w-[60%] h-[50%] md:h-full">
        <HomeContent onScroll={onScroll} />
      </section>
      {/*right side of the home page */}
      <Roll right>
        <section className="flex w-[100%] sm:w-[100%] md:w-[40%] scale-[0.9] sm:scale-[1] h-[50%] md:h-full">
          <HomeImage />
        </section>
      </Roll>
    </div>
  );
};

export default Home;
