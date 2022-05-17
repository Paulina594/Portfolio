import React from "react";
import { Route, Routes } from "react-router-dom";

import { ErrorPage } from "../pages/ErrorPage";
import { AboutMePage } from "../pages/AboutMePage/AboutMePage";
import { ContactPage } from "../pages/ContactPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { HomePage } from "../pages/HomePage";
import { Technologies } from "../pages/technologies/Technologies";

export const PageContent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutMePage />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route element={<ErrorPage />} />
    </Routes>
  );
};
