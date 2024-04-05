"use client";

import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Home } from "@/screens";
import { VeltProvider } from "@veltdev/react";

import Header from "./Header";

const name = "rakesh";

const App = () => {
  return (
    <VeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_API_KEY}>
      <div>
        <Header />
        {name ? (
          <HashRouter>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route
                element={<Dashboard name={name} />}
                path="/dashboards/:id"
              />
            </Routes>
          </HashRouter>
        ) : null}
      </div>
    </VeltProvider>
  );
};

export default App;
