const RightSidebar = () => {
  return (
    <div className="hidden w-3/12 lg:block">
      <div className="sticky p-2 bg-white rounded-md shadow top-20">
        <p className="font-semibold">Komunitas Populer</p>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex gap-4 p-2 rounded-md shadow cursor-pointer hover:bg-zinc-100">
            <img
              src="./../Image/Ardi.png"
              alt="Tes"
              width={50}
              height={50}
              className="rounded-full aspect-square"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Komunitas Futsal UMG</p>
              <p className="text-sm font-semibold text-gray-500">
                20 RB Anggota
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex gap-4 p-2 rounded-md shadow cursor-pointer hover:bg-zinc-100">
            <img
              src="./../Image/Ardi.png"
              alt="Tes"
              width={50}
              height={50}
              className="rounded-full aspect-square"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Komunitas Badminton..</p>
              <p className="text-sm font-semibold text-gray-500">
                120 RB Anggota
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <div className="rounded-md shadow">
            <div className="flex gap-4 p-2 cursor-pointer hover:bg-zinc-100">
              <img
                src="./../Image/Ardi.png"
                alt="Tes"
                width={50}
                height={50}
                className="rounded-full aspect-square"
              />
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Komunitas Silat ITB</p>
                <p className="text-sm font-semibold text-gray-500">
                  120 RB Anggota
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 p-1 text-blue-700 border-t cursor-pointer hover:bg-blue-50">
              <i className="text-xl bx bx-plus" />
              <p className="font-semibold">Ikuti</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
