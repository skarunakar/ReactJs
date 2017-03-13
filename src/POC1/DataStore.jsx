import alt from "./alt.jsx";
import DataService from "./DataService.jsx";

class DataStore {


    constructor() {
        this.bindActions(DataService);
        this.recordList = [];
    }

    onRenderJson(res) {
        this.recordList = res.body;
        window.performance.mark("startLoad");
    }
}

export default alt.createStore(DataStore, "DataStore");