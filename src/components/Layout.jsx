import React from "react";
import Menu from "../menu/Menu.jsx";
import menu from "./layout.scss";
import LayoutBody from "./LayoutBody.jsx";

class Layout extends React.Component {
    render() {
        return <div className="reactjs-poc">
            <div className="nav-bar">
                <Menu menuItems={[{"title": "POC 1", "path": "/poc_one"}, {"title": "POC 2", "path": "/poc_two"}]}>
                </Menu>
            </div>
            <LayoutBody>
                {this.props.children}
            </LayoutBody>
        </div>;
    }
}
export default Layout;
