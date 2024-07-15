import upload from "../../../assets/image/upload.png"
import AddCourseSubLessonTable from "../addcourse-sublesson";


function AddCourseFrom() {
  return (
    <div>
    <div className="mx-8 w-[1120px]  bg-white rounded-md border-2">
      <div className=" mx-8 p-8">
        <form>
          <div className="w-[920px] h-[76px]">
            <label className="w-full h-[24px] text-black">Course name *</label>
            <input
              className="w-full h-[48px] bg-white  text-black border-2 rounded-md"
              placeholder="     Place Holder"
            />
          </div>
          <div className="w-[920px] h-[76px][] flex flex-row gap-8 mt-8 ">
            <div className="w-[420px] h-[76px] ">
              <label className="w-full h-[24px] text-black gap-4">
                Price *
              </label>
              <input
                className="w-full h-[48px] bg-white text-black border-2 rounded-md"
                placeholder="       Place Holder"
              />
            </div>
            <div>
              <label className="w-full h-[24px] text-black gap-4 ">
                Total learning time *
              </label>
              <input
                className="w-full h-[48px] bg-white  text-black border-2 rounded-md"
                placeholder="   Place Holder"
              />
            </div>
          </div>
          <div className="w-[920px] h-[100px] gap-8 mt-8">
            <label className="w-full h-[24px] text-black">
              Course summery *
            </label>
            <input
              className="w-full h-[72px] bg-white  text-black border-2 rounded-md"
              placeholder="     Place Holder"
            />
          </div>

          <div className="w-[920px] h-[220px] gap-8 mt-8">
            <label className="w-full h-[24px] text-black">
              Course detail *
            </label>
            <input
              className="w-full h-[192px] bg-white  text-black border-2 rounded-md"
              placeholder="     Place Holder"
            />
          </div>

          <div className="my-10 gap-8 ">
            <label className="w-full h-[24px] text-black ">Cover image *</label>
            <label
              className="r w-[240PX] h-[240PX] px-4  bg-slate-200 rounded-md appearance-none cursor-pointer hover:border-slate-20 focus:outline-none flex items-center justify-center"
              id="drop"
            >
              <span>
                <img src={upload} />
              </span>
              <input
                type="file"
                name="file_upload"
                className="hidden"
                accept="image/png,image/jpeg"
                id="input"
              ></input>
            </label>
          </div>
          <div className="my-10 gap-8 ">
            <label className="w-full h-[24px] text-black">
              Video Trailer *
            </label>
            <label
              className="r w-[240PX] h-[240PX] px-4  bg-slate-200 rounded-md appearance-none cursor-pointer hover:border-slate-20 focus:outline-none flex items-center justify-center"
              id="drop"
            >
              <span>
                <img src={upload} />
              </span>
              <input
                type="file"
                name="file_upload"
                className="hidden"
                accept="image/png,image/jpeg"
                id="input"
              ></input>
            </label>
          </div>
          <div className="my-10 gap-8 ">
            <label className=" w-full h-[24px] text-black">
              Attach File (Optional) *
            </label>
            <label
              className="r  w-[160px] h-[192px] px-4  bg-slate-200 rounded-md appearance-none cursor-pointer hover:border-slate-20 focus:outline-none flex items-center justify-center"
              id="drop"
            >
              <span>
                <img src={upload} />
              </span>
              <input
                type="file"
                name="file_upload"
                className="hidden"
                accept="image/png,image/jpeg"
                id="input"
              ></input>
            </label>
          </div>
        </form>
      </div>
      
    </div>
    <AddCourseSubLessonTable />
    </div>
  );
}

export default AddCourseFrom;
