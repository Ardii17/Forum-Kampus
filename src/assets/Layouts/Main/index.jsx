import Navbar from "../Navbar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { useEffect } from "react";
import Mainbar from "./Mainbar";

const HomeView = () => {
  useEffect(() => {
    const leftSidebar = document.getElementById("left-sidebar");
    const mainbar = document.getElementById("mainbar");
    const rightSidebar = document.getElementById("right-sidebar");

    let activeElement = null;

    const handleMouseEnter = (e) => {
      activeElement = e.target;
    };

    const handleMouseLeave = () => {
      activeElement = null;
    };

    const handleScroll = (e) => {
      if (activeElement) {
        activeElement.scrollTop = e.target.scrollTop;
      }
    };

    leftSidebar.addEventListener("mouseenter", handleMouseEnter);
    leftSidebar.addEventListener("mouseleave", handleMouseLeave);
    mainbar.addEventListener("mouseenter", handleMouseEnter);
    mainbar.addEventListener("mouseleave", handleMouseLeave);
    rightSidebar.addEventListener("mouseenter", handleMouseEnter);
    rightSidebar.addEventListener("mouseleave", handleMouseLeave);
    leftSidebar.addEventListener("scroll", handleScroll);
    mainbar.addEventListener("scroll", handleScroll);
    rightSidebar.addEventListener("scroll", handleScroll);

    return () => {
      leftSidebar.removeEventListener("mouseenter", handleMouseEnter);
      leftSidebar.removeEventListener("mouseleave", handleMouseLeave);
      mainbar.removeEventListener("mouseenter", handleMouseEnter);
      mainbar.removeEventListener("mouseleave", handleMouseLeave);
      rightSidebar.removeEventListener("mouseenter", handleMouseEnter);
      rightSidebar.removeEventListener("mouseleave", handleMouseLeave);
      leftSidebar.removeEventListener("scroll", handleScroll);
      mainbar.removeEventListener("scroll", handleScroll);
      rightSidebar.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col w-full min-h-screen max-sm:py-16">
        <Navbar />
        <div className="flex gap-4 md:px-8 md:pt-20">
          <LeftSidebar />
          <Mainbar />
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default HomeView;
