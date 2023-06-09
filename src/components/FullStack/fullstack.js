import React, { useState, useEffect, useContext } from "react";
import { ProjectBankContext } from "../Projectbankcont";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { Link } from "react-router-dom";
import "./fullstack.css";

function FullStack() {
  const [projects, setProjects] = useState([]);
  const [projectData, setProjectData] = useState(null);
  const navigate = useNavigate();
  
  const {apiUrl}=useContext(ProjectBankContext)

  const handleAddProject = () => {
    navigate("/add-project");
  };

  useEffect(() => {
    fetch(`${apiUrl}/courses/2/projects`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.log(error));
  }, []);

  function viewProject(id) {
    fetch(`${apiUrl}/projects/${id}`)
      .then((res) => res.json())
      .then((projectData) => {
        console.log(projectData);
        setProjectData(projectData);
        navigate("/project-dets", { state: { projectData } });
      });
  }

  return (
    <>
      <div className="project-containr">
        <section className="project-container-header">
          <Link to ='/course'><h2>FullStack Projects</h2></Link>
          <button
            onClick={handleAddProject}
            className="add-project-button primary"
          >
            Add Project
          </button>
        </section>
      </div>

      <section className="projects-container">
        {projects && projects.length > 0 ? (
          projects.map((project, index) => {
            return (
              <div className="project" key={index}>
                <section className="image-container"></section>
                <section className="project-actions">
                  <div class="card-body">
                    <h5 class="card-title">{project.name}</h5>
                    <img
                      alt="alt"
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      class="avatar avatar-lg rounded-circle"
                      data-title="Peggy Brown"
                      data-toggle="tooltip"
                    />
                    <img
                      alt="alt"
                      src="https://media.licdn.com/dms/image/C4E03AQFn8-FJxE-O6Q/profile-displayphoto-shrink_400_400/0/1649963399162?e=1688601600&v=beta&t=jQ2QietUvIXkKxEfhFl4DVuVEl7WEt-Jr8V-QKbzYus"
                      class="avatar avatar-lg rounded-circle"
                      data-title="Peggy Brown"
                      data-toggle="tooltip"
                    />
                    <img
                      alt="alt"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2zpdkcmaH-9kmfHQYEQkd7KmgJpAwTOXBA&usqp=CAU"
                      class="avatar avatar-lg rounded-circle"
                      data-title="Peggy Brown"
                      data-toggle="tooltip"
                    />
                    <p class="card-text">{project.description}</p>
                      <a
                        href="#"
                        class="btn btn-primary"
                        onClick={() => viewProject(project.id)}
                      >
                        View Details
                      </a>
                  </div>
                </section>
              </div>
            );
          })
        ) : (
          <h1>No projects found.</h1>
        )}
      </section>
    </>
  );
}

export default FullStack;
