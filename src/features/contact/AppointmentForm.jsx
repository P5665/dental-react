import { Container, Row, Col, FormGroup, Button, Label, Input } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { postAppointment } from './appointmentsSlice';
import { useDispatch } from 'react-redux';

const AppointmentForm = () => {
	const dispatch = useDispatch();

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
								zip: '',
								message: '',
							}}
						>
							<Form id='book-appointment-form'>
								<Row>
									<Col md='6'>
										<FormGroup floating>
											<Field
												type='text'
												name='name'
												className='form-control rounded-0'
												placeholder='Your Name'
											/>
											<Label htmlFor='name'>
												<i className='text-capitalize'>name</i>
											</Label>
											<ErrorMessage
												name='name'
												component='div'
												className='text-danger'
											/>
										</FormGroup>
									</Col>
									<Col md='6'>
										<FormGroup floating>
											<Field
												type='tel'
												name='phone'
												pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
												className='form-control rounded-0'
												placeholder='Your Phone'
											/>
											<Label htmlFor='phone'>
												<i className='text-capitalize'>phone</i>
											</Label>
											<ErrorMessage
												name='phone'
												component='div'
												className='text-danger'
											/>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col md='6'>
										<FormGroup floating>
											<Field
												type='email'
												name='email'
												className='form-control rounded-0'
												placeholder='Your Email'
											/>
											<Label htmlFor='email'>
												<i className='text-capitalize'>email</i>
											</Label>
											<ErrorMessage
												name='email'
												component='div'
												className='text-danger'
											/>
										</FormGroup>
									</Col>
									<Col
										xs='8'
										md='4'
									>
										<FormGroup floating>
											<Field
												name='address'
												className='form-control rounded-0'
												placeholder='Your Address'
											/>
											<Label htmlFor='address'>
												<i className='text-capitalize'>address</i>
											</Label>
											<ErrorMessage
												name='address'
												component='div'
												className='text-danger'
											/>
										</FormGroup>
									</Col>
									<Col
										xs='4'
										md='2'
									>
										<FormGroup floating>
											<Field
												name='zip'
												className='form-control rounded-0'
												placeholder='Zip'
											/>
											<Label htmlFor='zip'>
												<i className='text-capitalize'>zip</i>
											</Label>
											<ErrorMessage
												name='zip'
												component='div'
												className='text-danger'
											/>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col md='6'>
										<FormGroup floating>
											<Field
												name='schedule1'
												as='select'
												className='form-control'
											>
												<option value=' '>First preferred...</option>
												<option value='1'>1</option>
												<option value='2'>2</option>
												<option value='3'>3</option>
												<option value='4'>4</option>
												<option value='5'>5</option>
											</Field>
											<Label htmlFor='schedule1'>
												<i className='text-capitalize'>choose your schedule</i>
											</Label>
											<ErrorMessage
												name='schedule1'
												component='div'
												className='text-danger'
											/>
										</FormGroup>
									</Col>
									<Col md='6'>
										<FormGroup floating>
											<Field
												name='schedule2'
												as='select'
												className='form-control'
											>
												<option value=' '>Second preferred...</option>
												<option value='1'>1</option>
												<option value='2'>2</option>
												<option value='3'>3</option>
												<option value='4'>4</option>
												<option value='5'>5</option>
											</Field>
											<Label htmlFor='schedule2'>
												<i className='text-capitalize'>choose your schedule</i>
											</Label>
											<ErrorMessage
												name='schedule2'
												component='div'
												className='text-danger'
											/>
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
												className='form-control rounded-0'
												placeholder='Your Message'
											/>
											<Label htmlFor='message'>
												<i className='text-capitalize'>Message</i>
											</Label>
											<ErrorMessage
												name='message'
												component='div'
												className='text-danger'
											/>
										</FormGroup>
									</Col>
								</Row>
								<Button
									type='submit'
									color='primary'
									className='d-block mx-auto mt-4'
								>
									Booking Now
								</Button>
							</Form>
						</Formik>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default AppointmentForm;
