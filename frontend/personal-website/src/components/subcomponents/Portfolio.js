import React from "react";
import NavBar from "../NavBar";
import portfolio_picture_1 from "../../assets/images/projectImage/portfolio-pic-1.jpg";
import portfolio_picture_2 from "../../assets/images/projectImage/portfolio-pic-2.png";
/* TODO: fix the sorting and data label for each project here */
export default function Portfolio() {
  return (
    <div className="overall-container">
      <NavBar />
      <article className="about  active" data-page="about">
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">
          <ul className="filter-list">
            <li className="filter-item">
              <button className="active" data-filter-btn>
                All
              </button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Web development</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Applications</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Data Science</button>
            </li>
          </ul>

          <div className="filter-select-box">
            <button className="filter-select" data-select>
              <div className="select-value" data-selecct-value>
                Select category
              </div>

              <div className="select-icon">
                <ion-icon name="chevron-down"></ion-icon>
              </div>
            </button>

            <ul className="select-list">
              <li className="select-item">
                <button data-select-item>All</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web development</button>
              </li>

              <li className="select-item">
                <button data-select-item>Applications</button>
              </li>

              <li className="select-item">
                <button data-select-item>Data Science</button>
              </li>
            </ul>
          </div>

          <ul className="project-list">
            {/* project 1 */}
            <li
              className="project-item  active"
              data-filter-item
              data-category="Data Science"
            >
              <a href="https://harperzhu.shinyapps.io/DiseaseSimulation/">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img
                    src={portfolio_picture_1}
                    alt="Statistical modeling project"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Can't I just go to one party?</h3>

                <p className="project-category">Data Science</p>
              </a>
            </li>

            {/* project 2 */}
            {/* <li
              className="project-item  active"
              data-filter-item
              data-category="web development"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={project_2_img} alt="orizon" loading="lazy" />
                </figure>

                <h3 className="project-title">Orizon</h3>

                <p className="project-category">Web development</p>
              </a>
            </li> */}

            {/* project 3 */}
            <li
              className="project-item  active"
              data-filter-item
              data-category="Web development"
            >
              <a href="https://feedme-97f21.web.app/">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={portfolio_picture_2} alt="finance" loading="lazy" />
                </figure>
                <h3 className="project-title">FeedMe</h3>
                <p className="project-category">Web development</p>
              </a>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
