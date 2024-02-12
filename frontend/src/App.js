// import { Button } from "@chakra-ui/react";
import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/chat" component={ChatPage} />
    </div>
  );
}

export default App;
