import React from 'react';
import Skeleton from './Skeleton';

const PackageCardSkeleton = () => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-full flex flex-col">
            {/* Image Skeleton */}
            <Skeleton className="h-64 w-full" />

            <div className="p-6 flex flex-col flex-grow">
                {/* Meta info */}
                <div className="flex justify-between items-center mb-4">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-20" />
                </div>

                {/* Title */}
                <Skeleton className="h-8 w-3/4 mb-3" />

                {/* Description */}
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3 mb-6" />

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex flex-col gap-1">
                        <Skeleton className="h-3 w-12" />
                        <Skeleton className="h-6 w-20" />
                    </div>
                    <Skeleton className="h-10 w-28 rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default PackageCardSkeleton;
