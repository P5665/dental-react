import { Container, Row, Col } from 'reactstrap';
import Hero from '../components/Hero';
import AboutSummary from '../features/about/AboutSummary';
import ServicesSummary from '../features/services/ServicesSummary';
import PricingSummary from '../features/services/PricingSummary';
import AppointmentForm from '../features/contact/AppointmentForm';
import OurDentists from '../features/about/OurDentists';
import Reviews from '../features/about/Reviews';
import NewsSummary from '../features/blog/NewsSummary';

const Home = () => {
	return (
		<>
			<Hero />
			<AboutSummary />
			<ServicesSummary />
			<PricingSummary />
			<AppointmentForm />
			<OurDentists />
			<Reviews />
			<NewsSummary />
		</>
	);
};

export default Home;
