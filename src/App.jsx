
import React from "react";

class App extends React.Component {
  render() {
    const { name, test } = this.props;
    return (
      <>
        <h1>
          Hello {name}. Test: {test}
        </h1>
      </>
    );
  }
}

export default App;
