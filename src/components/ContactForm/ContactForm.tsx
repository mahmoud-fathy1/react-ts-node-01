import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './contactForm.css';
import { useState } from 'react';

interface FormValues {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string()
        .matches(/^[+]? *[0-9][0-9 ]*$/, 'Invalid phone number')
        .required('Required'),
    message: Yup.string().min(10, 'Too Short!').max(500, 'Too Long!').required('Required'),
});

function ContactForm() {
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    const handleSubmit = async (values: FormValues, { resetForm }: any) => {
        try {
            setIsSubmitting(true);

            const response = await fetch('http://localhost/aq-server/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setError('');
            setSubmissionSuccess(true);
            resetForm();
        } catch (error) {
            setSubmissionSuccess(false);
            setError('Failed to submit form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <>
            <div id="contact-us" className="contact-us-backgrund relative h-[80vh]">
                <div>
                    <h2 className="absolute left-1/2 top-5 -translate-x-1/2 transform text-center font-lobster text-4xl text-active-link">
                        contact us
                    </h2>
                    <img
                        className="absolute right-0 top-1/2 hidden -translate-y-1/2 scale-x-[-1] transform lg:block"
                        src="/assets/Contact/contact1.webp"
                        alt=""
                    />
                    <div className="absolute left-1/4 top-1/2 -translate-x-1/4 -translate-y-1/2 transform">
                        <div className="flex flex-col gap-1 py-5">
                            <h2 className="text-2xl font-medium text-active-link">DO NOT HESITATE TO CONTACT US.</h2>
                            <p className="text-active-link">If you require any further information.</p>
                        </div>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                phone: '',
                                message: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form className=" flex flex-col gap-3">
                                    <div>
                                        <Field className="h-8 w-full p-5" name="name" placeholder="Name" type="text" />
                                        {errors.name && touched.name ? <div>{errors.name}</div> : null}
                                    </div>

                                    <div>
                                        <Field className="h-8 w-full p-5" name="email" placeholder="E-mail" type="email" />
                                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                                    </div>

                                    <div>
                                        <Field
                                            className="h-8 w-full p-5"
                                            name="phone"
                                            placeholder="Phone Number"
                                            type="tel"
                                        />
                                        {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
                                    </div>

                                    <div>
                                        <Field
                                            className="h-20 w-full p-5"
                                            name="message"
                                            placeholder="Your Message"
                                            as="textarea"
                                        />
                                        {errors.message && touched.message ? <div>{errors.message}</div> : null}
                                    </div>

                                    <button
                                        className="m-auto flex w-3/4 items-center justify-center gap-3 rounded-lg bg-active-link py-2 text-white"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <div role="status">
                                                <svg
                                                    aria-hidden="true"
                                                    className="inline h-8 w-8 animate-spin fill-gray-600 text-gray-200 dark:fill-gray-300 dark:text-gray-600"
                                                    viewBox="0 0 100 101"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                        fill="currentFill"
                                                    />
                                                </svg>
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        ) : (
                                            <img className="w-7" src="/assets/Contact/message-icon.svg" alt="" />
                                        )}
                                        <span>{isSubmitting ? 'Sending...' : 'Send message'}</span>
                                    </button>
                                    {submissionSuccess && (
                                        <div className="rounded-lg bg-gradient-to-r from-teal-400 to-yellow-200 p-4 text-center text-lg text-black ">
                                            Thank you for your submission!
                                        </div>
                                    )}
                                    {error && (
                                        <div className="rounded-lg bg-gradient-to-r from-red-500 to-orange-500 p-4 text-center text-lg text-black">
                                            {error}
                                        </div>
                                    )}
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
