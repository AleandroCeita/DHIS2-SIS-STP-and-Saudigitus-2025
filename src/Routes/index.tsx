import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Home } from "../Pages/Home";
import { Sis } from "../Components/Sis";
import { Rss } from "../Components/Rss";
import { Post } from "../Components/Post";
import { Redirect } from "../Components/Redirect";
import { NotFound } from "../Components/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sis" element={<Sis />} />
      <Route path="/rss" element={<Rss />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/post" element={<Post />} />
      <Route path="/redirect" element={<Redirect />} />
    </Routes>
  );
}
