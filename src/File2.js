import React from 'react';
import { MyContext } from './App'


function File2() {
  return (
    <div>
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <button onClick={context.changeStatus}>Change status</button>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    </div>
  );
}

export default File2;
