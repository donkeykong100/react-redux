import React from "react";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
