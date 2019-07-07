import React, { Component } from 'react'
import $ from "jquery"
import './List.css'

class List extends Component {
  constructor(props) {
    super(props);
    this.state ={ items: props.entries }
    this.changeStatus = this.changeStatus.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  changeStatus(e) {
    e.currentTarget.style.textDecoration = 'line-through';
    this.setState((prevState) => {
      console.log(prevState.items)
      return prevState.items.find((item) => item.key == e.key ? item.status ='done' : item.status = 'active')
    });
    e.preventDefault();
  }

  createTask(item) {
    if (item.status != 'done') {
      return <li className="list-items" key={item.key} onClick={this.changeStatus}>{item.text}</li>
    }
  }

  render() {
    const items = this.props.entries;
    console.log(items);
    const listItems = items.map(this.createTask);
    return (
      <ul className="to-do-list">
        {listItems}
      </ul>
    );
  }
}
export default List;
