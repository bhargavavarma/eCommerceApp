// import HomePage from "./components/HomePage"
//import HomePage from './eCommerceApp/components/HomePage/index'
import Page1 from "./components/Page1"
//import authenticationRoutes from './authentication/routes/index'
import { CarsList } from './components/CarsList/index'
import { ToDoList } from './components/toDOList/index'
import TodoApp from './components/mobxTodoApp/TodoApp/index'
import TodoAppAPI from './components/MobxTodoAppAPI/TodoAppAPI/index'
import Home from './components/home.js';
import CountriesDashboardApp from './components/Countries_Dashboard_App/CountriesDashboardApp';
import EmojiGameDashboardApp from './components/EmojiGame/EmojiGameDashboardApp/index';
import Mcq from './components/McqPractice/mcq'
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
import ProductHome from './eCommerceApp/components/home';

import EventApp from './components/EventsPage/EventsApp/index'
import GridMemoryGame from './components/GridMemoryApp/GridMemoryGame/index'
// import ProductPageRoute from './eCommerceApp/routes/ProductPageRoute/ProductPageRoute'
// import ProductPage from './eCommerceApp/components/ProductsPage'
import UsersPage from './components/UsersPage/index'
//import LoginPage from './components/LoginPage/index'
import stores from './eCommerceApp/stores'
import authStore from './authentication/stores'
import AuthenticationRoutes from "./authentication/routes"
import "./App.css"
import { ProductRoutes } from "./eCommerceApp/routes"

@observer
class App extends React.Component {

  @observable selectedTheme = 'light'

  getCurrentTheme = () => {
    return themeStore.selectedTheme;
  }

  setCurrentTheme = (theme) => {
    themeStore.setCurrentTheme(theme);
  }

  // country Dashboard themeoptions

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
    }
  }

  // themeOptions = {
  //   light: {
  //     id: "0",
  //     displayText: 'Dark Mode',
  //     color: "#fff",
  //     textColor: 'black',
  //   },
  //   dark: {
  //     id: "1",
  //     displayText: 'Light Mode',
  //     color: "#2b3945",
  //     textColor: 'white',
  //   },
  // }

  onChangeTheme = () => {
    if (this.getCurrentTheme() === 'light') {
      this.setCurrentTheme('dark');
    }
    else {
      this.setCurrentTheme('light');
    }
  }

  render() {
    return (
      <Provider {...stores} {...authStore}>
      <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        {AuthenticationRoutes}
        <Route path='/ProductPage' component={ProductRoutes}/>
        <Route path='/CountriesDashboardApp'>
    <CountriesDashboardApp onChangeTheme = { this.onChangeTheme } 
      selectedTheme = { this.themeOptions[this.getCurrentTheme()] }/>
      </Route>
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
        <Route path='/mobx-todo-app-API'>
            <TodoAppAPI />
        </Route>
        <Route path='/FormComponents'>
          <FormComponentHome />
        </Route>
        <Route path='/EmojiGame'>
          <EmojiGameDashboardApp onChangeTheme = { this.onChangeTheme } 
            selectedTheme = { this.themeOptions[this.getCurrentTheme()] }/>
        <Route path='/events-app'>
        </Route>
        <Route path='/CounterApp'>
          <CounterApp />
        </Route>
        <Route path='/Mcqs'>
          <Mcq />
        </Route>
          <EventApp />
        </Route>
        <Route path='/grid-game '>
          <GridMemoryGame onChangeTheme = { this.onChangeTheme } 
            selectedTheme = { this.themeOptions[this.getCurrentTheme()] }/>
        </Route>
        <Route exact path='/usersAPI' component = {UsersPage} />
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
        <Route path='/eCommerceApp/'>
          <ProductHome />
        </Route>
        <Route path="/:id">
        <CountryDetails onChangeTheme = { this.onChangeTheme } 
        selectedTheme = { this.themeOptions[this.getCurrentTheme()] }/>
        </Route>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </Provider>
    );
  }
}

export default App;
