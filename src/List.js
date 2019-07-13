import React, { Component } from 'react'
import $ from "jquery"
import './List.css'

class List extends Component {
  constructor(props) {
    super(props);
    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus(e) {
    e.currentTarget.style.textDecoration = 'line-through';
    this.props.change(e.currentTarget.getAttribute('data-key'));
    e.preventDefault();
  }


  render() {
    const items = this.props.entries;
    const status = this.props.status;
    const searchAction = this.props.searchAction;
    return (
      <ul className="to-do-list">
        { items.map((item) => {
          if(item.status == status || searchAction == "true") {
            if (status == 'done') {
              return <li className="list-items status-done" data-key={item.key} onClick={this.changeStatus}>{item.text}</li>
            }
            else {
              return <li className="list-items" data-key={item.key} onClick={this.changeStatus}>{item.text}</li>
            }
          }

          if (status == "all") {
            if (item.status == 'done') {
              return <li className="list-items status-done" data-key={item.key} onClick={this.changeStatus}>{item.text}</li>
            }
            else {
              return <li className="list-items" data-key={item.key} onClick={this.changeStatus}>{item.text}</li>
            }
          }
        })}
      </ul>
    );
  }
}
export default List;
