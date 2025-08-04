import { useDataQuery } from "@dhis2/app-runtime";
import i18n from "@dhis2/d2-i18n";
import React, { FC } from "react";
import classes from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { AppRoutes } from "./Routes";
import { Menu } from "./Components/Menu";

interface QueryResults {
  me: {
    name: string;
  };
}

const query = {
  me: {
    resource: "me",
  },
};

const MyApp: FC = () => {
  const { error, loading, data } = useDataQuery<QueryResults>(query);

  if (error) {
    return <span>{i18n.t("ERROR")}</span>;
  }

  if (loading) {
    return <span>{i18n.t("Loading...")}</span>;
  }

  return (
    <>
      <div className={classes.container}>
        <h1>{i18n.t("Hello {{name}}", { name: data?.me?.name })}</h1>
        <h3>{i18n.t("Welcome to DHIS2 with TypeScript!")}</h3>
        <BrowserRouter>
          <div>
            <Menu />
          </div>

          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default MyApp;
