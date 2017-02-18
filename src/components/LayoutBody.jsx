import React from "react";
import layoutbody from "./layoutbody.scss";

class LayoutBody extends React.Component {
    render() {
        return <div className="body">
            {this.props.children}
        </div>;
    }
}

export default LayoutBody;
