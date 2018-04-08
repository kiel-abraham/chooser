import React, { Component } from 'react';
import Item from "./Item";

class List extends Component {
    
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
    }
    
    render() {
        return (
            <ul className="list-group">
                {this.props.list.map(c => <Item key={c.id} item={c.text} remove={this.remove}/>)}
            </ul>
        );
    }
    
    remove(text) {
        this.props.remove(text);
    }
}

export default List;