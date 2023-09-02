import SubHeader from '../components/SubHeader';
import subHeaderImage from '../assets/bg-img/12.jpg';
import { Container, Row, Col } from 'reactstrap';
import ContactInfoBox from '../features/contact/ContactInfoBox';
import ContactForm from '../features/contact/ContactForm';

const Contact = () => {
	return (
		<>
			<SubHeader
				current='Contact'
				image={subHeaderImage}
			/>
			<Container className='section pt-5'>
				<Row className='text-center'>
					<Col md='8 offset-md-2'>
						<div className='map-container'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53040.14143990136!2d-117.96017374014714!3d33.812084951330974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7d12b3b5e6b%3A0x2ef62f8418225cfa!2sDisneyland%20Park!5e0!3m2!1sen!2sus!4v1693616939239!5m2!1sen!2sus'
								width='600'
								height='450'
								style={{ border: '0' }}
								allowFullScreen=''
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
							></iframe>
						</div>
					</Col>
				</Row>
				<Row className='py-4'>
					<ContactInfoBox />
					<ContactForm />
				</Row>
			</Container>
		</>
	);
};

export default Contact;
