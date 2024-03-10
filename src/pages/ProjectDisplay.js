import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />

      {/* <section className="project-overview">
        <h2>Project Overview</h2>
        <p>{project.overview}</p>
      </section> */}
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.githuburl} target="_blank" rel="noopener noreferrer">
    <GitHubIcon />
    </a>
    </div>
  );
}

export default ProjectDisplay;