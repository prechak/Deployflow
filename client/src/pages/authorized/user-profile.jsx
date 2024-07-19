import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbarnonuser from "../../components/homepage/navbar-user";
import Footer from "../../components/homepage/footer";
import axios from "axios";
import { useAuth } from "../../contexts/authentication";
import supabase from "../../utils/supabaseClient";
import { v4 as uuidv4 } from "uuid";

function EditProfileForm() {
  const [userData, setUserData] = useState({});
  const { UserIdFromLocalStorage } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");

  //https://igdllimavmpalwpkphmh.supabase.co/storage/v1/object/public/avatars/

  const CDNURL =
    "https://igdllimavmpalwpkphmh.supabase.co/storage/v1/object/public/avatars/";

  //CDNURL + user.id +"/" + image.name

  // Get user data to render
  const getUserData = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/profiles/${UserIdFromLocalStorage}`
      );
      // Set default data by using profile data to input
      setUserData(result.data);
      setFormData((prevData) => ({
        ...prevData,
        name: result.data.fullname,
        dateOfBirth: result.data.dateOfBirth || "",
        educationalBackground: result.data.educationalbackground || "",
        email: result.data.email || "",
        avatarUrl: result.data.profilepicture || "",
      }));
      setAvatarUrl(result.data.profilepicture || "");

      // If there is an avatar URL, download the image
      if (result.data.avatarUrl) {
        downloadImage(result.data.avatarUrl);
      }
    } catch (error) {
      console.error("Error Fetching", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  // Download image
  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    }
  }

  // Upload Avatar
  async function uploadAvatar(event) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `${UserIdFromLocalStorage}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { publicURL, error: urlError } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);

      if (urlError) {
        throw urlError;
      }

      const profileUrl = supabase.storage.from("avatars").getPublicUrl(filePath)
        .data.publicUrl;
      setAvatarUrl(profileUrl);

      setFormData((prevData) => ({ ...prevData, avatarUrl: profileUrl }));
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  }

  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    educationalBackground: "",
    email: "",
    avatarUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProfile = {
        fullname: formData.name,
        dateOfBirth: formData.dateOfBirth,
        educationalbackground: formData.educationalBackground,
        email: formData.email,
        profilepicture: formData.avatarUrl,
      };

      await axios.put(
        `http://localhost:4000/profiles/${UserIdFromLocalStorage}/update`,
        updatedProfile
      );

      alert("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile", error);
      alert("Error updating profile");
    }
  };

  return (
    <>
      <Navbarnonuser />
      <header className="text-black font-medium text-Headline3 pt-[3rem] md:text-Headline2 md:pb-[3rem] flex flex-col justify-center items-center">
        Profile
      </header>
      <form
        className="flex flex-col md:flex-row justify-center items-center md:gap-[3rem] md:mr-[2rem] md:-ml-[8rem] mb-[14rem]"
        onSubmit={handleSubmit}
      >
        {/* CDNURL + user.id +"/" + image.name */}
        <div>
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="Avatar"
              className="avatar image w-96 h-96"
            />
          ) : (
            <div className="avatar no-image w-96 h-96 bg-gray-300 flex items-center justify-center">
              <span>No Image</span>
            </div>
          )}
        </div>
        <div>
          <label className="p-4 bg-green-500 cursor-pointer" htmlFor="single">
            {uploading ? "Uploading ..." : "Upload"}
          </label>
          <input
            style={{
              visibility: "hidden",
              position: "absolute",
            }}
            type="file"
            id="single"
            accept="image/*"
            onChange={uploadAvatar}
            disabled={uploading}
          />
        </div>
        <div className="w-[343px] h-[343px] text-black flex flex-col gap-5">
          <div className="container md:font-medium">
            <label>
              Name
              <p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg outline-Blue-400 outline-2 block w-full p-3"
                  placeholder={"Name"}
                  required
                />
              </p>
            </label>
          </div>

          <div className="container md:font-medium">
            <label>
              Date of Birth
              <p>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg outline-Blue-400 outline-2 block w-full p-3"
                  placeholder="Date of Birth"
                  required
                  disabled
                />
              </p>
            </label>
          </div>
          <div className="container md:font-medium">
            <label>
              Educational Background
              <p>
                <input
                  type="text"
                  name="educationalBackground"
                  value={formData.educationalBackground}
                  onChange={handleChange}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg outline-Blue-400 outline-2 block w-full p-3"
                  placeholder="School"
                  required
                />
              </p>
            </label>
          </div>
          <div className="container md:font-medium">
            <label>
              Email
              <p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg outline-Blue-400 outline-2 block w-full p-3"
                  placeholder="Enter Email"
                  required
                />
              </p>
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-Blue-500 font-medium rounded-xl text-sm w-full md:w-auto px-4 py-4 text-center hover:bg-Blue-400 duration-75 md:mt-3"
          >
            Update Profile
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default EditProfileForm;
