import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import './project.css';

function ShowProjects () {
	// State to store added projects
	const [projects, setProjects] = useState(undefined);

	function showProjects () {
		fetch('http://localhost:8000/projects')
			.then((res) => res.json())
			.then((projects) => setProjects(projects))
			.catch((err) => alert('unable to get projects.'));
	}

	useEffect(() => {
		showProjects();
		return;
	}, []);

	console.log(projects);

	return <section className="projects-container">
		{ projects && projects.length > 0 ? projects.map((project, index) => {
			return <div className="project" key={ index }>
				<section className="image-container">
					<img src={ process.env.PUBLIC_URL + '/projectImage.jpg' } alt='project placeholder' />
				</section>
				<section className="project-actions">
					<span>{ project.title }</span>
					<button className='secondary'>view project</button>
				</section>
			</div>
		}) : <h1>No projects found.</h1> }
	</section>
}

const Project = () => {
	// Get the navigate function from useNavigate
	const navigate = useNavigate();

	//   Function to handle form submission
	const handleSubmit = (event) => {
		// Add logic to handle form submission
		// You can perform any action here, such as adding the project to the list of projects, making API calls, etc.
		event.preventDefault();
		// For demo purposes, we are just logging the project details to the console
		console.log("Project Title: ", event.target.title.value);
		console.log("Project Description: ", event.target.description.value);
		// Add the project to the list of projects
		// setProjects([
		// 	...projects,
		// 	{
		// 		title: event.target.title.value,
		// 		description: event.target.description.value,
		// 		id: new Date().getTime(), // generate a unique id for the project
		// 	},
		// ]);
		// Clear the form fields
		event.target.title.value = "";
		event.target.description.value = "";
	};

	// Function to handle "View More" button click
	const handleViewMore = (projectId) => {
		// Navigate to project details page with projectId
		navigate("/project/" + projectId);
	};

	// Function to handle "Add Project" button click
	const handleAddProject = () => {
		// Add logic to handle "Add Project" button click
		// You can perform any action here, such as displaying a modal, navigating to a different page, etc.
		navigate("/add-project");
	};

	return (
		<div className="project-container">
			<section className="project-container-header">
				<h2>Projects</h2>
				<button onClick={ handleAddProject } className="add-project-button primary">
					Add Project
				</button>
			</section>
			<ShowProjects />
		</div>
	);
};

export default Project;