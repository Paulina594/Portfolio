import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageContent } from "./PageContent";

import "../styles/App.css";

function App() {
  return (
    <>
      <Router>
        <div className="app-wrapper">
          {<Header />}
          {<PageContent />}
          {<Footer />}
        </div>
      </Router>
    </>
  );
}

export default App;
