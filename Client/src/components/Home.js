import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Home.css'
function Home  ({token})  {

  useEffect(() => {
		if (token) {
			fetchData(token);
		}
	}, [token]);

	const fetchData = async (token) => {
		const res = await axios.get('http://localhost:5000/api/todos', {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});
	
	};

	return (
		<div className="home-page">
		  <div className="background-image">
			<div className="content">
			  <h1>Welcome to your Online IELTS TEST </h1>
			  <div className='Ielts_section'>
				<div className="button-container">
				  <Link to="/general" className="button">General Training</Link>
				  <Link to="/academic" className="button">Academic Training</Link>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	);
}

export default Home
