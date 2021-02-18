import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import Header from "./common/components/Header/Header";
import CharactersListPage from "./pages/CharactersList";
import EpisodesListPage from "./pages/EpisodesListPage";
import HomePage from "./pages/HomePage";
import { contentHeight } from "./styles";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background: #000000;
`;

const Page = styled.div`
  width: 100%;
  min-height: ${contentHeight};
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const routeConfig = {
  root: { path: "/", component: HomePage },
  episodes: { path: "/episodes", component: EpisodesListPage },
  characters: { path: "/characters", component: CharactersListPage },
};

function App() {
  return (
    <Root>
      <Header />
      <Page>
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
      </Page>
    </Root>
  );
}

export default App;
