import { Badge, Button, IconButton, Tooltip } from "@mui/material";
import { useRef, useState } from "react";

const Navbar = () => {
  const [navPosition, setNavPosition] = useState("beranda");
  const [onSearch, setOnSearch] = useState(false);
  const searchRef = useRef(null);

  return (
    <>
      <div className="fixed z-50 hidden min-w-full bg-white shadow md:px-8 lg:px-12 md:block">
        <div
          className={`${
            onSearch ? "max-md:hidden md:hidden lg:flex" : "flex"
          } items-center justify-between`}
        >
          <p
            className="hidden text-2xl font-bold text-blue-700 md:block"
            id="brand"
          >
            Forum Kampus
          </p>
          <div>
            <div className="flex py-2">
              <div className="flex justify-center w-1/4 px-2">
                <Tooltip title="Beranda" arrow placement="bottom">
                  <Button
                    variant="secondary"
                    onClick={() => setNavPosition("beranda")}
                  >
                    <i className="w-full text-2xl bx bx-home" />
                  </Button>
                </Tooltip>
              </div>
              <div className="flex justify-center w-1/4 px-2">
                <Tooltip title="Forum" arrow placement="bottom">
                  <Button
                    variant="secondary"
                    onClick={() => setNavPosition("forum")}
                  >
                    <i className="w-full text-2xl bx bx-conversation" />
                  </Button>
                </Tooltip>
              </div>
              <div className="flex justify-center w-1/4 px-2">
                <Tooltip title="Pesan" arrow placement="bottom">
                  <Button
                    variant="secondary"
                    onClick={() => setNavPosition("pesan")}
                  >
                    <i className="w-full text-2xl bx bx-message" />
                  </Button>
                </Tooltip>
              </div>
              <div className="flex justify-center w-1/4 px-2">
                <Tooltip title="Grup" arrow placement="bottom">
                  <Button
                    variant="secondary"
                    onClick={() => setNavPosition("grup")}
                  >
                    <i className="w-full text-2xl bx bx-group" />
                  </Button>
                </Tooltip>
              </div>
            </div>
            <div
              className={`${navPosition === "beranda" ? "translate-x-0" : ""} ${
                navPosition === "forum" ? "translate-x-full" : ""
              } ${navPosition === "grup" ? "translate-x-[300%]" : ""} ${
                navPosition === "pesan" ? "translate-x-[200%]" : ""
              } w-1/4 h-1 bg-blue-700 rounded-t transition-all`}
            />
          </div>
          <div className="flex gap-2">
            <form
              className={`${
                onSearch ? "-translate-x-44" : "translate-x-0"
              } transition-all relative flex items-center w-auto`}
            >
              <Tooltip
                title="Pencarian"
                className="z-20"
                arrow
                placement="bottom"
              >
                <button
                  aria-label="search"
                  type="button"
                  className="p-2 rounded-full hover:bg-zinc-100"
                  onClick={() => {
                    setOnSearch(true), searchRef.current.focus();
                  }}
                >
                  <i className="px-1 text-2xl bx bx-search" />
                </button>
              </Tooltip>
              <input
                type="text"
                name="search"
                ref={searchRef}
                onBlur={() => setOnSearch(false)}
                className={`${
                  onSearch ? "lg:w-56 pe-4 ps-12 py-2" : "w-0"
                } absolute z-10 rounded-full transition-all outline-1 bg-zinc-100`}
              />
            </form>
            <Tooltip title="Notifikasi" arrow placement="bottom">
              <IconButton>
                <Badge badgeContent={1} color="primary">
                  <i className="px-1 text-2xl bx bx-bell" />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Ardiansyah"
              className="cursor-pointer ms-4"
              arrow
              placement="bottom"
            >
              <img
                src="./../Image/Ardi.png"
                alt="Profile"
                className="w-[50px] rounded-full aspect-square"
              />
            </Tooltip>
          </div>
        </div>
        <div
          className={`${
            onSearch ? "sm:hidden md:flex lg:hidden" : "hidden"
          } items-center justify-center hidden gap-4 px-12 py-3 bg-white`}
        >
          <button onClick={() => setOnSearch(false)}>
            <i className="text-2xl bx bx-left-arrow-alt" />
          </button>
          <form className={`flex items-center gap-4 w-full`}>
            <input
              type="text"
              name="search"
              ref={searchRef}
              autoComplete="false"
              onBlur={() => setOnSearch(false)}
              className={`${
                onSearch ? "p-4 py-3" : "w-0"
              } z-10 rounded-full transition-all outline-1 flex-[4] bg-zinc-100`}
            />
            <button
              type="submit"
              className="flex-1 w-full py-3 font-semibold text-white bg-blue-700 rounded-full"
            >
              Cari
            </button>
          </form>
        </div>
      </div>

      <div className="fixed top-0 left-0 right-0 bg-white shadow md:hidden">
        <div
          className={`${
            onSearch ? "hidden" : "flex"
          } items-center justify-between w-full px-2`}
        >
          <img
            src="./../Image/fk.png"
            alt="Logo"
            width={60}
            className="scale-150 aspect-square"
          />
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setOnSearch(true), searchRef.current.focus();
              }}
            >
              <i className="text-2xl bx bx-search" />
            </button>
            <button>
              <i className="text-2xl bx bx-bell" />
            </button>
            <img
              src="./../Image/Ardi.png"
              alt="Profile"
              className="w-[40px] rounded-full aspect-square"
            />
          </div>
        </div>
        <div
          className={`${
            onSearch ? "flex md:hidden" : "hidden"
          } items-center gap-2 px-2 py-2`}
        >
          <button onClick={() => setOnSearch(false)}>
            <i className="text-2xl bx bx-left-arrow-alt" />
          </button>
          <form className={`flex items-center gap-2 w-full`}>
            <input
              type="text"
              name="search"
              ref={searchRef}
              autoComplete="false"
              onBlur={() => setOnSearch(false)}
              className={`${
                onSearch ? "p-4 py-2" : "w-0"
              } z-10 rounded-full transition-all outline-1 flex-[5] bg-zinc-100`}
            />
            <button
              type="submit"
              className="flex-1 w-full p-2 font-semibold text-white bg-blue-700 rounded-full"
            >
              Cari
            </button>
          </form>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 flex items-start py-1 bg-white shadow md:hidden">
        <div className="flex justify-center w-1/4 px-2">
          <Tooltip title="Beranda" arrow placement="bottom">
            <Button
              variant="secondary"
              onClick={() => setNavPosition("beranda")}
            >
              <i className="w-full text-2xl bx bx-home" />
            </Button>
          </Tooltip>
        </div>
        <div className="flex justify-center w-1/4 px-2">
          <Tooltip title="Forum" arrow placement="bottom">
            <Button variant="secondary" onClick={() => setNavPosition("forum")}>
              <i className="w-full text-2xl bx bx-conversation" />
            </Button>
          </Tooltip>
        </div>
        <div className="flex justify-center w-1/4 px-2">
          <Tooltip title="Pesan" arrow placement="bottom">
            <Button variant="secondary" onClick={() => setNavPosition("pesan")}>
              <i className="w-full text-2xl bx bx-message" />
            </Button>
          </Tooltip>
        </div>
        <div className="flex justify-center w-1/4 px-2">
          <Tooltip title="Grup" arrow placement="bottom">
            <Button variant="secondary" onClick={() => setNavPosition("grup")}>
              <i className="w-full text-2xl bx bx-group" />
            </Button>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Navbar;
