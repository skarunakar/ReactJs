import React  from 'react';
import pcone from "./pocone.scss";
import Menu from "../menu/Menu.jsx";
import LayoutBody from "../components/LayoutBody.jsx";


export default class PocOne extends React.Component {
    constructor(){
        super();
    }
    render() {
        return <div className="reactjs-poc">
            <div className="nav-bar">
                <Menu menuItems={[{"title": "Render 1 record ", "path": "/exp-one/show-1" ,"dataSet":"1"},
                                  {"title": "Render 10 record", "path": "/exp-one/show-10", "dataSet":"10"},
                                  {"title": "Render 100 record", "path": "/exp-one/show-100", "dataSet":"100"},
                                  {"title": "Render 1000 record", "path": "/exp-one/show-1000", "dataSet":"1000"},
                                  {"title": "Render 10000 record", "path": "/exp-one/show-10000", "dataSet":"10000"},
                                  {"title": "Render 100000 record", "path": "/exp-one/show-100000", "dataSet":"100000"}
                       
                            ]}>
                </Menu>
            </div>
            <LayoutBody>
                {this.props.children}
            </LayoutBody>
        </div>;
    }
}

