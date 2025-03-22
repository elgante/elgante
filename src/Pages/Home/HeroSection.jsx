// Import Link and scroll from react-scroll
import { Link, animateScroll as scroll } from "react-scroll";

export default function HeroSection() {
  const scrollToContact = () => {
    scroll.scrollTo("Contact", {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Ele Brigante</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span> <br />
            Engineering{" "}
          </h1>
          <p className="hero--section-description">
            Student eager to embark on a journey into the dynamic world of
            technology. <br />
            In active search for professional opportunities with a desire to
            contribute meaningfully
            <br /> to real-world projects.
            <br />
          </p>
        </div>
        {/* Use Link with scroll functionality to navigate smoothly to contact */}
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          duration={800}
          className="btn btn-primary"
          onClick={scrollToContact}
        >
          Get In Touch
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/DEV.png" alt="Hero Section" />
      </div>
    </section>
  );
}
