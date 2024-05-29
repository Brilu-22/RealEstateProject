import Navbar from "../../Navbar/Navbar";
import Home from "../homepage/Home";
import "./layout.scss";

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default Layout;
