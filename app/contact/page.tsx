'use client';

import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (values: any, { setSubmitting, resetForm, setStatus }: any) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        resetForm();
        setStatus({ type: 'success', message: data.message });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setStatus(null);
        }, 5000);
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message' });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="overflow-hidden">
      {/* Angular Hero Section */}
      <section className="section-trust py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-white/10 to-transparent" style={{clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)'}}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/20 rounded-full animate-float"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium text-sm uppercase tracking-wider border-l-4 border-yellow-400">
                🤝 Connect With Us
              </span>
            </div>
            
            <h1 className="hero-title text-white mb-8 animate-slide-diagonal">
              Contact
              <br />
              <span className="text-yellow-400">KEIDF</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed mb-12">
              Ready to join the movement? Have questions about our programs? 
              Our dedicated team is here to support your educational transformation journey.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-6 animate-expand-in">
                <div className="text-2xl font-bold text-white mb-2">24hr Response</div>
                <div className="text-white/80">Quick professional support</div>
              </div>
              <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-6 animate-expand-in" style={{animationDelay: '0.2s'}}>
                <div className="text-2xl font-bold text-white mb-2">3 Languages</div>
                <div className="text-white/80">English, Afrikaans, Oshiwambo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      <div className="section-growth py-20">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="section-title text-gray-900 mb-12">Get in Touch</h2>
              
              {/* Contact Details */}
              <div className="impact-card bg-white p-8 mb-8 animate-expand-in">
                <h3 className="text-2xl font-bold mb-8 text-gray-900">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 angular-icon mr-6 mt-1 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Physical Address</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Van Rhyn Primary School<br />
                        Katutura, Windhoek<br />
                        Khomas Region, Namibia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 angular-icon mr-6 mt-1 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Email Contacts</h4>
                      <p className="text-gray-600 leading-relaxed">
                        <a href="mailto:info@keidf-seminar.org" className="text-green-600 hover:text-green-800 font-medium">
                          info@keidf-seminar.org
                        </a><br />
                        <a href="mailto:registration@keidf-seminar.org" className="text-green-600 hover:text-green-800 font-medium">
                          registration@keidf-seminar.org
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 angular-icon mr-6 mt-1 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Phone Numbers</h4>
                      <p className="text-gray-600 leading-relaxed">
                        +264 61 234 5678<br />
                        +264 81 123 4567 (Mobile)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 angular-icon mr-6 mt-1 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Office Hours</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Personnel */}
              <div className="impact-card bg-white p-8 animate-expand-in" style={{animationDelay: '0.3s'}}>
                <h3 className="text-2xl font-bold mb-8 text-gray-900">Key Personnel</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-500 angular-icon mr-6 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">LI</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Ms. Leena M. Iileka</h4>
                      <p className="text-gray-600 font-medium mb-2">Seminar Coordinator & Education Researcher</p>
                      <p className="text-sm text-gray-500">
                        <a href="mailto:leena.iileka@keidf-seminar.org" className="text-blue-600 hover:text-blue-800">
                          leena.iileka@keidf-seminar.org
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 angular-icon mr-6 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">VR</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Mr. Andreas Van Rhyn</h4>
                      <p className="text-gray-600 font-medium mb-2">Principal, Van Rhyn Primary School</p>
                      <p className="text-sm text-gray-500">
                        <a href="mailto:principal@vanrhyn.edu.na" className="text-green-600 hover:text-green-800">
                          principal@vanrhyn.edu.na
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 angular-icon mr-6 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">EN</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Dr. Elizabeth Nakamhela</h4>
                      <p className="text-gray-600 font-medium mb-2">Academic Director, Environmental Education</p>
                      <p className="text-sm text-gray-500">
                        <a href="mailto:academic@keidf-seminar.org" className="text-purple-600 hover:text-purple-800">
                          academic@keidf-seminar.org
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="impact-card bg-white p-8 animate-expand-in" style={{animationDelay: '0.1s'}}>
                <h3 className="text-2xl font-bold mb-8 text-gray-900">Send us a Message</h3>
                
                {isSubmitted && (
                  <div className="mb-8 p-6 bg-green-50 border-l-4 border-green-500 text-green-700 angular-card">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Thank you for your message! We'll get back to you within 24 hours.
                    </div>
                  </div>
                )}

                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    organization: '',
                    subject: '',
                    message: '',
                    mailingList: false,
                  }}
                  validationSchema={ContactSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, status }) => (
                    <Form className="space-y-8">
                      {/* Status Messages */}
                      {status && (
                        <div className={`p-6 border-l-4 angular-card ${
                          status.type === 'success' 
                            ? 'bg-green-50 border-green-500 text-green-700' 
                            : 'bg-red-50 border-red-500 text-red-700'
                        }`}>
                          <div className="flex items-center">
                            <svg className={`w-6 h-6 mr-3 ${
                              status.type === 'success' ? 'text-green-600' : 'text-red-600'
                            }`} fill="currentColor" viewBox="0 0 20 20">
                              {status.type === 'success' ? (
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              ) : (
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              )}
                            </svg>
                            {status.message}
                          </div>
                        </div>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                            Name *
                          </label>
                          <Field
                            name="name"
                            type="text"
                            className="form-input w-full px-4 py-3 border-2 border-gray-200 angular-form focus:outline-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                            placeholder="Your full name"
                          />
                          <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-2 font-medium" />
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                            Email *
                          </label>
                          <Field
                            name="email"
                            type="email"
                            className="form-input w-full px-4 py-3 border-2 border-gray-200 angular-form focus:outline-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                            placeholder="your.email@example.com"
                          />
                          <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-2 font-medium" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                          Organization/School
                        </label>
                        <Field
                          name="organization"
                          type="text"
                          className="form-input w-full px-4 py-3 border-2 border-gray-200 angular-form focus:outline-none focus:border-green-500 focus:ring-0 transition-colors duration-300"
                          placeholder="Your school or organization"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                          Subject *
                        </label>
                        <Field
                          as="select"
                          name="subject"
                          className="form-input w-full px-4 py-3 border-2 border-gray-200 angular-form focus:outline-none focus:border-purple-500 focus:ring-0 transition-colors duration-300"
                        >
                          <option value="">Select a subject</option>
                          <option value="registration">Registration Inquiry</option>
                          <option value="presentation">Presentation Submission</option>
                          <option value="accommodation">Accommodation</option>
                          <option value="program">Program Information</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="media">Media Inquiry</option>
                          <option value="technical">Technical Support</option>
                          <option value="other">Other</option>
                        </Field>
                        <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-2 font-medium" />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                          Message *
                        </label>
                        <Field
                          as="textarea"
                          name="message"
                          rows={6}
                          className="form-input w-full px-4 py-3 border-2 border-gray-200 angular-form focus:outline-none focus:border-orange-500 focus:ring-0 transition-colors duration-300 resize-none"
                          placeholder="Tell us about your inquiry, goals, or how we can help..."
                        />
                        <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-2 font-medium" />
                      </div>

                      <div className="flex items-start">
                        <Field
                          type="checkbox"
                          name="mailingList"
                          className="mt-1 mr-4 w-5 h-5 text-blue-600 border-2 border-gray-300 angular-form focus:ring-0 focus:ring-offset-0"
                        />
                        <label className="text-sm text-gray-700 leading-relaxed">
                          Subscribe to our mailing list for seminar updates, educational resources, and announcement about future KEIDF programs
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-8 font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 disabled:transform-none angular-button"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending Message...
                          </span>
                        ) : 'Send Message'}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>

              {/* Map */}
              <div className="mt-8 impact-card bg-white p-8 animate-expand-in" style={{animationDelay: '0.5s'}}>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Find Us</h3>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 angular-card flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10"></div>
                  <div className="text-center text-gray-600 relative z-10">
                    <svg className="w-16 h-16 mx-auto mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="font-bold text-lg mb-2">Van Rhyn Primary School</p>
                    <p className="text-sm mb-1">Katutura, Windhoek</p>
                    <p className="text-sm mb-3">Khomas Region, Namibia</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Final CTA Section */}
      <section className="section-trust py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-white/10 to-transparent" style={{clipPath: 'polygon(0 0, 70% 0, 40% 100%, 0% 100%)'}}></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-orange-400/20 angular-shape animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-white mb-8">Ready to Transform Education?</h2>
            
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Join thousands of educators who are already making a difference. 
              Your journey towards educational excellence starts with a simple conversation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="/register" 
                className="cta-button bg-white text-gray-900 hover:bg-yellow-400 hover:text-gray-900 px-8 py-4 font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
              >
                Register Now
              </a>
              <a 
                href="mailto:info@keidf-seminar.org" 
                className="cta-button bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
