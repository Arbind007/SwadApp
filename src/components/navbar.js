import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-between"
      id="ram"
    >
      <div className="container my-2">
        <Link to="/" className="navbar-brand text-white font-weight-bold ">
          <h2> Shopping App</h2>
        </Link>

        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav">
            <Link to="/" className="navbar-brand text-light mx-5 h3 my-auto">
              <h4> Shop </h4>
            </Link>
            <Link to="/cart" className="text-light mx-2 h3 my-auto">
              <i class="fas fa-shopping-cart"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
