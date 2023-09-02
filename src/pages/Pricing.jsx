import SubHeader from '../components/SubHeader';
import subHeaderImage from '../assets/bg-img/12.jpg';
import { Container, Row, Col } from 'reactstrap';
import PricingSummary from '../features/services/PricingSummary';

const Pricing = () => {
	return (
		<>
			<SubHeader
				current='Pricing'
				image={subHeaderImage}
			/>
			<Container>
				<Row>
					<Col className='mt-3'>
						<p>At our dental practice, we believe that everyone deserves access to high-quality dental care. Our transparent and competitive pricing ensures that you receive exceptional dental services without hidden fees or surprises. Explore our pricing options below:</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<h2 className='section-heading text-center'></h2>
					</Col>
					<Col></Col>
					<Col></Col>
					<Col></Col>
				</Row>
			</Container>
			<PricingSummary />
			<Container className='section pt-3'>
				<Row>
					<Col
						xs='10 offset-1'
						md='8 offset-md-2'
						className='mt-5'
					>
						<h2 className='section-heading text-dark text-center'>Payment Options</h2>
						<div className='line mb-5 mx-auto'></div>
						<p>We offer flexible payment options to accommodate your budget:</p>
						<ul>
							<li>Insurance: We accept most dental insurance plans and will gladly assist with claims.</li>
							<li>Financing: Explore our financing options to spread the cost of treatment over time.</li>
							<li>Credit Cards: We accept major credit cards for your convenience.</li>
							<li>Cash: We welcome cash payments.</li>
						</ul>
					</Col>
					<Col
						xs='10 offset-1'
						md='8 offset-md-2'
						className='mt-5'
					>
						<h2 className='section-heading text-dark text-center'> Schedule Your Appointment</h2>
						<div className='line mb-5 mx-auto'></div>
						<p>Your oral health is our priority. We encourage you to schedule an appointment with our experienced dental team for a personalized consultation. During your visit, we will discuss your treatment options, address any questions or concerns, and provide a detailed estimate based on your individual needs.</p> <p>Please note that the prices mentioned above are approximate and may vary based on the complexity of your case. Our team will provide you with a precise quote during your consultation. </p>
						<p>Thank you for considering our dental practice for your oral health needs. We look forward to helping you achieve and maintain a healthy, beautiful smile.</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Pricing;
