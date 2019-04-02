import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import { GET_DATA } from './store/constants';

interface IProps {
  getData?: any;
  data?: any;
}

class App extends PureComponent<IProps> {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { data } = this.props;

    const createList = data.map((i: any) => (
      <li key={i.id}>
        {i.id}/ {i.title}
      </li>
    ));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>{createList}</ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect(
  ({ data }: any) => ({ data }),
  dispatch => ({ getData: () => dispatch({ type: GET_DATA }) }),
)(App);
