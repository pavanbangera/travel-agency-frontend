import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import PackageCard from '../components/PackageCard';
import PackageCardSkeleton from '../components/PackageCardSkeleton';
import { preloadImages } from '../utils/imageUtils';
import PageTransition from '../components/PageTransition';
import { Search } from 'lucide-react';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

    useEffect(() => {
        const query = searchParams.get('search');
        if (query !== null) {
            setSearchTerm(query);
        }
    }, [searchParams]);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/packages`);
                setPackages(response.data);

                // Preload images
                const imageUrls = response.data.map(pkg => pkg.images[0]);
                await preloadImages(imageUrls);
            } catch (error) {
                console.error('Error fetching packages:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPackages();
    }, []);

    const filteredPackages = packages.filter(pkg =>
        pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <PageTransition>
            <div className="pt-24 pb-20 min-h-screen bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-serif font-bold text-primary mb-4">Explore Our Destinations</h1>
                        <p className="text-slate-500 max-w-2xl mx-auto mb-8">
                            Find your next adventure among our carefully curated travel packages.
                        </p>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                document.activeElement.blur();
                            }}
                            className="max-w-md mx-auto relative"
                        >
                            <input
                                type="text"
                                placeholder="Search destinations..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                enterKeyHint="search"
                                className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent shadow-sm"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        </form>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {loading ? (
                            // Show 6 skeletons for packages page
                            [...Array(6)].map((_, index) => (
                                <PackageCardSkeleton key={index} />
                            ))
                        ) : (
                            filteredPackages.map(pkg => (
                                <PackageCard key={pkg._id} pkg={pkg} />
                            ))
                        )}
                    </div>

                    {filteredPackages.length === 0 && (
                        <div className="text-center py-20 text-slate-500">
                            No packages found matching your search.
                        </div>
                    )}
                </div>
            </div>
        </PageTransition>
    );
};

export default Packages;
