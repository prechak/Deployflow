import express from "express";
import cors from "cors";
import courseRouter from "./routes/course.mjs";
import userRouter from "./routes/user.mjs";
import connectionPool from "./utils/db.mjs";
import dotenv from "dotenv";
import cors from "cors";


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

//Server connection test
app.get("/test", (req, res) => {
  return res.json("Server API is working 🚀");
});


app.listen(port, () => {
  console.log(`Server is running at ${port} 🚀`);
});
