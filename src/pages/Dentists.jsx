import SubHeader from '../components/SubHeader';
import subHeaderImage from '../assets/bg-img/12.jpg';

const Dentists = () => {
	return (
		<>
			<SubHeader
				current='Dentists'
				image={subHeaderImage}
			/>
			<h1>Dentists</h1>
		</>
	);
};

export default Dentists;
