import React from 'react';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [{text: "Jhumur", status: 'active'}] };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log(this.state.items);
    this.input.value = "";

    event.preventDefault();
  }

  render() {
    const listItems = ['item1', 'item2', 'item3'];
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
        <List entries={this.state.items} />
      </div>
    );
  }
}

export default App;
