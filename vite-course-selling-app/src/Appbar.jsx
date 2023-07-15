import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();
  const [userEmail, setuserEmail] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/admin/me", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        // console.log(userEmail);
        if (data.username) {
          setuserEmail(data.username);
          setIsLoading(false);
        }
      });
  }, []);
  // if (isloading) {
  //   return <div></div>;
  // }
  if (userEmail) {
    return (
      <div
        style={{ display: "flex", justifyContent: "space-between", padding: 5 }}
      >
        <div>
          <Typography
            variant="h6"
            style={{ backgroundColor: "pink", borderRadius: "30%" }}
          >
            Corusera
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 5 }}>{userEmail}</div>
          <div>
            <Button
              variant="contained"
              onClick={() => {
                localStorage.setItem("token", null);
                window.location = "/";
              }}
            >
              LOG OUT
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", padding: 5 }}
    >
      <div>
        <Typography
          variant="h6"
          style={{ backgroundColor: "pink", borderRadius: "30%" }}
        >
          Corusera
        </Typography>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 10 }}>
          <Button
            variant="contained"
            onClick={() => {
              // window.location = "/signup";
              navigate("/signup");
            }}
          >
            Sign Up
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
