import React, { Component } from 'react';
import List from "./List";

const itemList = [
    {id: 1, text: "Test1"},
    {id: 2, text: "Test2"},
    {id: 3, text: "Test3"},
    {id: 4, text: "Test4"}
];

class App extends Component {
    
    render() {
        return (
            <List list={itemList} />
        );
    }
}

export default App;
