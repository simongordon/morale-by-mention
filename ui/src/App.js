import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/components/site.css'
import 'semantic-ui-css/components/header.css'
import 'semantic-ui-css/components/grid.css'
import 'semantic-ui-css/components/container.css'
import 'semantic-ui-css/components/segment.css'
import { getRandomUser } from './modules/actions';
import MessageSender from './components/MessageSender';
import RandomUserGetter from './components/RandomUserGetter';

const step = {
  getRandom: 1,
  prepareMessage: 3,
  done: 4,
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: step.getRandom,
      result: null,
    }
  }

  startSpinning() {
    getRandomUser().then(result => {

    })
  }

  render() {
    const { fetching, finished, result } = this.state;

    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h1 className="ui header">Compliment spinner thingo</h1>
          <div className="ui large form">
            <div className="ui stacked segment">
              {
                this.state.currentStep == step.getRandom && <RandomUserGetter after={(result) => { this.setState({ currentStep: step.prepareMessage, result }); }} />
              }
              {
                this.state.currentStep == step.prepareMessage && <MessageSender to={this.state.result} after={(result) => { this.setState({ currentStep: step.done, result: null }); }} />
              }
              {
                this.state.currentStep == step.done && <div>
                  <p>Done!</p>
                  <button onClick={(e) => {
                    e.preventDefault();
                    this.setState({currentStep: step.getRandom})
                  }}>Try again?</button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
