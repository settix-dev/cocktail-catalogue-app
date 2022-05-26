import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-main w-100 position-fixed top-0">
      <div className="container-fluid d-flex">
        <span className="navbar-brand mb-0 h1 navbar-brand-h1">
          SETTIX DRINKS
        </span>
        <div className="d-flex">
          <span className="nav-item">
            <a
              className="nav-link active nav-link-page"
              aria-current="page"
              href="/"
            >
              Home
            </a>
          </span>
          <span className="nav-item">
            <a className="nav-link nav-link-page" href="/cocktails">
              Cocktails
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
