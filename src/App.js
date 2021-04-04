import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SidebarRight from "./SidebarRight";
import Footer from "./Footer";
import Slider from "./Slider";

function App() {
  return (
    <div className="app">
      <Header />
      <Slider />
      <div className="app__body">
        <Sidebar />
        <SidebarRight />
      </div>
      <Footer />
    </div>
  );
}

export default App;
