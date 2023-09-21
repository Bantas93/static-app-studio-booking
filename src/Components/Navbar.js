// import { NavLink } from "react-router-dom";

const Navbar = () => {
  // const navLinkStyles = ({ isActive }) => {
  //   return {
  //     color: isActive ? "white" : "white",
  //     textDecoration: isActive ? "none" : "none",
  //     fontWeight: isActive ? "bold" : "",
  //     opacity: isActive ? "50%" : "50%",
  //   };
  // };
  return (
    <nav class="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
      <div class="container justify-content-center">
        {/* <button
          class="navbar-toggler navbar-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        > */}
        <div class="navbar-nav text-center">
          {/* <NavLink to="/" style={navLinkStyles} className="m-1 p-1">
              Dashboard
            </NavLink> */}
          <NavLink to="/" style={navLinkStyles} className="m-1 p-1">
            App Booking
          </NavLink>
          {/* <h4 className="text-white-50">App Booking</h4> */}
        </div>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
