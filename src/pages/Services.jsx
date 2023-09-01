import SubHeader from '../components/SubHeader';
import subHeaderImage from '../assets/bg-img/12.jpg';
import ServicesList from '../features/services/ServicesList';

// Not sure if I want this to be a stand alone page.  I did add it to the footer per template.  Would need and Idea for content and layout.  Could be pretty basic with perhaps a full list of services and the other pages are highlighted services????
const Services = () => {
	return (
		<>
			<SubHeader
				current='Services'
				image={subHeaderImage}
			/>
			{/* <ServicesList /> */}
		</>
	);
};

export default Services;
