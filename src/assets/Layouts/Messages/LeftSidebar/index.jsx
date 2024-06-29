/* eslint-disable react/prop-types */
import { Input, Tooltip } from "@mui/material";
import { useEffect, useRef } from "react";

const LeftSidebar = ({ isOpen, setIsOpen, device }) => {
  const searchRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleClickSearch = () => {
    timeoutRef.current = setTimeout(() => {
      if (searchRef.current) {
        searchRef.current.focus();
      }
    }, 200);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div
      className={`${isOpen ? "hidden md:block lg:block" : "block"} ${
        isOpen && device === "tablet" ? "md:w-[8%]" : "md:w-[40%]"
      } lg:w-[29%] transition-all overflow-hidden max-h-screen h-screen py-2 bg-white w-full`}
      id="left-sidebar"
    >
      <div
        className={`${
          isOpen && device === "tablet" ? "md:w-[8%]" : "md:w-[40%]"
        } lg:px-2 px-2 fixed transition-all flex flex-col w-full lg:w-[29%] overflow-x-hidden gap-2 mt-16`}
      >
        <div
          className={`${
            isOpen && device === "tablet" ? "hidden" : "block"
          } flex items-center justify-between lg:px-2`}
        >
          <h1 className={`text-xl font-bold`}>
            Obrolan
          </h1>
          <div className="flex items-center gap-4">
            <Tooltip title="New Chat" arrow placement="bottom">
              <button className="cursor-pointer">
                <i className="text-2xl bx bxs-edit" />
              </button>
            </Tooltip>
            <Tooltip
              title="Tutup"
              arrow
              className="hidden md:block lg:hidden"
              placement="bottom"
            >
              <button
                className="cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <i className="text-3xl bx bx-x" />
              </button>
            </Tooltip>
          </div>
        </div>
        <div
          className={`${
            isOpen && device === "tablet" ? "block" : "hidden"
          } flex flex-col gap-2`}
        >
          <Tooltip title="Menu" arrow placement="bottom">
            <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <i className="text-3xl bx bx-menu" />
            </button>
          </Tooltip>
          <Tooltip title="Search" arrow placement="bottom">
            <button
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(false), handleClickSearch();
              }}
            >
              <i className="text-3xl bx bx-search" />
            </button>
          </Tooltip>
        </div>
        <div
          className={`${
            isOpen && device === "tablet" ? "hidden" : "block"
          } relative w-full overflow-hidden lg:px-2 z-0`}
        >
          <Input
            inputRef={searchRef}
            className="rounded-md p-1 md:p-[1px] ps-12 md:ps-8 bg-zinc-100 text-sm w-full"
            placeholder="Cari Obrolan"
          />
          <i className="absolute text-lg -translate-y-1/2 left-4 md:left-2 lg:left-4 bx bx-search top-1/2" />
        </div>
        <div className="flex flex-col">
          <div
            className="flex items-center gap-4 py-2 overflow-x-hidden rounded-md cursor-pointer lg:pe-4 lg:px-4 hover:bg-zinc-100"
            onClick={() => setIsOpen(true)}
          >
            <img
              src="./../Image/Ardi.png"
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full aspect-auto"
            />
            <div className="flex flex-col">
              <p className="text-sm font-semibold whitespace-nowrap">
                Muhammad Ardiansyah Firdaus
              </p>
              <p className="text-sm opacity-80 whitespace-nowrap">
                Lorem ipsum dolor sit ameauh
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-4 py-2 overflow-x-hidden rounded-md cursor-pointer lg:pe-4 lg:px-4 hover:bg-zinc-100"
            onClick={() => setIsOpen(true)}
          >
            <img
              src="./../Image/Ardi.png"
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full aspect-auto"
            />
            <div className="flex flex-col">
              <p className="text-sm font-semibold whitespace-nowrap">
                Aditya Zhafari Nur Itmam
              </p>
              <p className="text-sm opacity-80 whitespace-nowrap">
                Lorem ipsum dolor sit ameauh Lor..
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-4 py-2 overflow-x-hidden rounded-md cursor-pointer lg:pe-4 lg:px-4 hover:bg-zinc-100"
            onClick={() => setIsOpen(true)}
          >
            <img
              src="./../Image/Ardi.png"
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full aspect-auto"
            />
            <div className="flex flex-col">
              <p className="text-sm font-semibold whitespace-nowrap">
                Naufal Zahran
              </p>
              <p className="text-sm opacity-80 whitespace-nowrap">
                Lorem ipsum dolor sit ameauh Lor..
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-4 py-2 overflow-x-hidden rounded-md cursor-pointer lg:pe-4 lg:px-4 hover:bg-zinc-100"
            onClick={() => setIsOpen(true)}
          >
            <img
              src="./../Image/Ardi.png"
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full aspect-auto"
            />
            <div className="flex flex-col">
              <p className="text-sm font-semibold whitespace-nowrap">
                Muhammad Nur Ramdoni
              </p>
              <p className="text-sm opacity-80 whitespace-nowrap">
                Lorem ipsum dolor sit ameauh Lor..
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-4 py-2 overflow-x-hidden rounded-md cursor-pointer lg:pe-4 lg:px-4 hover:bg-zinc-100"
            onClick={() => setIsOpen(true)}
          >
            <img
              src="./../Image/Ardi.png"
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full aspect-auto"
            />
            <div className="flex flex-col">
              <p className="text-sm font-semibold whitespace-nowrap">
                Aegner Bilik
              </p>
              <p className="text-sm opacity-80 whitespace-nowrap">
                Lorem ipsum dolor sit ameauh Lor..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
