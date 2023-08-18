import { Container, Row, Col } from 'reactstrap';
import { socialMedia, contactInfo } from '../constants';

const SocialBanner = () => {
	const { street, city, state, zip, country } = contactInfo.addressInfo.address;
	const { icon: addressIcon } = contactInfo.addressInfo;
	const { email, icon: emailIcon } = contactInfo.emailInfo;

	return (
		<Container>
			<Row>
				<Col xs='12'>
					<div className='d-flex'>
						<span>
							<i className={addressIcon}></i> {`${street}, ${city}, ${state} ${zip} ${country}`}
						</span>
						<span className='ms-3 me-auto'>
							<i className={emailIcon}></i> {email}
						</span>
						<div>meh</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default SocialBanner;
