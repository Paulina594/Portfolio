import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Header } from "./modules/header/Header";
import { Footer } from "./modules/footer/Footer";
import { PageContent } from "./modules/PageContent";

import "./App.scss";

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
