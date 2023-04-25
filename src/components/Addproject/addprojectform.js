import React, { useState } from "react";
import "./project.css"; // Import CSS file for styling

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState("");
  const [members, setMembers] = useState([]);
  const [githubLink, setGithubLink] = useState("");
  const [course, setCourse] = useState("");

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const addMember = () => {
    if (members.length < 5) {
      setMembers([...members, { name: "", email: "" }]);
    }
  };

  const removeMember = (index) => {
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setMembers(updatedMembers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to submit project data to backend or perform desired action
    // Example implementation using fetch API to send data to Rails backend:
    const projectData = {
      projectName,
      description,
      owner,
      members,
      githubLink,
      course,
    };

    try {
      const response = await fetch("http://localhost:3000/api/projects", {
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
        setOwner("");
        setMembers([]);
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
