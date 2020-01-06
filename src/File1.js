import React from 'react';
import { MyContext } from './App'


class File1 extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <h1>React's Context API example</h1>
              <p>{'Status: ' + context.state.status.toString()}</p>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default File1;
