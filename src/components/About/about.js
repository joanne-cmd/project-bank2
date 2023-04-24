import React from 'react';
import './about.css';

function AboutUs () {
	return (
		<div className="about-container">
			<h1 className="about-header">About Us</h1>
			<div className="about-content">
				<section>
					<h2 className="about-subheader">Our Mission</h2>
					<p>Welcome to our project bank! Our mission is to provide a platform where students who have completed training at Moringa School can showcase their skills and knowledge by contributing to projects that can make a difference in the world.</p>
				</section>
				<section>
					<h2 className="about-subheader">Our Projects</h2>
					<p>At our project bank, we believe that knowledge and skills are only valuable when applied to real-world problems. That's why we have curated a wide range of projects that address various challenges in different industries. Whether you are interested in web development, data analysis, mobile app development, or any other field, you will find projects that match your interests and skills.</p>
				</section>
				<section>
					<h2 className="about-subheader">Our Community</h2>
					<p>We are committed to promoting diversity and inclusion in the tech industry. We believe that everyone should have an equal opportunity to contribute to meaningful projects regardless of their background. That's why we welcome students from all walks of life to join our community.</p>
				</section>
				<section>
					<h2 className="about-subheader">Join Us</h2>
					<p>We are excited to see the amazing projects that you will create and we are committed to supporting you every step of the way. Join our community today and start making a positive impact in the world!</p>
					<button className="about-cta">Join Now</button>
				</section>
			</div>
		</div>
	);
}

export default AboutUs;
