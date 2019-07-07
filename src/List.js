import React, { Component } from 'react'
import $ from "jquery"
import './List.css'

class List extends Component {
  constructor(props) {
    super(props);
    this.changeStatus = this.changeStatus.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  changeStatus(e,key) {
    e.currentTarget.style.textDecoration = 'line-through';
    this.setState((prevState) => {
      prevState.items.find((item) => item.key == key ? item.status: 'done' : item.status: 'active')
    });
    e.preventDefault();
  }

  createTask(item) {
    return <li className="list-items" key={item.key} onClick={this.changeStatus(item.key)}>{item.text}</li>
  }

  render() {
    const items = this.props.entries;
    console.log(items[0].status);
    const listItems = items.map(this.createTask);
    return (
      <ul className="to-do-list">
        {listItems}
      </ul>
    );
  }
}
export default List;
