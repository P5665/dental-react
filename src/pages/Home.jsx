import { Container, Row, Col } from 'reactstrap';
import Hero from '../components/Hero';
import AboutSummary from '../features/about/AboutSummary';
import ServicesSummary from '../features/services/ServicesSummary';
import AppointmentForm from '../features/contact/AppointmentForm';
import OurDentists from '../features/about/OurDentists';
import Reviews from '../features/about/Reviews';
import NewsSummary from '../features/blog/NewsSummary';
import GenericServicesList from '../features/services/GenericServicesList';

const Home = () => {
	return (
		<>
			<Hero />
			<AboutSummary />
			<ServicesSummary />
			<GenericServicesList
				isSummary={true}
				limit={5}
			/>
			<AppointmentForm />
			<OurDentists heading={true} />
			<Reviews />
			<NewsSummary />
		</>
	);
};

export default Home;
