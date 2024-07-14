import express from "express";
import cors from "cors";
import courseRouter from "./routes/course.mjs";
import userRouter from "./routes/user.mjs";
import connectionPool from "./utils/db.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(cors());
const port = 4000;

//Connection test
async function connect() {
  app.use(cors());
  dotenv.config();

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

//admin login
app.post("/admin/login", async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: `Email and Password are required` });
  }

  const role = req.body.role ? req.body.role.toLowerCase().trim() : "";

  if (role === "admin") {
    return res.status(401).json({ message: `Only admin can access` });
  }

  try {
    const { rows } = await connectionPool.query(
      `select * from users where email = $1`,
      [req.body.email]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Email does not exist." });
    }

    const user = rows[0];
    // console.log(user);

    // verify the password
    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password." });
    }

    // generate token
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      { id: user.userid, email: user.email, role: user.role },
      secretKey,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ message: "Login successful.", token });
  } catch {
    console.error("Error during admin login:");
    res.status(500).json({ message: "Internal server error." });
  }
});

//Server connection test
app.get("/test", (req, res) => {
  return res.json("Server API is working 🚀");
});

app.listen(port, () => {
  console.log(`Server is running at ${port} 🚀`);
});
