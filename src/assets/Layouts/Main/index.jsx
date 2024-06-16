import BoxContent from "../BoxContent";
import Navbar from "../Navbar";
import LeftSidebar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";

const HomeView = () => {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen gap-2 max-sm:py-16">
        <Navbar />
        <div className="flex gap-4 md:px-8 md:pt-20">
          <LeftSidebar />
          <div className="flex flex-col flex-1 gap-2">
            <div className="flex flex-col gap-2 px-2 pt-4 bg-white rounded-md shadow">
              <div className="flex gap-4">
                <img
                  src="./../Image/Ardi.png"
                  alt="Profile"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex items-center w-full px-4 py-1 text-gray-500 border border-gray-500 rounded-full cursor-text hover:bg-zinc-100">
                  <p>Buat Postingan</p>
                </div>
              </div>
              <hr />
              <div className="flex mb-2">
                <div className="flex items-center justify-center flex-1 gap-2 p-2 rounded-md hover:bg-zinc-100">
                  <i className="text-2xl bx bxs-image" />
                  <p className="font-semibold">Media</p>
                </div>
                <div className="flex items-center justify-center flex-1 gap-2 p-2 rounded-md hover:bg-zinc-100">
                  <i className="text-2xl bx bx-notepad" />
                  <p className="font-semibold">Acara</p>
                </div>
                <div className="flex items-center justify-center flex-1 gap-2 p-2 rounded-md hover:bg-zinc-100">
                  <i className="text-2xl bx bx-detail" />
                  <p className="font-semibold">Artikel</p>
                </div>
              </div>
            </div>
            <BoxContent />
            <BoxContent />
            <BoxContent />
          </div>
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default HomeView;
