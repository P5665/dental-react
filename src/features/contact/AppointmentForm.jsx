import { Container, Row, Col, FormGroup, Button, Label, Input } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const AppointmentForm = () => {
	return (
		<section className='appointment-form section overlay'>
			<Container>
				<Row>
					<Col>
						<h2 className='section-heading text-white text-center'>Book An Appointment</h2>
						<div className='line mb-5 mx-auto'></div>
						<Formik>
							<Form id='book-appointment-form'>
								<Row>
									<Col md='6'>
										<FormGroup floating>
											<Field
												type='text'
												name='name'
												className='form-control rounded-0 '
												placeholder='Your Name'
											/>
											<Label
												htmlFor='name'
												className='text-white '
											>
												Name
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
												className='form-control rounded-0 text-white bg-dark-gray opacity-50 border-0 mb-2'
												placeholder='Your Phone'
											/>
											<ErrorMessage
												name='phone'
												component='div'
												className='text-danger'
											/>
										</FormGroup>
									</Col>
								</Row>
								<FormGroup
									floating
									row
								>
									<Col md='6'>
										<Field
											type='email'
											name='email'
											className='form-control rounded-0 text-white bg-dark-gray opacity-50 border-0 mb-2'
											placeholder='Your Email'
										/>
										<ErrorMessage
											name='email'
											component='div'
											className='text-danger'
										/>
									</Col>
									<Col
										xs='8'
										md='4'
									>
										<Field
											name='address'
											className='form-control rounded-0 text-white bg-dark-gray opacity-50 border-0 mb-2'
											placeholder='Your Address'
										/>
										<ErrorMessage
											name='address'
											component='div'
											className='text-danger'
										/>
									</Col>
									<Col
										xs='4'
										md='2'
									>
										<Field
											name='zip'
											className='form-control rounded-0 text-white bg-dark-gray opacity-50 border-0 mb-2'
											placeholder='Zip'
										/>
										<ErrorMessage
											name='zip'
											component='div'
											className='text-danger'
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Col md='6'>
										<Field
											type='text'
											name='name'
											className='form-control rounded-0 text-white bg-dark-gray opacity-50 border-0 mb-2'
											placeholder='Your Name'
										/>
										<ErrorMessage
											name='name'
											component='div'
											className='text-danger'
										/>
									</Col>
									<Col md='6'>
										<Field
											type='tel'
											name='phone'
											pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
											className='form-control rounded-0 text-white bg-dark-gray opacity-50 border-0 mb-2'
											placeholder='Your Phone'
										/>
										<ErrorMessage
											name='phone'
											component='div'
											className='text-danger'
										/>
									</Col>
								</FormGroup>
								<FormGroup
									row
									floating
								>
									<Col>
										<Field
											type='text'
											name='message'
											className='form-control rounded-0 text-white bg-dark-gray opacity-50 border-0 mb-2'
											placeholder='Your Message'
										/>
										<ErrorMessage
											name='message'
											component='div'
											className='text-danger'
										/>
									</Col>
								</FormGroup>
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
