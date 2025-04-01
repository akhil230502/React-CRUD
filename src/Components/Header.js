import { Link } from "react-router-dom";

export default function Header() {
  return (<div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/about"  className="nav-link">Products</Link>
            <Link to="/contact"  className="nav-link">Contact</Link>
          </div>
        </div>
      </div>
    </nav>

  </div>
  );

}