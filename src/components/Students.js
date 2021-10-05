import axios from 'axios';
import React from 'react';
import {useQuery} from 'react-query';

export const Students = () => {
	const {isLoading, data, isError, error} = useQuery('students', fetchStudnets);

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	if (isError) {
		return <h2>{error.message}</h2>;
	}

	return (
		<>
			<h2>Studnets</h2>
			{data?.data.map(student => {
				return (
					<>
						<div key={student.id}>{student.name}</div>
						<ul>
							{student.courses.map(course => {
								return <li>{course}</li>;
							})}
						</ul>
					</>
				);
			})}
		</>
	);
};

const fetchStudnets = () => {
	return axios.get('http://localhost:4000/students');
};
