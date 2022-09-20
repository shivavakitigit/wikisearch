import React from "react";
import WikiSearch from "./Pages/WikiSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));

function App() {
  return (
    // <div style={{backgroundColor:'green'}}>
    //   <BrowserRouter>

    //   <Routes>
    //     <Route path="/" element={<WikiSearch />}>

    //     </Route>
    //   </Routes>

    // </BrowserRouter>
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WikiSearch />}>
          <Route index element={<WikiSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
