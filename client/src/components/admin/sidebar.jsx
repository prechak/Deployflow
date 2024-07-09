function Sidebar() {
  return (
    <div>
      <div className="h-full flex flex-row overflow-hidden justify-start border-r-2 border-gray-300">
        <div className=" bg-white w-full h-full">
          <div>
            <h1 className=" py-2 px-8 md:text-3xl lg:text-3xl font-bold bg-gradient-to-l from-blue-700 to-blue-200 bg-clip-text text-transparent flex items-center justify-center">
              CourseFlow
            </h1>
            <h2 className="text-slate-500 font-small text-base md:text-sm lg:text-sm xl:text-sm flex items-center justify-center">
              Admin Panel Control
            </h2>
          </div>
          <div className="mt-20 h-[540px] flex flex-col items-start justify-start">
            <button className="w-full h-[56px] pl-8 font-small text-base md:text-sm lg:text-sm xl:text-sm text-left text-slate-500 hover:bg-gray-200">
              Course
            </button>
            <button className="w-full h-[56px] pl-8 font-small text-base md:text-sm lg:text-sm xl:text-sm text-left text-slate-500 hover:bg-gray-200">
              Assignment
            </button>
          </div>
          <div className="mt-20">
            <button className="w-full h-[56px] pl-8 font-small text-base md:text-sm lg:text-sm xl:text-sm text-left text-slate-500 hover:bg-gray-200">
              Log out
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
