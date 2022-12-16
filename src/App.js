import  LandingPage  from "./components/LandingPage/LandingPage";
import "./app.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostView from "./components/PostView/PostView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/posts/*" element={<PostView/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
