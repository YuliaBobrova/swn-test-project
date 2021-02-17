import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import styles from "./App.module.scss";
import EpisodesListPage from "./pages/EpisodesListPage";
import HomePage from "./pages/HomePage";
import CharactersListPage from "./pages/CharactersList";

const routeConfig = {
  root: { path: "/", component: HomePage },
  episodes: { path: "/episodes", component: EpisodesListPage },
  characters: { path: "/characters", component: CharactersListPage },
};

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Wrapper}>
        <Router>
          <Switch>
            <Route
              exact
              path={routeConfig.root.path}
              render={routeConfig.root.component}
            />
            <Route
              path={routeConfig.episodes.path}
              render={routeConfig.episodes.component}
            />
            <Route
              path={routeConfig.characters.path}
              render={routeConfig.characters.component}
            />
            <Redirect to={routeConfig.root.path} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
