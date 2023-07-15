import { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCourses(data.courses);
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: 40,
      }}
    >
      {courses.map((course) => {
        return <Course course={course} />;
      })}
    </div>
  );
}

function Course(props) {
  return (
    <Card
      varint="outlined"
      style={{
        margin: 30,
        width: 300,
        minHeight: 150,
      }}
    >
      <Typography variant="h6" textAlign={"center"}>
        {props.course.title}
      </Typography>
      <Typography variant="subtitle1" textAlign={"center"}>
        {props.course.description}
      </Typography>
      <img src={props.course.imageLink} style={{ width: 300 }} />
    </Card>
  );
}

export default Courses;
