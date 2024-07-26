import { useState, useEffect, useRef } from "react";
import upload from "../../../assets/image/upload.png";
import pdf from "../../../assets/image/pdf.png";
import AddCourseSubLessonTable from "../addcourse-sublesson";
import axios from "axios";
import NavbarAddCourse from "../navbar/navbar-addcourse"; // Adjust the import path as needed
import supabase from "../../../utils/supabaseClient";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function AddCourseFrom() {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [pdfFile, setPdfFileUpload] = useState(" ");
  const [previewUrl, setPreviewUrl] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [previewVideoUrl, setPreviewVideoUrl] = useState("");
  const [courses, setCourses] = useState(" ");
  const [videoFile, setVideoFileState] = useState("");
  const [videoPreviewUrl, setVideoPreviewUrl] = useState("");
  const [createForm, setCreateForm] = useState({
    coursename: " ",
    price: " ",
    description: " ",
    coursesummary: " ",
    courselearningtime: " ",
    videofile: " ",
    imagefile: " ",
    pdfFile: " ",
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

    try {
      // Upload the image before submitting the form
      const imageUrl = await UploadPreviewImage(file);
      const pdfFileUrl = await UploadPDF(pdfFile);
      const videoUrl = await uploadVideoFile(videoFile);

      const formData = {
        ...createForm,
        imagefile: imageUrl,
        pdffile: pdfFileUrl,
        videofile: videoUrl,
      };

      const res = await axios.post("http://localhost:4000/courses", formData);

      console.log(res);

      setCreateForm({
        coursename: " ",
        price: " ",
        description: " ",
        coursesummary: " ",
        courselearningtime: " ",
        videofile: " ",
        imagefile: " ",
        pdffile: " ",
      });
      // navigate("/admin/courselist");
    } catch (error) {
      console.error("Error creating course:", error);
      alert("Failed to create course. Please try again.");
    }
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
    alert("Add course complete");
  };

  // Replace any non-alphanumeric characters in the course name with underscores
  const sanitizeFileName = (name) => {
    return name.replace(/[^a-z0-9]/gi, "_").toLowerCase();
  };

  async function UploadPreviewImage(file) {
    try {
      if (!file) {
        throw new Error("You must select an image to upload.");
      }
      const fileExt = file.name.split(".").pop();
      const sanitizedCourseName = sanitizeFileName(
        createForm.coursename.trim()
      );
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `course/${sanitizedCourseName}/cover_img/${fileName}`;
      const { error: uploadError } = await supabase.storage
        .from("course")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }
      const { error: urlError } = supabase.storage
        .from("course")
        .getPublicUrl(filePath);

      if (urlError) {
        throw urlError;
      }

      const profileUrl = supabase.storage.from("course").getPublicUrl(filePath)
        .data.publicUrl;

      return profileUrl;
    } catch (error) {
      alert(error.message);
      throw error;
    }
  }

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

  //uplaod pdf file

  async function UploadPDF(pdfFile) {
    try {
      if (!pdfFile) {
        throw new Error("You must select a PDF file to upload.");
      }

      const sanitizedFileName = sanitizeFileName(createForm.coursename.trim());
      const fileName = `${uuidv4()}.pdf`; // Use .pdf extension for PDF files
      const filePath = `course/${sanitizedFileName}/pdf_files/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("course")
        .upload(filePath, pdfFile);

      if (uploadError) {
        throw uploadError;
      }

      const { data, error: urlError } = await supabase.storage
        .from("course")
        .getPublicUrl(filePath);

      if (urlError) {
        throw urlError;
      }

      const pdfUrl = data.publicUrl;
      return pdfUrl;
    } catch (error) {
      alert(error.message);
      throw error;
    }
  }

  const setPdfFile = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      return;
    }

    /*UploadPDF(selectedFile)
      .then((pdfUrl) => {

        console.log("Uploaded PDF URL:", pdfUrl);
      })
      .catch((error) => {
        console.error("PDF Upload Error:", error);
      });

    console.log("Selected PDF File:", selectedFile);
    console.log("File Type:", selectedFile.type);
    console.log("File Size:", selectedFile.size);
  };*/

    setPdfFileUpload(selectedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPdfUrl(fileReader.result);
    };
    fileReader.readAsDataURL(selectedFile);

    // Logging file details
    console.log("Selected File:", selectedFile);
    console.log("File Type:", selectedFile.type);
    console.log("File Size:", selectedFile.size);
  };

  async function uploadVideoFile(file) {
    try {
      if (!file) {
        throw new Error("You must select a video to upload.");
      }
      const fileExt = file.name.split(".").pop();
      const sanitizedCourseName = sanitizeFileName(
        createForm.coursename.trim()
      );
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `course/${sanitizedCourseName}/preview_video/${fileName}`;
      const { error: uploadError } = await supabase.storage
        .from("course")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }
      const { error: urlError } = supabase.storage
        .from("course")
        .getPublicUrl(filePath);

      if (urlError) {
        throw urlError;
      }

      const videoUrl = supabase.storage.from("course").getPublicUrl(filePath)
        .data.publicUrl;

      return videoUrl;
    } catch (error) {
      alert(error.message);
      throw error;
    }
  }
  //Video preview
  const handleVideoFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      return;
    }
    setVideoFileState(selectedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setVideoPreviewUrl(fileReader.result);
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
              <label className="w-full h-[24px] text-black">
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
                    style={{
                      maxWidth: "240px",
                      maxHeight: "240px",
                      objectFit: "cover",
                    }}
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
                  onChange={handleVideoFileChange}
                />
                {videoPreviewUrl && (
                  <video
                    src={videoPreviewUrl}
                    alt="Preview"
                    className="absolute m-auto rounded-md"
                    style={{
                      maxWidth: "240px",
                      maxHeight: "240px",
                      objectFit: "cover",
                    }}
                    controls
                  />
                )}
              </label>
            </div>
            <div className="my-10 gap-8 ">
              <label className=" w-full h-[24px] text-black">
                Attach File (Optional) *
              </label>
              <label
                className=" w-[160px] h-[192px] px-4 bg-slate-200 rounded-md appearance-none cursor-pointer hover:border-slate-20 focus:outline-none flex items-center justify-center"
                id="drop"
              >
                {!pdfUrl ? (
                  <span>
                    <img src={upload} alt="upload" />
                  </span>
                ) : (
                  <div className="mt-4 text-blue-400">
                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                      <img
                        src={pdf}
                        className="w-full h-full rounded-md justify-center"
                        alt="PDF Preview"
                      />
                    </a>
                  </div>
                )}

                <input
                  type="file"
                  name="pdffile"
                  className="hidden"
                  accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  id="input"
                  onChange={setPdfFile}
                />
                {pdfUrl && (
                  <div className="mt-4 text-blue-400">
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                  </div>
                )}
              </label>
            </div>
          </form>
        </div>
        <button
          onClick={() => deletecourse(courses._id)}
          className="bg-red-600"
        >
          delete
        </button>
      </div>
      <AddCourseSubLessonTable />
    </div>
  );
}

export default AddCourseFrom;
