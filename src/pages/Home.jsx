import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import SelfDriveSection from '../components/SelfDriveSection';
import PackageCard from '../components/PackageCard';
import PackageCardSkeleton from '../components/PackageCardSkeleton';
import { preloadImages } from '../utils/imageUtils';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { BadgeCheck, Headphones, Compass, Heart, ArrowLeft, ArrowRight, Star, MapPin, Mail, Phone, Quote } from 'lucide-react';
import { galleryImages } from '../data/galleryImages';

const Home = () => {
    const [featuredPackages, setFeaturedPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const scrollContainerRef = useRef(null);

    // Fetch featured packages from API
    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/packages`);
                // Assuming the API returns all packages, we slice the first 3 for featured
                const featured = response.data.slice(0, 3);
                setFeaturedPackages(featured);

                // Preload images
                const imageUrls = featured.map(pkg => pkg.images[0]);
                await preloadImages(imageUrls);
            } catch (error) {
                console.error('Error fetching packages:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPackages();
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <PageTransition>
            <SEO
                title="Luxury Travel Packages & Custom Itineraries"
                description="Discover the world's most breathtaking destinations with LuxeTravel. Expertly curated luxury travel packages and bespoke itineraries."
            />
            <Hero />

            {/* Why Choose Us */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="py-24 bg-white"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
                        <div className="group">
                            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-50 transition-colors">
                                <BadgeCheck size={28} />
                            </div>
                            <h3 className="text-xl font-serif font-medium text-slate-900 mb-2">Best Price Guarantee</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">We ensure you get the best rates for luxury accommodations worldwide.</p>
                        </div>
                        <div className="group">
                            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-50 transition-colors">
                                <Headphones size={28} />
                            </div>
                            <h3 className="text-xl font-serif font-medium text-slate-900 mb-2">24/7 Premium Support</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">Our concierge team is available around the clock for your needs.</p>
                        </div>
                        <div className="group">
                            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-50 transition-colors">
                                <Compass size={28} />
                            </div>
                            <h3 className="text-xl font-serif font-medium text-slate-900 mb-2">Expert Local Guides</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">Discover hidden gems with our certified and experienced local experts.</p>
                        </div>
                        <div className="group">
                            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-50 transition-colors">
                                <Heart size={28} />
                            </div>
                            <h3 className="text-xl font-serif font-medium text-slate-900 mb-2">1000+ Happy Travelers</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">Join our community of satisfied luxury travelers exploring the globe.</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Popular Packages */}
            <motion.section
                id="packages"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="py-24 bg-slate-50"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <span className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-2 block">Our Collections</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">Popular Packages</h2>
                        </div>


                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {loading ? (
                            // Show 3 skeletons for featured packages
                            [...Array(3)].map((_, index) => (
                                <PackageCardSkeleton key={index} />
                            ))
                        ) : (
                            featuredPackages.map((pkg) => (
                                <PackageCard key={pkg._id} pkg={pkg} />
                            ))
                        )}
                    </div>
                </div>
            </motion.section>

            {/* Self-Drive Car Rental Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <SelfDriveSection />
            </motion.div>

            {/* Gallery Section */}
            <motion.section
                id="gallery"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="py-24 bg-white overflow-hidden"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-serif text-slate-900 mb-2">Travel Moments</h2>
                            <p className="text-slate-500">Captured memories from our travelers around the globe.</p>
                        </div>
                        <div className="hidden md:flex gap-2">
                            <button
                                onClick={() => scroll('left')}
                                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                            >
                                <ArrowLeft size={18} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                            >
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {galleryImages.map((img, index) => (
                            <div key={index} className="min-w-[300px] md:min-w-[400px] h-[300px] relative group rounded-2xl overflow-hidden snap-center flex-shrink-0 cursor-zoom-in">
                                <img src={img.src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={img.title} />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white text-sm font-medium shadow-sm">{img.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Travel Places */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="py-24 bg-slate-900 text-white"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-amber-500 uppercase tracking-widest text-xs font-bold">Bucket List</span>
                        <h2 className="text-4xl md:text-5xl font-serif mt-3">Destinations to Visit</h2>
                    </div>

                    <div className="space-y-16">
                        {/* Place 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1 space-y-6">
                                <h3 className="text-4xl font-serif text-white">Hampi, Karnataka</h3>
                                <p className="text-slate-400 leading-relaxed font-light">Explore the magnificent ruins of the Vijayanagara Empire. Ancient temples, giant boulders, and a surreal landscape that transports you back in time.</p>

                                <div className="grid grid-cols-2 gap-6 pt-4">
                                    <div>
                                        <span className="block text-amber-500 text-xs uppercase tracking-wide mb-1">Best Time</span>
                                        <span className="text-lg text-white">Oct - Mar</span>
                                    </div>
                                    <div>
                                        <span className="block text-amber-500 text-xs uppercase tracking-wide mb-1">Ideal Duration</span>
                                        <span className="text-lg text-white">3 - 4 Days</span>
                                    </div>
                                </div>
                                <button className="text-white border-b border-amber-500 pb-1 text-sm uppercase tracking-widest hover:text-amber-500 transition-colors mt-4">
                                    Explore Hampi
                                </button>
                            </div>
                            <div className="order-1 md:order-2 rounded-3xl overflow-hidden h-96">
                                <img src="https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Hampi" />
                            </div>
                        </div>

                        {/* Place 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="rounded-3xl overflow-hidden h-96">
                                <img src="https://images.unsplash.com/photo-1590050752117-238cb0fb5689?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Munnar" />
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-4xl font-serif text-white">Munnar, Kerala</h3>
                                <p className="text-slate-400 leading-relaxed font-light">Endless tea plantations, misty rolling hills, and exotic flora. A perfect hill station retreat to rejuvenate your soul amidst nature's finest creation.</p>

                                <div className="grid grid-cols-2 gap-6 pt-4">
                                    <div>
                                        <span className="block text-amber-500 text-xs uppercase tracking-wide mb-1">Best Time</span>
                                        <span className="text-lg text-white">Sep - Mar</span>
                                    </div>
                                    <div>
                                        <span className="block text-amber-500 text-xs uppercase tracking-wide mb-1">Ideal Duration</span>
                                        <span className="text-lg text-white">3 - 5 Days</span>
                                    </div>
                                </div>
                                <button className="text-white border-b border-amber-500 pb-1 text-sm uppercase tracking-widest hover:text-amber-500 transition-colors mt-4">
                                    Explore Munnar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* About & Testimonials */}
            <motion.section
                id="about"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="py-24 bg-amber-50/50"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-400 rounded-tl-3xl"></div>
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="rounded-3xl shadow-2xl shadow-amber-900/10 relative z-10" alt="About Us" />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="text-4xl font-serif text-amber-600 font-bold">15+</span>
                                    <span className="text-sm font-medium text-slate-900 leading-tight">Years of Excellence</span>
                                </div>
                                <p className="text-xs text-slate-500">Creating unforgettable journeys since 2008.</p>
                            </div>
                        </div>
                        <div>
                            <span className="text-amber-600 uppercase tracking-widest text-xs font-bold">Our Story</span>
                            <h2 className="text-4xl font-serif text-slate-900 mt-3 mb-6">Redefining Luxury Travel</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                LuxeTravel was founded with a singular vision: to create travel experiences that go beyond the ordinary. We believe travel is not just about visiting a place, but about feeling it.
                            </p>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Our team of dedicated experts hand-picks every hotel, guide, and experience to ensure perfection.
                            </p>

                            <div className="flex gap-4">
                                <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-12 h-12 rounded-full border-2 border-white shadow-md" alt="Team 1" />
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-12 h-12 rounded-full border-2 border-white shadow-md" alt="Team 2" />
                                <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-12 h-12 rounded-full border-2 border-white shadow-md" alt="Team 3" />
                                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold border-2 border-white shadow-md">Team</div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className="bg-white rounded-[3rem] p-12 md:p-16 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-10 text-slate-300">
                            <Quote size={120} />
                        </div>
                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <div className="flex justify-center mb-6">
                                <div className="flex text-amber-400 gap-1">
                                    <Star fill="currentColor" size={20} />
                                    <Star fill="currentColor" size={20} />
                                    <Star fill="currentColor" size={20} />
                                    <Star fill="currentColor" size={20} />
                                    <Star fill="currentColor" size={20} />
                                </div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-serif italic text-slate-900 mb-8 leading-relaxed">
                                "The attention to detail was impeccable. From the private transfers to the surprise champagne in our room, LuxeTravel made our honeymoon absolutely magical."
                            </h3>
                            <div>
                                <div className="font-bold text-slate-900 uppercase tracking-wide text-sm">Sarah Jenkins</div>
                                <div className="text-slate-500 text-xs mt-1">Traveled to Maldives</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </PageTransition>
    );
};

export default Home;
