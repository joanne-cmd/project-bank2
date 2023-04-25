import React, { useState } from 'react';
import './cohortForm.css';
import Input from '../Form/input';

const CohortForm = (props) => {
	const [name, setName] = useState('');
	const [course, setCourse] = useState('');
	const [numberOfStudents, setNumberOfStudents] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		const newCohort = { name, course, numberOfStudents };
		props.onAdd(newCohort);
		props.onClose();
	};

	const handleCancel = () => {
		props.onClose();
	};

	return (
		<div className='cohort__form'>
			<h2 className='add__title'>ADD COHORT</h2>
			<form onSubmit={ handleSubmit } className='cohort-form'>
				<Input className="name__text" labelTxt={ 'Name' } id='name' type={ 'text' } onChangeFn={ (event) => setName(event.target.value) } value={ name } required={ true } />
				<br />
				<label className='courses__label'>
					<select value={ course } onChange={ (e) => setCourse(e.target.value) } required className='select-course'>
						<option value="">SELECT A COURSE</option>
						<option  value="Android Development">Android Development</option>
						<option value="Full-Stack Development">
							Full-Stack Development
						</option>
						<option value="Data Science">Data Science</option>
						<option value="Cybersecurity">Cybersecurity</option>
					</select>
				</label>
				<br />
				<Input className="input__details" labelTxt={ 'Number Of Students' } id='number' type={ 'number' } onChangeFn={ (event) => setNumberOfStudents(event.target.value) } value={ numberOfStudents } required={ true } />
				<br />
				<button type="submit" className='cohortButton__submit'>Submit</button>
				<button type="button" onClick={ handleCancel } className='cohortButton__cancel'>Cancel</button>
				<br />
			</form>
		</div>
	);
};

export default CohortForm;
