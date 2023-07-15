import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Typography, Card, Button } from "@mui/material";
import { TextField } from "@mui/material";

function Course() {
  let { courseId } = useParams();
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

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

  let course = courses.find((c) => courseId == c.id);

  if (!course) {
    return (
      <div>
        <h6>No courses found!</h6>
      </div>
    );
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <CourseCard course={course} />
        <UpdateCard courses={courses} course={course} setCourses={setCourses} />
      </div>
    </>
  );
}

function UpdateCard(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImageLink] = useState("");
  const course = props.course;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card varint="outlined" style={{ width: 400, padding: 20 }}>
        <Typography variant="h6">Update Course Details</Typography>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          label="Price"
          variant="outlined"
          fullWidth
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          label="Image Link"
          variant="outlined"
          fullWidth
          onChange={(event) => {
            setImageLink(event.target.value);
          }}
        />
        <br />
        <br />
        <Button
          size="larger"
          variant="contained"
          onClick={() => {
            fetch("http://localhost:3000/admin/courses/" + course.id, {
              method: "PUT",
              body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                imageLink: image,
                published: true,
              }),
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            })
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                alert("Course Updated Successfully");

                let updatedCourse = [];

                for (let i = 0; i < props.courses.length; i++) {
                  if (props.course.id == course.id) {
                    updatedCourse.push({
                      id: course.id,
                      title: title,
                      description: description,
                      price: price,
                      imageLink: image,
                    });
                  } else {
                    updatedCourse.push(props.courses[i]);
                  }
                }

                props.setCourses(updatedCourse);
              });
          }}
        >
          UPDATE COURSE
        </Button>
      </Card>
    </div>
  );
}

function CourseCard(props) {
  const course = props.course;
  return (
    <div>
      <Card
        varint="outlined"
        style={{
          margin: 30,
          width: 300,
          minHeight: 150,
        }}
      >
        <Typography variant="h6" textAlign={"center"}>
          {course.title}
        </Typography>
        <Typography variant="subtitle1" textAlign={"center"}>
          {course.description}
        </Typography>
        <img src={course.imageLink} style={{ width: 300 }} />
      </Card>
    </div>
  );
}
export default Course;
