import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { KanbanPage } from "./KanbanPage";
import { NotFoundPage } from "./NotFoundPage";

export enum Paths {
  HOME = "/",
  KANBAN = "/kanban",
}

export const Router: FC = () => {
  return (
    <Routes>
      <Route path={Paths.HOME} element={<HomePage />} />
      <Route path={Paths.KANBAN} element={<KanbanPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
