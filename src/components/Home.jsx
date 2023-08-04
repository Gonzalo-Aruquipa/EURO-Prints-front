import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

import { Prints } from "./Prints";
import "../App.css";
export const Home = () => {
  return (
    <>
        <Navbar />
      <div className="home">
        <Sidebar/>
        <Prints/>
      </div>
    </>
  );
};
