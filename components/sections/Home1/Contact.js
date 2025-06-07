// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// // Validation Schema
// const schema = yup.object().shape({
//     name: yup.string().required('Name is required'),
//     email: yup.string().email('Invalid email').required('Email is required'),
//     phone: yup
//         .string()
//         .matches(/^\d+$/, 'Phone must be only numbers')
//         .min(10, 'Phone must be at least 10 digits')
//         .required('Phone is required'),
//     subject: yup.string().required('Please select a service'),
//     message: yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
// });

// function Contact() {
//     const [loading, setLoading] = useState(false);

//     const services = [
//         { value: '', label: 'Choose Our Service' },
//         { value: 'uiux', label: 'UI/UX Design' },
//         { value: 'workflow', label: 'Workflow Analysis' },
//         { value: 'webdev', label: 'Web Developer' },
//         { value: 'marketing', label: 'Marketing Manager' },
//         { value: 'electrical', label: 'Electrical Engineer' },
//         { value: 'webdesign', label: 'Web Designer' },
//         { value: 'finance', label: 'Financial Advice' },
//     ];

//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         reset,
//     } = useForm({
//         resolver: yupResolver(schema),
//     });

//     const onSubmit = async (data) => {
//         setLoading(true);
//         console.log('Form Submitted:', data);
//         // Simulate API call
//         setTimeout(() => {
//             setLoading(false);
//             reset();
//             alert('Your message has been sent!');
//         }, 2000);
//     };

//     return (
//         <section
//             id="contact-menu"
//             className="contact-area"
//             data-speed="0.5"
//             data-parallax="scroll"
//            // style={{ backgroundImage: `url("assets/images/contact/map.png")` }}
//         >
//             <div className="contact__wrp">
//                 <div className="contact__form">
//                     <div className="section-header mb-50">
//                         <h2 className="wow splt-txt" data-splitting>
//                             Call us for any inquiry and <br /> get in touch with us
//                         </h2>
//                     </div>
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <div className="row g-4">
//                             <div className="col-sm-6">
//                                 <label htmlFor="your-name" className="sr-only">Your Name</label>
//                                 <input
//                                     type="text"
//                                     id="your-name"
//                                     name="name"
//                                     placeholder="Your Name"
//                                     {...register('name')}
//                                 />
//                                 {errors.name && <p className="error">{errors.name.message}</p>}
//                             </div>
//                             <div className="col-sm-6">
//                                 <label htmlFor="your-email" className="sr-only">Email Address</label>
//                                 <input
//                                     type="email"
//                                     id="your-email"
//                                     name="email"
//                                     placeholder="Email Address"
//                                     {...register('email')}
//                                 />
//                                 {errors.email && <p className="error">{errors.email.message}</p>}
//                             </div>
//                             <div className="col-sm-6">
//                                 <label htmlFor="your-phone" className="sr-only">Phone</label>
//                                 <input
//                                     type="text"
//                                     id="your-phone"
//                                     name="phone"
//                                     placeholder="Phone"
//                                     {...register('phone')}
//                                 />
//                                 {errors.phone && <p className="error">{errors.phone.message}</p>}
//                             </div>
//                             <div className="col-sm-6">
//                                 <label htmlFor="select-services" className="sr-only">Select Service</label>
//                                 <select id="select-services" name="subject" {...register('subject')}>
//                                     {services.map((service, index) => (
//                                     <option key={index} value={service.value}>{service.label}</option>
//                                     ))}
//                                 </select>
//                                 {errors.subject && <p className="error">{errors.subject.message}</p>}
//                             </div>
//                         </div>
//                         <label htmlFor="message" className="sr-only">Your Message</label>
//                         <textarea className="mt-4 rounded-0" id="message" name="message" placeholder="Write a Message" {...register('message')}></textarea>
//                         {errors.message && <p className="error">{errors.message.message}</p>}
//                         <button type="submit" className="btn-one mt-50" data-splitting disabled={loading}>
//                             {loading ? 'Sending...' : 'Submit Now'}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>

//     );
// }

// export default Contact;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation Schema
const schema = yup.object().shape({
	name: yup.string().required("Name is required"),
	email: yup.string().email("Invalid email").required("Email is required"),
	phone: yup
		.string()
		.matches(/^\d+$/, "Phone must be only numbers")
		.min(10, "Phone must be at least 10 digits")
		.required("Phone is required"),
	subject: yup.string().required("Please select a service"),
	message: yup
		.string()
		.min(10, "Message must be at least 10 characters")
		.required("Message is required"),
});

function Contact() {
	const [loading, setLoading] = useState(false);

	const services = [
		{ value: "", label: "Choose Our Service" },
		{ value: "uiux", label: "UI/UX Design" },
		{ value: "workflow", label: "Workflow Analysis" },
		{ value: "webdev", label: "Web Developer" },
		{ value: "marketing", label: "Marketing Manager" },
		{ value: "electrical", label: "Electrical Engineer" },
		{ value: "webdesign", label: "Web Designer" },
		{ value: "finance", label: "Financial Advice" },
	];

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		setLoading(true);
		console.log("Form Submitted:", data);
		setTimeout(() => {
			setLoading(false);
			reset();
			alert("Your message has been sent!");
		}, 2000);
	};

	return (
		<section
			id="contact-menu"
			className="contact-area">
			<div className="row">
				{/* Left Side - Google Map */}
				<div className="col-lg-6">
					<div className="map-container shadow rounded h-100 overflow-hidden">
						<iframe
							src="https://www.google.com/maps?q=318%20Avenue,%20Unit%20454%20Redondo%20Beach,%20CA.%2090277&output=embed"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							title="Company Location"></iframe>
					</div>
				</div>

				{/* Right Side - Contact Form */}
				<div className="col-lg-6">
					<div className="contact__form">
						<div className="section-header mb-4">
							<h2>
								Call us for any inquiry <br /> and get in touch with us
							</h2>
						</div>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="row g-3">
								<div className="col-sm-6">
									<input
										type="text"
										name="name"
										placeholder="Your Name"
										{...register("name")}
									/>
									{errors.name && (
										<p className="error">{errors.name.message}</p>
									)}
								</div>
								<div className="col-sm-6">
									<input
										type="email"
										name="email"
										placeholder="Email Address"
										{...register("email")}
									/>
									{errors.email && (
										<p className="error">{errors.email.message}</p>
									)}
								</div>
								<div className="col-sm-6">
									<input
										type="text"
										name="phone"
										placeholder="Phone"
										{...register("phone")}
									/>
									{errors.phone && (
										<p className="error">{errors.phone.message}</p>
									)}
								</div>
								<div className="col-sm-6">
									<select
										name="subject"
										{...register("subject")}>
										{services.map((service, index) => (
											<option
												key={index}
												value={service.value}>
												{service.label}
											</option>
										))}
									</select>
									{errors.subject && (
										<p className="error">{errors.subject.message}</p>
									)}
								</div>
							</div>
							<textarea
								className="mt-3"
								name="message"
								placeholder="Write a Message"
								{...register("message")}></textarea>
							{errors.message && (
								<p className="error">{errors.message.message}</p>
							)}
							<button
								type="submit"
								className="btn btn-primary mt-3"
								disabled={loading}>
								{loading ? "Sending..." : "Submit Now"}
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* Style */}
			<style jsx>{`
				.contact-area {
					background-color: #f9f9f9;
				}
				.contact__form input,
				.contact__form select,
				.contact__form textarea {
					width: 100%;
					padding: 10px;
					border: 1px solid #ddd;
					border-radius: 4px;
				}
				.error {
					color: red;
					font-size: 0.9rem;
					margin-top: 4px;
				}
				.map-container {
					min-height: 400px;
				}
			`}</style>
		</section>
	);
}

export default Contact;
