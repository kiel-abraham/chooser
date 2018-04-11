import React, { Component } from 'react';
import List from "./List";


class App extends Component {
    
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
        this.choose = this.choose.bind(this);
        this.create = this.create.bind(this);
        this.state = {
			itemList: [],
			chosen: false,
			disabled: true,
			result: ""
		};
    }
	
	remove(val) {
        let array = this.state.itemList;
        array = array.filter(function (x) {
			 return x.text !== val;
		});
		this.setState({itemList: array});
    }
    
    choose() {
        let options = this.state.itemList;
        let r = Math.floor(Math.random() * options.length);
        this.setState({chosen: true});
        this.setState({result: options[r].text});
    }
    
    create(e) {
        e.preventDefault();
        let inputItem = this.refs.createItem.value;
        if (inputItem === "") {
            return;
        }
        let checkValue = this.state.itemList.filter(tag => tag.text === inputItem);
        if (checkValue.length > 0) {
            this.refs.createItem.value = "";
            return;
        }
        let time = Date.now();
        this.state.itemList.push({id: time, text: inputItem});
        this.setState({itemList: this.state.itemList});
        if (this.state.itemList.length > 1) {
            this.setState({disabled: false});
        }
        this.refs.createItem.value = "";
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    { this.state.chosen ?
                    <a href="" className="btn btn-default">Start Over <i className="fa fa-refresh" aria-hidden="true"></i></a>
                    :
                    <div>
                        <form onSubmit={this.create}>
                            <div className="form-group">
                                <label className="control-label" htmlFor="input"></label>
                                <div className="input-group">
                                    <input type="text" id="input" className="form-control" placeholder="Enter an option" autoFocus ref="createItem" autoComplete="off"/>
                                    <span className="input-group-btn">
                                        <button className="btn btn-info">
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                            <span className="sr-only">Add</span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </form>
                        <button className="btn btn-primary" onClick={this.choose} disabled={this.state.disabled}>Choose</button>
                    </div>
                    }
                </div>
                <div className="col-md-6">
                    <List list={this.state.itemList} remove={this.remove} chosen={this.state.chosen} result={this.state.result} />
                </div>
            </div>
        );
    }
}

export default App;