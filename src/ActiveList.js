import React, { Component } from 'react'

class ActiveList extends Component {
  constructor(props) {
    super(props);
    this.showList = this.showList.bind(this)
  }

  showList(item, status) {
    if (item.status == status) {
      return <li key={item.key}>{item.text}</li>
    }
  }

  render() {
    const items = this.props.entries;
    const status = this.props.status;
    return (
      <ul className="to-do-list-active">
        { items.map((item) => {
            if(item.status == status) {
              return <li key={item.key}>{item.text}</li>
            }
        })}
      </ul>
    );
  }
}
export default ActiveList;
