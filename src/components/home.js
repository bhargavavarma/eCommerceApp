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
                            <Link to="/toDOList">2.ToDo List</Link>
                        </li>
                        <li>
                            <Link to = "/mobx-todo-app">3.Mobx ToDo App</Link>
                        </li>
                        <li>
                            <Link to="/FormComponents">4.Form Components</Link>
                        </li>
                        <li>
                            <Link to="/CountriesDashboardApp">5.Countries Dashboard App</Link>
                        </li>
                        <li>
                            <Link to="/EmojiGame">6.Emoji Game</Link>
                        </li>
                        <li>
                            <Link to="/CounterApp">7.Counter App</Link>
                        </li>
                        <li>
                            <Link to="/Mcqs">8. Mcq</Link>
                        </li>
                    </ul>
                </nav> 
            </div>
        );
    }
}

export default Home;
