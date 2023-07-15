import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

function Signin() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography style={{ paddingTop: 80, fontSize: "1rem" }}>
          Welcome back!! Signin below
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card varint="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
          />
          <br />
          <br />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
          />
          <br />
          <br />
          <Button size="larger" variant="contained">
            SIGN IN
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signin;
