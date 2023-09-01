// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { selectDentistByName, selectAllDentists } from '../features/dentists/dentistsSlice';
import SubHeader from '../components/SubHeader';
import subHeaderImage from '../assets/bg-img/12.jpg';
import DentistsSummary from '../features/dentists/DentistsSummary';
import { Container, Row, Col } from 'reactstrap';

const Dentists = () => {
	return (
		<>
			<SubHeader
				current='Meet our Team'
				image={subHeaderImage}
			/>

			<DentistsSummary />
		</>
	);
};

export default Dentists;
