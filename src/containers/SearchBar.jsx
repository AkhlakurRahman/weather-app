import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    searchInput: ''
  };

  inputChangeHandler = event => {
    this.setState({
      searchInput: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} className='input-group'>
        <input
          placeholder='Search for 5 days weather forecast'
          className='form-control'
          value={this.state.searchInput}
          onChange={this.inputChangeHandler}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>
            Submit
          </button>
        </span>
      </form>
    );
  }
}
