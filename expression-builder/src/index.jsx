import './index.css';
import * as React from 'react';
import {render} from 'react-dom';


class Output extends React.Component {
  render() {
    return <div className="output">
      This is where the result query should show
    </div>
  }
}

class Workspace extends React.Component {
  render() {
    return <div className="input">
    Visual Expression Builder <br />
    This is where you put the little windows.
    </div>;
  }
}

class RootComponent extends React.Component {
  render() {
    return <div className="root">
      <Workspace />
      <Output />
    </div>;
  }
}

render(<RootComponent />, document.getElementById('main'));