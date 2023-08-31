import SubHeader from '../components/SubHeader';
import subHeaderImage from '../assets/bg-img/12.jpg';
import ServicesList from '../features/services/ServicesList';

const Services = () => {
	return (
		<>
			<SubHeader
				current='Services'
				image={subHeaderImage}
			/>
			<ServicesList />
		</>
	);
};

export default Services;
