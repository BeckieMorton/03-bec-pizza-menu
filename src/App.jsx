import React from "react";
import { Header } from "./component/Header";
import { Menu } from "./component/Menu";
import { Footer } from "./component/Footer";

import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
