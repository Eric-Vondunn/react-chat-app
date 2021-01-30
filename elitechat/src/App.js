import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";

import "./App.css";

// functional component
const App = () => {
  //if not logged in stay on home page
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    //ChatEngine is a component symbolized by capital letter
    <ChatEngine
      //pass props to manipulate behavior
      height="100vh"
      projectID="4c48dea9-fa5f-413f-a37c-a8be17f85113"
      userName="JSM"
      userSecret="1234"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
