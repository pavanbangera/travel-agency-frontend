import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookingForm from '../components/BookingForm';
import Skeleton from '../components/Skeleton';
import { preloadImages } from '../utils/imageUtils';
import PageTransition from '../components/PageTransition';
import { Clock, MapPin, CheckCircle } from 'lucide-react';

const PackageDetail = () => {
    const { id } = useParams();
    const [pkg, setPkg] = useState(null);

    useEffect(() => {
        const fetchPackage = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/packages/${id}`);
                setPkg(response.data);

                // Preload images if available
                if (response.data.images && response.data.images.length > 0) {
                    await preloadImages(response.data.images);
                }
            } catch (error) {
                console.error('Error fetching package:', error);
            }
        };

        fetchPackage();
    }, [id]);

    if (!pkg) {
        return (
            <div className="pt-24 pb-20 min-h-screen bg-slate-50">
                {/* Hero Skeleton */}
                <div className="h-[50vh] w-full relative mb-12 bg-slate-200 animate-pulse">
                    <div className="absolute inset-0 flex items-end">
                        <div className="container mx-auto px-6 pb-12">
                            <Skeleton className="h-6 w-48 mb-4 bg-slate-300" />
                            <Skeleton className="h-12 w-3/4 mb-6 bg-slate-300" />
                            <div className="flex gap-6">
                                <Skeleton className="h-6 w-32 bg-slate-300" />
                                <Skeleton className="h-6 w-32 bg-slate-300" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <div className="space-y-4">
                                <Skeleton className="h-8 w-48" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-2/3" />
                            </div>
                            <div className="space-y-4">
                                <Skeleton className="h-8 w-48" />
                                <Skeleton className="h-20 w-full" />
                                <Skeleton className="h-20 w-full" />
                            </div>
                        </div>
                        <div className="lg:col-span-1">
                            <Skeleton className="h-96 w-full rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <PageTransition>
            <div className="pt-24 pb-20 min-h-screen bg-slate-50">
                {/* Hero Image */}
                <div className="h-[50vh] w-full relative mb-12">
                    <img
                        src={pkg.images[0]}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-end">
                        <div className="container mx-auto px-6 pb-12 text-white">
                            <div className="flex items-center gap-2 text-accent-hover mb-2 font-medium">
                                <MapPin size={20} />
                                <span>{pkg.destination}</span>
                            </div>
                            <h1 className="text-5xl font-serif font-bold mb-4">{pkg.title}</h1>
                            <div className="flex items-center gap-6 text-lg">
                                <div className="flex items-center gap-2">
                                    <Clock size={20} />
                                    <span>{pkg.duration}</span>
                                </div>
                                <div className="font-bold text-2xl">
                                    ₹{pkg.price} <span className="text-sm font-normal opacity-80">/ person</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <section>
                                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">Overview</h2>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {pkg.description}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-serif font-bold mb-6 text-primary">Itinerary</h2>
                                <div className="space-y-8 border-l-2 border-slate-200 pl-8 ml-4">
                                    {(pkg.itinerary || []).map((item) => (
                                        <div key={item.day} className="relative">
                                            <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-accent border-4 border-white shadow-sm"></div>
                                            <h3 className="text-lg font-bold text-primary mb-2">Day {item.day}: {item.title}</h3>
                                            <p className="text-slate-600">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-serif font-bold mb-6 text-primary">What's Included</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {(pkg.inclusions || []).map((inc, index) => (
                                        <div key={index} className="flex items-center gap-3 text-slate-600">
                                            <CheckCircle size={20} className="text-green-500 shrink-0" />
                                            <span>{inc}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-28">
                                <BookingForm packageId={pkg._id} packageTitle={pkg.title} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default PackageDetail;
