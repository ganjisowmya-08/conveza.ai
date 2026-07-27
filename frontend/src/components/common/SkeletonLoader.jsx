import React from 'react';

export default function SkeletonLoader({ type = "card", count = 1 }) {
    const skeletons = Array(count).fill(0);

    return (
        <>
            {skeletons.map((_, index) => (
                <div key={index} className="animate-pulse flex space-x-4">
                    {type === "card" && (
                        <div className="bg-slate-200/50 rounded-3xl h-32 w-full"></div>
                    )}
                    
                    {type === "text" && (
                        <div className="flex-1 space-y-4 py-1">
                            <div className="h-4 bg-slate-200/50 rounded w-3/4"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-slate-200/50 rounded"></div>
                                <div className="h-4 bg-slate-200/50 rounded w-5/6"></div>
                            </div>
                        </div>
                    )}

                    {type === "table-row" && (
                        <div className="w-full flex justify-between py-4 border-b border-slate-100">
                            <div className="h-4 bg-slate-200/50 rounded w-1/4"></div>
                            <div className="h-4 bg-slate-200/50 rounded w-1/6"></div>
                            <div className="h-4 bg-slate-200/50 rounded w-1/6"></div>
                            <div className="h-4 bg-slate-200/50 rounded w-1/6"></div>
                        </div>
                    )}

                    {type === "chart" && (
                        <div className="bg-slate-200/50 rounded-3xl h-64 w-full"></div>
                    )}
                </div>
            ))}
        </>
    );
}
