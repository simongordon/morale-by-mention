import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/components/site.css'
import 'semantic-ui-css/components/header.css'
import 'semantic-ui-css/components/grid.css'
import 'semantic-ui-css/components/container.css'
import 'semantic-ui-css/components/segment.css'

class App extends Component {
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h1 className="ui header">Employee search</h1>
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <input type="text" placeholder="Name"/>
              </div>
              <div className="field">
                <div className="ui fluid large teal submit button">Search</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
