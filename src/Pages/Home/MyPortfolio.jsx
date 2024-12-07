import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h1 className="section--heading">My Portfolio</h1>
          <p className="hero--section-description">
            {" "}
            I love bringing ideas to life, whether it's through my own efforts
            or with the help of fellow enthusiasts. <br />
            Take a peek at my latest projects—I'm really excited to share them
            with you!
          </p>
        </div>
        <div>
          <button className="btn btn-github">
            <a
              href="https://github.com/PinkCatCodes"
              target="_blank"
              style={{ color: " white" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 19"
                fill="none"
                style={{ marginRight: "8px" }}
              >
                <path
                  d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                  stroke="currentColor"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Visit My GitHub
            </a>
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <p className="text-sm portfolio--link ">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-no-underline"
              >
                View Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                  style={{ marginLeft: "8px" }}
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </p>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="portfolio-text-md">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
