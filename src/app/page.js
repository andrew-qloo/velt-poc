"use client";

import { useLayoutEffect, useState } from "react";
import App from "./App";
import "./styles/index.scss";

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    setIsReady(true);
  }, []);

  return isReady ? <App /> : null;
}
