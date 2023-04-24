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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit project data to backend or perform desired action
    // Example implementation:
    const projectData = {
      projectName,
      description,
      owner,
      members,
      githubLink,
      course,
    };
    console.log("Project Data:", projectData);
    // Clear form inputs
    setProjectName("");
    setDescription("");
    setOwner("");
    setMembers([]);
    setGithubLink("");
    setCourse("");
  };

  return (
    <div className="project-form-container">
      <div className="form-container">
        <h2>Add New Project</h2>
        <form onSubmit={handleSubmit} className="project-form">
          <label htmlFor="projectName">Project Name</label>
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

          <label htmlFor="owner">Owner</label>
          <input
            type="text"
            id="owner"
            placeholder="Owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            required
          />

          <label htmlFor="members">Members</label>
          {members.map((member, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Name"
                value={member.name}
                onChange={(e) =>
                  handleMemberChange(index, "name", e.target.value)
                }
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={member.email}
                onChange={(e) =>
                  handleMemberChange(index, "email", e.target.value)
                }
                required
              />
              <button type="button" onClick={() => removeMember(index)}>
                Remove
              </button>
            </div>
          ))}
          {members.length < 5 && (
            <button type="button" onClick={addMember}>
              Add Member
            </button>
          )}

          <label htmlFor="githubLink">GitHub Link</label>
          <input
            type="text"
            id="githubLink"
            placeholder="githubLink"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
          />

          <label>
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

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
