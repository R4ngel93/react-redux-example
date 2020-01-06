import React, { Component } from 'react';
import File1 from './File1.js';
import File2 from './File2.js';

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    status: false
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        changeStatus: () => this.setState(prevState => {
          return {
            status: !prevState.status
          }
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

function App() {
  return (
    <MyProvider>
      <div>
        <File1 />
        <File2 />
      </div>
    </MyProvider>
  );
}

export default App;
export { MyContext };


