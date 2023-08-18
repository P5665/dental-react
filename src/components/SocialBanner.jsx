import { Container, Row, Col } from 'reactstrap';
import { socialMedia, contactInfo } from '../constants';

const SocialBanner = () => {
	const { street, city, state, zip, country } = contactInfo.addressInfo.address;
	const { icon: addressIcon } = contactInfo.addressInfo;
	const { email, icon: emailIcon } = contactInfo.emailInfo;

	return (
		<Container>
			<Row>
				<Col
					className='d-flex me-auto'
					xs='12'
				>
					<div className='d-flex justify-content-between'>
						<span>
							<i className={addressIcon}></i> {`${street}, ${city}, ${state} ${zip} ${country}`}
						</span>
						<span>
							<i className={emailIcon}></i> {email}
						</span>
					</div>
					<div></div>
				</Col>
			</Row>
		</Container>
	);
};

export default SocialBanner;
