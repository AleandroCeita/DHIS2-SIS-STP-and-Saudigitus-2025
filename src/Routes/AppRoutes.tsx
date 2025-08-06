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
      <Route path="/enfermeiro" element={<Enfermeiro />} />
      <Route path="/laboratorio" element={<Laboratorio />} />
      <Route path="/medico" element={<ProcessoUnico />} />
    </Routes>
  );
}
