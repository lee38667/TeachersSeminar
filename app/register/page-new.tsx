'use client';

import { useState } from 'react';
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

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    // TODO: Implement form submission to database
    console.log('Form submitted:', values);
    alert('Registration submitted successfully! You will receive a confirmation email shortly.');
    setSubmitting(false);
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
            
            {/* Status Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="registration-step bg-white p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 angular-icon mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Personal Details</h3>
                <p className="text-gray-600 text-sm">Provide your professional information</p>
              </div>
              <div className="registration-step bg-white p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 angular-icon mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Participation Type</h3>
                <p className="text-gray-600 text-sm">Choose to attend or present</p>
              </div>
              <div className="registration-step bg-white p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 angular-icon mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Submit & Confirm</h3>
                <p className="text-gray-600 text-sm">Complete your registration</p>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white angular-form p-8 md:p-12 shadow-2xl">
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
              }}
              validationSchema={RegistrationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, setFieldValue, isSubmitting }) => (
                <Form className="space-y-8">
                  {/* Personal Information */}
                  <div className="section-form">
                    <div className="section-header bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 -mx-8 md:-mx-12 mb-6">
                      <h2 className="text-2xl font-bold font-space">Personal Information</h2>
                      <p className="opacity-90">Tell us about yourself</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-group">
                        <label className="form-label">
                          Full Name *
                        </label>
                        <Field
                          name="name"
                          type="text"
                          className="form-input"
                          placeholder="Enter your full name"
                        />
                        <ErrorMessage name="name" component="div" className="form-error" />
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          Email Address *
                        </label>
                        <Field
                          name="email"
                          type="email"
                          className="form-input"
                          placeholder="Enter your email"
                        />
                        <ErrorMessage name="email" component="div" className="form-error" />
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          Phone Number *
                        </label>
                        <Field
                          name="phoneNumber"
                          type="tel"
                          className="form-input"
                          placeholder="+264 XX XXX XXXX"
                        />
                        <ErrorMessage name="phoneNumber" component="div" className="form-error" />
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          Years of Teaching Experience
                        </label>
                        <Field
                          name="yearsTeaching"
                          type="number"
                          className="form-input"
                          placeholder="e.g., 5"
                        />
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
                        <label className="form-label">
                          School Name *
                        </label>
                        <Field
                          name="school"
                          type="text"
                          className="form-input"
                          placeholder="Enter your school name"
                        />
                        <ErrorMessage name="school" component="div" className="form-error" />
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          Region *
                        </label>
                        <Field
                          as="select"
                          name="region"
                          className="form-input"
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
                        <ErrorMessage name="region" component="div" className="form-error" />
                      </div>

                      <div className="md:col-span-2">
                        <label className="form-label">
                          Role/Position *
                        </label>
                        <Field
                          as="select"
                          name="role"
                          className="form-input"
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
                        <ErrorMessage name="role" component="div" className="form-error" />
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
                      <label className="participation-option">
                        <Field
                          type="radio"
                          name="participationType"
                          value="attendee"
                          className="sr-only"
                        />
                        <div className="participation-card">
                          <div className="w-6 h-6 bg-blue-500 angular-icon-small mx-auto mb-4"></div>
                          <h3 className="font-semibold text-gray-900 mb-2">Attendee</h3>
                          <p className="text-gray-600 text-sm">Attend sessions and workshops</p>
                        </div>
                      </label>
                      <label className="participation-option">
                        <Field
                          type="radio"
                          name="participationType"
                          value="presenter"
                          className="sr-only"
                        />
                        <div className="participation-card">
                          <div className="w-6 h-6 bg-teal-500 angular-icon-small mx-auto mb-4"></div>
                          <h3 className="font-semibold text-gray-900 mb-2">Presenter</h3>
                          <p className="text-gray-600 text-sm">Share your expertise and experiences</p>
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
                    
                    <div className="form-group">
                      <label className="form-label">
                        What do you hope to gain from this seminar?
                      </label>
                      <Field
                        as="textarea"
                        name="expectations"
                        rows={4}
                        className="form-input"
                        placeholder="Share your expectations and learning goals..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cta-button bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-12 py-4 text-lg font-bold font-space transition-all duration-300 transform hover:scale-105"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                          Submitting...
                        </span>
                      ) : (
                        'Complete Registration'
                      )}
                    </button>
                    <p className="text-gray-600 mt-4 text-sm">
                      You'll receive a confirmation email within 24 hours
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </main>
  );
}
