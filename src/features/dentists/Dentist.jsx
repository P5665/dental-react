import { Row, Col } from 'reactstrap';

const Dentist = ({ dentist: { name } }) => {
	return (
		<Col>
			<div>{name}</div>
		</Col>
	);
};

export default Dentist;
