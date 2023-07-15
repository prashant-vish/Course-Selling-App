import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { json } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography style={{ paddingTop: 80, fontSize: "1rem" }}>
          Welcome to the Coursera SignUp below
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card varint="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <br />
          <br />

          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <br />
          <br />
          <Button
            size="larger"
            variant="contained"
            onClick={() => {
              fetch("http://localhost:3000/admin/signup", {
                method: "POST",
                body: JSON.stringify({
                  username: email,
                  password: password,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  localStorage.setItem("token", data.token);
                  window.location = "/";
                });
            }}
          >
            SIGN UP
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
