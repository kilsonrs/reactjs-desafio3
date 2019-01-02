import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";

// Reactotron => deve ser importado antes do 'store'.
import "./config/reactotron";

import store from "./store";
import Main from "./pages/Main";

import GlobalStyle from "./styles/global";

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Provider store={store}>
          <Main />
        </Provider>
      </Fragment>
    );
  }
}

export default App;
