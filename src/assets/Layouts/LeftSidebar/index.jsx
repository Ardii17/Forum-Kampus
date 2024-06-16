import { useState } from "react";

const LeftSidebar = () => {
  const [universitas, setUniversitas] = useState(false);
  const [prodi, setProdi] = useState(false);
  return (
    <div className="hidden lg:w-3/12 md:w-4/12 md:block">
      <div className="fixed min-h-screen lg:w-3/12 md:w-4/12 pe-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-4 py-2 rounded-md cursor-pointer md:pe-4 lg:px-4 hover:bg-white">
            <i className="text-2xl bx bxs-home" />
            <p className="font-semibold">Beranda</p>
          </div>
          <div className="flex items-center gap-4 py-2 rounded-md cursor-pointer md:pe-4 lg:px-4 hover:bg-white">
            <i className="text-2xl bx bx-trending-up" />
            <p className="font-semibold">Trending</p>
          </div>
          <div className="flex flex-col">
            <div
              className="flex items-center justify-between gap-4 py-2 rounded-md cursor-pointer md:pe-4 lg:px-4 hover:bg-white"
              onClick={() => setUniversitas(!universitas)}
            >
              <p className="font-semibold">Universitas</p>
              <i
                className={`bx bx-chevron-down text-2xl transition-all ${
                  universitas ? "-rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`flex flex-col ${universitas ? "block" : "hidden"}`}
            >
              <div className="flex items-center gap-4 py-2 rounded-md cursor-pointer md:pe-4 lg:px-4 hover:bg-white">
                <i className="text-2xl bx bx-trending-up" />
                <p className="text-sm font-semibold">
                  Institut Teknologi Bandung
                </p>
              </div>
              <div className="flex items-center gap-4 py-2 rounded-md cursor-pointer md:pe-4 lg:px-4 hover:bg-white">
                <i className="text-2xl bx bx-trending-up" />
                <p className="text-sm font-semibold">
                  Universitas Muhammadiyah Bandung
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="flex items-center justify-between gap-4 py-2 rounded-md cursor-pointer md:pe-4 lg:px-4 hover:bg-white"
              onClick={() => setProdi(!prodi)}
            >
              <p className="font-semibold">Program Studi</p>
              <i
                className={`bx bx-chevron-down text-2xl transition-all ${
                  prodi ? "-rotate-180" : ""
                }`}
              />
            </div>
            <div className={`flex flex-col ${prodi ? "block" : "hidden"}`}>
              <div className="flex items-center gap-4 py-2 rounded-md cursor-pointer md:pe-4 lg:px-4 hover:bg-white">
                <i className="text-2xl bx bx-trending-up" />
                <p className="text-sm font-semibold">Teknik Informatika</p>
              </div>
              <div className="flex items-center gap-4 py-2 rounded-md cursor-pointer md:pe-4 lg:px-4 hover:bg-white">
                <i className="text-2xl bx bx-trending-up" />
                <p className="text-sm font-semibold">Teknik Sipil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftSidebar;
