import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NewProfilePage from "./components/NewProfilePage";
import ProfilesPage from "./components/ProfilesPage";
import ProfileDetailsPage from "./components/ProfileDetailsPage";
import WebFont from "webfontloader";
import ThemeContext from "./components/ThemeContext";
import "./App.scss";

const themes = {
  light: {
    name: "light",
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    name: "dark",
    foreground: "#ffffff",
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
      <div className="switch">
        <input type="checkbox" id="switch" onChange={handleThemeChange} />
        <label for="switch">Toggle</label>
      </div>
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
    </ThemeContext.Provider>
  );
};

export default App;
