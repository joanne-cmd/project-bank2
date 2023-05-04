import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./adminproject.css";
import Sidebar from "../sidebar/Sidebar";
import ProjectDetails from "./../Projectdets/projectdets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function ShowProjects() {
  const [projects, setProjects] = useState(undefined);
  const [projectData, setProjectData] = useState(null);

  const navigate = useNavigate();

  function showProjects() {
    fetch("/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects))
      .catch((err) => alert("unable to get projects."));
  }

  function viewProject(id) {
    fetch(`/projects/${id}`)
      .then((res) => res.json())
      .then((projectData) => {
        console.log(projectData);
        setProjectData(projectData);
        navigate("/project-dets", { state: { projectData } });
      });
  }

  useEffect(() => {
    showProjects();
    return;
  }, []);

  return (
    <section className="projects-container">
      {projects && projects.length > 0 ? (
        <ol className="projects-list">
          {projects.map((project, index) => {
            return (
              <li key={index} className="project-item">
                {/* <section className="image-container"></section> */}
                <section className="project-actions">
                  <div className="card-body">
                    {/* <div className="avatar-container">
                      <img
                        alt="avatar"
                        src={project.avatar1}
                        className="avatar avatar-lg rounded-circle"
                      />
                      <img
                        alt="avatar"
                        src={project.avatar2}
                        className="avatar avatar-lg rounded-circle"
                      />
                      <img
                        alt="avatar"
                        src={project.avatar3}
                        className="avatar avatar-lg rounded-circle"
                      />
                    </div> */}
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <button
                      className="view-details-button"
                      onClick={() => viewProject(project.id)}
                    >
                      View Details
                    </button>
                    <button className="like-button">
                      <FontAwesomeIcon icon={faThumbsUp} />
                      <span className="like-count">{project.likes}</span>
                    </button>
                  </div>
                </section>
              </li>
            );
          })}
        </ol>
      ) : (
        <h1>No projects found.</h1>
      )}
    </section>
  );
}

const Project = ({ projectData }) => {
  const navigate = useNavigate();

  const handleAddProject = () => {
    navigate("/add-project");
  };

  return (
    <>
      <Sidebar />

      <div className="project-container">
        <h2>Projects</h2>
        <section className="project-container-header">
          <button
            onClick={handleAddProject}
            className="add-project-button primary"
          >
            Add Project
          </button>
        </section>

        <ShowProjects />
      </div>
    </>
  );
};

export default Project;
