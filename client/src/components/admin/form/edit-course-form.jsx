import { useState, useEffect } from "react";
import upload from "../../../assets/image/upload.png";
import pdf from "../../../assets/image/pdf.png";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AddCourseSubLessonTable from "../addcourse-sublesson";
import NavbarEditCourse from "../navbar/navbar-editcourse";
import supabase from "../../../utils/supabaseClient";
import { v4 as uuidv4 } from "uuid";
import { DocumentIcon } from "@heroicons/react/24/outline";

function EditCourseForm() {
  const [file, setFile] = useState("");
  const [pdfFile, setPdfFileUpload] = useState(" ");
  const [previewUrl, setPreviewUrl] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [videoFile, setVideoFileState] = useState("");
  const [videoPreviewUrl, setVideoPreviewUrl] = useState("");
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    coursename: "",
    price: "",
    description: "",
    coursesummary: "",
    courselearningtime: "",
    videofile: "",
    imagefile: "",
    pdffile: "",
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let imageUrl = inputData.imagefile;
      let videoUrl = inputData.videofile;
      let pdfUrl = inputData.pdffile;

      if (file) {
        imageUrl = await UploadPreviewImage(file);
      }

      if (videoFile) {
        videoUrl = await uploadVideoFile(videoFile);
      }

      if (pdfFile) {
        pdfUrl = await UploadPDF(pdfFile);
      }

      const updatedData = {
        ...inputData,
        imagefile: imageUrl,
        videofile: videoUrl,
        pdffile: pdfUrl,
      };
      console.log("Update data", updatedData);
      await axios.put(`http://localhost:4000/courses/${id}`, updatedData);

      alert("Data Updated Successfully!");
      // navigate("/admin/courselist");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  /*const [imagefile, setImgFile] = useState('')
  const [videofile,setVideoFile] = useState('')
  const [pdffile, setPdfFile] = useState('')*/

  const sanitizeFileName = (name) => {
    return name.replace(/[^a-z0-9]/gi, "_").toLowerCase();
  };

  async function UploadPreviewImage(file) {
    try {
      if (!file) {
        throw new Error("You must select an image to upload.");
      }
      const fileExt = file.name.split(".").pop();
      const sanitizedCourseName = sanitizeFileName(inputData.coursename.trim());
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

  const handlePdfFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      return;
    }

    try {
      // Upload PDF and get URL
      const pdfUrl = await UploadPDF(selectedFile);
      setPdfFileUpload(selectedFile);
      setPdfUrl(pdfUrl);

      // Logging file details
      console.log("Selected PDF File:", selectedFile);
      console.log("File Type:", selectedFile.type);
      console.log("File Size:", selectedFile.size);
    } catch (error) {
      console.error("Error uploading PDF:", error);
    }
  };

  //uplaod pdf file
  async function UploadPDF(pdfFile) {
    try {
      if (!pdfFile) {
        throw new Error("You must select a PDF file to upload.");
      }

      const sanitizedFileName = sanitizeFileName(inputData.coursename.trim());
      const fileName = `${uuidv4()}.pdf`; // Use .pdf extension for PDF files
      const filePath = `course/${sanitizedFileName}/pdf_files/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("course")
        .upload(filePath, pdfFile);

      if (uploadError) {
        throw uploadError;
      }

      const { data, error: urlError } = supabase.storage
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
      const sanitizedCourseName = sanitizeFileName(inputData.coursename.trim());
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

  // Delete preview image
  const deletePreviewImage = async () => {
    const filePath = inputData.imagefile.replace(CDNURL, "");
    await deleteFileFromSupabase(filePath);
    setInputData({ ...inputData, imagefile: "" });
    setPreviewUrl("");
  };

  // Delete PDF file
  const deletePdfFile = async () => {
    const filePath = inputData.pdffile.replace(CDNURL, "");
    await deleteFileFromSupabase(filePath);
    setInputData({ ...inputData, pdffile: "" });
    setPdfUrl("");
  };

  // Delete video file
  const deleteVideoFile = async () => {
    const filePath = inputData.videofile.replace(CDNURL, "");
    await deleteFileFromSupabase(filePath);
    setInputData({ ...inputData, videofile: "" });
    setVideoPreviewUrl("");
  };

  const CDNURL =
    "https://igdllimavmpalwpkphmh.supabase.co/storage/v1/object/public/course/course/";

  async function deleteFileFromSupabase(filePath) {
    try {
      const { data, error } = await supabase.storage
        .from("course")
        .remove([filePath]);

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      console.error("Error deleting file:", error);
      alert("Error deleting file.");
    }
  }

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
            <div className="my-10 gap-8 ">
              <label className="w-full h-[24px] text-black">
                Cover image *
              </label>
              <label
                className="w-[240PX] h-[240PX] px-4 bg-slate-200 rounded-md appearance-none cursor-pointer hover:border-slate-20 focus:outline-none flex items-center justify-center"
                id="drop"
              >
                <span>
                  <img src={inputData.imagefile} alt="upload" />
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
              <button
                type="button"
                onClick={deletePreviewImage}
                className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete Preview Image
              </button>
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
                  <video src={inputData.videofile} alt="upload" controls />
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
              <button
                type="button"
                onClick={deleteVideoFile}
                className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete Video
              </button>
            </div>

            <div className="my-10 gap-8 ">
              <label className=" w-full h-[24px] text-black">
                Attach File (Optional) *
              </label>

              <div
                className=" w-[200px] h-[192px] px-4 bg-slate-200 rounded-md appearance-none cursor-pointer hover:border-slate-20 focus:outline-none flex items-center justify-center"
                id="drop"
              >
                {!pdfUrl ? (
                  <div className="max-w-[200px] h-[100px] flex flex-col items-center justify-center">
                    <DocumentIcon className="text-Blue-500 w-[70px] h-[70px]" />
                    <p className="text-Blue-700 pt-2">
                      {inputData.pdffile
                        ? inputData.pdffile.substring(
                            inputData.pdffile.lastIndexOf("/") + 1
                          )
                        : "No File Uploaded"}
                    </p>
                  </div>
                ) : (
                  <div className="mt-4 text-red-400">
                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                      <img src={pdf} className="w-full h-full rounded-md" />
                    </a>
                  </div>
                )}

                <input
                  type="file"
                  name="pdffile"
                  className="absolute left-[25rem] h-44"
                  accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  id="input"
                  onChange={handlePdfFileChange}
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
              </div>
              <button
                type="button"
                onClick={() => deletePdfFile()}
                className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete PDF File
              </button>
            </div>
          </form>
        </div>
      </div>
      <AddCourseSubLessonTable />
    </div>
  );
}

export default EditCourseForm;