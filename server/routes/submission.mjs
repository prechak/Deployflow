import { Router } from "express";
import connectionPool from "../utils/db.mjs";

const submissionRouter = Router();

//=========Get all submission
submissionRouter.get("/", async (req, res) => {
  let result;
  try {
    result = await connectionPool.query(
      `select * from submissions order by submissionid asc`
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error` });
  }
});

//===========Get submission by id
submissionRouter.get("/:id", async (req, res) => {
  let result;
  const submissionId = req.params.id;
  try {
    result = await connectionPool.query(
      `SELECT * FROM submissions WHERE submissionid = $1`,
      [submissionId]
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message:
        "Server could not read user because of a database connection error",
    });
  }
  if (!result.rows[0]) {
    return res.status(404).json({
      message: "Server could not find submission",
    });
  }
  return res.status(200).json({
    data: result.rows[0],
  });
});

//==========Add new submission
submissionRouter.post("/submit/:id", async (req, res) => {
  const submissiondate = new Date();
  let newSubmit;
  const submissionId = req.params.courseid;
  try {
  } catch (error) {
    console.log(error);
  }
});

export default submissionRouter;
