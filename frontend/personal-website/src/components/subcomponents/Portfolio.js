import React from "react";
import project_1_img from "../../assets/images/project-1.jpg";
import project_2_img from "../../assets/images/project-2.png";
import project_3_img from "../../assets/images/project-3.jpg";
/* TODO: fix the sorting and data label for each project here */
export default function Portfolio() {
  return (
    <div>
      <article class="about  active" data-page="about">
        <header>
          <h2 class="h2 article-title">Portfolio</h2>
        </header>

        <section class="projects">
          <ul class="filter-list">
            <li class="filter-item">
              <button class="active" data-filter-btn>
                All
              </button>
            </li>

            <li class="filter-item">
              <button data-filter-btn>Web development</button>
            </li>

            <li class="filter-item">
              <button data-filter-btn>Applications</button>
            </li>

            <li class="filter-item">
              <button data-filter-btn>Data Science</button>
            </li>
          </ul>

          <div class="filter-select-box">
            <button class="filter-select" data-select>
              <div class="select-value" data-selecct-value>
                Select category
              </div>

              <div class="select-icon">
                <ion-icon name="chevron-down"></ion-icon>
              </div>
            </button>

            <ul class="select-list">
              <li class="select-item">
                <button data-select-item>All</button>
              </li>

              <li class="select-item">
                <button data-select-item>Web development</button>
              </li>

              <li class="select-item">
                <button data-select-item>Applications</button>
              </li>

              <li class="select-item">
                <button data-select-item>Data Science</button>
              </li>
            </ul>
          </div>

          <ul class="project-list">
            {/* project 1 */}
            <li
              class="project-item  active"
              data-filter-item
              data-category="Data Science"
            >
              <a href="https://harperzhu.shinyapps.io/DiseaseSimulation/">
                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={project_1_img} alt="finance" loading="lazy" />
                </figure>

                <h3 class="project-title">Finance</h3>

                <p class="project-category">Web development</p>
              </a>
            </li>

            {/* project 2 */}
            <li
              class="project-item  active"
              data-filter-item
              data-category="web development"
            >
              <a href="#">
                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={project_2_img} alt="orizon" loading="lazy" />
                </figure>

                <h3 class="project-title">Orizon</h3>

                <p class="project-category">Web development</p>
              </a>
            </li>

            {/* project 3 */}
            <li
              class="project-item  active"
              data-filter-item
              data-category="web design"
            >
              <a href="#">
                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={project_3_img} alt="fundo" loading="lazy" />
                </figure>

                <h3 className="project-title">Fundo</h3>

                <p className="project-category">Web design</p>
              </a>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
