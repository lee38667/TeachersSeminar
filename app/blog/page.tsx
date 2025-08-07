export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Transforming Environmental Education: Key Takeaways from KEIDF 2024",
      excerpt: "Highlights from our most successful seminar yet, featuring innovative teaching methods and remarkable teacher stories.",
      author: "Leena M. Iileka",
      date: "December 15, 2024",
      category: "Event Highlights",
      readTime: "5 min read",
      image: "🌊",
      color: "from-blue-500 to-teal-500"
    },
    {
      id: 2,
      title: "Indigenous Knowledge Meets Modern Science: A Teacher's Journey",
      excerpt: "How Ms. Nashilongo successfully integrated traditional Namibian coastal knowledge into her marine science curriculum.",
      author: "Sarah Nashilongo",
      date: "November 28, 2024",
      category: "Teacher Stories",
      readTime: "7 min read",
      image: "🏛️",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Building Effective Environmental Clubs in Primary Schools",
      excerpt: "A step-by-step guide to establishing and maintaining active environmental clubs that engage students and communities.",
      author: "Johannes Shikongo",
      date: "November 15, 2024",
      category: "Best Practices",
      readTime: "6 min read",
      image: "🌱",
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 4,
      title: "KEIDF 2025 Call for Presentations Now Open",
      excerpt: "Submit your presentation proposals for next year's seminar. Theme: 'Coastal Resilience and Climate Adaptation Education'",
      author: "KEIDF Team",
      date: "October 30, 2024",
      category: "Announcements",
      readTime: "3 min read",
      image: "📢",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 5,
      title: "Digital Tools for Marine Education: What's Working in Namibian Classrooms",
      excerpt: "Practical review of educational technology tools that are making a difference in environmental education across the country.",
      author: "Dr. Sarah Katjavivi",
      date: "October 20, 2024",
      category: "Technology",
      readTime: "8 min read",
      image: "💻",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      title: "Community Impact: How Teacher Training Reaches Beyond the Classroom",
      excerpt: "Research findings on the ripple effects of professional development programs in environmental education.",
      author: "Dr. Maria Nghipangelwa",
      date: "October 5, 2024",
      category: "Research",
      readTime: "10 min read",
      image: "🌍",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const categories = ["All", "Event Highlights", "Teacher Stories", "Best Practices", "Announcements", "Technology", "Research"];

  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'Event Highlights': return 'bg-blue-100 text-blue-800 border-l-4 border-blue-400';
      case 'Teacher Stories': return 'bg-green-100 text-green-800 border-l-4 border-green-400';
      case 'Best Practices': return 'bg-purple-100 text-purple-800 border-l-4 border-purple-400';
      case 'Announcements': return 'bg-red-100 text-red-800 border-l-4 border-red-400';
      case 'Technology': return 'bg-orange-100 text-orange-800 border-l-4 border-orange-400';
      case 'Research': return 'bg-cyan-100 text-cyan-800 border-l-4 border-cyan-400';
      default: return 'bg-gray-100 text-gray-800 border-l-4 border-gray-400';
    }
  };

  return (
    <main className="overflow-hidden">
      {/* Angular Hero Section */}
      <section className="section-trust py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-white/10 to-transparent" style={{clipPath: 'polygon(0 0, 70% 0, 100% 100%, 0% 100%)'}}></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400/20 rounded-full animate-float"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium text-sm uppercase tracking-wider border-l-4 border-yellow-400">
                📝 Community Voices
              </span>
            </div>
            
            <h1 className="hero-title text-white mb-8 animate-slide-diagonal">
              Teacher
              <br />
              <span className="text-yellow-400">Stories</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed mb-12">
              Insights, innovations, and impact stories from educators transforming environmental education across Namibia.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-6 animate-expand-in">
                <div className="text-2xl font-bold text-white mb-2">50+ Stories</div>
                <div className="text-white/80">Teacher experiences shared</div>
              </div>
              <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-6 animate-expand-in" style={{animationDelay: '0.2s'}}>
                <div className="text-2xl font-bold text-white mb-2">6 Categories</div>
                <div className="text-white/80">Research to best practices</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Blog Content */}
      <section className="section-growth py-20">
        <div className="container mx-auto px-8">
          {/* Category Filter */}
          <div className="mb-16">
            <h2 className="section-title text-gray-900 mb-8">Browse by Category</h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 ${
                    category === 'All' 
                      ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 angular-card'
                  }`}
                  style={category !== 'All' ? {clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)'} : {}}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="section-title text-gray-900 mb-8">Featured Article</h2>
            <div className="impact-card bg-white p-12 animate-expand-in">
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                <div className={`w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${blogPosts[0].color} flex items-center justify-center mb-6 lg:mb-0 text-3xl lg:text-4xl flex-shrink-0`} style={{clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'}}>
                  {blogPosts[0].image}
                </div>
                
                <div className="flex-1">
                  <div className="mb-4">
                    <span className={`inline-block px-4 py-2 text-xs font-bold uppercase tracking-wide ${getCategoryStyle(blogPosts[0].category)}`}>
                      {blogPosts[0].category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{blogPosts[0].title}</h3>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">{blogPosts[0].excerpt}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center text-sm text-gray-600 mb-4 sm:mb-0">
                      <span className="mr-4 font-medium">By {blogPosts[0].author}</span>
                      <span className="mr-4">{blogPosts[0].date}</span>
                      <span className="text-blue-600 font-semibold">{blogPosts[0].readTime}</span>
                    </div>
                    <button className="cta-button bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 font-bold transition-all duration-300 transform hover:scale-105">
                      Read Full Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="mb-16">
            <h2 className="section-title text-gray-900 mb-8">Recent Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <article key={post.id} className="impact-card bg-white p-6 animate-expand-in group hover:transform hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${post.color} flex items-center justify-center mb-4 text-2xl transform group-hover:scale-110 transition-transform duration-300`} style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
                    {post.image}
                  </div>
                  
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wide ${getCategoryStyle(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{post.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <p className="mb-1 font-medium">By {post.author}</p>
                      <p>{post.date} • <span className="text-blue-600 font-semibold">{post.readTime}</span></p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-bold transition-colors group-hover:translate-x-2 transform transition-transform duration-300">
                      Read →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-trust py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-white mb-8">Stay Connected</h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest stories, updates, and announcements from the KEIDF community.
            </p>
            
            <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-8 animate-expand-in">
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                    style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)'}}
                  />
                  <button className="cta-button bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 px-8 py-3 font-bold transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="section-growth py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-gray-900 mb-8">Share Your Story</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Have a success story, innovative teaching method, or insights to share? 
              We'd love to amplify your voice and impact in our community.
            </p>
            
            <div className="impact-card bg-white p-12 animate-expand-in">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 mx-auto mb-8 flex items-center justify-center text-3xl" style={{clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'}}>
                ✍️
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Become a Featured Voice</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Join our growing network of educator-authors sharing transformative experiences and practical insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cta-button bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 font-bold transition-all duration-300 transform hover:scale-105"
                >
                  Submit an Article
                </a>
                <a
                  href="/register"
                  className="angular-card border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 font-bold transition-all duration-300 transform hover:scale-105"
                  style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)'}}
                >
                  Join Our Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
