import { Router } from "express";
import connectionPool from "../utils/db.mjs";

const submissionRouter = Router();

//=========Get submission and assignment data

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

//===========Get user submission by submission_id
submissionRouter.get("/:userid/", async (req, res) => {
  let result;

  const userId = req.params.userid;
  try {
    result = await connectionPool.query(
      `SELECT * FROM submissions WHERE userid = $1`,
      [userId]
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
submissionRouter.post("/:userid/:id/submit", async (req, res) => {
  const newSubmit = {
    ...req.body,
    submissiondate: new Date(),
  };
  const assignmentId = req.params.id;
  const userId = req.params.userid;
  try {
    await connectionPool.query(
      `insert into submissions (userid, assignmentId, submissiondate, status, answer)
      values ($1, $2, $3, 'Submitted', $4)`,
      [userId, assignmentId, newSubmit.submissiondate, newSubmit.answer]
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error submitting answer" });
  }
  return res.status(201).json({
    message: "Submit answer successfully",
  });
});

export default submissionRouter;
