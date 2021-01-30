import { ChatEngine } from "react-chat-engine";

import "./App.css";

// functional component
const App = () => {
  return (
    //ChatEngine is a component symbolized by capital letter
    <ChatEngine
      //pass props to manipulate behavior
      height="100vh"
      projectID="4c48dea9-fa5f-413f-a37c-a8be17f85113"
      userName="JSM"
      userSecret="1234"
    />
  );
};

export default App;
