import React from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { Car, Calendar, Gauge, ShieldCheck, Sparkles, Wallet, Headphones, ArrowRight, CheckCircle2 } from 'lucide-react';

const SelfDriveSection = () => {
    const features = [
        {
            icon: <Calendar className="w-6 h-6 text-blue-600" />,
            title: "Daily / Weekly Rentals",
            desc: "Flexible plans for your needs"
        },
        {
            icon: <Gauge className="w-6 h-6 text-blue-600" />,
            title: "Unlimited KM Options",
            desc: "Drive as much as you want"
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
            title: "Fully Insured Vehicles",
            desc: "Complete peace of mind"
        },
        {
            icon: <Sparkles className="w-6 h-6 text-blue-600" />,
            title: "Well-Maintained Cars",
            desc: "Clean and serviced regularly"
        },
        {
            icon: <Wallet className="w-6 h-6 text-blue-600" />,
            title: "Affordable Prices",
            desc: "Best rates in the market"
        },
        {
            icon: <Headphones className="w-6 h-6 text-blue-600" />,
            title: "24/7 Support",
            desc: "Always here to help you"
        }
    ];



    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-blue-50/30 font-sans">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                        <Car size={16} />
                        <span>New Service</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Self-Drive Cars for Rent
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Choose from well-maintained cars and enjoy the freedom to drive yourself.
                        Experience the journey on your own terms.
                    </p>
                </div>

                {/* Car Showcase */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {cars.map((car, index) => (
                        <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 transform hover:-translate-y-1">
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                                    {car.type}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-end mb-4">
                                    <h3 className="text-xl font-bold text-slate-900">{car.name}</h3>
                                    <span className="text-blue-600 font-bold">{car.price}</span>
                                </div>
                                <Link to={`/cars/${car.id}`} className="w-full py-3 rounded-xl border border-slate-200 text-slate-600 font-medium text-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                                    Book Now <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all text-center group">
                            <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                {React.cloneElement(feature.icon, { className: "w-6 h-6 text-blue-600 group-hover:text-white transition-colors" })}
                            </div>
                            <h4 className="font-bold text-slate-900 text-sm mb-1">{feature.title}</h4>
                            <p className="text-xs text-slate-500">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Info & CTA */}
                <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to hit the road?</h3>
                            <p className="text-slate-300 text-lg mb-6 max-w-xl">
                                Pick your favorite car, complete quick verification, and start driving — no driver required.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-slate-400">
                                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Instant Booking</span>
                                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Zero Security Deposit Options</span>
                            </div>
                        </div>
                        <div className="shrink-0">
                            <Link to="/cars" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg shadow-lg shadow-blue-600/30 transition-all transform hover:scale-105 flex items-center gap-2">
                                Rent a Car <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SelfDriveSection;
