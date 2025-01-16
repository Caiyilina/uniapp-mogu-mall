import React, { memo } from "react";

const App = memo((props) => {
  const { children } = props;
  return <div>{children}</div>;
});

export default App;
