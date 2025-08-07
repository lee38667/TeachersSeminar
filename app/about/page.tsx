export default function About() {
  return (
    <main className="overflow-hidden">
      {/* Bold Angular Hero Section */}
      <section className="section-trust py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-white/10 to-transparent" style={{clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)'}}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/20 rounded-full animate-float"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium text-sm uppercase tracking-wider border-l-4 border-yellow-400">
                🌊 Our Mission & Vision
              </span>
            </div>
            
            <h1 className="hero-title text-white mb-8 animate-slide-diagonal">
              Transforming
              <br />
              <span className="text-yellow-400">Education</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed mb-12">
              The Van Rhyn Initiative pioneers revolutionary environmental education across Namibia, 
              bridging scientific innovation with classroom excellence through bold, impactful teaching methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Angular Mission Cards */}
      <section className="section-growth py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 mb-4">The Van Rhyn Initiative</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Born from innovation. Driven by impact. Focused on transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="impact-card p-8 animate-expand-in">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mb-4" style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
                  <span className="text-white text-2xl font-bold">📚</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Educational Excellence</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The KEIDF seminar was established to revolutionize environmental education across Namibia. 
                We create platforms where educators transcend traditional boundaries, sharing cutting-edge 
                knowledge and innovative methodologies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our focus on marine ecosystem education recognizes Namibia's unique coastal heritage and 
                the critical importance of conservation for future generations.
              </p>
            </div>

            <div className="impact-card p-8 animate-expand-in" style={{animationDelay: '0.3s'}}>
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mb-4" style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
                  <span className="text-white text-2xl font-bold">🌊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scientific Bridge</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We bridge the crucial gap between advanced scientific research and practical classroom 
                application, making complex environmental concepts accessible and engaging for primary 
                school students.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through evidence-based teaching strategies, we empower educators to inspire the next 
                generation of environmental stewards and ocean conservationists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bold Strategic Goals */}
      <section className="section-trust py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title text-white mb-6">Strategic Impact Goals</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Four pillars of transformation driving educational excellence across Namibia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-8 animate-slide-diagonal">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center" style={{clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'}}>
                  <span className="text-white font-bold text-xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Knowledge Sharing</h3>
                  <p className="text-gray-700">Foster revolutionary collaboration and exchange of cutting-edge teaching strategies</p>
                </div>
              </div>
            </div>

            <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-8 animate-slide-diagonal" style={{animationDelay: '0.2s'}}>
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-400 flex items-center justify-center" style={{clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'}}>
                  <span className="text-white font-bold text-xl">🌱</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Environmental Leadership</h3>
                  <p className="text-gray-700">Strengthen marine ecosystem awareness and conservation practices nationwide</p>
                </div>
              </div>
            </div>

            <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-8 animate-slide-diagonal" style={{animationDelay: '0.4s'}}>
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-400 flex items-center justify-center" style={{clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'}}>
                  <span className="text-white font-bold text-xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Excellence</h3>
                  <p className="text-gray-700">Enhance teaching methodologies through innovative environmental science approaches</p>
                </div>
              </div>
            </div>

            <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-8 animate-slide-diagonal" style={{animationDelay: '0.6s'}}>
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-red-400 flex items-center justify-center" style={{clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'}}>
                  <span className="text-white font-bold text-xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Community Transformation</h3>
                  <p className="text-gray-700">Extend impactful learning beyond classrooms to communities and families</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics - Angular Design */}
      <section className="section-growth py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 mb-4">Proven Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based results showcasing transformational change across Namibian education.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="testimonial-angular p-8 mb-12 animate-expand-in">
              <blockquote className="text-2xl italic text-gray-700 mb-6 leading-relaxed">
                "Our seminar has successfully reached 218 teachers from 35 schools across the Khomas region, 
                creating a ripple effect that has transformed environmental education practices."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold text-gray-900">Research findings by Leena M. Iileka</div>
                  <div className="text-sm text-gray-600">Educational Impact Assessment</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="impact-card text-center p-8 animate-expand-in group">
                <div className="stat-number text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">95%</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Teacher Satisfaction</h3>
                <p className="text-gray-600">Exceptional program quality and relevance</p>
              </div>
              
              <div className="impact-card text-center p-8 animate-expand-in group" style={{animationDelay: '0.2s'}}>
                <div className="stat-number text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300">80%</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation Rate</h3>
                <p className="text-gray-600">Successful classroom integration</p>
              </div>
              
              <div className="impact-card text-center p-8 animate-expand-in group" style={{animationDelay: '0.4s'}}>
                <div className="stat-number text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">65%</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Student Engagement</h3>
                <p className="text-gray-600">Increased participation and interest</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Alignment - Bold Angular Cards */}
      <section className="section-trust py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-white mb-6">Global Alignment</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Strategically aligned with international and national development frameworks for maximum impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-8 animate-slide-diagonal">
              <h3 className="text-2xl font-bold text-white mb-6">International Frameworks</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 transform rotate-45"></div>
                  <span className="text-white/90 text-lg">SDG Goal 4: Quality Education</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 transform rotate-45"></div>
                  <span className="text-white/90 text-lg">SDG Goal 13: Climate Action</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-purple-400 transform rotate-45"></div>
                  <span className="text-white/90 text-lg">SDG Goal 17: Partnerships</span>
                </div>
              </div>
            </div>
            
            <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-8 animate-slide-diagonal" style={{animationDelay: '0.3s'}}>
              <h3 className="text-2xl font-bold text-white mb-6">National Policies</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-red-400 transform rotate-45"></div>
                  <span className="text-white/90 text-lg">Namibia Vision 2030</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-orange-400 transform rotate-45"></div>
                  <span className="text-white/90 text-lg">National Development Plan 5</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-cyan-400 transform rotate-45"></div>
                  <span className="text-white/90 text-lg">Environmental Education Policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
