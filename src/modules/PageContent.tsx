import React from "react";
import { Route, Routes } from "react-router-dom";

import { ErrorPage } from "../pages/errorPage/ErrorPage";
import { AboutMePage } from "../pages/aboutMePage/AboutMePage";
import { ContactPage } from "../pages/contactPage/ContactPage";
import { ProjectsPage } from "../pages/projectsPage/ProjectsPage";
import { HomePage } from "../pages/homePage/HomePage";
import { TechnologiesPage } from "../pages/technologiesPage/TechnologiesPage";

export const PageContent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutMePage />} />
      <Route path="/technologies" element={<TechnologiesPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};
