import React, { useEffect, useState } from "react";
import PopularMovieSlider from "./components/PopularMovieSlider";
import TopRatedMovieSlider from "./components/TopRatedMovieSlider";
import UpcomingMovieSlider from "./components/UpcomingMovieSlider";
import HomepageBanner from "./components/HomepageBanner";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the threshold as needed
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div>
      <HomepageBanner />
      <div className={isMobile ? "px-3" : "px-5"}>
        <PopularMovieSlider />
        <TopRatedMovieSlider />
        <UpcomingMovieSlider />
      </div>
    </div>
  );
};

export default HomePage;
