import React, { memo } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const App = memo((props) => {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
});

export default App;
