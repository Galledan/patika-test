import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { render, fireEvent, screen, clipboard } from '@testing-library/react';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
