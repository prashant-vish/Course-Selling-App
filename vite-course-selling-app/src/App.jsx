import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Appbar from "./Appbar";
import Addcourse from "./Addcourse";
import Courses from "./Courses";
import Course from "./Course";

// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)
function App() {
  return (
    <div
      style={{ backgroundColor: "#eeeeee", width: "100vw", height: "100vh" }}
    >
      <Router>
        <Appbar></Appbar>
        <Routes>
          <Route path="/course/:courseId" element={<Course />} />
          <Route path="/addcourse" element={<Addcourse />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
