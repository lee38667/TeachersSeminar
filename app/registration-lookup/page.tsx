'use client';

import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LookupSchema = Yup.object().shape({
  searchType: Yup.string().required('Please select search type'),
  value: Yup.string().required('Please enter your confirmation code or email'),
});

export default function RegistrationLookup() {
  const [registration, setRegistration] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLookup = async (values: any, { setSubmitting }: any) => {
    setLoading(true);
    setError('');
    setRegistration(null);

    try {
      const searchParams = new URLSearchParams();
      if (values.searchType === 'code') {
        searchParams.append('code', values.value);
      } else {
        searchParams.append('email', values.value);
      }

      const response = await fetch(`/api/register?${searchParams.toString()}`);
      const data = await response.json();

      if (response.ok) {
        setRegistration(data.registration);
      } else {
        setError(data.error || 'Registration not found');
      }
    } catch (error) {
      setError('Failed to lookup registration. Please try again.');
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-trust py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-white/10 to-transparent" style={{clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)'}}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/20 rounded-full animate-float"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium text-sm uppercase tracking-wider border-l-4 border-yellow-400">
                🔍 Check Registration
              </span>
            </div>
            
            <h1 className="hero-title text-white mb-8 animate-slide-diagonal">
              Registration
              <br />
              <span className="text-yellow-400">Lookup</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl animate-fade-up" style={{animationDelay: '0.2s'}}>
              Check your registration status and view your confirmation details.
            </p>
          </div>
        </div>
      </section>

      {/* Lookup Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white angular-form p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Your Registration</h2>
              
              <Formik
                initialValues={{
                  searchType: 'code',
                  value: '',
                }}
                validationSchema={LookupSchema}
                onSubmit={handleLookup}
              >
                {({ values, isSubmitting }) => (
                  <Form className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                        Search By
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <label className="flex items-center p-4 border-2 border-gray-200 angular-form cursor-pointer hover:border-blue-300 transition-colors">
                          <Field type="radio" name="searchType" value="code" className="mr-3" />
                          <div>
                            <div className="font-semibold text-gray-900">Confirmation Code</div>
                            <div className="text-sm text-gray-600">REG-XXXXXX-XXXXX</div>
                          </div>
                        </label>
                        
                        <label className="flex items-center p-4 border-2 border-gray-200 angular-form cursor-pointer hover:border-blue-300 transition-colors">
                          <Field type="radio" name="searchType" value="email" className="mr-3" />
                          <div>
                            <div className="font-semibold text-gray-900">Email Address</div>
                            <div className="text-sm text-gray-600">your@email.com</div>
                          </div>
                        </label>
                      </div>
                      <ErrorMessage name="searchType" component="div" className="text-red-500 text-sm mt-2 font-medium" />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                        {values.searchType === 'code' ? 'Confirmation Code' : 'Email Address'}
                      </label>
                      <Field
                        name="value"
                        type={values.searchType === 'email' ? 'email' : 'text'}
                        className="form-input w-full px-4 py-3 border-2 border-gray-200 angular-form focus:outline-none focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                        placeholder={values.searchType === 'code' ? 'Enter your confirmation code' : 'Enter your email address'}
                      />
                      <ErrorMessage name="value" component="div" className="text-red-500 text-sm mt-2 font-medium" />
                    </div>

                    {error && (
                      <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 angular-card">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          {error}
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting || loading}
                      className="w-full cta-button bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 font-bold font-space disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Searching...
                        </span>
                      ) : (
                        'Find Registration'
                      )}
                    </button>
                  </Form>
                )}
              </Formik>

              {/* Registration Details */}
              {registration && (
                <div className="mt-8 p-6 bg-green-50 border-l-4 border-green-500 angular-card">
                  <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Registration Found
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-gray-900">Name:</strong>
                      <p className="text-gray-700">{registration.firstName} {registration.lastName}</p>
                    </div>
                    
                    <div>
                      <strong className="text-gray-900">Email:</strong>
                      <p className="text-gray-700">{registration.email}</p>
                    </div>
                    
                    <div>
                      <strong className="text-gray-900">Participation Type:</strong>
                      <p className="text-gray-700 capitalize">{registration.participationType}</p>
                    </div>
                    
                    <div>
                      <strong className="text-gray-900">Status:</strong>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        registration.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        registration.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {registration.status}
                      </span>
                    </div>
                    
                    <div>
                      <strong className="text-gray-900">Payment Status:</strong>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        registration.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' :
                        registration.paymentStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {registration.paymentStatus}
                      </span>
                    </div>
                    
                    <div>
                      <strong className="text-gray-900">Confirmation Code:</strong>
                      <p className="font-mono text-blue-600">{registration.confirmationCode}</p>
                    </div>
                    
                    <div>
                      <strong className="text-gray-900">Registered:</strong>
                      <p className="text-gray-700">{new Date(registration.createdAt).toLocaleDateString()}</p>
                    </div>
                    
                    <div>
                      <strong className="text-gray-900">Last Updated:</strong>
                      <p className="text-gray-700">{new Date(registration.updatedAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
                    <p className="text-blue-800 text-sm">
                      <strong>Next Steps:</strong> {registration.status === 'pending' 
                        ? 'Your registration is being processed. You will receive an email confirmation once approved.'
                        : registration.paymentStatus === 'unpaid'
                        ? 'Please complete your payment to secure your spot. Payment instructions will be sent via email.'
                        : 'Your registration is complete! We look forward to seeing you at the seminar.'
                      }
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
