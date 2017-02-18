import React  from 'react';
import {Link} from "react-router";
import pcone from "./pocone.scss";

export default class PocOne extends React.Component {
    constructor(){
        super();
    }

    render() {

        return (
         <div className="header" >
             <Link className="con-opt" to={ {pathname:"poc_one/data-set", query: {dataSet: "1" }}}>1</Link>
             <Link className="con-opt" to={{pathname:"poc_one/data-set", query: {dataSet: "10" }}}>10</Link>
             <Link className="con-opt" to={{pathname:"poc_one/data-set", query: {dataSet: "100" }}}>100</Link>
             <Link className="con-opt" to={{pathname:"poc_one/data-set", query: {dataSet: "1000" }}}>1000</Link>
             <Link className="con-opt" to={{pathname:"poc_one/data-set", query: {dataSet: "10000" }}}>10000</Link>
             <Link className="con-opt" to={{pathname:"poc_one/data-set", query: {dataSet: "100000" }}}>100000</Link>
             <div className="con-opt"> REACT JS </div>
         </div>
        );
    }
}