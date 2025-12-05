import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { ArrowLeft, CheckCircle2, ShieldCheck, Fuel, Gauge, Armchair } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

const CarDetail = () => {
    const { id } = useParams();
    const car = cars.find(c => c.id === id);

    if (!car) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Car Not Found</h2>
                    <Link to="/cars" className="text-blue-600 hover:underline">Back to Fleet</Link>
                </div>
            </div>
        );
    }

    return (
        <PageTransition>
            <div className="pt-20 bg-slate-50 min-h-screen">
                <SEO
                    title={`${car.name} Rental | LuxeTravel`}
                    description={`Rent ${car.name} - ${car.description}`}
                />

                <div className="max-w-7xl mx-auto px-6 py-12">
                    <Link to="/cars" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8 transition-colors">
                        <ArrowLeft size={20} /> Back to Fleet
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Image Section */}
                        <div className="space-y-6">
                            <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
                                <img src={car.image} alt={car.name} className="w-full h-96 object-cover" />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-white p-4 rounded-2xl shadow-sm text-center">
                                    <Fuel className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                                    <span className="text-sm font-medium text-slate-600">{car.fuel}</span>
                                </div>
                                <div className="bg-white p-4 rounded-2xl shadow-sm text-center">
                                    <Gauge className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                                    <span className="text-sm font-medium text-slate-600">{car.transmission}</span>
                                </div>
                                <div className="bg-white p-4 rounded-2xl shadow-sm text-center">
                                    <Armchair className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                                    <span className="text-sm font-medium text-slate-600">{car.seats}</span>
                                </div>
                            </div>
                        </div>

                        {/* Details Section */}
                        <div>
                            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                                            {car.type}
                                        </span>
                                        <h1 className="text-4xl font-serif text-slate-900">{car.name}</h1>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-bold text-blue-600">{car.price}</div>
                                        <div className="text-sm text-slate-400">per day</div>
                                    </div>
                                </div>

                                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                                    {car.description}
                                </p>

                                <div className="space-y-6 mb-10">
                                    <h3 className="font-bold text-slate-900 text-lg">Key Features</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {car.features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3 text-slate-600">
                                                <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
                                    <div className="flex items-start gap-4">
                                        <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Zero Security Deposit</h4>
                                            <p className="text-sm text-slate-500">Available for verified profiles. Drive with peace of mind.</p>
                                        </div>
                                    </div>
                                </div>

                                <Link to="/contact" className="block w-full py-4 bg-slate-900 hover:bg-blue-600 text-white text-center rounded-xl font-bold text-lg transition-colors shadow-lg">
                                    Book This Car
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default CarDetail;
