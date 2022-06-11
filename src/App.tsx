import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Header } from "./modules/header/Header";
import { Footer } from "./modules/footer/Footer";
import { PageContent } from "./modules/PageContent";
import { Preloader } from "./pages/preloader/Preloader";

import "./App.scss";

function App() {
  const [showContent, setShowContent] = useState(false);

  setTimeout(() => {
    setShowContent(true);
  }, 3600);

  const pageContent = (
    <>
      <Router>
        <div>
          <Toaster position="bottom-left" reverseOrder={false} />
        </div>
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
