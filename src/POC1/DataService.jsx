import alt from "./alt.jsx";
import superagent from "superagent";
class DataSerive {
 
    constructor() {
        this.generateActions(
            "renderJson"
        );
    }

    loadAllRecords(url) {
        this.getRecord(url, function(err, res) {
            this.renderJson(res);
        }.bind(this));

    }

    getRecord(url,callback){
        superagent.get(url)
            .end(function(err, res) {
            if (res === undefined || res.statusCode === 500) {
            }
            else{
                callback(err,res);
            }
        });
    }
}

export default alt.createActions(DataSerive);
