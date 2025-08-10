export default function Resources() {
  const presentationPapers = [
    {
      title: "Geosciences Information for Teachers",
      author: "Cape Town Workshop",
      year: "2023",
      description: "Comprehensive guide to integrating geoscience concepts into primary education",
      downloadUrl: "/Geosciences_Information_for_Teachers_CT[1].pdf",
      category: "Teaching Guides",
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "UNESCO Newsletter Issue 14",
      author: "UNESCO Windhoek",
      year: "2024",
      description: "Latest updates on educational initiatives and global partnerships in Namibia",
      downloadUrl: "/UNESCO Windhoek Newsletter-Issue 14.pdf",
      category: "Policy Documents",
      color: "from-blue-700 to-indigo-600"
    }
  ];

  const toolkitResources = [
    // Removing all toolkit resources as they don't exist in public folder
    // These were placeholder/fictional resources
  ];

  const slidesAndPresentations = [
    {
      title: "The Solar System and Beyond - GIFT 2016",
      author: "GIFT Program",
      downloadUrl: "/gift_2016_the_solar_system_and_beyond.pdf",
      category: "Science Education",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Role of Physics Education for Technological Development",
      author: "Prof. Onjefu",
      downloadUrl: "/Role of Physics Education for Technological Development Prof. Onjefu.pptx",
      category: "Physics Education",
      color: "from-blue-500 to-teal-500"
    },
    {
      title: "Geoscience Workshop Cape Town",
      author: "Geoscience Education",
      downloadUrl: "/GEOSCIENCE     WORKSHOP CT presentation.pps",
      category: "Geoscience",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Geoscience Workshop Presentation",
      author: "Workshop Facilitators",
      downloadUrl: "/Geoscience Workshop.ppt",
      category: "Geoscience",
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "Project Based Teaching 2022 - MV Hitila",
      author: "MV Hitila",
      downloadUrl: "/MV Hitila Presentation Project Based Teaching 2022.pptx",
      category: "Teaching Methods",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Teacher's Workshop",
      author: "Mr. Haihambo, UNAM",
      downloadUrl: "/Teacher's workshop Mr Haihambo UNAM.pptx",
      category: "Professional Development",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Teacher Information Seminar",
      author: "Mr. Pedro Tjakwanda",
      downloadUrl: "/Teeacher Information Seminar- Mr Pedro Tjakwanda.pptx",
      category: "Professional Development",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Cape Town GIFT Presentation",
      author: "GIFT Program",
      downloadUrl: "/CAPE TOWN GIFT PP.ppt",
      category: "Science Education",
      color: "from-teal-500 to-indigo-500"
    },
    {
      title: "Group Discussion Presentation",
      author: "Workshop Facilitators",
      downloadUrl: "/Group Discussion.pptx",
      category: "Interactive Learning",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Seminar Introduction",
      author: "KEIDF Team",
      downloadUrl: "/Seminar Introduction.ppt",
      category: "Event Materials",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Seminar Feedback Analysis",
      author: "KEIDF Team",
      downloadUrl: "/Seminar Feedback.pptx",
      category: "Event Materials",
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Seminar Financial Contribution",
      author: "KEIDF Team",
      downloadUrl: "/Seminar Contribution account.pptx",
      category: "Event Materials",
      color: "from-gray-500 to-gray-700"
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
                <div className="text-2xl font-bold text-gray-900 mb-2">17+ Resources</div>
                <div className="text-gray-700">Presentations & documents</div>
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
              <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-6 animate-expand-in" style={{animationDelay: '0.4s'}}>
                <div className="text-2xl font-bold text-gray-900 mb-2">Multiple Formats</div>
                <div className="text-gray-700">PDF, PPT, DOC available</div>
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
                  {paper.author && <div className="text-sm text-gray-600 mb-3 font-medium">By {paper.author} ({paper.year})</div>}
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

      {/* Toolkit Section - Coming Soon */}
      <section className="section-trust py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-white mb-6">Teaching Toolkit</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Practical resources and implementation guides for classroom transformation.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-12 animate-expand-in">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 mx-auto mb-8 flex items-center justify-center" style={{clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'}}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Teaching Toolkit Coming Soon</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We're developing comprehensive teaching resources, activity guides, and implementation toolkits. 
                Check back soon for practical materials to enhance your environmental education programs.
              </p>
              
              <a
                href="/contact"
                className="cta-button bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-3 font-bold font-space transition-all duration-300 transform hover:scale-105"
              >
                Get Notified When Available
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Program Documents Section */}
      <section className="section-growth py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 mb-4">Program Documents & Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Official program materials, attendance registers, and seminar documentation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="impact-card bg-white p-8 animate-expand-in group">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300" style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              
              <div className="mb-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-bold uppercase tracking-wide border-l-4 border-gray-400">
                    Program Guide
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">KTISF Programme</h3>
                <p className="text-gray-700 leading-relaxed">Complete program outline and schedule for the Teachers Information Sharing Forum</p>
              </div>
              
              <a
                href="/Programme KTISF.doc"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold transition-colors group-hover:translate-x-2 transform transition-transform duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-8 h-8 bg-blue-500 angular-icon-small mr-3 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                  </svg>
                </div>
                Download DOC
              </a>
            </div>

            <div className="impact-card bg-white p-8 animate-expand-in group" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300" style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              
              <div className="mb-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wide border-l-4 border-red-400">
                    Attendance
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">Teacher Seminar Attendance Register</h3>
                <p className="text-gray-700 leading-relaxed">Official attendance documentation for Plato and Freud Clusters Teacher Information Seminar</p>
              </div>
              
              <a
                href="/PLATO AND FREUD CLUSTERS TEACHERS INFORMATION SEMINAR ATTENDANCE REGISTER.doc"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold transition-colors group-hover:translate-x-2 transform transition-transform duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-8 h-8 bg-blue-500 angular-icon-small mr-3 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                  </svg>
                </div>
                Download DOC
              </a>
            </div>

            <div className="impact-card bg-white p-8 animate-expand-in group" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-800 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300" style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              
              <div className="mb-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wide border-l-4 border-indigo-400">
                    Organization
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">KEIDF Draft Document</h3>
                <p className="text-gray-700 leading-relaxed">Founding document and organizational framework for Khomas Educators Innovation and Development Forum</p>
              </div>
              
              <a
                href="/Khomas Educators Innovation and Development Forum (KEIDF) 1st draft.doc"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold transition-colors group-hover:translate-x-2 transform transition-transform duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-8 h-8 bg-blue-500 angular-icon-small mr-3 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                  </svg>
                </div>
                Download DOC
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Slides and Presentations */}
      <section className="section-trust py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-white mb-6">Presentation Slides & Educational Materials</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              PowerPoint presentations from workshops, seminars, and educational programs across various disciplines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
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
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{slide.title}</h3>
                  {slide.author && <div className="text-yellow-800 font-semibold">By {slide.author}</div>}
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
