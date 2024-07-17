import React, { useState, useRef, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  LinearProgress,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { linearProgressClasses } from "@mui/material/LinearProgress";
import Navbarnonuser from "../homepage/navbar-user";

// SVG Icons
const NotPlayingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle
      cx="12"
      cy="12"
      r="11"
      stroke="#4caf50"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const PlayingIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="11"
      stroke="#2FAC8E"
      strokeWidth="2"
      fill="none"
    />
    <path d="M12 1a11 11 0 0 0 0 22z" fill="#2FAC8E" />
  </svg>
);

const FinishedIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="11"
      stroke="#2FAC8E"
      stroke-width="2"
      fill="#2FAC8E"
    />
    <path d="M12 1 a 11 11 0 0 0 0 22 a 11 11 0 0 1 0 -22" fill="#2FAC8E" />
    <svg
      x="3"
      y="3"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.5"
        stroke="white"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  </svg>
);

// export { NotPlayingIcon, PlayingIcon, FinishedIcon };

const Sidebar = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  const [openSections, setOpenSections] = useState({
    introduction: true,
    theories: false,
    scope: false,
  });

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [progress, setProgress] = useState(50); // Initial progress value

  const handleToggle = (section) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [section]: !prevOpenSections[section],
    }));
  };

  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const handlePlay = () => setIsVideoPlaying(true);
    const handleEnded = () => {
      setIsVideoPlaying(false);
      setIsVideoEnded(true);
      setProgress(100); // Update progress to 100% when the video ends
    };

    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("ended", handleEnded);

    return () => {
      videoElement.removeEventListener("play", handlePlay);
      videoElement.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <>
      <Navbarnonuser />
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="md:w-1/4 bg-white text-black shadow-md h-auto md:h-screen p-4">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-orange-500">Course</h2>
            <h3 className="text-xl font-bold mt-4">
              Service Design Essentials
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-4">
              <div className="flex items-center">
                <BorderLinearProgress
                  variant="determinate"
                  value={progress} // Use the progress state
                  className="w-full mr-2"
                />
                <span className="text-sm text-gray-600">
                  {progress}% Complete
                </span>{" "}
                {/* Update text with progress state */}
              </div>
            </div>
          </div>

          <List component="nav">
            <ListItem button onClick={() => handleToggle("introduction")}>
              <ListItemText
                primary="01 Introduction"
                className="text-lg font-bold"
              />
              {openSections.introduction ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse
              in={openSections.introduction}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon className="mr-[-2rem]">
                    {isVideoEnded ? (
                      <FinishedIcon />
                    ) : isVideoPlaying ? (
                      <PlayingIcon />
                    ) : (
                      <NotPlayingIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary="Welcome to the Course" />
                </ListItem>
                {/* Other list items */}
              </List>
            </Collapse>

            <ListItem button onClick={() => handleToggle("theories")}>
              <ListItemText
                primary="02 Service Design Theories and Principles"
                className="text-lg font-bold"
              />
              {openSections.theories ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openSections.theories} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon>
                    <NotPlayingIcon />
                  </ListItemIcon>
                  <ListItemText primary="Theory 1" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <NotPlayingIcon />
                  </ListItemIcon>
                  <ListItemText primary="Theory 2" />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={() => handleToggle("scope")}>
              <ListItemText
                primary="03 Scope of Service Design"
                className="text-lg font-bold"
              />
              {openSections.scope ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openSections.scope} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon>
                    <NotPlayingIcon />
                  </ListItemIcon>
                  <ListItemText primary="Scope 1" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <NotPlayingIcon />
                  </ListItemIcon>
                  <ListItemText primary="Scope 2" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6 text-black">
          <h1 className="text-2xl font-bold mb-4">Korean bbq pork</h1>
          <div className="mb-4 flex justify-center">
            <video
              ref={videoRef}
              width="739"
              height="460"
              src="https://videos.pexels.com/video-files/6007892/6007892-hd_1920_1080_30fps.mp4"
              title="Service Design Video"
              controls
              // autoPlay
              muted
              className="rounded-lg shadow-md w-full max-w-full"
            ></video>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2">Assignment</h2>
            <p className="mb-4">What are the 4 elements of service design?</p>
            <form>
              <textarea
                className="bg-white w-full p-2 border rounded-lg mb-4"
                rows="4"
                placeholder="Answer..."
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Send Assignment
              </button>
              <p className="text-sm text-gray-500 mt-2">Assign within 2 days</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
