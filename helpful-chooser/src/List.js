import React, { Component } from 'react';
import Item from "./Item";


class List extends Component {
    
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
    }
    
    remove(text) {
        this.props.remove(text);
    }
    
    render() {
        return (
            <ul className="list-group">
                {this.props.list.map(c => <Item key={c.id} text={c.text} remove={this.props.remove} chosen={this.props.chosen} result={this.props.result} />)}
            </ul>
        );
    }
}

export default List;