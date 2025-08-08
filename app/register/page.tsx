'use client';

import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  school: Yup.string().required('School name is required'),
  region: Yup.string().required('Region is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  role: Yup.string().required('Role is required'),
  participationType: Yup.string().required('Please select participation type'),
  hasAttendedBefore: Yup.string().required('Please indicate if you have attended before'),
  presentationTitle: Yup.string().when('participationType', {
    is: 'presenter',
    then: (schema) => schema.required('Presentation title is required for presenters'),
    otherwise: (schema) => schema.notRequired(),
  }),
  presentationAbstract: Yup.string().when('participationType', {
    is: 'presenter',
    then: (schema) => schema.required('Presentation abstract is required for presenters'),
    otherwise: (schema) => schema.notRequired(),
  }),
});

export default function Register() {
  const [showImpactSurvey, setShowImpactSurvey] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-save form data to localStorage
  const saveFormData = (values: any) => {
    localStorage.setItem('seminar-registration', JSON.stringify(values));
  };

  const loadFormData = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('seminar-registration');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  };

  const handleSubmit = async (values: any, { setSubmitting, setStatus }: any) => {
    try {
      // Prepare form data for submission
      const formData = {
        firstName: values.name.split(' ')[0] || '',
        lastName: values.name.split(' ').slice(1).join(' ') || '',
        email: values.email,
        phoneNumber: values.phoneNumber,
        school: values.school,
        region: values.region,
        role: values.role,
        participationType: values.participationType,
        hasAttendedBefore: values.hasAttendedBefore === 'yes',
        presentationTitle: values.presentationTitle || '',
        presentationAbstract: values.presentationAbstract || '',
        dietaryRequirements: values.dietaryRequirements || '',
        accessibilityNeeds: values.accessibilityNeeds || '',
        emergencyContact: values.emergencyContact || '',
        expectations: values.expectations || '',
        howDidYouHear: values.howDidYouHear || ''
      };

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        localStorage.removeItem('seminar-registration'); // Clear saved data on success
        
        // Store confirmation details for display
        localStorage.setItem('registration-confirmation', JSON.stringify({
          confirmationCode: data.confirmationCode,
          email: formData.email,
          submittedAt: new Date().toISOString()
        }));

        setStatus({ 
          type: 'success', 
          message: data.message,
          confirmationCode: data.confirmationCode 
        });
      } else {
        setStatus({ 
          type: 'error', 
          message: data.error || 'Registration failed. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Registration error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setSubmitting(false);
    }
  };

  const markStepComplete = (step: number) => {
    if (!completedSteps.includes(step)) {
      setCompletedSteps([...completedSteps, step]);
    }
  };

  const getStepStatus = (step: number) => {
    if (completedSteps.includes(step)) return 'completed';
    if (currentStep === step) return 'current';
    return 'pending';
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Angular Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-teal-500/10 angular-shape"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-r from-teal-500/10 to-blue-500/10 angular-shape-reverse"></div>
      
      <div className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Angular Hero Section */}
          <div className="text-center mb-12 relative">
            <div className="angular-header bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 px-8 mb-8">
              <h1 className="text-5xl font-bold mb-4 font-space">Registration Portal</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Join the movement. Shape the future. Register for the Khomas Annual Primary Teachers' Information Sharing Seminar.
              </p>
            </div>
            
            {/* Enhanced Status Indicators with Progress */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className={`registration-step bg-white p-6 transition-all duration-300 ${getStepStatus(1) === 'completed' ? 'ring-2 ring-green-400' : getStepStatus(1) === 'current' ? 'ring-2 ring-blue-400' : ''}`}>
                <div className={`w-12 h-12 angular-icon mx-auto mb-4 flex items-center justify-center transition-all duration-300 ${
                  getStepStatus(1) === 'completed' ? 'bg-gradient-to-r from-green-500 to-green-600' : 
                  getStepStatus(1) === 'current' ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 
                  'bg-gradient-to-r from-gray-400 to-gray-500'
                }`}>
                  {getStepStatus(1) === 'completed' ? (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-white font-bold text-xl">1</span>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Personal Details</h3>
                <p className="text-gray-600 text-sm">Provide your professional information</p>
              </div>
              <div className={`registration-step bg-white p-6 transition-all duration-300 ${getStepStatus(2) === 'completed' ? 'ring-2 ring-green-400' : getStepStatus(2) === 'current' ? 'ring-2 ring-blue-400' : ''}`}>
                <div className={`w-12 h-12 angular-icon mx-auto mb-4 flex items-center justify-center transition-all duration-300 ${
                  getStepStatus(2) === 'completed' ? 'bg-gradient-to-r from-green-500 to-green-600' : 
                  getStepStatus(2) === 'current' ? 'bg-gradient-to-r from-teal-500 to-teal-600' : 
                  'bg-gradient-to-r from-gray-400 to-gray-500'
                }`}>
                  {getStepStatus(2) === 'completed' ? (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-white font-bold text-xl">2</span>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Participation Type</h3>
                <p className="text-gray-600 text-sm">Choose to attend or present</p>
              </div>
              <div className={`registration-step bg-white p-6 transition-all duration-300 ${getStepStatus(3) === 'completed' ? 'ring-2 ring-green-400' : getStepStatus(3) === 'current' ? 'ring-2 ring-blue-400' : ''}`}>
                <div className={`w-12 h-12 angular-icon mx-auto mb-4 flex items-center justify-center transition-all duration-300 ${
                  getStepStatus(3) === 'completed' ? 'bg-gradient-to-r from-green-500 to-green-600' : 
                  getStepStatus(3) === 'current' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 
                  'bg-gradient-to-r from-gray-400 to-gray-500'
                }`}>
                  {getStepStatus(3) === 'completed' ? (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-white font-bold text-xl">3</span>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Submit & Confirm</h3>
                <p className="text-gray-600 text-sm">Complete your registration</p>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white angular-form p-8 md:p-12 shadow-2xl">
            {isSubmitted ? (
              // Success State
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 angular-icon mx-auto mb-8 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Complete!</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Thank you for registering for the Teachers' Seminar. You'll receive a confirmation email within 24 hours.
                </p>
                
                {(() => {
                  try {
                    const confirmation = JSON.parse(localStorage.getItem('registration-confirmation') || '{}');
                    if (confirmation.confirmationCode) {
                      return (
                        <div className="bg-gray-50 border angular-form p-6 mb-8 max-w-md mx-auto">
                          <h3 className="font-semibold text-gray-900 mb-3">Your Registration Details</h3>
                          <div className="space-y-2 text-sm">
                            <p><strong>Confirmation Code:</strong> <span className="font-mono text-blue-600">{confirmation.confirmationCode}</span></p>
                            <p><strong>Email:</strong> {confirmation.email}</p>
                            <p><strong>Submitted:</strong> {new Date(confirmation.submittedAt).toLocaleString()}</p>
                          </div>
                          <p className="text-xs text-gray-600 mt-4">
                            Please save this confirmation code for your records.
                          </p>
                        </div>
                      );
                    }
                  } catch (e) {
                    return null;
                  }
                })()}
                
                <div className="space-x-4">
                  <button 
                    onClick={() => window.location.reload()} 
                    className="cta-button bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 font-bold font-space"
                  >
                    Register Another Person
                  </button>
                  <button 
                    onClick={() => window.location.href = '/'} 
                    className="angular-button bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 font-bold"
                  >
                    Return to Home
                  </button>
                </div>
              </div>
            ) : (
            <Formik
              initialValues={{
                name: '',
                email: '',
                school: '',
                region: '',
                phoneNumber: '',
                role: '',
                yearsTeaching: '',
                participationType: '',
                hasAttendedBefore: '',
                presentationTitle: '',
                presentationAbstract: '',
                topicStrand: '',
                expectations: '',
                impactRating: '',
                suggestedImprovements: '',
                ...loadFormData(), // Load saved data
              }}
              validationSchema={RegistrationSchema}
              onSubmit={handleSubmit}
              validate={(values) => {
                // Auto-save on validation
                saveFormData(values);
                
                // Update step completion status
                if (values.name && values.email && values.school && values.region && values.phoneNumber && values.role) {
                  markStepComplete(1);
                  setCurrentStep(2);
                }
                if (values.participationType) {
                  markStepComplete(2);
                  setCurrentStep(3);
                }
              }}
            >
              {({ values, setFieldValue, isSubmitting, status }) => (
                <Form className="space-y-8">
                  {/* Status Messages */}
                  {status && (
                    <div className={`p-6 border-l-4 angular-card ${
                      status.type === 'success' 
                        ? 'bg-green-50 border-green-500 text-green-700' 
                        : 'bg-red-50 border-red-500 text-red-700'
                    }`}>
                      <div className="flex items-start">
                        <svg className={`w-6 h-6 mr-3 flex-shrink-0 mt-0.5 ${
                          status.type === 'success' ? 'text-green-600' : 'text-red-600'
                        }`} fill="currentColor" viewBox="0 0 20 20">
                          {status.type === 'success' ? (
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          ) : (
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          )}
                        </svg>
                        <div>
                          <p className="font-semibold">{status.message}</p>
                          {status.confirmationCode && (
                            <p className="mt-2 font-mono text-sm bg-white p-2 rounded border">
                              <strong>Confirmation Code:</strong> {status.confirmationCode}
                            </p>
                          )}
                          {status.type === 'success' && (
                            <p className="mt-2 text-sm">
                              Please save your confirmation code for future reference. You will also receive an email confirmation shortly.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Progress Indicator */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Registration Progress</span>
                      <span className="text-sm text-gray-500">{completedSteps.length}/3 sections completed</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-500"
                        style={{width: `${(completedSteps.length / 3) * 100}%`}}
                      ></div>
                    </div>
                    {loadFormData() && Object.keys(loadFormData()).length > 0 && (
                      <p className="text-xs text-blue-600 mt-2 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Your progress has been automatically saved
                      </p>
                    )}
                  </div>
                  {/* Personal Information */}
                  <div className="section-form">
                    <div className="section-header bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 -mx-8 md:-mx-12 mb-6">
                      <h2 className="text-2xl font-bold font-space">Personal Information</h2>
                      <p className="opacity-90">Tell us about yourself</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-group">
                        <label className="form-label flex items-center gap-2">
                          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          Full Name *
                        </label>
                        <Field
                          name="name"
                          type="text"
                          className="form-input transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your full name"
                          autoComplete="name"
                        />
                        <ErrorMessage name="name" component="div" className="form-error animate-pulse" />
                      </div>

                      <div className="form-group">
                        <label className="form-label flex items-center gap-2">
                          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                          </svg>
                          Email Address *
                        </label>
                        <Field
                          name="email"
                          type="email"
                          className="form-input transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your email"
                          autoComplete="email"
                        />
                        <ErrorMessage name="email" component="div" className="form-error animate-pulse" />
                      </div>

                      <div className="form-group">
                        <label className="form-label flex items-center gap-2">
                          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          Phone Number *
                        </label>
                        <Field
                          name="phoneNumber"
                          type="tel"
                          className="form-input transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="+264 XX XXX XXXX"
                          autoComplete="tel"
                        />
                        <ErrorMessage name="phoneNumber" component="div" className="form-error animate-pulse" />
                      </div>

                      <div className="form-group">
                        <label className="form-label flex items-center gap-2">
                          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Years of Teaching Experience
                        </label>
                        <Field
                          name="yearsTeaching"
                          type="number"
                          min="0"
                          max="50"
                          className="form-input transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="e.g., 5"
                        />
                        <p className="text-xs text-gray-500 mt-1">Optional - helps us tailor content to your experience level</p>
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="section-form">
                    <div className="section-header bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 -mx-8 md:-mx-12 mb-6">
                      <h2 className="text-2xl font-bold font-space">Professional Information</h2>
                      <p className="opacity-90">Your teaching background</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-group">
                        <label className="form-label flex items-center gap-2">
                          <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          School Name *
                        </label>
                        <Field
                          name="school"
                          type="text"
                          className="form-input transition-all duration-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                          placeholder="Enter your school name"
                          autoComplete="organization"
                        />
                        <ErrorMessage name="school" component="div" className="form-error animate-pulse" />
                      </div>

                      <div className="form-group">
                        <label className="form-label flex items-center gap-2">
                          <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Region *
                        </label>
                        <Field
                          as="select"
                          name="region"
                          className="form-input transition-all duration-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        >
                          <option value="">Select your region</option>
                          <option value="khomas">Khomas</option>
                          <option value="erongo">Erongo</option>
                          <option value="hardap">Hardap</option>
                          <option value="karas">Karas</option>
                          <option value="kavango-east">Kavango East</option>
                          <option value="kavango-west">Kavango West</option>
                          <option value="kunene">Kunene</option>
                          <option value="ohangwena">Ohangwena</option>
                          <option value="omaheke">Omaheke</option>
                          <option value="omusati">Omusati</option>
                          <option value="oshana">Oshana</option>
                          <option value="oshikoto">Oshikoto</option>
                          <option value="otjozondjupa">Otjozondjupa</option>
                          <option value="zambezi">Zambezi</option>
                        </Field>
                        <ErrorMessage name="region" component="div" className="form-error animate-pulse" />
                      </div>

                      <div className="md:col-span-2">
                        <label className="form-label flex items-center gap-2">
                          <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6l-8 2-8-2V4a2 2 0 012-2h4a2 2 0 012 2z" />
                          </svg>
                          Role/Position *
                        </label>
                        <Field
                          as="select"
                          name="role"
                          className="form-input transition-all duration-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        >
                          <option value="">Select your role</option>
                          <option value="teacher">Primary School Teacher</option>
                          <option value="principal">Principal/Head Teacher</option>
                          <option value="deputy">Deputy Principal</option>
                          <option value="hod">Head of Department</option>
                          <option value="coordinator">Environmental Education Coordinator</option>
                          <option value="inspector">Education Inspector</option>
                          <option value="other">Other</option>
                        </Field>
                        <ErrorMessage name="role" component="div" className="form-error animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Participation Type */}
                  <div className="section-form">
                    <div className="section-header bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 -mx-8 md:-mx-12 mb-6">
                      <h2 className="text-2xl font-bold font-space">Participation Type</h2>
                      <p className="opacity-90">How will you participate?</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="participation-option cursor-pointer">
                        <Field
                          type="radio"
                          name="participationType"
                          value="attendee"
                          className="sr-only"
                        />
                        <div className="participation-card transition-all duration-300 hover:shadow-lg">
                          <div className="w-6 h-6 bg-blue-500 angular-icon-small mx-auto mb-4 flex items-center justify-center">
                            {values.participationType === 'attendee' && (
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-2">Attendee</h3>
                          <p className="text-gray-600 text-sm">Attend sessions and workshops</p>
                          <p className="text-xs text-blue-600 mt-2 font-medium">Perfect for learning and networking</p>
                        </div>
                      </label>
                      <label className="participation-option cursor-pointer">
                        <Field
                          type="radio"
                          name="participationType"
                          value="presenter"
                          className="sr-only"
                        />
                        <div className="participation-card transition-all duration-300 hover:shadow-lg">
                          <div className="w-6 h-6 bg-teal-500 angular-icon-small mx-auto mb-4 flex items-center justify-center">
                            {values.participationType === 'presenter' && (
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-2">Presenter</h3>
                          <p className="text-gray-600 text-sm">Share your expertise and experiences</p>
                          <p className="text-xs text-teal-600 mt-2 font-medium">Shape the future of education</p>
                        </div>
                      </label>
                    </div>
                    <ErrorMessage name="participationType" component="div" className="form-error" />
                  </div>

                  {/* Presentation Details - Only show if presenter */}
                  {values.participationType === 'presenter' && (
                    <div className="section-form">
                      <div className="section-header bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 -mx-8 md:-mx-12 mb-6">
                        <h2 className="text-2xl font-bold font-space">Presentation Details</h2>
                        <p className="opacity-90">Share your expertise</p>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="form-group">
                          <label className="form-label">
                            Presentation Title *
                          </label>
                          <Field
                            name="presentationTitle"
                            type="text"
                            className="form-input"
                            placeholder="Enter your presentation title"
                          />
                          <ErrorMessage name="presentationTitle" component="div" className="form-error" />
                        </div>

                        <div className="form-group">
                          <label className="form-label">
                            Topic Strand
                          </label>
                          <Field
                            as="select"
                            name="topicStrand"
                            className="form-input"
                          >
                            <option value="">Select topic strand</option>
                            <option value="environmental-education">Environmental Education (EE)</option>
                            <option value="sustainable-development">Education for Sustainable Development (ESD)</option>
                            <option value="tech-integration">Technology Integration</option>
                            <option value="indigenous-knowledge">Indigenous Knowledge Systems</option>
                            <option value="marine-ecosystems">Marine Ecosystems</option>
                            <option value="climate-change">Climate Change Education</option>
                          </Field>
                        </div>

                        <div className="form-group">
                          <label className="form-label">
                            Presentation Abstract *
                          </label>
                          <Field
                            as="textarea"
                            name="presentationAbstract"
                            rows={4}
                            className="form-input"
                            placeholder="Provide a brief abstract of your presentation (max 250 words)"
                          />
                          <ErrorMessage name="presentationAbstract" component="div" className="form-error" />
                        </div>

                        <div className="form-group">
                          <label className="form-label">
                            Upload Presentation Outline (Optional)
                          </label>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="form-input"
                          />
                          <p className="text-sm text-gray-500 mt-2">Accepted formats: PDF, DOC, DOCX</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Previous Attendance */}
                  <div className="section-form">
                    <div className="section-header bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-6 -mx-8 md:-mx-12 mb-6">
                      <h2 className="text-2xl font-bold font-space">Previous Experience</h2>
                      <p className="opacity-90">Have you joined us before?</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="participation-option">
                        <Field
                          type="radio"
                          name="hasAttendedBefore"
                          value="yes"
                          onChange={(e: any) => {
                            setFieldValue('hasAttendedBefore', e.target.value);
                            setShowImpactSurvey(e.target.value === 'yes');
                          }}
                          className="sr-only"
                        />
                        <div className="participation-card">
                          <div className="w-6 h-6 bg-green-500 angular-icon-small mx-auto mb-4"></div>
                          <h3 className="font-semibold text-gray-900 mb-2">Returning Participant</h3>
                          <p className="text-gray-600 text-sm">I've attended before</p>
                        </div>
                      </label>
                      <label className="participation-option">
                        <Field
                          type="radio"
                          name="hasAttendedBefore"
                          value="no"
                          onChange={(e: any) => {
                            setFieldValue('hasAttendedBefore', e.target.value);
                            setShowImpactSurvey(false);
                          }}
                          className="sr-only"
                        />
                        <div className="participation-card">
                          <div className="w-6 h-6 bg-orange-500 angular-icon-small mx-auto mb-4"></div>
                          <h3 className="font-semibold text-gray-900 mb-2">First Time</h3>
                          <p className="text-gray-600 text-sm">This is my first seminar</p>
                        </div>
                      </label>
                    </div>
                    <ErrorMessage name="hasAttendedBefore" component="div" className="form-error" />
                  </div>

                  {/* Impact Survey - Only show if attended before */}
                  {showImpactSurvey && (
                    <div className="section-form">
                      <div className="section-header bg-gradient-to-r from-green-500 to-green-600 text-white p-6 -mx-8 md:-mx-12 mb-6">
                        <h2 className="text-2xl font-bold font-space">Impact Assessment</h2>
                        <p className="opacity-90">Help us improve</p>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="form-group">
                          <label className="form-label">
                            How would you rate the impact of previous seminars on your teaching?
                          </label>
                          <Field
                            as="select"
                            name="impactRating"
                            className="form-input"
                          >
                            <option value="">Select rating</option>
                            <option value="5">Excellent - Transformed my teaching significantly</option>
                            <option value="4">Very Good - Made notable improvements</option>
                            <option value="3">Good - Some positive changes</option>
                            <option value="2">Fair - Minor impact</option>
                            <option value="1">Poor - No significant impact</option>
                          </Field>
                        </div>

                        <div className="form-group">
                          <label className="form-label">
                            What improvements would you suggest for future seminars?
                          </label>
                          <Field
                            as="textarea"
                            name="suggestedImprovements"
                            rows={3}
                            className="form-input"
                            placeholder="Share your suggestions for improvement..."
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Expectations */}
                  <div className="section-form">
                    <div className="section-header bg-gradient-to-r from-teal-500 to-blue-500 text-white p-6 -mx-8 md:-mx-12 mb-6">
                      <h2 className="text-2xl font-bold font-space">Your Goals</h2>
                      <p className="opacity-90">What do you hope to achieve?</p>
                    </div>
                    
                    <div className="form-group flex justify-center">
                        <div className="w-full md:w-5/6 lg:w-4/5 xl:w-3/4">
                            <Field
                                as="textarea"
                                name="expectations"
                                rows={4}
                                className="form-input"
                                placeholder="Share your expectations and learning goals..."
                            />
                        </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-8 border-t border-gray-200">
                    <div className="mb-6">
                      <p className="text-sm text-gray-600 mb-2">
                        By registering, you agree to receive email communications about the seminar.
                      </p>
                      <p className="text-xs text-gray-500">
                        Your information is secure and will only be used for seminar-related purposes.
                      </p>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cta-button bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-12 py-4 text-lg font-bold font-space transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-blue-300 focus:outline-none relative overflow-hidden"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                          Processing Registration...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          Complete Registration
                        </span>
                      )}
                    </button>
                    
                    <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Instant confirmation
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        Email reminder 24hrs before
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mt-4 text-sm">
                      Questions? Contact us at <a href="mailto:info@khomasseminar.edu.na" className="text-blue-600 hover:underline">info@khomasseminar.edu.na</a>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
