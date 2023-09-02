import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { selectAllFaq, selectFaqByCategory, selectUniqueCategories } from '../features/faq/faqSlice';
import { Container, Row, Col } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import subHeaderImage from '../assets/bg-img/12.jpg';
import FaqAccordion from '../features/faq/FaqAccordion';

const FAQ = () => {
	const faqs = useSelector(selectAllFaq);

	const faqCategories = useSelector(selectUniqueCategories);
	const [selectedCategory, setSelectedCategory] = useState('');
	const dispatch = useDispatch();

	const handleCategoryChange = (event) => {
		event.preventDefault();
		setSelectedCategory(event.target.value);
		dispatch(selectFaqByCategory(selectedCategory));
	};

	return (
		<>
			<SubHeader
				current='FAQ'
				image={subHeaderImage}
			/>
			<Container className='section'>
				<Row>
					<Col className='text-center mb-5'>
						<label
							htmlFor='categoryFilter'
							className='me-3'
						>
							Filter by Category:{' '}
						</label>
						<select
							id='categoryFilter'
							value={selectedCategory}
							onChange={handleCategoryChange}
							className='text-capitalize'
						>
							<option value='All'>All</option>
							{faqCategories.map((faq, index) => (
								<option
									key={index}
									value={faq.category}
								>
									{faq}
								</option>
							))}
						</select>
					</Col>
				</Row>
				<FaqAccordion faqList={faqs} />
			</Container>
		</>
	);
};

export default FAQ;
