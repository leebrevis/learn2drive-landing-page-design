
import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1590510133954-b5663a4354ed?q=80&w=1964&auto=format",
    alt: "Student learning to drive"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1481967954090-2435e0e72e3d?q=80&w=2069&auto=format",
    alt: "Driving lesson in progress"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1574023278981-0b5ba9d43bf7?q=80&w=1964&auto=format",
    alt: "Instructor teaching student"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?q=80&w=1972&auto=format",
    alt: "Dashboard view during driving lesson"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1964&auto=format",
    alt: "Student with passed driving test"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=1965&auto=format",
    alt: "Learning vehicle on the road"
  }
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (activeImage === null) return;
    setActiveImage((activeImage + 1) % galleryImages.length);
  };

  const prevImage = () => {
    if (activeImage === null) return;
    setActiveImage((activeImage - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-md aspect-video cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center">
                  <span className="text-sm font-medium">Click to view</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && activeImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          
          <div 
            className="max-w-4xl max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={galleryImages[activeImage].src} 
              alt={galleryImages[activeImage].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            
            <div className="absolute left-0 right-0 bottom-0 p-4 bg-black/50 text-white">
              <p>{galleryImages[activeImage].alt}</p>
              <p className="text-sm text-white/70">{activeImage + 1} of {galleryImages.length}</p>
            </div>
            
            {/* Navigation buttons */}
            <button 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
