import React from "react";

import { observer } from 'mobx-react';
import { observable } from 'mobx';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";

import { CarsList } from './components/CarsList/index';
import { ToDoList } from './components/toDOList/index';
import TodoApp from './components/mobxTodoApp/TodoApp/index';
import Home from './components/home.js';
import { CountriesDashboardApp } from './components/Countries_Dashboard_App/CountriesDashboardApp';
import EmojiGameDashboardApp from './components/EmojiGame/EmojiGameDashboardApp/index';
import CounterApp from './components/CounterApp/index';

import { Greetings } from './components/FormComponents/Greetings.js';
import { FavouriteDessert } from './components/FormComponents/FavouriteDessert.js';
import { VisitedCities } from './components/FormComponents/VisitedCities.js';
import { YourState } from './components/FormComponents/YourState.js';
import { DisableButton } from './components/FormComponents/DisableButton.js';
import { FormComponentHome } from './components/FormComponents/FormComponentHome.js';
import CountryDetails from './components/Countries_Dashboard_App/CountryDetails.js';
import CounterPage from './components/CounterPage/index';

const cityList = ["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"];
const states = ["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"];

import themeStore from './stores/ThemeStore';

@observer
class App extends React.Component {

  @observable selectedTheme = 'light'

  getCurrentTheme = () => {
    return themeStore.selectedTheme;
  }

  setCurrentTheme = (theme) => {
    themeStore.setCurrentTheme(theme);
  }

  themeOptions = {
    light: {
      id: "0",
      color: "#fff",
      displayText: "Dark Theme",
      textColor: 'black',
      cardColor: 'white',
      background: '#ebf8ff',
      red: "red",
      green: "green"
    },
    dark: {
      id: "1",
      color: "#2b3945",
      displayText: "Light Theme",
      textColor: '#fff',
      cardColor: ' #2b6cb0',
      background: 'black',
      red: "red",
      green: "green"
    },
  }

  /*state = {
    selectedTheme: 'light',
  }*/

  onChangeTheme = () => {
    if (this.getCurrentTheme() === 'light') {
      //this.setState({ selectedTheme: 'dark' });
      this.setCurrentTheme('dark');
    }
    else {
      //this.setState({ selectedTheme: 'light' });
      this.setCurrentTheme('light');
    }
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/Counter-page'>
          <CounterPage />
        </Route>
        <Route path='/CarsList'>
          <CarsList />
        </Route>
        <Route path='/toDOList'>
          <div className="container">
            <ToDoList />
          </div>
        </Route>
        <Route path='/mobx-todo-app'>
            <TodoApp />
        </Route>
        <Route path='/FormComponents'>
          <FormComponentHome />
        </Route>
        <Route path='/CountriesDashboardApp'>
          <CountriesDashboardApp onChangeTheme = { this.onChangeTheme } 
               selectedTheme = { this.themeOptions[this.getCurrentTheme()] }/>
        </Route>
        <Route path='/EmojiGame'>
          <EmojiGameDashboardApp onChangeTheme = { this.onChangeTheme } 
               selectedTheme = { this.themeOptions[this.getCurrentTheme()] }/>
        </Route>
        <Route path='/CounterApp'>
          <CounterApp />
        </Route>
        <Route path='/Greetings'>
          <Greetings />
        </Route>
        <Route path='/FavouriteDessert'>
          <FavouriteDessert />
        </Route>
        <Route path='/VisitedCities'>
          <VisitedCities cityList={cityList}/>
        </Route>
        <Route path='/YourState'>
          <YourState states={states}/>
        </Route>
        <Route path='/DisableButton'>
          <DisableButton />
        </Route>
        <Route path="/:id">
          <CountryDetails onChangeTheme = { this.onChangeTheme } 
               selectedTheme = { this.themeOptions[this.getCurrentTheme()] }/>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
    );
  }
}

export default App;
