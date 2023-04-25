import React, { useState } from "react";
import "./Addproject.css"; 
import Sidebar from "../sidebar/Sidebar";
const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [course, setCourse] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    const projectData = {
      projectName,
      description,
      githubLink,
      course,
    };

    try {
      const response = await fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        console.log("Project data submitted successfully:", projectData);
        // Clear form inputs
        setProjectName("");
        setDescription("");
        setGithubLink("");
        setCourse("");
      } else {
        console.error("Failed to submit project data:", response.status);
      }
    } catch (error) {
      console.error("Failed to submit project data:", error);
    }
  };

  return (
    <>
      <Sidebar />
      <h2 className="add-h">Add New Project</h2>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="project-form">
          <label  className="project__label" htmlFor="projectName">Project Name</label>
          <input
            type="text"
            id="projectName"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <label htmlFor="description">Members</label>
          <textarea
            id="members"
            value={description}
            placeholder="Members"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          
          <label htmlFor="githubLink">GitHub Link</label>
          <input
            type="text"
            id="githubLink"
            placeholder="githubLink"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
          />

          <label className="course-select">
            <select value={course} onChange={(e) => setCourse(e.target.value)}>
              <option value="">Select a course</option>
              <option value="Android Development">Android Development</option>
              <option value="Full-Stack Development">
                Full-Stack Development
              </option>
              <option value="Data Science">Data Science</option>
              <option value="Cybersecurity">Cybersecurity</option>
            </select>
          </label>
          <button className="addnew__project" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ProjectForm;
