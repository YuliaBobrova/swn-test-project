import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./common/components/Header/Header";
import CharactersListPage from "./pages/CharactersList";
import EpisodesListPage from "./pages/EpisodesListPage";
import HomePage from "./pages/HomePage";

const routeConfig = {
  root: { path: "/", component: HomePage },
  episodes: { path: "/episodes", component: EpisodesListPage },
  characters: { path: "/characters", component: CharactersListPage },
};

function App() {
  return (
    <div className={styles.App}>
      <Header />
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
