import { useState, useEffect } from "react";
//Link component will scroll the page smoothly to the element with the id
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  // hamburger nav bar active
  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu(); //call close menu function
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // function is to clean up any event listeners that were added by the useEffect hook.
    // When the component unmounts, the event listeners are removed,
    //ensuring that your component does not continue to listen for events that it no longer needs.
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="logo">
        {/*<img src="./img/Brigita.DEV (4c).png" alt="logo"/>
               style={{ transform: 'scaleX(-1)' }} turnes the letter to oppisite direction
                */}

        <span className="letter">E</span>
        <span className="letter">L</span>
        <span className="letter">G</span>
        <span className="letter">A</span>
        <span className="letter">N</span>
        <span className="letter">T</span>
        <span className="letter">E</span>

        {/* <span
          className="letter"
          style={{ transform: "rotate(-180deg)", margin: "0 2px" }}
        >
          E
        </span> */}
      </div>

      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              My Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mySkills"
              className="navbar--content"
            >
              My Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Contact"
              className="navbar--content "
            >
              Contact Me
            </Link>
          </li>
          {/**add additional navigation here */}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
