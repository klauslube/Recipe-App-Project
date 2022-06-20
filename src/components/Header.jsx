import React, {Component} from 'react';
import { connect } from 'react-redux'
import SearchBar from './SearchBar';

class Header extends Component {
constructor() {
  super();
  this.state = {
    toggleInput: false,
  }
}
  handleSearch = (event) => {
  event.preventDefault();
    if (toggleInput) {
      return (
      <input data-testid="search-input" />)
    }
    this.setState({toggleInput: false});

  }

  render() {
    const {history} = this.props;
    return(
      <div> 
        <form>
          <button onClick={history.push('/profile')} type='button' data-testid="profile-top-btn">
            <i className='profileIcon'></i>
          </button>
          <span data-testid="page-title">{}</span>
          <button 
            onClick={ this.handleSearch } 
            type='submit' 
            data-testid="search-top-btn"
          >
            {}
          </button>
        </form>
        <SearchBar />
      </div>
    )
  }


}

export default connect()(Header);