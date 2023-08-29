import SubHeader from '../components/SubHeader';
import subHeaderImage from '../assets/bg-img/12.jpg';

const About = () => {
	return (
		<>
			<SubHeader
				current='About'
				image={subHeaderImage}
			/>
			<h1>About</h1>
		</>
	);
};

export default About;
