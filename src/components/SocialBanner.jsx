import { Container, Row, Col } from 'reactstrap';
import { socialMedia, contactInfo } from '../constants';
import { Link } from 'react-router-dom';

const SocialBanner = () => {
	const { street, city, state, zip, country } = contactInfo.addressInfo.address;
	const { icon: addressIcon } = contactInfo.addressInfo;
	const { email, icon: emailIcon } = contactInfo.emailInfo;

	// font-size:14px

	return (
		<div className='social-banner bg-light text-secondary d-flex align-items-center'>
			<Container>
				<Row>
					<Col xs='12'>
						<div className='d-flex'>
							<div>
								<i className={`${addressIcon} text-primary`}></i> {`${street}, ${city}, ${state} ${zip} ${country}`}
							</div>
							<div className='ms-3 me-auto'>
								<i className={`${emailIcon} text-primary`}></i> {email}
							</div>
							<div className='flex'>
								{socialMedia.map((link) => (
									<Link
										to={link.link}
										target='_blank'
										rel='noopener noreferrer'
										key={link.id}
									>
										<i className={`${link.icon} text-primary ms-2`}></i>
									</Link>
								))}
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SocialBanner;
