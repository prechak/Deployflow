import NavbarUser from "../../components/homepage/navbar-user";
import Footer from "../../components/homepage/footer";
import Background from "../../components/user-profile/background";
import ProfileFrom from "../../components/user-profile/profile-form";

function EditProfileForm() {
<<<<<<< HEAD
=======
  const [userData, setUserData] = useState({});
  const { UserIdFromLocalStorage } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    educationalBackground: "",
    email: "",
    avatarUrl: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    educationalBackground: "",
  });

  const CDNURL =
    "https://igdllimavmpalwpkphmh.supabase.co/storage/v1/object/public/avatars/";

  const getUserData = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/profiles/${UserIdFromLocalStorage}`
      );
      setUserData(result.data);
      setFormData((prevData) => ({
        ...prevData,
        name: result.data.fullname,
        dateOfBirth: result.data.age,
        educationalBackground: result.data.educationalbackground || "",
        email: result.data.email || "",
        avatarUrl: result.data.profilepicture || "",
      }));
      setAvatarUrl(result.data.profilepicture || "");

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

  async function uploadAvatar(event) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];

      // Check file size (2MB = 2 * 1024 * 1024 bytes)
      const maxSize = 1 * 1024 * 1024;
      if (file.size > maxSize) {
        alert("File size exceeds 1MB. Please select a smaller file.");
        setUploading(false);
        return;
      }

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

  async function deleteAvatar() {
    try {
      const filePath = avatarUrl.replace(CDNURL, "");
      const { error } = await supabase.storage
        .from("avatars")
        .remove([filePath]);

      if (error) {
        throw error;
      }

      setAvatarUrl("");
      setFormData((prevData) => ({ ...prevData, avatarUrl: "" }));

      const updatedProfile = {
        ...userData,
        profilepicture: "",
      };

      await axios.put(
        `http://localhost:4000/profiles/${UserIdFromLocalStorage}/update`,
        updatedProfile
      );

      alert("Avatar deleted successfully");
    } catch (error) {
      console.error("Error deleting avatar", error);
      alert("Error deleting avatar");
    }
  }

  const validateField = (text, value) => {
    let error = "";
    if (text === "name") {
      if (!value) {
        error = "Name cannot be empty.";
      } else {
        // Allow letters, spaces, and Unicode characters for name
        const regex = /^[\p{L}\p{M}\s]+$/u;
        if (!regex.test(value)) {
          error = "Special character is not accept.";
        }
      }
    } else if (text === "educationalBackground") {
      if (!value) {
        error = "Educational background cannot be empty.";
      } else {
        // Allow letters, spaces, Unicode characters, periods, and commas for educational background
        const regex = /^[\p{L}\s.,-]+$/u;
        if (!regex.test(value)) {
          error = "Special character is not accept.";
        }
      }
    }
    setErrors((prevErrors) => ({ ...prevErrors, [text]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform final validation before submission
    if (errors.name || errors.educationalBackground) {
      alert("Please correct the errors before submitting.");
      return;
    }
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
      window.location.reload();
    } catch (error) {
      console.error("Error updating profile", error);
      alert("Error updating profile");
    }
  };

>>>>>>> 4179cb5 (feat: new validate logic)
  return (
    <>
      <div className="sticky top-0 bg-white z-40">
        <NavbarUser />
      </div>
      <header className="text-black font-medium text-Headline3 pt-[3rem] md:text-Headline2 md:pb-[3rem] flex flex-col justify-center items-center">
        Profile
      </header>
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-[3rem] mb-[14rem]">
        <ProfileFrom />
      </div>
      <Footer />
      <Background />
    </>
  );
}

export default EditProfileForm;
