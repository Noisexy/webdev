import React from "react";
import "./ProjectsPage.css";
import { dataArr } from "./data";

function ProjectsPage() {
  return (
    <section className="projectsPageSection">
      <div className="projectsContainer">
        {dataArr.map((project) => {
          const { name, description, imgs, link } = project;

          return (
            <>
              <div className="singleProject">
                <h1>{name}</h1>
                <div className="projectDescription">
                  <span className="spanDescription">{description}</span>
                  <a href={link}>LIVE SITE</a>
                  <span className="techTrigger" style={{ color: "white" }}>
                    {imgs.map((img) => {
                      return <img src={img} alt="tech" />;
                    })}
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsPage;
