import express from "express";
import client from "./utils/db.mjs";
import courseRouter from "./routes/course.mjs";
import userRegisterValidation from "./middlewares/postuser.validation.mjs";
import userRouter from "./routes/user.mjs";

const app = express();
app.use(express.json());

const port = 4000;

//Connection test
async function connect() {
  try {
    await client.connect();
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
