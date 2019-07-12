import React from 'react';
import List from './List';
import ActiveList from './ActiveList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [{text: "Jhumur", status: 'active'}], showComponent: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this._onButtonActiveClick = this._onButtonActiveClick.bind(this);
    this._onButtonDoneClick = this._onButtonDoneClick.bind(this);
    this._onButtonAllClick = this._onButtonAllClick.bind(this);
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

  _onButtonActiveClick() {
    this.setState({
      showComponent: 'active',
    });
  }

  _onButtonDoneClick() {
    this.setState({
      showComponent: 'done',
    });
  }

  _onButtonAllClick() {
    this.setState({
      showComponent: 'all',
    });
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
        <button onClick={this._onButtonActiveClick}>Active</button>{this.state.showComponent == 'active' ?
           <ActiveList entries={this.state.items} status={"active"} /> :
           null
        }
        <button onClick={this._onButtonDoneClick}>Done</button>{this.state.showComponent == 'done' ?
           <ActiveList entries={this.state.items} status={"done"} /> :
           null
        }
        <button onClick={this._onButtonAllClick}>ALL</button>{this.state.showComponent == 'all' ?
           <List entries={this.state.items} change={ this.changeStatus.bind(this)}/> :
           null
        }
      </div>
    );
  }
}

export default App;
