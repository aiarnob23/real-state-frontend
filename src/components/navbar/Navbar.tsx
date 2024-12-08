import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom"; // Assumes you're using React Router

export default function Navbar() {
  return (
    <div>
      <div className="navbar p-0 pt-[20px] pb-[20px] max-w-[1280px] container mx-auto bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.activeNav : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive ? styles.activeNav : ""
                  }
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/property"
                  className={({ isActive }) =>
                    isActive ? styles.activeNav : ""
                  }
                >
                  Property
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? styles.activeNav : ""
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost font-bold text-2xl">Phoenix</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.activeNav : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) => (isActive ? styles.activeNav : "")}
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/property"
                className={({ isActive }) => (isActive ? styles.activeNav : "")}
              >
                Property
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.activeNav : "")}
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#646EE4] text-white">Login</a>
        </div>
      </div>
    </div>
  );
}
