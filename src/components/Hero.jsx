import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Video/Image Placeholder */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury Travel"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl px-6 pt-20">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block py-1 px-3 border border-white/30 rounded-full text-amber-300 text-xs tracking-widest uppercase mb-6 glass-dark"
                >
                    Premium Travel Experience
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl text-white font-serif font-medium tracking-tight mb-6 leading-tight drop-shadow-sm"
                >
                    Discover Beautiful <br /><span className="italic text-amber-200">Places With Us</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-slate-200 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto"
                >
                    Affordable Packages • Trusted Guides • 24/7 Support
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link to="/packages" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-medium hover:bg-amber-50 transition-colors shadow-xl text-sm tracking-wide">
                        View Packages
                    </Link>

                </motion.div>
            </div>

            {/* Search Widget */}

        </section>
    );
};

export default Hero;
