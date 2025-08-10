'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<'vienna' | 'seminars' | 'all'>('all');

  // Vienna pictures (How it all started)
  const viennaImages = [
    '/Images/V.JPG',
    '/Images/V (2).JPG',
    '/Images/V (3).JPG',
    '/Images/V (4).JPG',
    '/Images/V (5).jpg',
    '/Images/V (6).jpg',
    '/Images/V (7).jpg',
    '/Images/V (8).jpg',
    '/Images/V1.jpg',
    '/Images/V2.jpg',
    '/Images/V4.jpg'
  ];

  // Teacher Seminar pictures (Initiatives and Previous Seminars)
  const seminarImages = [
    '/Images/TS.jpg',
    '/Images/TS (2).jpg',
    '/Images/TS (3).JPG',
    '/Images/TS (4).JPG',
    '/Images/TS (5).JPG',
    '/Images/TS (6).JPG',
    '/Images/TS (7).jpg',
    '/Images/TS (8).jpg',
    '/Images/TS (9).JPG',
    '/Images/TS (10).JPG',
    '/Images/TS (11).JPG',
    '/Images/TS (12).JPG',
    '/Images/TS (13).JPG',
    '/Images/TS (14).JPG',
    '/Images/TS (15).JPG',
    '/Images/TS (16).JPG',
    '/Images/TS (17).JPG',
    '/Images/TS (18).JPG',
    '/Images/TS (19).JPG',
    '/Images/TS (20).JPG',
    '/Images/TS (21).JPG',
    '/Images/TS (22).JPG',
    '/Images/TS (23).jpg',
    '/Images/TS (24).jpg',
    '/Images/TS (25).jpg',
    '/Images/TS (26).jpg',
    '/Images/TS1.jpg',
    '/Images/TS2.jpg',
    '/Images/TS3 (2).jpg',
    '/Images/TS4.jpg',
    '/Images/TS5.jpg',
    '/Images/TS6.jpg',
    '/Images/TS7.jpg'
  ];

  // Additional images
  const additionalImages = [
    '/Images/1000125212.jpg',
    '/Images/1000177049.jpg',
    '/Images/20240502_125736.jpg',
    '/Images/IMG_0355.JPG'
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const BentoImageCard = ({ src, index, isLarge = false }: { src: string; index: number; isLarge?: boolean }) => {
    const baseClasses = "relative overflow-hidden rounded-lg cursor-pointer group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl";
    const sizeClasses = isLarge 
      ? "col-span-2 row-span-2 aspect-square" 
      : index % 7 === 0 || index % 11 === 0 
        ? "col-span-2 aspect-[4/3]" 
        : index % 5 === 0 
          ? "row-span-2 aspect-[3/4]" 
          : "aspect-square";

    return (
      <div
        className={`${baseClasses} ${sizeClasses} animate-expand-in`}
        style={{ animationDelay: `${(index * 0.1) % 2}s` }}
        onClick={() => openModal(src)}
      >
        <Image
          src={src}
          alt={`Gallery image ${index + 1}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ImageModal = () => {
    if (!selectedImage) return null;

    return (
      <div 
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        onClick={closeModal}
      >
        <div className="relative max-w-7xl max-h-full">
          <button
            onClick={closeModal}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Gallery image full size"
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    );
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
              <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium text-sm uppercase tracking-wider border-l-4 border-yellow-400 flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Visual Journey
              </span>
            </div>
            
            <h1 className="hero-title text-white mb-8 animate-slide-diagonal">
              Photo
              <br />
              <span className="text-yellow-400">Gallery</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed mb-12">
              Explore our journey from the founding moments in Vienna to the thriving educational initiatives 
              and seminars that continue to transform Namibian education.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-6 animate-expand-in">
                <div className="text-2xl font-bold text-gray-900 mb-2">{viennaImages.length + seminarImages.length + additionalImages.length}+ Photos</div>
                <div className="text-gray-700">Memories captured</div>
              </div>
              <div className="impact-card bg-white/10 backdrop-blur-md border-white/20 p-6 animate-expand-in" style={{animationDelay: '0.2s'}}>
                <div className="text-2xl font-bold text-gray-900 mb-2">2 Collections</div>
                <div className="text-gray-700">Vienna & Seminars</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Filter Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedSection('all')}
              className={`px-6 py-3 font-bold rounded-lg transition-all duration-300 ${
                selectedSection === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              All Photos
            </button>
            <button
              onClick={() => setSelectedSection('vienna')}
              className={`px-6 py-3 font-bold rounded-lg transition-all duration-300 ${
                selectedSection === 'vienna'
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              How It All Started
            </button>
            <button
              onClick={() => setSelectedSection('seminars')}
              className={`px-6 py-3 font-bold rounded-lg transition-all duration-300 ${
                selectedSection === 'seminars'
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Initiatives & Seminars
            </button>
          </div>
        </div>
      </section>

      {/* How It All Started - Vienna Section */}
      {(selectedSection === 'all' || selectedSection === 'vienna') && (
        <section className="section-growth py-20">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="section-title text-gray-900 mb-4">How It All Started</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The foundational moments captured in Vienna, where the vision for transforming 
                Namibian education first took shape through international collaboration and inspiration.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 auto-rows-auto">
              {viennaImages.map((image, index) => (
                <BentoImageCard
                  key={`vienna-${index}`}
                  src={image}
                  index={index}
                  isLarge={index === 0 || index === 5}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Initiatives and Previous Seminars Section */}
      {(selectedSection === 'all' || selectedSection === 'seminars') && (
        <section className="section-trust py-20">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="section-title text-white mb-6">Initiatives & Previous Seminars</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Documenting our educational initiatives, teacher seminars, and the collaborative 
                spirit that drives transformation across Namibian primary schools.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 auto-rows-auto">
              {seminarImages.map((image, index) => (
                <BentoImageCard
                  key={`seminar-${index}`}
                  src={image}
                  index={index}
                  isLarge={index === 2 || index === 8 || index === 15}
                />
              ))}
            </div>

            {/* Additional images if viewing all or seminars */}
            {additionalImages.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Recent Moments</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {additionalImages.map((image, index) => (
                    <BentoImageCard
                      key={`additional-${index}`}
                      src={image}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="section-growth py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-gray-900 mb-8">Be Part of Our Story</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Join us in creating more memorable moments and transformative educational experiences. 
              Register for our upcoming seminar and become part of this inspiring journey.
            </p>
            
            <div className="impact-card bg-white p-12 animate-expand-in">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 mx-auto mb-8 flex items-center justify-center" style={{clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'}}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Next Seminar</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Be part of the next chapter in our educational transformation journey. 
                Register today and help create new memories and lasting impact.
              </p>
              
              <a
                href="/register"
                className="cta-button bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-12 py-4 text-lg font-bold font-space transition-all duration-300 transform hover:scale-105"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal />
    </main>
  );
}
