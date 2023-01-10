import logo from './logo.svg';
import './App.css';
import React from "react";
import {Navigate, Outlet, Route, RouterProvider, Routes} from "react-router-dom";
import navigationConfig from "./navigation/navigationConfig";

function App() {
  return (
      <RouterProvider router={navigationConfig}/>
  );
}

export default App;
