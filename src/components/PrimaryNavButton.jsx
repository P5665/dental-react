import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const PrimaryNavButton = ({ buttonText, buttonStyles, noLink, url, outline }) => {
	return noLink ? (
		<Button
			className={buttonStyles ? buttonStyles : ''}
			color='primary'
			outline={outline ? true : false}
		>
			{!buttonText ? 'book appointment' : buttonText}
		</Button>
	) : (
		<Link to={url ? url : '/#book-appointment-form'}>
			<Button
				className={buttonStyles ? buttonStyles : ''}
				color='primary'
				outline={outline ? true : false}
			>
				{!buttonText ? 'book appointment' : buttonText}
			</Button>
		</Link>
	);
};

export default PrimaryNavButton;
