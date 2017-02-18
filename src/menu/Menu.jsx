import React from "react";
import {Link} from "react-router";
import menu from "./menu.scss";

class Menu extends React.Component {

    constructor() {
        super();
    }
    render() {
        return <ul className="nav-menu">
            {this.props.menuItems.map(function(item, index) {
                return <li key={index} className="nav-item">
                    <Link to={item.path} className="nav-label">
                        <span dangerouslySetInnerHTML={{__html: item.icon}} ></span>
                        <span className="menu-title">{item.title}</span>
                    </Link>
                </li>;
            })}
        </ul>;
    }
};

Menu.propTypes = {menuItems: React.PropTypes.array};
Menu.defaultProps = {menuItems: []};

export default Menu;
