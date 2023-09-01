import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import SocialBanner from './components/SocialBanner';
import Footer from './components/Footer';
import { Home, About, Pricing, Blog, Contact, Services, Advisors, FAQ, Legal, Policy, Careers, Dentists, DentalTechnology } from './pages';
import DentistProfile from './features/dentists/DentistProfile';
import ServicesList from './features/services/ServicesList';
import { fetchServices } from './features/services/servicesSlice';
import { fetchDentists } from './features/dentists/dentistsSlice';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchServices());
		dispatch(fetchDentists());
	}, [dispatch]);

	return (
		<>
			<SocialBanner />
			<NavBar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				></Route>
				<Route
					path='/about'
					element={<About />}
				></Route>
				<Route
					path='/services'
					element={<Services />}
				></Route>
				<Route
					path='/services/:category'
					element={<ServicesList />}
				></Route>
				<Route
					path='/pricing'
					element={<Pricing />}
				></Route>
				<Route
					path='/dentists'
					element={<Dentists />}
				></Route>
				<Route
					path='/dentists/:name'
					element={<DentistProfile />}
				></Route>
				<Route
					path='/dental-technology'
					element={<DentalTechnology />}
				></Route>
				<Route
					path='/blog'
					element={<Blog />}
				></Route>
				<Route
					path='/contact'
					element={<Contact />}
				></Route>

				<Route
					path='/policy'
					element={<Policy />}
				></Route>
				<Route
					path='/legal'
					element={<Legal />}
				></Route>
				<Route
					path='/faq'
					element={<FAQ />}
				></Route>
				<Route
					path='/careers'
					element={<Careers />}
				></Route>
				<Route
					path='/advisors'
					element={<Advisors />}
				></Route>
				<Route
					path='/dentists'
					element={<Dentists />}
				></Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
