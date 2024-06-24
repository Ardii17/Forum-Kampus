/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [device, setDevice] = useState("desktop");

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      setDevice("mobile");
    } else if (width <= 1024) {
      setDevice("tablet");
    } else {
      setDevice("desktop");
    }
  };

  useEffect(() => {
    handleResize(); // Set the initial device type
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        device,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
