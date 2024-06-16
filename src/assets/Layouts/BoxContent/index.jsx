const BoxContent = () => {
  return (
    <div className="flex flex-col gap-4 py-2 bg-white rounded-md shadow">
      <div className="flex items-center justify-between px-3">
        <div className="flex gap-4">
          <img
            src="./../Image/Ardi.png"
            alt="Profile"
            className="w-10 h-10 rounded-full max-h-10 max-w-10"
          />
          <div>
            <p className="text-sm font-semibold">Muhammad Ardiansyah Firdaus</p>
            <p className="text-sm font-semibold text-gray-500">1 hour ago</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <i className="text-2xl cursor-pointer bx bx-dots-horizontal-rounded" />
          <i className="text-2xl cursor-pointer bx bx-x" />
        </div>
      </div>
      <div className="px-3">
        <p className="max-sm:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          ipsum nemo vel, mollitia exercitationem recusandae magnam odit. Quam
          pariatur at iusto sint omnis. Recusandae vel reprehenderit eaque porro
          quidem sint!
        </p>
      </div>
      <div className="">
        <img
          src="./../Image/tes.png"
          alt=""
          className="max-h-[500px] max-w-full"
        />
      </div>
      <div className="flex flex-col px-3">
        <div className="flex justify-between p-2">
          <div>
            <p className="text-sm">121 disukai</p>
          </div>
          <div>
            <p className="text-sm">2 Komentar &bull; 1 Dibagikan</p>
          </div>
        </div>
        <hr />
        <div className="flex w-full pt-2">
          <div className="flex items-center justify-center flex-1 gap-2 p-2 rounded-md hover:bg-zinc-100">
            <i className="text-xl bx bx-like" />
            <p className="max-sm:text-sm">Suka</p>
          </div>
          <div className="flex items-center justify-center flex-1 gap-2 p-2 rounded-md hover:bg-zinc-100">
            <i className="text-xl bx bx-comment" />
            <p className="max-sm:text-sm">Komentar</p>
          </div>
          <div className="flex items-center justify-center flex-1 gap-2 p-2 rounded-md hover:bg-zinc-100">
            <i className="text-xl bx bxs-share-alt" />
            <p className="max-sm:text-sm">Bagikan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxContent;
