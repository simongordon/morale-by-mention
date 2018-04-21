import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/components/site.css'
import 'semantic-ui-css/components/header.css'
import 'semantic-ui-css/components/grid.css'
import 'semantic-ui-css/components/container.css'
import 'semantic-ui-css/components/segment.css'
import {getRandomUser} from './modules/actions';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      finished: false,
      result: null,
    }
  }

  startSpinning() {
    this.setState({fetching: true, finished: false});
    getRandomUser().then(result => {
      this.setState({fetching: false, finished: true, result});
    })
  }

  render() {
    const {fetching, finished, result} = this.state;

    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h1 className="ui header">Compliment spinner thingo</h1>
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <button className="ui fluid large teal submit button"
                disabled={fetching}
                onClick={(e) => {
                  e.preventDefault();
                  this.startSpinning();
                }} >Spin</button>
              </div>
              {
                finished && (
                  <div>
                    <p>finished!</p>
                    <p>Got user {result.id}</p>
                  </div>
                )
              }
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
