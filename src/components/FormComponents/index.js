import React from 'react';
import NavBar from './Nav.js';
import {
  BrowserRouter as Router,
}
from "react-router-dom";

class FormComponents extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar title="Back Button"/>
      </div>
    </Router>
    );
  }
}

export { FormComponents };

//step-1

/*

method-1
--> divide each FormComponents in seperate files
    --> Greetings
    --> Favourite Dessert
    --> Visited Cities
    --> Your State
    --> Disable Button
--> FormComponents
    --> FormComponents
      --> navbar - back button(use history to back to home page) and Component title
      --> Greetings
        --> navbar - back button(use history to back to home page) and Component title
        -->   variables
          - selectedDessert
          - favoriteDessert
        * Props
          - dessertList - ["Vanilla", "Butterscotch", "Gulab Jamum", "Yoghurt Pots", "Baked Banana", "Chocolate"]
      --> Visited Cities
        --> navbar - back button(use history to back to home page) and Component title
        --> use checkBox to select visited cities
        --> onClick submit - display the text of your visited cities seperated with ','
        * Methods
          - handleCheckboxClick
          - handleSubmit
          - displayVisitedCitiesMessage
          - renderCityOptions
        * State variables
          -visitedCities
            -
            selectedCities -
            cityOptions
        * Props
          - cityList - ["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"]
      --> Your State
        --> navbar - back button(use history to back to home page) and Component title
        --> use options to select the state
        --> onClick submit - display the text of your state with quotes
      --> Disable Button
        --> navbar - back button(use history to back to home page) and Component title
        --> checkbox === true
          --> clickme button should be disabled
          --> display disbled text
        --> checkbox === false
          --> onClickme - display enable text
        * Methods
          - handleChange
          - handleSubmit
          - displayMessage
        * State variables
          - isDisableButtonChecked
          - showMessage
*/


//step-2

/*

--> props -- show data using minimum UI

*/

//-----------------------------------------***----------------------------------

//step-3

/*

Application state

--> userInput
--> ***** activeItemsCount = listOfActiveTodos.length
--> ***** showClearCompletedButton = listOfCompletedTodos.length>0
--> selectedFilterButton = 'All' | 'Active' | 'Completed'
--> EachTodoCheckedState
--> EcahTodoContent
--> EachTodoFoccussedState
--> listOfAllTodos
--> ***** listOfActiveTodos = listOfAllTodos.filter(isChecked === false)
--> ***** listOfCompletedTodos = listOfAllTodos.filter(isChecked === true)
--> ***** showOrHideFooter - length>0

- Minimum Application State



*/

//step-4

/*


*/
