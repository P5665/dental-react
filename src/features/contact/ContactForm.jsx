import { Button, Label, Row, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { postContact } from './contactsSlice';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
	const dispatch = useDispatch();

	// Define the validation schema using Yup
	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.required('Name is required')
			.matches(/^(.*[a-zA-Z]){2,}.*$/, 'Must have at least 2 letters'),
		email: Yup.string().email('Invalid email').required('Email is required'),
		message: Yup.string().required('Message is required'),
	});

	const handleSubmit = (values, { setSubmitting, resetForm }) => {
		// Handle form submission here, building body for PUT
		const contact = {
			name: values.name,
			email: values.email,
			message: values.message,
			date: new Date(Date.now()).toISOString(),
		};
		try {
			dispatch(postContact(contact));
		} catch (error) {
			console.log(error);
		}
		resetForm();
		setSubmitting(false);
	};

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
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ touched, errors, dirty, isSubmitting }) => (
					<Form>
						{/* Wrap all form elements inside a single parent <Form> element */}
						<Row>
							<Col
								lg='6'
								className='mb-4'
							>
								<Field
									className={`${(errors.name && touched.name) || (errors.name && dirty.name) ? 'border-danger border-1' : ''} form-control rounded-0`}
									name='name'
									placeholder='Your Name'
								/>
								<ErrorMessage
									name='name'
									component='div'
									className='text-danger ps-1 pt-1'
								/>
							</Col>
							<Col
								lg='6'
								className='mb-4'
							>
								<Field
									className={`${(errors.email && touched.email) || (errors.email && dirty.email) ? 'border-danger border-1' : ''} form-control rounded-0`}
									name='email'
									placeholder='Your Email'
								/>
								<ErrorMessage
									name='email'
									component='div'
									className='text-danger ps-1 pt-1'
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<Field
									className={`${(errors.message && touched.message) || (errors.message && dirty.message) ? 'border-danger border-1' : ''} form-control rounded-0`}
									name='message'
									as='textarea'
									placeholder='Your Message'
									rows='5'
								/>
								<ErrorMessage
									name='message'
									component='div'
									className='text-danger ps-1 pt-1'
								/>
							</Col>
						</Row>
						{/* Add other form fields here */}
						<Button
							color='primary'
							type='submit'
							className='mt-3'
							disabled={isSubmitting}
						>
							{!isSubmitting ? 'Send Message' : 'sending...'}
						</Button>
					</Form>
				)}
			</Formik>
		</Col>
	);
};

export default ContactForm;
