import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Header } from "./modules/header/Header";
import { Footer } from "./modules/footer/Footer";
import { PageContent } from "./modules/PageContent";
import { Preloader } from "./pages/preloader/Preloader";

import "./App.scss";

function App() {
  const [showContent, setShowContent] = useState(false);

  setTimeout(() => {
    setShowContent(true);
  }, 4500);

  const pageContent = (
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
  return <>{showContent ? pageContent : <Preloader />}</>;
}

export default App;
