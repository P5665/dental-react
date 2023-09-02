import SubHeader from '../components/SubHeader';
import subHeaderImage from '../assets/bg-img/12.jpg';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

// Not sure if I want this to be a stand alone page.  I did add it to the footer per template.  Would need and Idea for content and layout.  Could be pretty basic with perhaps a full list of services and the other pages are highlighted services????
const Services = () => {
	return (
		<>
			<SubHeader
				current='Services'
				image={subHeaderImage}
			/>
			<Container className='section py-5'>
				<Row>
					<Col
						xs='10 offset-1'
						md='8 offset-md-2'
					>
						<h2 className='section-heading text-dark text-center'>Our Comprehensive Dental Services</h2>
						<div className='line mb-5 mx-auto'></div>
						<p>At our dental practice, we take pride in offering a comprehensive range of dental services that cater to all your oral health needs. We understand that every smile is unique, and our experienced team of dentists is here to provide you with the personalized care you deserve. Explore our diverse offerings, known as the "Trifecta of Dental Excellence," which encompasses General Dentistry, Surgical Dentistry, and Cosmetic Dentistry. Additionally, we place a strong emphasis on Preventative Dentistry to ensure your smile remains healthy and vibrant.</p>
					</Col>
				</Row>
			</Container>
			<div>
				<Container>
					<Row className=''>
						<Col xs='12'>
							<h2 className='section-heading text-dark text-center'>The Hat Trick of Dentistry</h2>
							<div className='line mb-5 mx-auto'></div>
						</Col>
						<Col
							xs='12'
							md='6'
							lg='4'
							className='d-flex flex-column align-items-center p-5'
						>
							<h3 className='fs-4 text-dark text-center'>General Dentistry</h3>
							<div className='line mb-5 mx-auto'></div>
							<p>Our General Dentistry services form the foundation of your oral health. From routine check-ups to essential treatments, we have you covered:</p>
							<ul className='display-4'>
								<li className='mb-3 lh-3'>Dental Check-Ups: Regular examinations and cleanings to maintain optimal oral health.</li>

								<li className='mb-3 lh-3'>Oral Exams: Thorough assessments to detect and address any dental concerns.</li>
								<li className='mb-3 lh-3'>X-Rays: Comprehensive imaging to aid in diagnosis and treatment planning.</li>
								<li className='mb-3 lh-3'>Oral Hygiene Education: Guidance on maintaining excellent oral health at home.</li>
							</ul>
							<Link
								to={'/services/general'}
								className='mt-auto'
							>
								<Button color='primary'>Learn More</Button>
							</Link>
						</Col>
						<Col
							xs='12'
							md='6'
							lg='4'
							className='d-flex flex-column align-items-center p-5'
						>
							<h3 className='fs-4 text-dark text-center'>Surgical Dentistry</h3>
							<div className='line mb-5 mx-auto'></div>
							<p>For more complex dental needs, our Surgical Dentistry services are designed to provide advanced care:</p>
							<ul className='display-4'>
								<li className='mb-3 lh-3'>Tooth Extractions: Gentle removal of problematic or damaged teeth.</li>
								<li className='mb-3 lh-3'>Dental Implants: Permanent solutions for missing teeth, restoring both function and aesthetics.</li>
								<li className='mb-3 lh-3'>Oral Surgery: Procedures such as wisdom teeth removal and oral pathology management.</li>
								<li className='mb-3 lh-3'>Root Canal Therapy: Precise and effective treatment for damaged tooth pulp.</li>
							</ul>
							<Link
								to={'/services/surgical'}
								className='mt-auto'
							>
								<Button color='primary'>Learn More</Button>
							</Link>
						</Col>
						<Col
							xs='12'
							md='6'
							lg='4'
							className='d-flex flex-column align-items-center p-5'
						>
							<h3 className='fs-4 text-dark text-center'>Cosmetic Dentistry</h3>
							<div className='line mb-5 mx-auto'></div>
							<p>Achieve the smile of your dreams with our Cosmetic Dentistry options:</p>
							<ul className='display-4'>
								<li className='mb-3 lh-3'>Teeth Whitening: Professional whitening treatments to enhance your smile's brightness.</li>
								<li className='mb-3 lh-3'>natural-looking smile makeover.</li>
								<li className='mb-3 lh-3'>Invisalign®: Clear aligners for discreet orthodontic correction.</li>
								<li className='mb-3 lh-3'>Cosmetic Bonding: Repair minor imperfections and enhance the appearance of your teeth.</li>
							</ul>
							<Link
								to={'/services/cosmetic'}
								className='mt-auto'
							>
								<Button color='primary'>Learn More</Button>
							</Link>
						</Col>
					</Row>
				</Container>
			</div>
			<Container className='section'>
				<Row>
					<Col
						xs='10 offset-1'
						md='8 offset-md-2'
					>
						<h2 className='section-heading text-dark text-center'>The Works - Your Comprehensive Dental Solution</h2>
						<div className='line mb-5 mx-auto'></div>
						<p>For those seeking a complete dental transformation, our "The Works" package combines services from the Trifecta to deliver a comprehensive dental solution. This option is ideal for patients who want to address multiple dental concerns and achieve a complete smile makeover.</p>
					</Col>
					<Col
						xs='10 offset-1'
						md='8 offset-md-2'
					>
						<h2 className='section-heading text-dark text-center mt-5'>Your Journey to a Healthy, Beautiful Smile Begins Here</h2>
						<div className='line mb-5 mx-auto'></div>
						<p>No matter your dental needs, we are committed to providing exceptional care and achieving outstanding results. Our team is dedicated to helping you achieve and maintain a healthy, beautiful smile that you can confidently share with the world.</p>
						<p>Ready to embark on your journey to optimal oral health? Schedule a consultation with us today, and let's work together to create your perfect smile.</p>
						<Link
							to={'/#appointment-form'}
							className='text-center d-block mt-4'
						>
							<Button color='primary'>Book Appointment</Button>
						</Link>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Services;
