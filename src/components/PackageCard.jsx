import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, ArrowRight } from 'lucide-react';

const PackageCard = ({ pkg }) => {
    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 cursor-pointer">
            <div className="relative h-72 overflow-hidden">
                <img
                    src={pkg.images[0]}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                    ₹{pkg.price}
                </div>
                {pkg.featured && (
                    <div className="absolute bottom-4 left-4 flex gap-2">
                        <span className="bg-amber-500 text-white px-2 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider">Best Seller</span>
                    </div>
                )}
            </div>
            <div className="p-6">
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-3">
                    <Clock size={14} /> {pkg.duration}
                    <span className="mx-1">•</span>
                    <MapPin size={14} /> {pkg.destination}
                </div>
                <h3 className="text-xl font-serif text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                    {pkg.title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2 mb-6">
                    {pkg.description || 'Experience the ultimate luxury with this exclusive travel package.'}
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex -space-x-2">
                        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] text-slate-500 font-bold">+24</div>
                    </div>
                    <Link to={`/packages/${pkg._id}`} className="text-amber-600 text-sm font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Details <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
