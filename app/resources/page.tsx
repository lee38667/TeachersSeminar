export default function Resources() {
  const presentationPapers = [
    {
      title: "Teacher-led Professional Development: A Model for Addressing Learning Poverty in Namibia",
      author: "Leena M. Iileka",
      year: "2024",
      description: "Research on empowering teachers through collaborative professional development models",
      downloadUrl: "/papers/leena-iileka-presentation.pdf",
      category: "Research Papers",
      color: "from-blue-500 to-teal-500"
    },
    {
      title: "Marine Conservation Education in Primary Schools",
      author: "Dr. Maria Nghipangelwa",
      year: "2024",
      description: "Strategies for integrating marine ecosystem education into primary curriculum",
      downloadUrl: "/papers/marine-conservation-education.pdf",
      category: "Research Papers",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Indigenous Knowledge Systems in Environmental Education",
      author: "Prof. Johannes Nakale",
      year: "2023",
      description: "Bridging traditional knowledge and modern environmental science education",
      downloadUrl: "/papers/indigenous-knowledge-systems.pdf",
      category: "Research Papers",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const toolkitResources = [
    {
      title: "Environmental Club Starter Guide",
      description: "Complete guide to establishing and running environmental clubs in primary schools",
      downloadUrl: "/toolkit/environmental-club-guide.pdf",
      category: "Toolkit",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "Marine Ecosystem Teaching Materials",
      description: "Visual aids, worksheets, and activity plans for marine education",
      downloadUrl: "/toolkit/marine-teaching-materials.pdf",
      category: "Toolkit",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
      color: "from-blue-400 to-teal-400"
    },
    {
      title: "3Rs Classroom Implementation",
      description: "Practical strategies for Reduce, Reuse, Recycle in school settings",
      downloadUrl: "/toolkit/3rs-implementation.pdf",
      category: "Toolkit",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      color: "from-yellow-400 to-orange-400"
    },
    {
      title: "Climate Change Education Activities",
      description: "Age-appropriate activities and experiments for climate education",
      downloadUrl: "/toolkit/climate-change-activities.pdf",
      category: "Toolkit",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-indigo-400 to-purple-400"
    },
    {
      title: "Assessment Rubrics for Environmental Education",
      description: "Evaluation tools for environmental knowledge and skills assessment",
      downloadUrl: "/toolkit/assessment-rubrics.pdf",
      category: "Toolkit",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "from-red-400 to-pink-400"
    },
    {
      title: "Parent Engagement Strategies",
      description: "Methods to involve families in environmental education initiatives",
      downloadUrl: "/toolkit/parent-engagement.pdf",
      category: "Toolkit",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-cyan-400 to-blue-400"
    }
  ];

  const slidesAndPresentations = [
    {
      title: "Namibian Coastal Ecosystems - 2024 Presentation",
      author: "Dr. Maria Nghipangelwa",
      downloadUrl: "/slides/coastal-ecosystems-2024.pptx",
      category: "Slides",
      color: "from-teal-500 to-blue-500"
    },
    {
      title: "Digital Tools for Environmental Education",
      author: "Dr. Sarah Katjavivi",
      downloadUrl: "/slides/digital-tools-2024.pptx",
      category: "Slides",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Professional Development Models",
      author: "Ms. Leena M. Iileka",
      downloadUrl: "/slides/professional-development-2024.pptx",
      category: "Slides",
      color: "from-orange-500 to-red-500"
    }
  ];

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
              <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium text-sm uppercase tracking-wider border-l-4 border-yellow-400 flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Knowledge Repository
              </span>
            </div>
            
            <h1 className="hero-title text-white mb-8 animate-slide-diagonal">
              Educational
              <br />
              <span className="text-yellow-400">Resources</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed mb-12">
              Comprehensive collection of research papers, teaching toolkits, and presentation materials. 
              Empowering educators with evidence-based resources for transformative learning.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-6 animate-expand-in">
                <div className="text-2xl font-bold text-gray-900 mb-2">50+ Resources</div>
                <div className="text-gray-700">Research papers & toolkits</div>
              </div>
              <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-6 animate-expand-in" style={{animationDelay: '0.2s'}}>
                <div className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Open Access
                </div>
                <div className="text-gray-700">Free educational materials</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Research Papers Section */}
      <section className="section-growth py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 mb-4">Research Papers & Publications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based research driving educational innovation and sustainable practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {presentationPapers.map((paper, index) => (
              <div key={index} className="impact-card bg-white p-8 animate-expand-in group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${paper.color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`} style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wide border-l-4 border-blue-400">
                      {paper.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{paper.title}</h3>
                  <div className="text-sm text-gray-600 mb-3 font-medium">By {paper.author} ({paper.year})</div>
                  <p className="text-gray-700 leading-relaxed">{paper.description}</p>
                </div>
                
                <a
                  href={paper.downloadUrl}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold transition-colors group-hover:translate-x-2 transform transition-transform duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 h-8 bg-blue-500 angular-icon-small mr-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                    </svg>
                  </div>
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit Section */}
      <section className="section-trust py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-white mb-6">Teaching Toolkit</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Practical resources and implementation guides for classroom transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolkitResources.map((resource, index) => (
              <div key={index} className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-8 animate-slide-diagonal group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-20 h-20 bg-gradient-to-br ${resource.color} flex items-center justify-center mb-6 text-3xl transform group-hover:scale-110 transition-transform duration-300`} style={{clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'}}>
                  {resource.icon}
                </div>
                
                <div className="mb-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-gray-900 text-xs font-bold uppercase tracking-wide border-l-4 border-yellow-400">
                      {resource.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{resource.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{resource.description}</p>
                </div>
                
                <a
                  href={resource.downloadUrl}
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-bold transition-colors group-hover:translate-x-2 transform transition-transform duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 h-8 bg-yellow-400 angular-icon-small mr-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                    </svg>
                  </div>
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slides and Presentations */}
      <section className="section-trust py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-white mb-6">Presentation Slides</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready-to-use presentations from expert speakers and researchers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {slidesAndPresentations.map((slide, index) => (
              <div key={index} className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-8 animate-expand-in group" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`w-16 h-16 bg-gradient-to-br ${slide.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`} style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                
                <div className="mb-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-gray-900 text-xs font-bold uppercase tracking-wide border-l-4 border-yellow-400">
                      {slide.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{slide.title}</h3>
                  <div className="text-yellow-800 font-semibold">By {slide.author}</div>
                </div>
                
                <a
                  href={slide.downloadUrl}
                  className="inline-flex items-center text-yellow-800 hover:text-yellow-300 font-bold transition-colors group-hover:translate-x-2 transform transition-transform duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 h-8 bg-yellow-400 angular-icon-small mr-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  Download PowerPoint
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Section - Call to Action */}
      <section className="section-growth py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-gray-900 mb-8">Share Your Resources</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Have teaching materials, research, or resources to share with the community? 
              We welcome contributions from all educators driving educational transformation.
            </p>
            
            <div className="impact-card bg-white p-12 animate-expand-in">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 mx-auto mb-8 flex items-center justify-center" style={{clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'}}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Submit Your Materials</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Send your presentations, research papers, or teaching tools to help grow our resource library 
                and support fellow educators across Namibia.
              </p>
              
              <a
                href="/contact"
                className="cta-button bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-12 py-4 text-lg font-bold font-space transition-all duration-300 transform hover:scale-105"
              >
                Contact Us to Submit
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
