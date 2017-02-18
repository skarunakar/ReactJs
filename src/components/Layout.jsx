import React from "react";
import menu from "./layout.scss";

class Layout extends React.Component {
    render() {
        return <div>
            {this.props.children}
        </div>;
    }
}
export default Layout;
