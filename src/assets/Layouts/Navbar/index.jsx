import { Badge, Button, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [navPosition, setNavPosition] = useState("beranda");
  return (
    <>
      <div className="fixed z-50 items-center justify-between hidden min-w-full bg-white shadow md:px-8 lg:px-12 md:flex">
        <p className="hidden text-2xl font-bold text-blue-700 md:block">
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
          <Tooltip title="Pencarian" arrow placement="bottom">
            <IconButton aria-label="search">
              <i className="px-1 text-2xl bx bx-search" />
            </IconButton>
          </Tooltip>
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

      <div className="fixed top-0 left-0 right-0 flex items-center justify-between w-full px-2 bg-white shadow md:hidden">
        <img src="./../Image/fk.png" alt="Logo" className="max-w-[106px] aspect-video" />
        <div className="flex items-center gap-4">
          <button>
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
