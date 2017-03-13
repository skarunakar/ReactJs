import React  from 'react';
import DataService from "./DataService.jsx";
import DataStore from "./DataStore.jsx";
import trial from "./trial.json";


export default class PocOneSetOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complete : ""
        }
        this.state = DataStore.getState();
        this.update = this.update.bind(this);
        this.trial = trial.list;
    }
    onChange(state) {
        this.setState(state);
    }
    componentDidMount() {
        var query_param = this.props.location.query.dataSet;
        DataStore.listen(this.onChange.bind(this));
        DataService.loadAllRecords("http://localhost:8000?dataSet=" + query_param);
    }
    componentDidUpdate(){
        if (window.performance.getEntriesByName("startLoad").length != 0) {
            window.performance.mark("endLoading");
            window.performance.measure("name", "startLoad", "endLoading");
            var array = window.performance.getEntriesByType('measure');
            console.log(array[array.length - 1].duration);
            window.performance.clearMarks();
            window.performance.clearMeasures();
        }     
    }
    componentWillReceiveProps(newProps){
        DataService.loadAllRecords("http://localhost:8000?dataSet=" + newProps.location.query.dataSet);
    }
    componentWillUnmount() {
            DataStore.unlisten(this.onChange.bind(this));
     }
    update(e){
      var id = this.props.location.query.dataSet;
      var index = Math.log(id)/Math.log(10)
      index = Math.ceil(index)
      this.state.recordList = this.trial[index];
      window.performance.mark("startLoad");
      this.setState(this.state);
    }
    render() {
        var table = this.state.recordList.map(function (trow, index) {
            return (
                <tr key={index}>
                    <td key={index}>{trow._id}</td>
                    <td>{trow.name}</td>
                    <td>{trow.gender}</td>
                    <td>{trow.age}</td>
                    <td>{trow.marks}</td>
                </tr>);
        }.bind(this));
        var displayStat = this.state.recordList.length == 0 ? null : <div className="displayStat">
            <p className="stat-head">DOM RENDERING TIME </p>
            <div><p> Complete time to for request to render => {this.state.complete}</p></div>
            <button className="update-button" onClick={this.update}>Update Records</button>
        </div>;
        return (
            <div className="renderLayout">
                <div>
                    <p className="renderData">DOM load for {this.props.location.query.dataSet} records in
                        REACTJS </p>
                    <table>
                        <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Marks</th>
                        </tr>
                        {table}
                        </tbody>
                    </table>
                </div>
                {displayStat}
            </div>
        );
    }
}
