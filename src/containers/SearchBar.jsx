import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    searchInput: ''
  };

  onInputChange = event => {};

  render() {
    return (
      <form className='input-group'>
        <input
          placeholder='Search for 5 days weather forecast'
          className='form-control'
          value={this.state.searchInput}
          onChange={this.onInputChange}
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
