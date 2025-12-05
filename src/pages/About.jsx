import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-24 pb-20 min-h-screen bg-white">
            <div className="container mx-auto px-6">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6"
                    >
                        Our Story
                    </motion.h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        LuxeTravel was born from a passion for exploring the world's most exquisite corners. We believe that travel is not just about moving from one place to another, but about the transformation that happens along the way.
                    </p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <img
                        src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=2070&auto=format&fit=crop"
                        alt="Travel Experience"
                        className="rounded-2xl shadow-lg h-96 w-full object-cover"
                    />
                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-primary">Curating Unforgettable Moments</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Since 2010, we have been crafting bespoke itineraries for travelers who seek the extraordinary. From private island retreats in the Maldives to cultural immersions in Kyoto, our team of travel experts ensures every detail is perfect.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            We partner with the world's finest hotels, guides, and experience providers to offer you access to the inaccessible.
                        </p>
                    </div>
                </div>

                {/* Mission */}
                <div className="bg-slate-50 rounded-3xl p-12 text-center mb-20">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-8">Our Mission</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-accent mx-auto mb-4 shadow-sm">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Passion</h3>
                            <p className="text-slate-500">We love what we do and it shows in every itinerary we design.</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-accent mx-auto mb-4 shadow-sm">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Excellence</h3>
                            <p className="text-slate-500">We strive for perfection in every aspect of your journey.</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-accent mx-auto mb-4 shadow-sm">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                            <p className="text-slate-500">We are committed to responsible travel that benefits local communities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
