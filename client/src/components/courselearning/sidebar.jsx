import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  LinearProgress,
  Collapse,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { linearProgressClasses } from "@mui/material/LinearProgress";

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

  const handleToggle = (section) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [section]: !prevOpenSections[section],
    }));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="md:w-1/4 bg-white text-black shadow-md h-auto md:h-screen p-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-orange-500">Course</h2>
          <h3 className="text-xl font-bold mt-4">Service Design Essentials</h3>
          <p className="text-gray-600 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-4">
            <div className="flex items-center">
              <BorderLinearProgress
                variant="determinate"
                value={50}
                className="w-full mr-2"
              />
              {/* <LinearProgress
                variant="determinate"
                value={15}
                className="w-full mr-2"
              /> */}
              <span className="text-sm text-gray-600">15% Complete</span>
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
          <Collapse in={openSections.introduction} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemIcon>
                  <CheckCircleOutlineIcon className="text-green-500" />
                </ListItemIcon>
                <ListItemText primary="Welcome to the Course" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <CheckCircleOutlineIcon className="text-green-500" />
                </ListItemIcon>
                <ListItemText primary="Course Overview" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <CheckCircleOutlineIcon className="text-green-500" />
                </ListItemIcon>
                <ListItemText primary="Getting to Know You" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <CheckCircleOutlineIcon className="text-green-500" />
                </ListItemIcon>
                <ListItemText primary="What is Service Design?" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <CheckCircleOutlineIcon className="text-green-500" />
                </ListItemIcon>
                <ListItemText primary="Service Design vs. UX vs. UI vs. Design Thinking" />
              </ListItem>
              <ListItem button className="bg-blue-100">
                <ListItemIcon>
                  <RadioButtonUncheckedIcon className="text-blue-500" />
                </ListItemIcon>
                <ListItemText primary="4 Levels of Service Design in an Organization" />
              </ListItem>
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
                  <RadioButtonUncheckedIcon className="text-gray-400" />
                </ListItemIcon>
                <ListItemText primary="Theory 1" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <RadioButtonUncheckedIcon className="text-gray-400" />
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
                  <RadioButtonUncheckedIcon className="text-gray-400" />
                </ListItemIcon>
                <ListItemText primary="Scope 1" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <RadioButtonUncheckedIcon className="text-gray-400" />
                </ListItemIcon>
                <ListItemText primary="Scope 2" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 text-black">
        <h1 className="text-2xl font-bold mb-4">
          การไม่มีศาสนาเป็นคนไม่ดีจริงหรอ ?
        </h1>
        <div className="mb-4 flex justify-center">
          <iframe
            width="739"
            height="460"
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FSangkomtoday%2Fvideos%2F636818447082015%2F&show_text=false&width=560&t=0&autoplay=1"
            title="Service Design Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-md w-full max-w-full"
          ></iframe>
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
          </form>
          <p className="text-sm text-gray-500 mt-2">Assign within 2 days</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
