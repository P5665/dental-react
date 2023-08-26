import { Container, Row, Col } from 'reactstrap';
import { footerLinks, contactInfo, socialMedia } from '../constants';
import DentoLogo from '../assets/core-img/logo.png';

const Footer = () => {
	const { contactText, openingHours, quickLinks } = footerLinks;
	const { street, city, state, zip, country } = contactInfo.addressInfo.address;
	const { icon: addressIcon } = contactInfo.addressInfo;
	const { email, icon: emailIcon } = contactInfo.emailInfo;
	const { phone, icon: phoneIcon } = contactInfo.phoneInfo;

	return (
		<footer className='site-footer section overlay text-white'>
			<Container className=''>
				<Row>
					<Col
						xs='12'
						sm='6'
						lg='3'
						className='d-flex flex-column display-4'
					>
						<Row>
							<Col>
								<img
									src={DentoLogo}
									alt='Dento'
									className='img-fluid'
								/>
							</Col>
						</Row>
						<p className='my-3 lh-base'>{contactText}</p>
						<p>
							<i className={`${addressIcon} text-primary me-2`}></i>
							{`${street}, ${city}, ${state}, ${zip} ${country}`}
						</p>
						<p>
							<i className={`${phoneIcon} text-primary me-2`}></i>
							{phone}
						</p>
						<p>
							<i className={`${emailIcon} text-primary me-2`}></i>
							{email}
						</p>
					</Col>
					<Col
						xs='12'
						sm='6'
						lg='3'
						className='display-4'
					>
						<h4 className='fs-4 py-4'>Opening Hours</h4>
						{openingHours.map((schedule, index) => (
							<div
								key={index}
								className='d-flex justify-content-between mb-3'
							>
								<div>{schedule.day}</div>
								<div className='ms-auto'>{schedule.hours}</div>
							</div>
						))}
					</Col>
					<Col
						xs='12'
						sm='6'
						lg='3'
						className='display-4'
					>
						<Row>
							<h4 className='fs-4 py-4'>Quick Links</h4>
							{quickLinks.map((link, index) => (
								<Col
									xs='6'
									key={index}
									className='mb-3'
								>
									{link.title}
								</Col>
							))}
						</Row>
					</Col>
					<Col
						xs='12'
						sm='6'
						lg='3'
						className='display-4'
					>
						<h4 className='fs-4 py-4 '>Newsletter</h4>
						<p className='lh-base'>We will send out weekly newest article and some great offers</p>
						{socialMedia.map((social, index) => (
							<a
								href={social.link}
								key={index}
							>
								<i className={`${social.icon} me-4 text-white`}></i>
							</a>
						))}
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
