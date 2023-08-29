import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SocialBanner from './components/SocialBanner';
import Footer from './components/Footer';
import { Home, About, Pricing, Blog, Contact, Services, Advisors, FAQ, Legal, Policy, Careers, Dentists } from './pages';

function App() {
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
					path='/pricing'
					element={<Pricing />}
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
					path='/services'
					element={<Services />}
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
