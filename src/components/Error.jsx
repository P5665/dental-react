import { Col } from 'reactstrap';

const Error = ({ errorMessage }) => {
	return (
		<Col>
			<h4>{errorMessage}</h4>
		</Col>
	);
};

export default Error;
