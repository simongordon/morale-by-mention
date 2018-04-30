import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/components/site.css'
import 'semantic-ui-css/components/header.css'
import 'semantic-ui-css/components/grid.css'
import 'semantic-ui-css/components/container.css'
import 'semantic-ui-css/components/segment.css'
import MessageSender from './components/MessageSender';
import RandomUserGetter from './components/RandomUserGetter';

const step = {
  getRandom: 1,
  prepareMessage: 2,
  done: 3,
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: step.getRandom,
      result: null,
    }
  }

  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          {
            this.state.currentStep === step.getRandom && <h1 className="ui header">morale by mention</h1>
          }

          <div className={`ui large form ${this.state.currentStep === step.done ? 'success' : ''}`}>
            <div className="ui stacked segment">
              {
                this.state.currentStep === step.getRandom && <RandomUserGetter after={(result) => { this.setState({ currentStep: step.prepareMessage, result }); }} />
              }
              {
                this.state.currentStep === step.prepareMessage && <MessageSender user={this.state.result} after={() => { this.setState({ currentStep: step.done, result: null }); }} />
              }
              {
                this.state.currentStep === step.done && <div className="ui success message"
                >
                  <div className="header">your morale has been sent!</div>
                  <p>
                    <button
                      className={`ui fluid large submit button`}
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ currentStep: step.getRandom })
                      }}
                    >
                      Send another?
                  </button>
                  </p>
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
