/* eslint-disable react/prop-types */
import { Input, Tooltip } from "@mui/material";

const LeftSidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "hidden" : "block"
      } md:w-[29%] max-h-screen h-screen py-2 bg-white w-full`}
      id="left-sidebar"
    >
      <div className="lg:px-2 px-2 fixed flex flex-col w-full md:w-[29%] overflow-x-hidden gap-2 mt-16">
        <div className="flex items-center justify-between lg:px-2">
          <h1 className="text-xl font-bold">Obrolan</h1>
          <Tooltip title="New Chat" arrow placement="bottom">
            <button className="cursor-pointer">
              <i className="text-2xl bx bxs-edit" />
            </button>
          </Tooltip>
        </div>
        <div className="relative lg:px-2">
          <Input
            className="w-full rounded-md p-1 md:p-[1px] ps-12 md:ps-8 bg-zinc-100 text-sm"
            placeholder="Cari Obrolan"
          />
          <i className="absolute text-lg -translate-y-1/2 left-4 md:left-2 lg:left-4 bx bx-search top-1/2" />
        </div>
        <div className="flex flex-col">
          <div
            className="flex items-center gap-4 py-2 overflow-x-hidden rounded-md cursor-pointer md:pe-4 lg:px-4 hover:bg-zinc-100"
            onClick={setIsOpen}
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
            className="flex items-center gap-4 py-2 overflow-x-hidden rounded-md cursor-pointer md:pe-4 lg:px-4 hover:bg-zinc-100"
            onClick={setIsOpen}
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
            className="flex items-center gap-4 py-2 overflow-x-hidden rounded-md cursor-pointer md:pe-4 lg:px-4 hover:bg-zinc-100"
            onClick={setIsOpen}
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
            className="flex items-center gap-4 py-2 overflow-x-hidden rounded-md cursor-pointer md:pe-4 lg:px-4 hover:bg-zinc-100"
            onClick={setIsOpen}
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
            className="flex items-center gap-4 py-2 overflow-x-hidden rounded-md cursor-pointer md:pe-4 lg:px-4 hover:bg-zinc-100"
            onClick={setIsOpen}
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
