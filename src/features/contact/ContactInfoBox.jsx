import { Col } from 'reactstrap';
import { contactInfo } from '../../constants';

const ContactInfoBox = () => {
	const { street, city, state, zip, country } = contactInfo.addressInfo.address;
	const { email } = contactInfo.emailInfo;
	const { phone } = contactInfo.phoneInfo;
	return (
		<Col
			md='4'
			className='mt-5'
		>
			<div className='bg-primary text-white py-4 px-5'>
				<h5 className='fw-semibold'>Address</h5>
				<p>
					{street}, {city}, {state} {zip} {country}
				</p>
				<h5 className='fw-semibold'>Phone</h5>
				<p>{phone}</p>
				<h5 className='fw-semibold'>Email</h5>
				<p className='text-break'>{email}</p>
			</div>
		</Col>
	);
};

export default ContactInfoBox;
