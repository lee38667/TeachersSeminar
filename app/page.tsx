import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Bold Geometric Hero Section */}
      <section className="geometric-hero">
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-8">
            </div>
              
              <h1 className="hero-title text-white mb-8 animate-slide-diagonal">
                Khomas Annual
                <br />
                <span className="text-yellow-400">Teachers' Seminar</span>
              </h1>
              
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl text-white/90 font-light italic mb-4">
                  "Advancing Environmental Education Excellence"
                </h2>
                <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                  Join the movement. Shape the future. Empower the next generation through 
                  cutting-edge environmental education and innovative teaching methodologies.
                </p>
              </div>
              
              {/* Bold CTA Section */}
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Link href="/register" className="cta-primary animate-expand-in">
                  Become a Presenter
                </Link>
                <Link href="/register" className="cta-secondary animate-expand-in" style={{animationDelay: '0.2s'}}>
                  Join as Attendee
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider"></div>

        {/* Impact Statistics - Bold & Angular */}
        <section className="section-growth py-20">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="section-title text-gray-900 mb-4">Our Growing Impact</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Measurable change. Lasting transformation. Real results across Namibia's educational landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="impact-card text-center animate-expand-in group">
                <div className="stat-number mb-4 group-hover:scale-110 transition-transform duration-300">218+</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Educators Reached</h3>
                <p className="text-gray-600"></p>
              </div>
              
              <div className="impact-card text-center animate-expand-in group" style={{animationDelay: '0.2s'}}>
                <div className="stat-number mb-4 group-hover:scale-110 transition-transform duration-300">35+</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Schools Transformed</h3>
                <p className="text-gray-600">Innovative methodologies prepared for sharing</p>
              </div>
              
              <div className="impact-card text-center animate-expand-in group" style={{animationDelay: '0.4s'}}>
                <div className="stat-number mb-4 group-hover:scale-110 transition-transform duration-300">100%</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Learning Impact</h3>
                <p className="text-gray-600">Positive feedback from participating educators</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bold Testimonials with Angular Design
        <section className="section-trust py-20">
          <div className="container mx-auto px-8">
            <h2 className="section-title text-white text-center mb-16">Voices of Change</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="testimonial-angular animate-slide-diagonal">
                <blockquote className="text-lg text-gray-700 mb-6 italic font-medium">
                  "This seminar didn't just change how I teach—it transformed how my students see their responsibility toward the environment. They're now passionate advocates for sustainability."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full mr-4"></div>
                  <div>
                    <div className="font-bold text-gray-900">Ms. Nashilongo</div>
                    <div className="text-sm text-gray-600">Environmental Science Teacher, Windhoek</div>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-angular animate-slide-diagonal" style={{animationDelay: '0.3s'}}>
                <blockquote className="text-lg text-gray-700 mb-6 italic font-medium">
                  "The networking opportunities and practical resources have transformed my classroom. 
                  I now integrate indigenous knowledge with cutting-edge environmental science."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mr-4"></div>
                  <div>
                    <div className="font-bold text-gray-900">Mr. Shikongo</div>
                    <div className="text-sm text-gray-600">Curriculum Coordinator, Oshakati</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Partner Network - Hexagonal Design */}
        <section className="section-growth py-20">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="section-title text-gray-900 mb-4">Innovation Partners</h2>
              <p className="text-xl text-gray-600">
                United in purpose. Committed to educational excellence.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-9xl mx-auto">
              <div className="partner-hex animate-float">
              <div className="w-16 h-16 mx-auto flex items-center justify-center">
                <Image 
                src="/UNESCO_logo.svg.png" 
                alt="UNESCO Logo" 
                width={64} 
                height={64}
                className="object-contain filter hover:scale-110 transition-transform duration-300"
                />
              </div>
              </div>
              
              <div className="partner-hex animate-float" style={{animationDelay: '0.5s'}}>
              <div className="w-16 h-16 mx-auto flex items-center justify-center">
                <Image 
                src="/Unam Logo.png" 
                alt="UNAM Logo" 
                width={64} 
                height={64}
                className="object-contain filter hover:scale-110 transition-transform duration-300"
                />
              </div>
              </div>
              
              <div className="partner-hex animate-float" style={{animationDelay: '1s'}}>
              <div className="w-16 h-16 mx-auto flex items-center justify-center">
                <Image 
                src="/VrpsLogo.png" 
                alt="Van Rhyn Primary School Logo" 
                width={64} 
                height={64}
                className="object-contain filter hover:scale-110 transition-transform duration-300"
                />
              </div>
              </div>
              
              <div className="partner-hex animate-float" style={{animationDelay: '1.5s'}}>
              <div className="w-16 h-16 mx-auto flex items-center justify-center">
                <Image 
                src="/MOELOGO.jpeg" 
                alt="Ministry of Education Logo" 
                width={64} 
                height={64}
                className="object-contain filter hover:scale-110 transition-transform duration-300"
                />
              </div>
              </div>

                <div className="partner-rect animate-float flex items-center justify-center" style={{animationDelay: '2s'}}>
                  <div className="w-36 h-16 flex items-center justify-center bg-white rounded-md shadow-md overflow-hidden border border-gray-200 mx-auto">
                    <Image 
                      src="/EIFLogo.png" 
                      alt="Environmental Investment Fund Logo" 
                      width={134} 
                      height={64}
                      className="object-contain filter hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="partner-square animate-float flex items-center justify-center flex-col" style={{animationDelay: '2.5s'}}>
                  <div className="w-25 h-25 flex items-center justify-center  rounded-md shadow-md overflow-hidden mx-auto">
                    <Image 
                      src="/MinistryOfEnviroLogo.jpeg" 
                      alt="Ministry of Environment, Forestry and Tourism" 
                      width={84} 
                      height={84}
                      className="object-contain filter hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-s text-gray-700 mt-2 text-center">Ministry of Environment, Forestry and Tourism</p>
                </div>

              <div className="partner-square animate-float flex items-center justify-center flex-col" style={{animationDelay: '3s'}}>
              <div className="w-25 h-25 flex items-center justify-center  rounded-md shadow-md overflow-hidden mx-auto">
                <Image 
                src="/NBGLogo.jpeg" 
                alt="National Botanical Garden Logo" 
                width={104} 
                height={104}
                className="object-contain filter hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-s text-gray-700 mt-2 text-center">National Botanical Garden</p>
              </div>

              <div className="partner-hex animate-float" style={{animationDelay: '3.5s'}}>
              <div className="w-66 h-66 mx-auto flex items-center justify-center">
                <Image 
                src="/MindsInActionLogo.jpeg" 
                alt="Minds in Action Logo" 
                width={344} 
                height={344}
                className="object-contain filter hover:scale-110 transition-transform duration-300"
                />
              </div>
              </div>

              <div className="partner-hex animate-float" style={{animationDelay: '4s'}}>
              <div className="w-46 h-46 mx-auto flex items-center justify-center">
                <Image 
                src="/nnf-logo.png" 
                alt="Namibia Nature Foundation Logo" 
                width={124} 
                height={124}
                className="object-contain filter hover:scale-110 transition-transform duration-300"
                />
              </div>
              </div>
               <div className="partner-circle animate-float" style={{animationDelay: '4s'}}>
              <div className="w-46 h-46 mx-auto flex items-center justify-center">
                <Image 
                src="/IUMLogo.jpeg" 
                alt="International University of Management Logo" 
                width={124} 
                height={124}
                className="object-contain filter hover:scale-110 transition-transform duration-300"
                />
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Dashboard - Bold & Dynamic */}
        <section className="section-trust py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container mx-auto px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="section-title text-white mb-6">Impact Dashboard</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Registration data showcasing the growing momentum of educational transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 text-center animate-pulse-glow">
                <div className="text-6xl font-black text-gray-900 mb-4 animate-float">47</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Registrations</h3>
                <p className="text-gray-800/80">Educators across Windhoek committed to change</p>
              </div>
              
              <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 text-center animate-pulse-glow" style={{animationDelay: '1.5s'}}>
                <div className="text-6xl font-black text-gray-900 mb-4 animate-float" style={{animationDelay: '1s'}}>12</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Presentations Ready</h3>
                <p className="text-gray-800/80">Innovative methodologies prepared for sharing</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/register" className="cta-primary">
                Join the Revolution
              </Link>
            </div>
          </div>
        </section>
      </main>
  );
}
