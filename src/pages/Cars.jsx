import React from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

const Cars = () => {
    return (
        <PageTransition>
            <div className="pt-20">
                <SEO
                    title="Self-Drive Car Rentals | LuxeTravel"
                    description="Rent premium self-drive cars for your journey. Choose from SUVs, Sedans, and Hatchbacks at affordable rates."
                />
                <div className="bg-slate-900 py-20 px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Self-Drive Fleet</h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">Choose your perfect ride for an unforgettable journey.</p>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cars.map((car) => (
                            <div key={car.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 transform hover:-translate-y-1 border border-slate-100">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={car.image}
                                        alt={car.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                                        {car.type}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-end mb-6">
                                        <h3 className="text-2xl font-bold text-slate-900">{car.name}</h3>
                                        <span className="text-blue-600 font-bold text-lg">{car.price}</span>
                                    </div>
                                    <div className="space-y-2 mb-8">
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <CheckCircle2 size={16} className="text-blue-500" />
                                            <span>{car.fuel}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <CheckCircle2 size={16} className="text-blue-500" />
                                            <span>{car.transmission}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <CheckCircle2 size={16} className="text-blue-500" />
                                            <span>{car.seats}</span>
                                        </div>
                                    </div>
                                    <Link to={`/cars/${car.id}`} className="w-full py-4 rounded-xl bg-slate-900 text-white font-medium text-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                                        View Details <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Cars;
