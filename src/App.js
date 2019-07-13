import ReactDOM from 'react-dom';
import React from 'react';
import List from './List';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [{text: "Jhumur", status: 'active'}], showComponent: false, filtered: [], searches: 'false' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this._onButtonActiveClick = this._onButtonActiveClick.bind(this);
    this._onButtonDoneClick = this._onButtonDoneClick.bind(this);
    this._onButtonAllClick = this._onButtonAllClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.input.value !== "") {
      var newItem = {
        text: this.input.value,
        key: Date.now(),
        status: 'active',
      };
      
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });
      this.input.value = "";
      this.state.showComponent = 'false';
    }

    else {
      return
    }
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
  
  handleSearch(e) {
    e.preventDefault();
    if (e.target.searchBar.value != "") {
      this.state.items.map((item) => {
        if (item.text.toLowerCase() == e.currentTarget.searchBar.value.toLowerCase()) {
          this.setState((prevState) => {
            return {
              filtered: prevState.filtered.concat(item),
              searches: 'true'
            };
          });
        }
        else {
          this.setState({searches: 'false'});
        }
      });
    }
    e.currentTarget.searchBar.value = "";
  }
  
  render() {
    return (
      <div id="container">
        <form onSubmit={this.handleSubmit}>
          <label>
          Tell us what you want to do: </label>
          <input ref = {(a) => this.input = a}
                   placeholder = "Enter Item" />
          <input type="submit" value="Submit" />
        </form>

        <button className="status-button" onClick={this._onButtonActiveClick}>Active</button>
        <button className="status-button" onClick={this._onButtonDoneClick}>Done</button>
        <button className="status-button" onClick={this._onButtonAllClick}>ALL</button>

        <div className="search">
		      <form onSubmit={this.handleSearch}>
		        <input type="text" name="searchBar" placeholder = "Enter Item to search" />
		        <input type="submit" value="Submit" />
		      </form>
        </div>
        
        <div className="todo-list">
          <h3>Your To Do List</h3>
          { this.state.searches == "true" ? <List entries={this.state.filtered} searchAction={"true"} change={ this.changeStatus.bind(this)} /> : null } 
	
          {this.state.showComponent == 'false' ?
            <List entries={this.state.items} change={ this.changeStatus.bind(this)} status={"all"} /> : null
          }

          {this.state.showComponent == 'active' ?
            <List entries={this.state.items} status={"active"} change={ this.changeStatus.bind(this)} /> : null
          }

          {this.state.showComponent == 'done' ?
            <List entries={this.state.items} status={"done"} change={ this.changeStatus.bind(this)} /> : null
          }

          {this.state.showComponent == 'all' ?
            <List entries={this.state.items} change={ this.changeStatus.bind(this)} status={"all"} /> : null
          }
        </div>
      </div>
    );
  }
}

export default App;
