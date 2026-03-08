import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from './home/ui/HomePage';

export const Pages: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);
