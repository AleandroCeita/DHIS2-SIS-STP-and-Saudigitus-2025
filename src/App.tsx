import { useDataQuery } from "@dhis2/app-runtime";
import React, { FC } from "react";

import classes from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { NavbarSaude } from "./components/navbarSaude/NavbarSaude";
import "bootstrap/dist/css/bootstrap.min.css";


const MyApp: FC = () => {
  return (
    <>
      <div className={classes.container}>
        <br />
        <BrowserRouter>
          <div>
            <NavbarSaude />
            <br />
          </div>

          <AppRoutes />
          <br />
        </BrowserRouter>
        
      </div>
    </>
  );
};

export default MyApp;
