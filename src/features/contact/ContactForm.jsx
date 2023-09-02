import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const ContactForm = () => {
	return (
		<Col className='mt-5'>
			<h2 className='section-heading text-dark '>Get In Touch</h2>
			<div className='line mb-5'></div>
			<Formik
				initialValues={{
					name: '',
					email: '',
					message: '',
				}}
			>
				<Form>
					{/* Wrap all form elements inside a single parent <Form> element */}
					<FormGroup row>
						<Col
							lg='6'
							className='mb-4 mb-lg-0'
						>
							<Field
								className='form-control rounded-0'
								name='name'
								placeholder='Your Name'
							/>
							<ErrorMessage name='name'>{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage>
						</Col>
						<Col lg='6'>
							<Field
								className='form-control rounded-0'
								name='email'
								placeholder='Your Email'
							/>
							<ErrorMessage name='email'>{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Col>
							<Field
								className='form-control'
								name='feedback'
								as='textarea'
								placeholder='Your Message'
								rows='5'
							/>
							{/* <ErrorMessage name=''>{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage> */}
						</Col>
					</FormGroup>

					{/* Add other form fields here */}
					<Button
						color='primary'
						type='submit'
						className='mt-3'
					>
						Send Message
					</Button>
				</Form>
			</Formik>
		</Col>
	);
};

export default ContactForm;
