import React from "react"
import { Link, Redirect } from "react-router-dom"

class Home extends React.Component {

  // gotoGridScreenIfLoggedIn = () => {
  //   return (
  //     <Redirect 
  //       to={{
  //         pathname: '/loginPage',
  //       }}
  //     />
  //   )
  // }

  render() {
    // if(true) {
    //   return this.gotoGridScreenIfLoggedIn()
    // }
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/CarsList">1.Cars Fleet</Link> 
            </li>
            <li>
              <Link to="/mobx-car-app">2.Mobx Cars Fleet</Link> 
            </li>
            <li>
              <Link to="/toDOList">3.ToDo App</Link>
            </li>
            <li>
              <Link to = "/mobx-todo-app">4.Mobx ToDo App</Link>
            </li>
            <li>
              <Link to="/FormComponents">5.Form Components</Link>
            </li>
            <li>
              <Link to="/CountriesDashboardApp">6.Countries Dashboard App</Link>
            </li>
            <li>
              <Link to="/EmojiGame">7.Emoji Game</Link>
            </li>
            <li>
              <Link to="/CounterApp">8.Counter App</Link>
            </li>
            <li>
              <Link to="/events-app">9.Events App</Link>
            </li>
            <li>
              <Link to="/grid-game">10.Grid Memory App</Link>
            </li>
            <li>
              <Link to="/mobx-todo-app-API">11.Mobx Todo App API</Link>
            </li>
            <li>
              <Link to="/usersAPI">12.Users API hands-on</Link>
            </li>
            <li>
              <Link to="/loginPage">13.Login Page</Link>
            </li>
          </ul>
        </nav> 
      </div>
    );
  }
}

export default Home;
