import { useState } from 'react';
import { Row, Col, Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';

function FaqAccordion({ faqList }) {
	const [open, setOpen] = useState('0');
	const toggle = (id) => {
		if (open === id) {
			setOpen();
		} else {
			setOpen(id);
		}
	};

	return (
		<Row>
			<Col md='8 offset-md-2'>
				<Accordion
					open={open}
					toggle={toggle}
				>
					{faqList.map(({ id, question, answer }, index) => (
						<AccordionItem key={index}>
							<AccordionHeader
								className='text-dark'
								targetId={id}
							>
								{question}
							</AccordionHeader>
							<AccordionBody
								className='text-dark-gray'
								accordionId={id}
							>
								{answer}
							</AccordionBody>
						</AccordionItem>
					))}
				</Accordion>
			</Col>
		</Row>
	);
}

export default FaqAccordion;
