import { Container, Row, Col, FormGroup, Button, Label, Input } from 'reactstrap';
import { Formik, Field, Form, FormikConsumer } from 'formik';
import * as Yup from 'yup';
import { postAppointment } from './appointmentsSlice';
import { useDispatch } from 'react-redux';

const AppointmentForm = () => {
	const dispatch = useDispatch();

	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.required('Name is required')
			.matches(/^(.*[a-zA-Z]){2,}.*$/, 'Must have at least 2 letters'),
		phone: Yup.string()
			.required('Phone is required')
			.matches(/^(\d{1}-?)?\d{3}-?\d{3}-?\d{4}$/, '1-XXX-XXX-XXXX or XXXXXXXXXX'),
		email: Yup.string().email('Invalid email').required('Email is required'),
		address: Yup.string().required('Address is required'),
		zip: Yup.string()
			.required('Zip required')
			.matches(/^\d{5}$/, '5-digit zip'),
		schedule1: Yup.string().required('Must select first preferred time').notOneOf([''], 'Must select first preferred time'),
		schedule2: Yup.string().required('Must select second preferred time').notOneOf([''], 'Must select second preferred time'),
		message: Yup.string().required('Message is required'),
	});

	const handleSubmit = (values, { setSubmitting }) => {
		console.log('🚀 ~ file: AppointmentForm.jsx:28 ~ handleSubmit ~ values:', values);
		// Handle form submission here, building body for PUT
		const appointment = {
			name: values.name,
			phone: values.phone,
			email: values.email,
			address: values.address,
			zip: values.zip,
			schedule1: values.schedule1,
			schedule2: values.schedule2,
			message: values.message,
			date: new Date(Date.now()).toISOString(),
		};
		try {
			dispatch(postAppointment(appointment));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className='appointment-form section overlay'>
			<Container>
				<Row>
					<Col>
						<h2 className='section-heading text-white text-center'>Book An Appointment</h2>
						<div className='line mb-5 mx-auto'></div>
						<Formik
							initialValues={{
								name: '',
								phone: '',
								email: '',
								address: '',
								schedule1: '',
								schedule2: '',
								zip: '',
								message: '',
							}}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}
						>
							{({ values, touched, errors, dirty, isSubmitting, handleBlur, isValid }) =>
								!isSubmitting ? (
									<Form id='book-appointment-form'>
										<Row>
											<Col md='6'>
												<FormGroup floating>
													<Field
														type='text'
														name='name'
														className={`${(errors.name && touched.name) || (errors.name && dirty.name) ? 'border-danger border-1' : 'border-0'} form-control rounded-0`}
														placeholder='Your Name'
													/>
													<Label htmlFor='name'>
														<i className={`${(errors.name && touched.name) || (errors.name && dirty.name) ? 'text-danger' : ''} text-capitalize`}>{errors.name && touched.name ? errors.name : 'name'}</i>
													</Label>
												</FormGroup>
											</Col>
											<Col md='6'>
												<FormGroup floating>
													<Field
														type='tel'
														name='phone'
														className={`${(errors.phone && touched.phone) || (errors.phone && dirty.phone) ? 'border-danger border-1' : 'border-0'} form-control rounded-0`}
														placeholder='Your Phone'
													/>
													<Label htmlFor='phone'>
														<i className={`${(errors.phone && touched.phone) || (errors.phone && dirty.phone) ? 'text-danger' : ''} text-capitalize`}>{errors.phone && touched.phone ? errors.phone : 'phone'}</i>
													</Label>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col md='6'>
												<FormGroup floating>
													<Field
														type='email'
														name='email'
														className={`${(errors.email && touched.email) || (errors.email && dirty.email) ? 'border-danger border-1' : 'border-0'} form-control rounded-0`}
														placeholder='Your Email'
													/>
													<Label htmlFor='email'>
														<i className={`${(errors.email && touched.email) || (errors.email && dirty.email) ? 'text-danger' : ''} text-capitalize`}>{errors.email && touched.email ? errors.email : 'email'}</i>
													</Label>
												</FormGroup>
											</Col>
											<Col
												xs='8'
												md='3'
												lg='4'
											>
												<FormGroup floating>
													<Field
														name='address'
														className={`${(errors.address && touched.address) || (errors.address && dirty.address) ? 'border-danger border-1' : 'border-0'} form-control rounded-0`}
														placeholder='Your Address'
													/>
													<Label htmlFor='address'>
														<i className={`${(errors.address && touched.address) || (errors.address && dirty.address) ? 'text-danger' : ''} text-capitalize`}>{errors.address && touched.address ? errors.address : 'address'}</i>
													</Label>
												</FormGroup>
											</Col>
											<Col
												xs='4'
												md='3'
												lg='2'
											>
												<FormGroup floating>
													<Field
														name='zip'
														className={`${(errors.zip && touched.zip) || (errors.zip && dirty.zip) ? 'border-danger border-1' : 'border-0'} form-control rounded-0`}
														placeholder='Zip'
														onBlur={handleBlur}
													/>
													<Label htmlFor='zip'>
														<i className={`${(errors.zip && touched.zip && handleBlur) || (errors.zip && dirty.zip && handleBlur) ? 'text-danger' : ''} text-capitalize`}>{errors.zip && touched.zip ? errors.zip : 'zip'}</i>
													</Label>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col md='6'>
												<FormGroup floating>
													<Field
														name='schedule1'
														as='select'
														className={`${(errors.schedule1 && touched.schedule1) || (errors.schedule1 && dirty.schedule1) ? 'border-danger border-1' : 'border-0'} form-control rounded-0`}
													>
														<option value=''>First preferred...</option>
														<option value='8AM-9AM'>8AM-9AM</option>
														<option value='9AM-10AM'>9AM-10AM</option>
														<option value='10AM-11AM'>10AM-11PM</option>
														<option value='11AM-12PM'>11AM-12PM</option>
													</Field>

													<Label htmlFor='schedule1'>
														<i className={`${(errors.schedule1 && touched.schedule1) || (errors.schedule1 && dirty.schedule1) ? 'text-danger' : ''} text-capitalize`}>{errors.schedule1 && touched.schedule1 ? errors.schedule1 : 'choose your schedule'}</i>
													</Label>
												</FormGroup>
											</Col>
											<Col md='6'>
												<FormGroup floating>
													<Field
														name='schedule2'
														as='select'
														className={`${(errors.schedule2 && touched.schedule2) || (errors.schedule2 && dirty.schedule2) ? 'border-danger border-1' : 'border-0'} form-control rounded-0`}
													>
														<option value=''>Second preferred...</option>
														<option value='1PM-2PM'>1PM-2PM</option>
														<option value='2PM-3PM'>2PM-3PM</option>
														<option value='3PM-4PM'>3PM-4PM</option>
													</Field>
													<Label htmlFor='schedule2'>
														<i className={`${(errors.schedule2 && touched.schedule2) || (errors.schedule2 && dirty.schedule2) ? 'text-danger' : ''} text-capitalize`}>{errors.schedule2 && touched.schedule2 ? errors.schedule2 : 'Choose your schedule'}</i>
													</Label>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col>
												<FormGroup floating>
													<Field
														as='textarea'
														rows='12'
														name='message'
														className={`${(errors.message && touched.message) || (errors.message && dirty.message) ? 'border-danger border-1' : 'border-0'} form-control rounded-0`}
														placeholder='Your Message'
													/>
													<Label htmlFor='message'>
														<i className={`${(errors.message && touched.message) || (errors.message && dirty.message) ? 'text-danger' : ''} text-capitalize`}>{errors.message && touched.message ? errors.message : 'message'}</i>
													</Label>
												</FormGroup>
											</Col>
										</Row>
										<Button
											type='submit'
											color='primary'
											className='d-block mx-auto mt-4'
											disabled={isSubmitting}
										>
											{!isSubmitting ? 'Book appointment' : 'booking...'}
										</Button>
									</Form>
								) : (
									<div className='bg-white py-5'>
										<Row>
											<Col
												xs='10 offset-1'
												md='8 offset-md-2'
											>
												<h2 className='section-heading  text-center'>Thank You, {values.name} for Scheduling Your Dental Appointment!</h2>
												<div className='line mb-5 mx-auto'></div>

												<p>We're delighted that you've chosen our dental clinic for your oral health needs. Your appointment request has been successfully submitted. Our team will review your information and get back to you shortly to confirm your appointment details.</p>

												<ol>
													<li>
														<strong>Confirmation Email:</strong> You will receive a confirmation email at the address you provided. Please double-check your inbox and spam folder, just in case.
													</li>
													<li>
														<strong>Appointment Details:</strong> The email will contain all the specifics of your appointment, including the date, time, and any special instructions you might need to know before your visit.
													</li>
													<li>
														<strong>Reminders:</strong> We'll send you a reminder a day or two before your scheduled appointment to ensure you don't forget.
													</li>
													<li>
														<strong>Preparation</strong> If your appointment requires any specific preparation, our email will provide clear guidance on what you should do beforehand.
													</li>
												</ol>
												<p>In the meantime, if you have any questions or need to make changes to your appointment, please don't hesitate to contact our clinic. We're here to assist you and make your visit as comfortable as possible.</p>
												<p>We look forward to meeting you and taking care of your dental health!</p>
												<p>Best regards,</p>
												<p>Dentos</p>
											</Col>
										</Row>
									</div>
								)
							}
						</Formik>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default AppointmentForm;
