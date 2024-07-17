import { useState } from "react";
import upload from "../../../assets/image/upload.png";
import AddCourseSubLessonTable from "../addcourse-sublesson";
import { useNavigate } from "react-router-dom";

function AddCourseFrom() {
  const [coursename, setCoursename]=useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState ('');
  const [coursesummary, setCoursesummary] = useState('');
  const [courselearningtime, setCourselearningtime] = useState('');
  const [videofile, setVideofile] = useState('');
  const [imagefile, setImagefile] = useState;


  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefualt();
    axios.post("http://localhost:4000/courses", inputData)
    .then(res => {
      alert("Data added Succesfully!");
      navigate('/admin/courselist');
    }).catch (err => console.log(err))
  }


  return (
    <div>
      <div className="mx-8 w-[1120px]  bg-white rounded-md border-2">
        <div className=" mx-8 p-8">
          <form onSubmit={handleSubmit}>
            <div className="w-[920px] h-[76px]">
              <label className="w-full h-[24px] text-black">
                Course name *
              </label>
              <input
                className="w-full h-[48px] bg-white  text-black border-2 rounded-md"
                placeholder="     Place Holder"
                onChange={(e) =>
                  setInputData({ ...inputData, coursename: e.target.value })
                }
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
                  onChange={(e) =>
                    setInputData({ ...inputData, price: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="w-full h-[24px] text-black gap-4 ">
                  Total learning time *
                </label>
                <input
                  className="w-full h-[48px] bg-white  text-black border-2 rounded-md"
                  placeholder="   Place Holder"
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      courselearningtime: e.target.value,
                    })
                  }
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
                onChange={(e) =>
                  setInputData({ ...inputData, coursesummary: e.target.value })
                }
              />
            </div>

            <div className="w-[920px] h-[220px] gap-8 mt-8">
              <label className="w-full h-[24px] text-black">
                Course detail *
              </label>
              <input
                className="w-full h-[192px] bg-white  text-black border-2 rounded-md"
                placeholder="     Place Holder"
                onChange={(e) =>
                  setInputData({ ...inputData, description: e.target.value })
                }
              />
            </div>

            <div className="my-10 gap-8 ">
              <label className="w-full h-[24px] text-black ">
                Cover image *
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
                  onChange={(e) =>
                    setInputData({ ...inputData, imagefile: e.target.value })
                  }
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
                  onChange={(e) =>
                    setInputData({ ...inputData, videofile: e.target.value })
                  }
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
            <button className="bg-black">Submit</button>
          </form>
        </div>
      </div>
      <AddCourseSubLessonTable />
    </div>
  );
}

export default AddCourseFrom;
