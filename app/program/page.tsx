export default function Program() {
  const speakers = [
    {
      name: "Dr. Maria Nghipangelwa",
      title: "Marine Biologist, UNAM",
      topic: "Namibian Coastal Ecosystems and Climate Change",
      image: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      bio: "Leading researcher in marine conservation with 15+ years experience",
      color: "from-blue-500 to-teal-500"
    },
    {
      name: "Ms. Leena M. Iileka",
      title: "Education Researcher, Van Rhyn Primary",
      topic: "Teacher-led Professional Development Models",
      image: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      bio: "Pioneer in teacher empowerment and environmental education integration",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Prof. Johannes Nakale",
      title: "Environmental Education Specialist, IUM",
      topic: "Indigenous Knowledge in Marine Conservation",
      image: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bio: "Expert in traditional ecological knowledge and sustainable practices",
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Dr. Sarah Katjavivi",
      title: "Technology Integration Coordinator, UNESCO",
      topic: "Digital Tools for Environmental Education",
      image: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
      bio: "Specialist in educational technology and digital learning platforms",
      color: "from-orange-500 to-red-500"
    }
  ];

  const agenda = {
    day1: [
      { time: "08:00-08:30", activity: "Registration & Welcome Coffee", type: "admin" },
      { time: "08:30-09:00", activity: "Opening Ceremony & Keynote Address", type: "keynote", speaker: "Hon. Anna Nghipondoka, Minister of Education" },
      { time: "09:00-10:30", activity: "Namibian Coastal Ecosystems and Climate Change", type: "presentation", speaker: "Dr. Maria Nghipangelwa" },
      { time: "10:30-10:45", activity: "Tea Break", type: "break" },
      { time: "10:45-12:15", activity: "Teacher-led Professional Development Models", type: "presentation", speaker: "Ms. Leena M. Iileka" },
      { time: "12:15-13:15", activity: "Lunch & Networking", type: "break" },
      { time: "13:15-14:45", activity: "Workshop: Creating Marine Education Materials", type: "workshop" },
      { time: "14:45-15:00", activity: "Refreshment Break", type: "break" },
      { time: "15:00-16:30", activity: "Panel Discussion: Challenges in Environmental Education", type: "panel" },
      { time: "16:30-17:00", activity: "Day 1 Wrap-up & Reflections", type: "discussion" }
    ],
    day2: [
      { time: "08:00-08:30", activity: "Morning Networking & Coffee", type: "admin" },
      { time: "08:30-10:00", activity: "Indigenous Knowledge in Marine Conservation", type: "presentation", speaker: "Prof. Johannes Nakale" },
      { time: "10:00-10:15", activity: "Tea Break", type: "break" },
      { time: "10:15-11:45", activity: "Digital Tools for Environmental Education", type: "presentation", speaker: "Dr. Sarah Katjavivi" },
      { time: "11:45-12:45", activity: "Lunch", type: "break" },
      { time: "12:45-14:15", activity: "Teacher Presentations & Best Practices Sharing", type: "teacher-presentations" },
      { time: "14:15-14:30", activity: "Refreshment Break", type: "break" },
      { time: "14:30-15:30", activity: "Action Planning & Next Steps", type: "workshop" },
      { time: "15:30-16:00", activity: "Closing Ceremony & Certificate Presentation", type: "closing" }
    ]
  };

  const getActivityStyle = (type: string) => {
    switch (type) {
      case 'keynote': return 'bg-gradient-to-r from-blue-500 to-teal-500 text-white border-l-4 border-yellow-400';
      case 'presentation': return 'bg-gradient-to-r from-green-400 to-emerald-400 text-white border-l-4 border-blue-400';
      case 'workshop': return 'bg-gradient-to-r from-purple-400 to-indigo-400 text-white border-l-4 border-green-400';
      case 'panel': return 'bg-gradient-to-r from-orange-400 to-red-400 text-white border-l-4 border-purple-400';
      case 'teacher-presentations': return 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-l-4 border-red-400';
      case 'break': return 'bg-white/50 text-gray-600 border-l-4 border-gray-300';
      case 'admin': return 'bg-white/50 text-gray-600 border-l-4 border-gray-300';
      case 'discussion': return 'bg-gradient-to-r from-cyan-400 to-blue-400 text-white border-l-4 border-teal-400';
      case 'closing': return 'bg-gradient-to-r from-red-500 to-pink-500 text-white border-l-4 border-orange-400';
      default: return 'bg-white/50 text-gray-600 border-l-4 border-gray-300';
    }
  };

  return (
    <main className="overflow-hidden">
      {/* Bold Angular Hero Section */}
      <section className="section-trust py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-white/10 to-transparent" style={{clipPath: 'polygon(0 0, 70% 0, 100% 100%, 0% 100%)'}}></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400/20 rounded-full animate-float"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium text-sm uppercase tracking-wider border-l-4 border-yellow-400">
                <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Two Days of Innovation
              </span>
            </div>
            
            <h1 className="hero-title text-white mb-8 animate-slide-diagonal">
              Seminar
              <br />
              <span className="text-yellow-400">Program</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed mb-12">
              Intensive learning, dynamic sharing, and transformative networking. 
              Experience cutting-edge methodologies that will revolutionize your teaching practice.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-6 animate-expand-in">
                <div className="text-2xl font-bold text-gray-900 mb-2">September 08-09, 2025</div>
                <div className="text-gray-700">Two transformative days</div>
              </div>
              <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-6 animate-expand-in" style={{animationDelay: '0.2s'}}>
                <div className="text-2xl font-bold text-gray-900 mb-2">Location: </div>
                <div className="text-gray-700">TBA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Learning Strands - Angular Cards */}
      <section className="section-growth py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 mb-4">Learning Strands</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four strategic focus areas driving educational transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="impact-card p-6 animate-expand-in group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300" style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Education</h3>
              <p className="text-gray-600">Marine ecosystem awareness and conservation strategies</p>
            </div>

            <div className="impact-card p-6 animate-expand-in group" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300" style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Development</h3>
              <p className="text-gray-600">Teacher empowerment and skill enhancement</p>
            </div>

            <div className="impact-card p-6 animate-expand-in group" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300" style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Integration</h3>
              <p className="text-gray-600">Indigenous knowledge and traditional practices</p>
            </div>

            <div className="impact-card p-6 animate-expand-in group" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300" style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Innovation</h3>
              <p className="text-gray-600">Digital tools and modern learning platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers - Bold Cards */}
      <section className="section-trust py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-white mb-6">Thought Leaders</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Visionary experts driving the future of environmental education across Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {speakers.map((speaker, index) => (
              <div key={index} className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-8 animate-slide-diagonal" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex items-start space-x-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${speaker.color} flex items-center justify-center text-3xl flex-shrink-0`} style={{clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'}}>
                    {speaker.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                    <div className="text-yellow-400 font-semibold mb-3">{speaker.title}</div>
                    <div className="text-gray-600 font-medium mb-3">"{speaker.topic}"</div>
                    <p className="text-gray-600/80 leading-relaxed">{speaker.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Agenda - Angular Timeline */}
      <section className="section-growth py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 mb-4">Detailed Agenda</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meticulously designed schedule balancing learning, networking, and practical application.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Day 1 */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Day 1</h3>
                <div className="text-xl text-blue-600 font-semibold">September 08, 2025</div>
              </div>
              
              <div className="space-y-4">
                {agenda.day1.map((item, index) => (
                  <div key={index} className={`p-4 transition-all duration-300 hover:transform hover:scale-105 ${getActivityStyle(item.type)}`} style={{clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)'}}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-bold text-lg">{item.time}</div>
                    </div>
                    <div className="font-semibold mb-1">{item.activity}</div>
                    {item.speaker && (
                      <div className="text-sm opacity-90">{item.speaker}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Day 2</h3>
                <div className="text-xl text-green-600 font-semibold">September 09, 2025</div>
              </div>
              
              <div className="space-y-4">
                {agenda.day2.map((item, index) => (
                  <div key={index} className={`p-4 transition-all duration-300 hover:transform hover:scale-105 ${getActivityStyle(item.type)}`} style={{clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)'}}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-bold text-lg">{item.time}</div>
                    </div>
                    <div className="font-semibold mb-1">{item.activity}</div>
                    {item.speaker && (
                      <div className="text-sm opacity-90">{item.speaker}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
