import React from 'react';

class File1 extends React.Component {
  constructor() {
    super()
    this.state = {
      status: false
    }
  }
  render() {
    return (
      <div>
        Status: {this.state.status.toString()}
      </div>
    );
  }
}

export default File1;
