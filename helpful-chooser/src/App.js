import React, { Component } from 'react';
import List from "./List";


class App extends Component {
    
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
        this.state = {
			itemList: []
		};
    }
    
    componentDidMount() {
		this.setState({
            itemList:[
                {id: 1, text: "Test1"},
                {id: 2, text: "Test2"},
                {id: 3, text: "Test3"},
                {id: 4, text: "Test4"}
            ]
        });
	}
    
    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <label className="control-label" htmlFor="input"></label>
                            <div className="input-group">
                                <input type="text" id="input" className="form-control" placeholder="Enter an option" autoFocus />
                                <span className="input-group-btn">
                                    <button className="btn btn-info" type="button">
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                        <span className="sr-only">Add</span>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </form>
                    {/*
                    <a href="" className="btn btn-warning">Start over</a>
                    <a href="" className="btn btn-primary">Choose</a>
                    */}
                </div>
                <div className="col-md-6">
                    <List list={this.state.itemList} remove={this.remove}/>
                </div>
            </div>
        );
    }
    
    remove(val) {
        let array = this.state.itemList;
        array = array.filter(function (x) {
			 return x.text !== val;
		});
		this.setState({itemList: array});
    }
}

export default App;
