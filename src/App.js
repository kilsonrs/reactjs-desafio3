import React, { Component } from "react";
import { Provider } from "react-redux";

// Reactotron => deve ser importado antes do 'store'.
import "./config/reactotron";

import store from "./store";
import Main from "./pages/Main";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
