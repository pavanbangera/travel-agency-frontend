import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Packages', path: '/packages' },
        { name: 'Self Drive', path: '/cars' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/packages?search=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="text-2xl font-serif tracking-tight text-slate-900 flex items-center gap-2">
                    LUXE<span className="text-amber-600">TRAVEL</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`hover:text-amber-600 transition-colors ${location.pathname === link.path ? 'text-amber-600' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    {isSearchOpen ? (
                        <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center bg-white rounded-full px-3 py-1 shadow-sm border border-slate-200">
                            <Search size={16} className="text-slate-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search..."
                                className="w-32 lg:w-48 px-2 py-1 text-sm focus:outline-none text-slate-700 placeholder:text-slate-400"
                                autoFocus
                                onBlur={() => !searchQuery && setIsSearchOpen(false)}
                            />
                            <button type="button" onClick={() => setIsSearchOpen(false)} className="text-slate-400 hover:text-slate-600">
                                <X size={14} />
                            </button>
                        </form>
                    ) : (
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-amber-600 transition-colors"
                        >
                            <Search size={18} />
                        </button>
                    )}

                    <Link to="/packages" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-amber-600 transition-colors shadow-lg shadow-amber-900/10">
                        BOOK NOW
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-slate-900"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-t border-slate-100 shadow-xl p-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-slate-600 font-medium hover:text-amber-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
