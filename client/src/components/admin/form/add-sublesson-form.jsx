import upload from "../../../assets/image/upload.png";
import OrageButton from "../button/secondary-button";

function EditSubLessonFrom() {
  return (
    <div className="mx-8 w-[1120px] h-[750px]  bg-white rounded-md border-2">
      <div className=" mx-8 p-8">
        <form>
          <div>
            <div className="mx-[40px] w-[920px] h-[76px]">
              <label className="w-full h-[24px] text-black">
                Lesson name *
              </label>
              <input
                className="w-full h-[48px] bg-white  text-black border-2 rounded-md"
                placeholder="     Place Holder"
              />
            </div>
            <div className=" mx-[40px]">
              <hr className="h-px my-8 bg-gray-200 border-0 " />
            </div>
            <div className="mx-[40px] font-bold text-gray-500">Sub-Leson</div>
          </div>
          <div className="mt-[24px] mx-[40px] w-[920px] h-[424px] bg-gray-100 flex rounded-lg border-2">
            <div className="mt-[24px] w-[920px] h-[340px] bg-gray-100 ">
              <div className="p-2 mx-4 w-[888px] h-[292px]  flex">
                <div className="w-[80px]">1</div>
                <div className="w-[747px]">
                  <div>
                    <div>
                      <label
                        for="sub-lesson-name"
                        class="block mb-2 font-medium text-lg text-gray-700"
                      >
                        Sub-Lesson name *
                      </label>
                      <input
                        id="sub-lesson-name"
                        type="text"
                        className="w-full h-[48px] bg-white text-black border-2 border-gray-300 rounded-md"
                        placeholder="Place Holder"
                      />
                    </div>
                    <div className="mt-8 w-[160px] h-[192px] mb-2 font-medium text-lg text-black">
                      Video *
                      <div className="mt-4 w-[160px] h-[160px] bg-gray-200 flex items-center justify-center ">
                        <img src={upload} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[80px]">3</div>
              </div>
            </div>
          </div>
          <div className="mx-[40px] mt-3">
            <OrageButton text="+ Add Sub-lesson"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditSubLessonFrom;
