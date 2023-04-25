import React, { useState } from "react";
import "./project.css"; // Import CSS file for styling

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [course, setCourse] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to submit project data to backend or perform desired action
    // Example implementation using fetch API to send data to Rails backend:
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
    <div className="project-form-container">
      <div className="form-container">
        <h2>Add New Project</h2>
        <form onSubmit={handleSubmit} className="project-form">
          {/* Form inputs go here */}
          {/* ... */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
