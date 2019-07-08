import React, { Component } from 'react'
import $ from "jquery"
import './List.css'

class List extends Component {
  constructor(props) {
    super(props);
    this.changeStatus = this.changeStatus.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  changeStatus(e) {
    e.currentTarget.style.textDecoration = 'line-through';
    this.props.change(e.currentTarget.getAttribute('data-key'));
    e.preventDefault();
  }

  createTask(item) {
    if (item.status != 'done') {
      return <li className="list-items" data-key={item.key} onClick={this.changeStatus}>{item.text}</li>
    }
  }

  render() {
    const items = this.props.entries;
    const listItems = items.map(this.createTask);
    return (
      <ul className="to-do-list">
        {listItems}
      </ul>
    );
  }
}
export default List;
