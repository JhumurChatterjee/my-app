import React from 'react';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [{text: "Jhumur", status: 'active'}] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showActive = this.showActive.bind(this);
  }

  handleSubmit(event) {
    if (this.input.value !== "") {
      var newItem = {
        text: this.input.value,
        key: Date.now(),
        status: 'active'
      };
    }

    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });
    this.input.value = "";

    event.preventDefault();
  }

  changeStatus(listItem) {
    this.setState((prevState) => {
      return prevState.items.map((item) => item.key == listItem ? item.status ='done' : "");
    });
  }

  showActive() {
    return <List entries={this.state.items} status="active" />
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input ref = {(a) => this.input = a}
                   placeholder = "Enter Item" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={ this.showActive }>Active</button>
        <button>Done</button>
        <button>All</button>
        <List entries={this.state.items} change={ this.changeStatus.bind(this)} />
      </div>
    );
  }
}

export default App;
