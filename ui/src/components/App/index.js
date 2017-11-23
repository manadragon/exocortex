import React, { Component } from 'react';
import NavBar from 'components/NavBar';
import { Redirect, Switch, Route } from 'react-router-dom';
import HotkeyHelp from 'components/HotkeyHelp';
import styled from 'styled-components';

// Pages
import HomePage from 'pages/HomePage';
import WikiPage from 'pages/WikiPage';
import NewWikiPage from 'pages/NewWikiPage';
import EditWikiPage from 'pages/EditWikiPage';
import SettingsPage from 'pages/SettingsPage';
import SearchPage from 'pages/SearchPage';

const Wrapper = styled.div`
  position: relative;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <NavBar />
        <Switch>
          <Route exact path="/wiki" component={HomePage} />
          <Route path="/wiki/settings" component={SettingsPage} />
          <Route path="/wiki/new/:page*" component={NewWikiPage} />
          <Route path="/wiki/edit/:page*" component={EditWikiPage} />
          <Route path="/wiki/:page*" component={WikiPage} />
          <Route path="/search" component={SearchPage} />
          <Redirect to="/wiki" />
        </Switch>
        <HotkeyHelp />
      </Wrapper>
    );
  }
}

export default App;
