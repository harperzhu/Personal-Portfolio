import React, { useState } from "react";
import NavBar from "../ShareComponents/NavBar";
import portfolio_picture_1 from "../../assets/images/projectImage/portfolio-pic-1.jpg";
import portfolio_picture_2 from "../../assets/images/projectImage/portfolio-pic-2.png";

const projects = [
  {
    id: 1,
    title: "Can't I just go to one party?",
    category: "Data Science",
    link: "https://harperzhu.shinyapps.io/DiseaseSimulation/",
    image: portfolio_picture_1,
  },
  {
    id: 2,
    title: "FeedMe",
    category: "Web development",
    link: "https://feedme-97f21.web.app/",
    image: portfolio_picture_2,
  },
  // Add more projects with different categories as needed
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === category
      );
      setFilteredProjects(filtered);
    }
  };

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
              <button
                className={selectedCategory === "All" ? "active" : ""}
                onClick={() => handleFilterClick("All")}
                data-filter-btn
              >
                All
              </button>
            </li>
            <li className="filter-item">
              <button
                className={
                  selectedCategory === "Web development" ? "active" : ""
                }
                onClick={() => handleFilterClick("Web development")}
                data-filter-btn
              >
                Web development
              </button>
            </li>
            <li className="filter-item">
              <button
                className={selectedCategory === "Applications" ? "active" : ""}
                onClick={() => handleFilterClick("Applications")}
                data-filter-btn
              >
                Applications
              </button>
            </li>
            <li className="filter-item">
              <button
                className={selectedCategory === "Data Science" ? "active" : ""}
                onClick={() => handleFilterClick("Data Science")}
                data-filter-btn
              >
                Data Science
              </button>
            </li>
          </ul>

          <ul className="project-list">
            {filteredProjects.map((project) => (
              <li
                key={project.id}
                className="project-item active"
                data-filter-item
                data-category={project.category}
              >
                <a href={project.link}>
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
