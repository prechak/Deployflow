import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CourseAddLesson() {
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://www.melivecode.com/api/users")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);

  return (
    <div className="ml-8 mt-[20px] w-[1120px]">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ p: 2 }}>
          <Paper sx={{ p: 2 }}>
            <Box display="flex">
              <Box sx={{ flexGrow: 1 }} className="text-md ">
                Lesson
              </Box>
              <Box>
                <Link href="/admin/addcourse">
                  <Button
                    className="w-[171px] h-[60px] ml-8 bg-slate-800"
                    variant="contained"
                  >
                    + Add Lesson
                  </Button>
                </Link>
              </Box>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="center">Avartar</TableCell>
                    <TableCell align="right">First name</TableCell>
                    <TableCell align="right">Last name</TableCell>
                    <TableCell align="right">Username</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="center">
                        <Box display="flex" justifyContent="center">
                          <Avatar alt={row.username} src={row.avatar} />
                        </Box>
                      </TableCell>
                      <TableCell align="right">{row.fname}</TableCell>
                      <TableCell align="right">{row.lname}</TableCell>
                      <TableCell align="right">{row.username}</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Container>
      </React.Fragment>
    </div>
  );
}
