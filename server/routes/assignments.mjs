import { Router } from "express";
import connectionPool from "../utils/db.mjs";

const assignmentRouter = Router();

//==========Get assignment for unique user id
assignmentRouter.get("/user/:userid", async (req, res) => {
  const { userid } = req.params;

  try {
    const result = await connectionPool.query(
      `
        SELECT 
          a.assignmentid,
          a.title,
          a.description,
          a.duedate,
          a.courseid,
          c.coursename,
          a.moduleid,
          m.modulename,
          a.sublessonid,
          s.sublessonname,
          a.createddate,
          b.status,
          b.answer
        FROM 
          assignments a
        LEFT JOIN 
          courses c ON a.courseid = c.courseid
        LEFT JOIN 
          modules m ON a.moduleid = m.moduleid
        LEFT JOIN 
          sublesson s ON a.sublessonid = s.sublessonid
        LEFT JOIN 
          submissions b ON a.assignmentid = b.assignmentid
        WHERE 
          b.userid = $1
      `,
      [userid]
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error occurred while fetching assignments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default assignmentRouter;
