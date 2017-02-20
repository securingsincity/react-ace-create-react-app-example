import React, { Component } from 'react';
import { render } from 'react-dom';
import AceEditor from 'react-ace';
import brace from 'brace';

import 'brace/mode/java';
import 'brace/mode/javascript';

import 'brace/theme/github';
class App extends Component {
  render() {
    return (
      <div className="App">
        <AceEditor
          mode="java"
          theme="github"
          name="blah1"
          height="6em"
        />
      </div>
    );
  }
}

export default App;
