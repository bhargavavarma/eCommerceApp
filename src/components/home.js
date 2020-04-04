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
                            <Link to="/CarsList">1.CarsList</Link>
                        </li>
                        <li>
                            <Link to="/toDOList">2.ToDoList</Link>
                        </li>
                        <li>
                            <Link to="/FormComponents">3.Form Components</Link>
                        </li>
                        <li>
                            <Link to="/CountriesDashboardApp">4.Countries Dashboard App</Link>
                        </li>
                        <li>
                            <Link to="/EmojiGame">5.EmojiGame</Link>
                        </li>
                    </ul>
                </nav> 
            </div>
        );
    }
}

export { Home };
