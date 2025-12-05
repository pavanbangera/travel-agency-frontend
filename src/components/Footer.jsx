import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link to="/" className="text-2xl font-serif tracking-tight text-white flex items-center gap-2">
                            LUXE<span className="text-amber-500">TRAVEL</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">Curating the world's most exclusive travel experiences for the discerning traveler.</p>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-serif mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>

                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-serif mb-6">Support</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact Center</Link></li>

                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-serif mb-6">Newsletter</h4>
                        <p className="text-slate-400 text-sm mb-4">Subscribe for exclusive offers.</p>
                        <div className="flex border-b border-slate-700 pb-2">
                            <input type="email" placeholder="Your Email" className="bg-transparent w-full outline-none text-sm placeholder-slate-600" />
                            <button className="text-amber-500 text-sm font-medium hover:text-white transition-colors">JOIN</button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>&copy; 2023 LuxeTravel Agency. All rights reserved.</p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
