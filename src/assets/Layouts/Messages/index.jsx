import { useState } from "react";
import Navbar from "../Navbar";
import LeftSidebar from "./LeftSidebar";
import Mainbar from "./Mainbar";
import RightSidebar from "./RightSidebar";

const MessagesLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  //   useEffect(() => {
  //     const leftSidebar = document.getElementById("left-sidebar");
  //     const mainbar = document.getElementById("mainbar");
  //     const rightSidebar = document.getElementById("right-sidebar");

  //     let activeElement = null;

  //     const handleMouseEnter = (e) => {
  //       activeElement = e.target;
  //     };

  //     const handleMouseLeave = () => {
  //       activeElement = null;
  //     };

  //     const handleScroll = (e) => {
  //       if (activeElement) {
  //         activeElement.scrollTop = e.target.scrollTop;
  //       }
  //     };

  //     leftSidebar.addEventListener("mouseenter", handleMouseEnter);
  //     leftSidebar.addEventListener("mouseleave", handleMouseLeave);
  //     mainbar.addEventListener("mouseenter", handleMouseEnter);
  //     mainbar.addEventListener("mouseleave", handleMouseLeave);
  //     rightSidebar.addEventListener("mouseenter", handleMouseEnter);
  //     rightSidebar.addEventListener("mouseleave", handleMouseLeave);
  //     leftSidebar.addEventListener("scroll", handleScroll);
  //     mainbar.addEventListener("scroll", handleScroll);
  //     rightSidebar.addEventListener("scroll", handleScroll);

  //     return () => {
  //       leftSidebar.removeEventListener("mouseenter", handleMouseEnter);
  //       leftSidebar.removeEventListener("mouseleave", handleMouseLeave);
  //       mainbar.removeEventListener("mouseenter", handleMouseEnter);
  //       mainbar.removeEventListener("mouseleave", handleMouseLeave);
  //       rightSidebar.removeEventListener("mouseenter", handleMouseEnter);
  //       rightSidebar.removeEventListener("mouseleave", handleMouseLeave);
  //       leftSidebar.removeEventListener("scroll", handleScroll);
  //       mainbar.removeEventListener("scroll", handleScroll);
  //       rightSidebar.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <>
      <div className="w-full ">
        <Navbar />
        <div className="flex max-h-screen">
          <LeftSidebar isOpen={isOpen} setIsOpen={() => setIsOpen(true)} />
          <Mainbar isOpen={isOpen} setIsOpen={setIsOpen} />
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default MessagesLayout;
