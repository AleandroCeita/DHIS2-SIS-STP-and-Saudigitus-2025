import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/home/Home";
import { Sis } from "../components/sis/Sis";
import { Rss } from "../components/Rss";
import { Post } from "../components/Post";

import { Enfermeiro } from "../pages/enfermeiro/Enfermeiro";
import { Laboratorio } from "../pages/laboratorio/Laboratorio";
import { ProcessoUnico } from "../pages/processoUnico/ProcessoUnico";
import { TableComponent } from "../components/TableComponent";
import { TableComponent1 } from "../components/TableComponent1";
import { FormApp } from "../components/formapp/FormsApp"; // Adjust the import path as necessary
import { Welcome } from "../components/welcome";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sis" element={<Sis />} />
      <Route path="/rss" element={<Rss />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/post" element={<Post />} />
      <Route path="/tablecomponent" element={<TableComponent />} />
      <Route path="/tablecomponent1" element={<TableComponent1 />} />
      <Route path="/enfermeiro" element={<Enfermeiro />} />
      <Route path="/laboratorio" element={<Laboratorio />} />
      <Route path="/processounico" element={<ProcessoUnico />} />
      <Route path="/formapp" element={<FormApp />} />
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
}
