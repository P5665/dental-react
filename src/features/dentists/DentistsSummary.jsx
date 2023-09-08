import { useSelector } from 'react-redux';
import { selectAllDentists, selectDentistByName } from './dentistsSlice';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import OurDentists from '../about/OurDentists';

const DentistsSummary = () => {
	const dentists = useSelector(selectAllDentists);
	return (
		<>
			<Container className='section pt-5'>
				<Row className='align-items-center'>
					<Col>
						<h2 className='text-center'>Welcome to Dento!</h2>
						<div className='line mb-3 mx-auto'></div>
						<p>At Dento, we believe in providing you with the best dental care from a team of dedicated professionals. Our dentists are experts in their fields, committed to ensuring your oral health and delivering exceptional services. Get to know our dentists better by exploring their profiles below.</p>

						{/* {dentists.map((dentist) => (
						<Dentist
							key={dentist.id}
							dentist={dentist}
						/>
					))} */}
					</Col>
					<Col
						xs='8 offset-2'
						md='6 offset-md-0'
						className='mt-5 mt-md-0'
					>
						<img
							src='../../../src/assets/bg-img/7.jpg'
							alt=''
							className='img-fluid'
						/>
					</Col>
				</Row>
			</Container>
			<div className='bg-light section'>
				<Container>
					<Row className='align-items-center'>
						<Col
							xs='8 offset-2'
							md='6 offset-md-0'
						>
							<img
								src='../../../src/assets/bg-img/19.jpg'
								alt=''
								className='img-fluid'
							/>
						</Col>
						<Col className='px-md-5'>
							<h2 className='mt-5 mt-md-0 text-center'>Meet Our Team of Dentists</h2>
							<div className='line mb-3 mx-auto'></div>
							<p>Discover the skilled dentists who make our practice exceptional. Each dentist brings a unique set of skills and expertise to cater to your dental needs. Whether you're looking for a general checkup, orthodontic treatment, or specialized procedures, our team has you covered.</p>
						</Col>
					</Row>
				</Container>
			</div>
			<Container className='section'>
				<Row>
					<Col md='8 offset-md-2'>
						<h2 className='text-center'>Explore Our Dentist Profiles</h2>
						<div className='line mb-3 mx-auto'></div>
						<p>On this page, you'll find a collection of dentist profiles. Each profile provides valuable information about our dentists, making it easier for you to choose the right fit for your dental care.</p>
					</Col>
				</Row>
			</Container>
			<div className='bg-light section'>
				<Container>
					<Row>
						<Col md='10 offset-md-1'>
							<h2 className='text-center'>Dentist Cards/Profiles</h2>
							<div className='line mb-3 mx-auto'></div>
							<p>Our dentist profiles are designed to give you a glimpse into the expertise and personality of each dentist. For every dentist, you'll find:</p>
							<ul>
								<li>A professional photo, allowing you to put a face to the name.</li>
								<li>The dentist's full name and title, showcasing their qualifications.</li>
								<li>A concise tagline highlighting their specialized area of dentistry.</li>
								<li>A click on each profile takes you to a detailed page with comprehensive information.</li>
							</ul>
						</Col>
					</Row>
				</Container>
				<OurDentists
					dentistsList={dentists}
					colorBackground={'bg-white'}
				/>
			</div>
			<Container className='section'>
				<Row>
					<Col md='8 offset-md-2'>
						<h2 className='text-center'>Take the Next Step</h2>
						<div className='line mb-3 mx-auto'></div>
						<p>Are you ready to discover more about our dentists? Click on a dentist's profile that catches your eye to learn more about their background, expertise, and approach to dental care. By clicking on the profiles, you'll also find additional information about services, patient testimonials, and more.</p>
						<p>At Dento, we're committed to providing you with a seamless experience when choosing your dentist. Feel free to reach out if you have any questions or need assistance. Your oral health is our priority, and our team of dedicated dentists is here to ensure you receive the care you deserve.</p>
					</Col>
					<Col
						xs='12'
						className='text-center mt-5'
					>
						<Link to='/#book-appointment-form'>
							<Button color='primary'>book appointment</Button>
						</Link>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default DentistsSummary;
