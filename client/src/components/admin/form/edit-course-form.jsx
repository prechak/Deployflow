import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AddCourseSubLessonTable from "../addcourse-sublesson";
import NavbarEditCourse from "../navbar/navbar-editcourse";

function EditCourseForm() {
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    coursename: "",
    price: "",
    description: "",
    coursesummary: "",
    courselearningtime: "",
    videofile: "",
    imagefile: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/courses/${id}`)
      .then((res) => {
        console.log("Response received:", res.data.data[0]);
        console.log(id);
        setInputData(res.data.data[0]);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:4000/courses/${id}`, inputData)
      .then((res) => {
        alert("Data Updated Successfully!");
        navigate("/admin/courselist");
      })
      .catch((err) => {
        console.error("Error updating data:", err);
      });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: files[0] || prevState[name],
    }));
  };

  return (
    <div>
      <NavbarEditCourse handleSubmit={handleSubmit} text={"Edit"} />
      <div className="mt-8 mx-8 w-[1120px] bg-white rounded-md border-2">
        <div className="mx-8 p-8">
          <form>
            <div className="w-[920px] h-[76px]">
              <label className="w-full h-[24px] text-black">
                Course name *
              </label>
              <input
                className="w-full h-[48px] bg-white text-black border-2 rounded-md"
                placeholder="Course Name"
                name="coursename"
                type="text"
                value={inputData.coursename}
                onChange={(e) =>
                  setInputData({ ...inputData, coursename: e.target.value })
                }
              />
            </div>
            <div className="w-[920px] h-[76px] flex flex-row gap-8 mt-8">
              <div className="w-[420px] h-[76px]">
                <label className="w-full h-[24px] text-black">Price *</label>
                <input
                  className="w-full h-[48px] bg-white text-black border-2 rounded-md"
                  placeholder="Price"
                  name="price"
                  type="text"
                  value={inputData.price}
                  onChange={(e) =>
                    setInputData({ ...inputData, price: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="w-full h-[24px] text-black">
                  Total learning time *
                </label>
                <input
                  className="w-full h-[48px] bg-white text-black border-2 rounded-md"
                  placeholder="Learning Time"
                  name="courselearningtime"
                  type="text"
                  value={inputData.courselearningtime}
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
                Course summary *
              </label>
              <input
                className="w-full h-[72px] bg-white text-black border-2 rounded-md"
                placeholder="Course Summary"
                name="coursesummary"
                type="text"
                value={inputData.coursesummary}
                onChange={(e) =>
                  setInputData({ ...inputData, coursesummary: e.target.value })
                }
              />
            </div>
            <div className="w-[920px] h-[220px] gap-8 mt-8">
              <label className="w-full h-[24px] text-black">
                Course detail *
              </label>
              <textarea
                className="w-full h-[192px] bg-white text-black border-2 rounded-md"
                placeholder="Course Detail"
                name="description"
                value={inputData.description}
                onChange={(e) =>
                  setInputData({ ...inputData, description: e.target.value })
                }
              />
            </div>
            <div className="mt-10 w-[240PX] h-[240PX] px-4 bg-slate-200">
              <label className="">Image File</label>
              <input
                className="w-full h-[48px] bg-white text-black border-2 rounded-md"
                name="imagefile"
                type="file"
                onChange={handleFileChange}
              />
            </div>
            <div className="mt-10 w-[240PX] h-[240PX] px-4 bg-slate-200">
              <label className="w-full h-[24px] text-black">Video File</label>
              <input
                className="w-full h-[48px] bg-white text-black border-2 rounded-md"
                name="videofile"
                type="file"
                onChange={handleFileChange}
              />
            </div>
            <div className="mt-10 w-[160px] h-[192px] px-4 bg-slate-200">
              <label className="w-full h-[24px] text-black">Attach file</label>
              <input
                className="w-full h-[48px] bg-white text-black border-2 rounded-md"
                name="imagefile"
                type="file"
                onChange={handleFileChange}
              />
            </div>
          </form>
        </div>
      </div>
      <AddCourseSubLessonTable />
    </div>
  );
}

export default EditCourseForm;
