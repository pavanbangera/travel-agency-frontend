import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { galleryImages } from '../data/galleryImages';

const Gallery = () => {
    const images = galleryImages;

    return (
        <PageTransition>
            <div className="pt-24 pb-20 min-h-screen bg-slate-50">
                <SEO
                    title="Travel Gallery | LuxeTravel"
                    description="Explore our collection of breathtaking travel moments from around the world."
                />
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-serif font-bold text-primary mb-4">Travel Gallery</h1>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            A visual journey through some of the most beautiful destinations we offer.
                        </p>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {images.map((img, index) => (
                            <div key={index} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in">
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white text-sm font-medium shadow-sm">{img.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Gallery;
