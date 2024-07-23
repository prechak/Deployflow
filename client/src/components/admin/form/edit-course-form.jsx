import upload from "../../../assets/image/upload.png";
import uploadvideo from "../../../assets/image/uploadvideo.png";
import UploadPic from "../../../assets/image/UplaodPic.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditCourseFrom() {
  const { id } = useParams();
  const [values, setValues] = useState({
    courseid: "",
    coursename: "",
    price: "",
    description: "",
    coursesummary: "",
    courselearningtime: "",
    imagefile: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/courses/` + id)
      .then((res) => {
        setValues({
          ...values,
          courseid: res.data.courseid,
          coursename: res.data.coursename,
          price: res.data.price,
          description: res.data.description,
          coursesummary: res.data.coursesummary,
          courselearningtime: res.data.courselearningtime,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mx-8 w-[1120px] h-[1521px] bg-white rounded-md border-2">
      <div className=" mx-8 p-8">
        <form>
          <div className="w-[920px] h-[76px]">
            <label className="w-full h-[24px] text-black">Course name *</label>
            <input
              className="w-full h-[48px] bg-white  text-black border-2 rounded-md"
              placeholder=" "
              value={values.coursename}
              onChange={(e) =>
                setValues({ ...values, coursename: e.target.value })
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
                placeholder=""
                value={values.price}
                onChange={(e) =>
                  setValues({ ...values, price: e.target.value })
                }
              />
            </div>
            <div>
              <label className="w-full h-[24px] text-black gap-4 ">
                Total learning time *
              </label>
              <input
                className="w-full h-[48px] bg-white  text-black border-2 rounded-md"
                placeholder=""
                value={values.courselearningtime}
                onChange={(e) =>
                  setValues({ ...values, courselearningtime: e.target.value })
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
              placeholder=""
              value={values.coursesummary}
              onChange={(e) =>
                setValues({ ...values, coursesummary: e.target.value })
              }
            />
          </div>

          <div className="w-[920px] h-[220px] gap-8 mt-8">
            <label className="w-full h-[24px] text-black">
              Course detail *
            </label>
            <input
              className="w-full h-[192px] bg-white  text-black border-2 rounded-md"
              placeholder=""
              value={values.description}
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>

          <div className="my-10 gap-8 ">
            <label className="w-full h-[24px] text-black ">Cover image *</label>
            <label
              className="r w-[240PX] h-[240PX] px-4  bg-white rounded-md appearance-none cursor-pointer hover:border-slate-20 focus:outline-none flex items-center justify-center"
              id="drop"
            >
              <span>
                <img src={UploadPic} />
              </span>
              <input
                type="file"
                name="file_upload"
                className="hidden"
                accept="image/png,image/jpeg"
                id="input"
                value={values.imagefile}
                onChange={(e) =>
                  setValues({ ...values, imagefile: e.target.value })
                }
              ></input>
            </label>
          </div>
          <div className="my-10 gap-8 ">
            <label className="w-full h-[24px] text-black">
              Video Trailer *
            </label>
            <label
              className="r w-[240PX] h-[240PX] px-4  bg-white rounded-md appearance-none cursor-pointer hover:border-slate-20 focus:outline-none flex items-center justify-center"
              id="drop"
            >
              <span>
                <img src={uploadvideo} />
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
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCourseFrom;
