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
import GeneralFooter from "../homepage/footer";

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
      <div className="flex flex-col md:flex-row mx-4 lg:mx-20 xl:mx-40 mt-[128px] md:mt-[188px] min-h-screen ">
        {/* Sidebar */}
        <div className="md:w-1/4 bg-white text-black shadow-md h-auto md:h-screen p-4">
          <div className="mb-6">
            <h2 className="text-sm font-bold text-orange-500">Course</h2>
            <h3 className="text-2xl font-bold mt-4">
              Service Design Essentials
            </h3>
            <p className="text-gray-600 text-base mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-4">
              <span className="text-sm text-gray-600">
                {progress}% Complete
              </span>
              <div className="flex items-center">
                <BorderLinearProgress
                  variant="determinate"
                  value={progress}
                  className="w-full mr-2"
                />
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
        <div className="flex-1 p-4 lg:p-6 text-black">
          <h1 className="text-2xl font-bold mb-4">Korean bbq pork</h1>
          <div className="mb-4 flex justify-center">
            <video
              ref={videoRef}
              width="739"
              height="460"
              src="https://videos.pexels.com/video-files/6007892/6007892-hd_1920_1080_30fps.mp4"
              title="Service Design Video"
              controls
              muted
              className="rounded-lg shadow-md w-full max-w-full"
            ></video>
          </div>
          {/* Assignment */}
          <div className="bg-blue-50 border border-gray-300 rounded-lg p-4 lg:p-6 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Assignment</h2>
              <span className="bg-yellow-200 text-yellow-800 text-sm font-medium px-2 py-1 rounded">
                Pending
              </span>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                What are the 4 elements of service design?
              </label>
              <textarea
                className="bg-white w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="3"
                placeholder="Answer..."
              ></textarea>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-[#2F5FAC] text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
                Send Assignment
              </button>
              <span className="text-gray-500 text-sm">
                Assign within 2 days
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-white py-4 flex justify-between items-center border-t border-gray-300 mt-6 md:mt-0">
        <button className="text-blue-600 ml-4 md:ml-16 my-2 md:my-9">
          Previous Lesson
        </button>
        <button className="bg-[#2F5FAC] mr-4 md:mr-14 my-2 md:my-5 text-white py-2 px-4 rounded-lg">
          Next Lesson
        </button>
      </footer>
      {/* General Footer */}
      <GeneralFooter />
    </>
  );
};

export default Sidebar;
