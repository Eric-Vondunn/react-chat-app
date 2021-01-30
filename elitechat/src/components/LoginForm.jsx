import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "4c48dea9-fa5f-413f-a37c-a8be17f85113",
      "User-Name": username,
      "User-Secret": password,
    };

    //async code
    //username | password => chatengine => give messages
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      //works out => logged in

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (err) {
      //error => try with new username
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">React Chat</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Enter</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
