import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SocialBanner from './components/SocialBanner';
import Footer from './components/Footer';
import Home from './pages/Home'; //figure out how to better implement index.js

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
			</Routes>
			<Footer />
		</>
	);
}

export default App;
