import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import NewProfilePage from "./components/NewProfilePage";
import ProfilesPage from "./components/ProfilesPage";
import ProfileDetailsPage from "./components/ProfileDetailsPage";
import WebFont from "webfontloader";
import ThemeContext from "./components/ThemeContext";
import "./App.scss";

const themes = {
  light: {
    color: "#222222",
    background: "#ffffff",
  },
  dark: {
    color: "#ffffff",
    background: "#222222",
  },
};

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Nunito"],
      },
    });
  }, []);

  const handleThemeChange = ({ target }) => {
    const selectedTheme = target.checked ? "light" : "dark";
    setCurrentTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  return (
    <ThemeContext.Provider value={themes[currentTheme]}>
      <div className="theme-container" style={themes[currentTheme]}>
        <div className="switch">
          <span className="theme-label">Change theme</span>
          <input
            type="checkbox"
            checked={currentTheme === "light"}
            id="switch"
            onChange={handleThemeChange}
          />
          <label for="switch">Toogle</label>
        </div>
        <Header />
        <Router>
          <Switch>
            <Route path="/home" component={ProfilesPage}></Route>
            <Route
              path="/:profileId/profileDetails"
              component={ProfileDetailsPage}
            ></Route>
            <Route path="/newProfilePage" component={NewProfilePage}></Route>
            <Redirect to="/home" />
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
