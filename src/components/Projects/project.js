import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import './project.css';

const Project = () => {
	// Get the navigate function from useNavigate
	const navigate = useNavigate();

	// State to store added projects
	const [projects, setProjects] = useState([
		{
			title: 'm-rentals'
		},
		{
			title: 'm-rentals'
		},
		{
			title: 'm-rentals'
		},
		{
			title: 'm-rentals'
		},
		{
			title: 'm-rentals'
		},
		{
			title: 'm-rentals'
		}
	]);

	//   Function to handle form submission
	const handleSubmit = (event) => {
		// Add logic to handle form submission
		// You can perform any action here, such as adding the project to the list of projects, making API calls, etc.
		event.preventDefault();
		// For demo purposes, we are just logging the project details to the console
		console.log("Project Title: ", event.target.title.value);
		console.log("Project Description: ", event.target.description.value);
		// Add the project to the list of projects
		setProjects([
			...projects,
			{
				title: event.target.title.value,
				description: event.target.description.value,
				id: new Date().getTime(), // generate a unique id for the project
			},
		]);
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
			<section className="projects-container">
				{ projects.map((project, index) => {
					return <div className="project" key={ index }>
						<section className="image-container">
							<img src={ process.env.PUBLIC_URL + '/projectImage.jpg' } alt='project placeholder' />
						</section>
						<section className="project-actions">
							<span>{ project.title }</span>
							<button className='secondary'>view project</button>
						</section>
					</div>
				}) }
			</section>
		</div>
	);
};

export default Project;
