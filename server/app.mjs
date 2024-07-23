import express from "express";
import cors from "cors";
import courseRouter from "./routes/course.mjs";
import userRouter from "./routes/user.mjs";
import connectionPool from "./utils/db.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import adminRouter from "./routes/admin.mjs";
import profileRouter from "./routes/profiles.mjs";

const app = express();
app.use(express.json());
app.use(cors());
const port = 4000;

//Connection test
async function connect() {
  try {
    await connectionPool.connect();
    console.log("Connected to Supabase PostgreSQL database");
  } catch {
    console.error("Error connecting to database:");
    process.exit(1);
  }
}
connect();

app.use("/courses", courseRouter);
app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/profiles", profileRouter);

//Server connection test
app.get("/test", (req, res) => {
  return res.json("Server API is working 🚀");
});

app.get("/users", async (req, res) => {
  let result;
  try {
    result = await client.query(`select * from users`);
    res.status(200).json(result.rows);
  } catch {
    res.status(500).json({ message: `Internal Server Error` });
  }
});

//log in api admin//
app.post("/login/admin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const query = {
      text: "SELECT * FROM users WHERE email = $1 AND role = 'Admin'",
      values: [email],
    };

    const result = await client.query(query);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = result.rows[0];
    // Validate password here, you might compare hashed passwords

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/courseinfo", async (req, res) => {
  const courseid = req.query.courseid;

  if (!courseid) {
    return res.status(400).send("courseid is required");
  }

  try {
    // Fetch course
    const coursesQuery = "select * from courses where courseid = $1";
    const coursesResult = await connectionPool.query(coursesQuery, [courseid]);
    const courses = coursesResult.rows;

    if (courses.length === 0) {
      return res.status(404).send("Course not found");
    }

    const course = courses[0];

    // Fetch modules
    const modulesQuery = "SELECT * FROM modules WHERE courseid = $1";
    const modulesResult = await connectionPool.query(modulesQuery, [courseid]);
    const modules = modulesResult.rows;

    // Fetch submodules
    const submodulesQuery =
      "SELECT * FROM submodules WHERE moduleid IN (SELECT moduleid FROM modules WHERE courseid = $1)";
    const submodulesResult = await connectionPool.query(submodulesQuery, [
      courseid,
    ]);
    const submodules = submodulesResult.rows;

    // Fetch videos
    const videosQuery =
      "SELECT * FROM videos WHERE submoduleid IN (SELECT submoduleid FROM submodules WHERE moduleid IN (SELECT moduleid FROM modules WHERE courseid = $1))";
    const videosResult = await connectionPool.query(videosQuery, [courseid]);
    const videos = videosResult.rows;

    // Structure the data
    const sidebarData = {
      courseid: course.courseid,
      coursename: course.coursename,
      coursedescription: course.description,
      modules: modules.map((module) => {
        return {
          moduleid: module.moduleid,
          modulename: module.modulename,
          submodules: submodules
            .filter((submodule) => submodule.moduleid === module.moduleid)
            .map((submodule) => {
              return {
                submoduleid: submodule.submoduleid,
                title: submodule.title,
                videos: videos.filter(
                  (video) => video.submoduleid === submodule.submoduleid
                ),
              };
            }),
        };
      }),
    };

    res.json(sidebarData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server is running at ${port} 🚀`);
});
