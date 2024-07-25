import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  LinearProgress,
  Typography,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { linearProgressClasses } from "@mui/material/LinearProgress";
import Navbarnonuser from "../homepage/navbar-user";
import GeneralFooter from "../homepage/footer";
import axios from "axios";

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
      strokeWidth="2"
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

const Sidebar = () => {
  const { courseid } = useParams();
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

  const [videoStates, setVideoStates] = useState({});
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [progress, setProgress] = useState(0); // Initial progress value
  const [sidebarData, setSidebarData] = useState([]);
  const [selectedSubmodule, setSelectedSubmodule] = useState(null);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [currentModuleName, setCurrentModuleName] = useState("");
  const [currentSubmoduleName, setCurrentSubmoduleName] = useState("");
  const [watchedVideos, setWatchedVideos] = useState(new Set());
  const [totalVideos, setTotalVideos] = useState(0);

  const handleToggle = (section) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [section]: !prevOpenSections[section],
    }));
  };

  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const updateProgress = () => {
      if (videoElement.duration > 0) {
        const progress =
          (videoElement.currentTime / videoElement.duration) * 100;
        setProgress(progress);
      }
    };

    const handlePlay = () => {
      setIsVideoPlaying(true);
      setVideoStates((prevState) => ({
        ...prevState,
        [selectedSubmodule]: { isPlaying: true, isEnded: false },
      }));
    };

    const handleEnded = () => {
      setIsVideoPlaying(false);
      setIsVideoEnded(true);
      setProgress(100);

      setVideoStates((prevState) => ({
        ...prevState,
        [selectedSubmodule]: { isPlaying: false, isEnded: true },
      }));

      setWatchedVideos((prevWatchedVideos) => {
        const newWatchedVideos = new Set(prevWatchedVideos);
        newWatchedVideos.add(selectedVideoUrl);
        return newWatchedVideos;
      });

      const { nextSubmoduleId, nextVideoUrl } = getNextVideoDetails();
      if (nextVideoUrl) {
        setSelectedSubmodule(nextSubmoduleId);
        setSelectedVideoUrl(nextVideoUrl);
      }
    };

    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("ended", handleEnded);
    videoElement.addEventListener("timeupdate", updateProgress);

    return () => {
      videoElement.removeEventListener("play", handlePlay);
      videoElement.removeEventListener("ended", handleEnded);
      videoElement.removeEventListener("timeupdate", updateProgress);
    };
  }, [selectedVideoUrl]);

  useEffect(() => {
    if (sidebarData.modules) {
      const allVideos = sidebarData.modules.flatMap((module) =>
        module.submodules.flatMap((submodule) =>
          submodule.videos.map((video) => video.videourl)
        )
      );
      setTotalVideos(allVideos.length);
    }
  }, [sidebarData]);

  useEffect(() => {
    if (totalVideos > 0) {
      setProgress((watchedVideos.size / totalVideos) * 100);
    }
  }, [watchedVideos, totalVideos]);

  const getNextVideoDetails = () => {
    let nextSubmoduleId = null;
    let nextVideoUrl = null;

    if (selectedSubmodule && sidebarData.modules) {
      for (let i = 0; i < sidebarData.modules.length; i++) {
        const module = sidebarData.modules[i];
        for (let j = 0; j < module.submodules.length; j++) {
          const submodule = module.submodules[j];
          if (submodule.submoduleid === selectedSubmodule) {
            if (j < module.submodules.length - 1) {
              // Next submodule in the current module
              const nextSubmodule = module.submodules[j + 1];
              if (nextSubmodule.videos.length > 0) {
                nextSubmoduleId = nextSubmodule.submoduleid;
                nextVideoUrl = nextSubmodule.videos[0].videourl;
              }
            } else if (i < sidebarData.modules.length - 1) {
              // First submodule of the next module
              const nextModule = sidebarData.modules[i + 1];
              if (nextModule.submodules.length > 0) {
                nextSubmoduleId = nextModule.submodules[0].submoduleid;
                if (nextModule.submodules[0].videos.length > 0) {
                  nextVideoUrl = nextModule.submodules[0].videos[0].videourl;
                }
              }
            }
            break;
          }
        }
        if (nextSubmoduleId) break;
      }
    }

    return { nextSubmoduleId, nextVideoUrl };
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       `http://localhost:4000/courseinfo?courseid=1`
  //     );
  //     const data = response.data;
  //     setSidebarData(data);

  //     // Set the first submodule as selected by default
  //     const firstSubmodule = data.modules.flatMap(
  //       (module) => module.submodules
  //     )[0];
  //     if (firstSubmodule) {
  //       setSelectedSubmodule(firstSubmodule.submoduleid);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/courseinfo/${courseid}`
        );
        const data = response.data;
        setSidebarData(data);

        // Set the first submodule as selected by default
        const firstSubmodule = data.modules.flatMap(
          (module) => module.submodules
        )[0];
        if (firstSubmodule) {
          setSelectedSubmodule(firstSubmodule.submoduleid);
        }
        console.log(response);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchData();
  }, [courseid]);

  useEffect(() => {
    if (selectedSubmodule) {
      const module = sidebarData.modules.find((mod) =>
        mod.submodules.find((sub) => sub.submoduleid === selectedSubmodule)
      );
      const submodule = module.submodules.find(
        (sub) => sub.submoduleid === selectedSubmodule
      );
      if (module) {
        setCurrentModuleName(module.modulename);
      }
      if (submodule && submodule.videos.length > 0) {
        setCurrentSubmoduleName(submodule.title);
        setSelectedVideoUrl(submodule.videos[0].videourl);
      } else {
        setSelectedVideoUrl("");
      }

      // Update the openSections to expand the current module
      setOpenSections((prevOpenSections) => ({
        ...prevOpenSections,
        [module.moduleid]: true,
      }));
    }
  }, [selectedSubmodule, sidebarData]);

  const handleSubmoduleClick = (submoduleid, moduleid) => {
    setSelectedSubmodule(submoduleid);
    // Ensure the module containing the submodule is expanded
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [moduleid]: true,
    }));
  };

  const { coursename, coursedescription, modules } = sidebarData;

  const selectedSubmoduleData = sidebarData.modules
    ?.flatMap((module) => module.submodules)
    .find((submodule) => submodule.submoduleid === selectedSubmodule);

  const getVideoIcon = (submoduleid) => {
    const state = videoStates[submoduleid] || {
      isPlaying: false,
      isEnded: false,
    };
    if (state.isEnded) return <FinishedIcon />;
    if (state.isPlaying) return <PlayingIcon />;
    return <NotPlayingIcon />;
  };

  return (
    <>
      <Navbarnonuser />
      <div className="flex flex-col md:flex-row mx-4 lg:mx-20 xl:mx-40 mt-[128px] md:mt-[188px] min-h-screen">
        {/* Sidebar */}
        <div className="md:w-1/4 bg-white text-black shadow-md h-auto md:h-screen p-4 font-sans">
          <div className="mb-6">
            <h2 className="text-sm font-bold text-orange-500">Course</h2>
            <h3 className="text-2xl font-bold mt-4">{coursename}</h3>
            <p className="text-gray-600 text-base mt-2">{coursedescription}</p>
            <div className="mt-4">
              <span className="text-sm text-gray-600">
                {progress.toFixed(1)}% Complete
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
            {Array.isArray(modules) &&
              modules.map((module) => (
                <div key={module.moduleid}>
                  <ListItem
                    button
                    onClick={() => handleToggle(module.moduleid)}
                  >
                    <ListItemText
                      disableTypography
                      primary={`${module.modulename}`}
                      className="text-base font-sans"
                    />
                    {openSections[module.moduleid] ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )}
                  </ListItem>
                  <Collapse
                    in={openSections[module.moduleid]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {module.submodules.map((submodule) => {
                        const isCurrentSubmodule =
                          selectedSubmodule === submodule.submoduleid;
                        return (
                          <ListItem
                            button
                            key={submodule.submoduleid}
                            onClick={() =>
                              handleSubmoduleClick(
                                submodule.submoduleid,
                                module.moduleid
                              )
                            }
                            style={{
                              backgroundColor: isCurrentSubmodule
                                ? "#F6F7FC"
                                : "transparent",
                              borderRadius: "8px", // Adjust the radius as needed
                            }}
                          >
                            <ListItemIcon>
                              {getVideoIcon(submodule.submoduleid)}
                            </ListItemIcon>
                            <ListItemText
                              disableTypography
                              primary={submodule.title}
                              style={{
                                color: isCurrentSubmodule
                                  ? "#646D89"
                                  : "#646D89",
                                fontFamily: "Inter",
                              }} // Optional: Change text color for better contrast
                            />
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                </div>
              ))}
          </List>
        </div>

        {/* Video content */}
        <div className="flex-1 p-4 lg:p-6 text-black">
          <h1 className="text-2xl font-bold mb-4">
            {selectedSubmoduleData ? selectedSubmoduleData.title : coursename}
          </h1>
          <div className="mb-4 flex justify-center">
            {selectedVideoUrl && (
              <video
                ref={videoRef}
                autoPlay
                width="739"
                height="460"
                src={selectedVideoUrl}
                title="Course Video"
                controls
                muted
                className="rounded-lg shadow-md w-full max-w-full"
              ></video>
            )}
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
