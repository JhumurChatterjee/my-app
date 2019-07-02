import React, { Component } from 'react'

class List extends Component {

  createTask(item) {
    return <li key={item.key}>{item.text}</li>
  }

  render() {
    const items = this.props.entries;
    console.log(items);
    const listItems = items.map(this.createTask);
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}
export default List;
