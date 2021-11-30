import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// importing the pages and modals
import Homepage from "./components/pages/homepage/Homepage";
import Footer from "./components/Footer";
import CreateItinerary from "./components/pages/itinerary/CreateItinerary";
import ProfilePage from "./components/pages/profile/ProfilePage";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
import NavBar from "./components/NavBar";

// Import API
import API from "./utils/API";

// CSS and bootstrap
import "./NavFooter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [userState, setUserState] = useState({
    email: "",
    id: 0,
  });
  const [token, setToken] = useState("");
  const [loginModalState, setLoginModalState] = useState({
    email: "",
    password: "",
  });
  const [signupModalState, setSignupModalState] = useState({
    email: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    const myToken = localStorage.getItem("token");
    console.log("use effected");
    console.log(myToken);
    if (myToken) {
      API.getProfile(myToken)
        .then((res) => {
          console.log("worked");
          setToken(myToken);
          setUserState({
            email: res.data.email,
            id: res.data.id,
          });
        })
        .catch((err) => {
          console.log("failed");
          console.log(err);
          localStorage.removeItem("token");
        });
    }
  }, []);

  const handleLoginChange = (event) => {
    if (event.target.name === "email") {
      setLoginModalState({
        ...loginModalState,
        email: event.target.value,
      });
    } else {
      setLoginModalState({
        ...loginModalState,
        password: event.target.value,
      });
    }
  };
  const handleSignupChange = (event) => {
    if (event.target.name === "email") {
      setSignupModalState({
        ...signupModalState,
        email: event.target.value,
      });
    } else {
      setSignupModalState({
        ...signupModalState,
        password: event.target.value,
      });
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    API.login(loginModalState)
      .then((res) => {
        console.log(res.data);
        setUserState({
          email: res.data.user.email,
          id: res.data.user.id,
        });
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    API.signup(signupModalState).then((res) => {
      API.login(signupModalState)
        .then((res) => {
          console.log(res.data);
          setUserState({
            email: res.data.user.email,
            id: res.data.user.id,
          });
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const logMeOut = () => {
    setUserState({ email: "", id: 0 });
    setToken("");
    localStorage.removeItem("token");
  };
  return (
    <Router>
      <NavBar />
      {/* Here are the routes to the different pages */}
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
        <Route path="/CreateItinerary">
          <CreateItinerary />
        </Route>
        <Route path="/ProfilePage">
          <ProfilePage />
        </Route>
        <Route path="/CreateItinerary" element={<CreateItinerary />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route
          path="/login"
          element={
            <LoginModal
              submit={handleLoginSubmit}
              change={handleLoginChange}
              loginState={loginModalState}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignupModal
              submit={handleSignupSubmit}
              change={handleSignupChange}
              signupState={signupModalState}
            />
          }
        />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
