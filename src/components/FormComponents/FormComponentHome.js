import React from "react";
import {
  Link
}
from "react-router-dom";

class FormComponentHome extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Greetings">Greetings</Link>
            </li>
            <li>
              <Link to="/FavouriteDessert">Favourite Dessert</Link>
            </li>
            <li>
              <Link to="/VisitedCities">Visited Cities</Link>
            </li>
            <li>
              <Link to="/YourState">Your State</Link>
            </li>
            <li>
              <Link to="/DisableButton">Disable Button</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export { FormComponentHome };
