import React  from 'react';
import Request from 'react-http-request';

export default class PocOne extends React.Component {
    constructor(){
        super();
        this.item = [];
        this.responseRecieved = true;
        this.invokeRender = this.invokeRender.bind(this);
    }
    invokeRender() {
        this.responseRecieved = false;
        this.setState(this.state);
    }
    render() {
        var table =  this.item.map(function(trow,index){
            return(
                <tr>
                    <td>{trow._id}</td>
                    <td>{trow.name}</td>
                    <td>{trow.gender}</td>
                    <td>{trow.age}</td>
                    <td>{trow.marks}</td>
                </tr>);
        }.bind(this));
        var query_param = this.props.location.query.dataSet;
        return (
            <Request
                url= {'http://localhost:8000?dataSet=' + query_param}
                method='get'
                accept='application/json'
                verbose={true}
            >
                {
                    ({error, result, loading}) => {
                        if (loading) {
                            return <div>loading...</div>;
                        } else {
                            this.item = result.body.var;
                            if(this.responseRecieved){
                                this.invokeRender();
                            }
                            return (
                                <div>
                                 <p>DOM load for {this.props.location.query.dataSet}</p>
                                <table>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Age</th>
                                        <th>Marks</th>
                                    </tr>
                                    {table}
                                </table>
                                </div>
                            );
                        }
                    }
                }
            </Request>
        );
    }
}