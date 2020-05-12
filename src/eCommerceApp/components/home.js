import React from "react"
import { Link } from "react-router-dom"

class ProductHome extends React.Component {

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/ProductPage">1.E-Commerce App</Link> 
            </li>
          </ul>
        </nav> 
      </div>
    );
  }
}

export default ProductHome;
