import { useState, useEffect, useRef } from "react";
import upload from "../../../assets/image/upload.png";
import AddCourseSubLessonTable from "../addcourse-sublesson";
import axios from "axios";
import NavbarAddCourse from "../navbar/navbar-addcourse"; // Adjust the import path as needed

function AddCourseFrom() {

  const [file,setFile] = useState("");
  const [previewUrl, setPreviewUrl] = useState('');

  const [courses, setCourses] = useState(" ");
  const [createForm, setCreateForm] = useState({
    coursename: " ",
    price: " ",
    description: " ",
    coursesummary: " ",
    courselearningtime: " ",
    videofile: " ",
    imagefile: " ",
  });

  const formRef = useRef(null);

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    const result = await axios.get("http://localhost:4000/courses");
    setCourses(result.data.courses);
  };

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;

    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };

  const createCourse = async (e) => {
    e.preventDefault();

    
    const res = await axios.post("http://localhost:4000/courses", createForm);

    //*setCourses([...courses, res.data.course])
    console.log(res);

    setCreateForm({
      coursename: " ",
      price: " ",
      description: " ",
      coursesummary: " ",
      courselearningtime: " ",
      videofile: " ",
      imagefile: " ",
    });
  };

  const deletecourse = async (_id) => {
    const res = await axios.delete(`http://localhost:4000/courses/${_id}`);
    console.log(res);

    const newCourses = [...courses].filter((course) => {
      return course._id !== _id;
    });
    setCourses(newCourses);
  };

  const handleCreateCourseClick = () => {
    if (formRef.current) {
      formRef.current.requestSubmit(); // Trigger form submission
    }
  };

  /*const setImgFile = (e)=>{
    console.log(e.target.files[0])
    setFile(e.target.files[0])

  }*/
    const setImgFile = (e) => {
      const selectedFile = e.target.files[0];
      if (!selectedFile) {
        return;
      }
      setFile(selectedFile);
  
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(selectedFile);
  
      // Logging file details
      console.log("Selected File:", selectedFile);
      console.log("File Type:", selectedFile.type);
      console.log("File Size:", selectedFile.size);
    };
  

  return (
    <div>
      <NavbarAddCourse onCreateCourseClick={handleCreateCourseClick} />
      <div className="mt-8 mx-8 w-[1120px] bg-white rounded-md border-2">
        <div className="mx-8 p-8">
          <form ref={formRef} onSubmit={createCourse}>
            {/* Form fields */}
            <div className="w-[920px] h-[76px]">
              <label className="w-full h-[24px] text-black">
                Course name *
              </label>
              <input
                className="w-full h-[48px] bg-white text-black border-2 rounded-md"
                placeholder="     Place Holder"
                value={createForm.coursename}
                name="coursename"
                type="text"
                onChange={updateCreateFormField}
              />
            </div>
            <div className="w-[920px] h-[76px] flex flex-row gap-8 mt-8 ">
              <div className="w-[420px] h-[76px] ">
                <label className="w-full h-[24px] text-black gap-4">
                  Price *
                </label>
                <input
                  className="w-full h-[48px] bg-white text-black border-2 rounded-md"
                  placeholder="       Place Holder"
                  value={createForm.price}
                  name="price"
                  type="text"
                  onChange={updateCreateFormField}
                />
              </div>
              <div>
                <label className="w-full h-[24px] text-black gap-4 ">
                  Total learning time *
                </label>
                <input
                  className="w-full h-[48px] bg-white text-black border-2 rounded-md"
                  placeholder="   Place Holder"
                  value={createForm.courselearningtime}
                  name="courselearningtime"
                  type="text"
                  onChange={updateCreateFormField}
                />
              </div>
            </div>
            <div className="w-[920px] h-[100px] gap-8 mt-8">
              <label className="w-full h-[24px] text-black">
                Course summary *
              </label>
              <input
                className="w-full h-[72px] bg-white text-black border-2 rounded-md"
                placeholder="     Place Holder"
                value={createForm.coursesummary}
                name="coursesummary"
                type="text"
                onChange={updateCreateFormField}
              />
            </div>

            <div className="w-[920px] h-[220px] gap-8 mt-8">
              <label className="w-full h-[24px] text-black">
                Course detail *
              </label>
              <textarea
                className="w-full h-[192px] bg-white text-black border-2 rounded-md"
                placeholder="     Place Holder"
                value={createForm.description}
                name="description"
                onChange={updateCreateFormField}
              />
            </div>

            <div className="my-10 gap-8 ">
              <label className="w-full h-[24px] text-black ">
                Cover image *
              </label>
              <label
                className="w-[240PX] h-[240PX] px-4 bg-slate-200 rounded-md appearance-none cursor-pointer hover:border-slate-20 focus:outline-none flex items-center justify-center"
                id="drop"
              >
                <span>
                  <img src={upload} alt="upload" />
                </span>
                <input
                  type="file"
                  name="imagefile"
                  className="hidden"
                  accept="image/png,image/jpeg"
                  id="input"
                  onChange={setImgFile}
                />
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="absolute m-auto rounded-md "
                    style={{ maxWidth: "240px", maxHeight: "240px", objectFit: "cover" }}
                  />
                )}
              </label>
            </div>
            <div className="my-10 gap-8 ">
              <label className="w-full h-[24px] text-black">
                Video Trailer *
              </label>
              <label
                className="r w-[240PX] h-[240PX] px-4 bg-slate-200 rounded-md appearance-none cursor-pointer hover:border-slate-20 focus:outline-none flex items-center justify-center"
                id="drop"
              >
                <span>
                  <img src={upload} alt="upload" />
                </span>
                <input
                  type="file"
                  name="videofile"
                  className="hidden"
                  accept="video/mp4"
                  id="input"
                ></input>
              </label>
            </div>
            <div className="my-10 gap-8 ">
              <label className=" w-full h-[24px] text-black">
                Attach File (Optional) *
              </label>
              <label
                className="r w-[160px] h-[192px] px-4 bg-slate-200 rounded-md appearance-none cursor-pointer hover:border-slate-20 focus:outline-none flex items-center justify-center"
                id="drop"
              >
                <span>
                  <img src={upload} alt="upload" />
                </span>
                <input
                  type="file"
                  name="file_upload"
                  className="hidden"
                  accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
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
