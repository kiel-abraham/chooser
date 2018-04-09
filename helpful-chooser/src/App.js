import React, { Component } from 'react';
import List from "./List";


class App extends Component {
    
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
        this.choose = this.choose.bind(this);
        this.state = {
			itemList: [],
			choose: false,
			result: ""
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
                    { this.state.choose ?
                    <a href="" className="btn btn-default">Start Over <i className="fa fa-refresh" aria-hidden="true"></i></a>
                    :
                    <div>
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
                        <button className="btn btn-primary" onClick={this.choose}>Choose</button>
                    </div>
                    }
                </div>
                <div className="col-md-6">
                    <List list={this.state.itemList} remove={this.remove} choose={this.state.choose} result={this.state.result} />
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
    
    choose() {
        let list = this.state.itemList;
        let r = Math.floor(Math.random() * list.length);
        this.setState({choose: true});
        this.setState({result: list[r].text});
    }
}

export default App;
