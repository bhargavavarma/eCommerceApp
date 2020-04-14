import React from "react";
import {
    Link
}
from "react-router-dom";

class Home extends React.Component {
    render() {
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
                    </ul>
                </nav> 
            </div>
        );
    }
}

export default Home;
