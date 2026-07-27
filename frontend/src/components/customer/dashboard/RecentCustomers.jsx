import React from 'react';
import SkeletonLoader from '../../common/SkeletonLoader';
import EmptyState from '../../common/EmptyState';

export default function RecentCustomers({ data = [], loading = false }) {
    if (loading) {
        return (
            <div className="bg-white rounded-3xl border border-purple-100/50 p-6 shadow-sm h-full">
                <SkeletonLoader count={1} type="text" />
                <div className="mt-8 space-y-4">
                    <SkeletonLoader count={4} type="table-row" />
                </div>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="h-full">
                <EmptyState 
                    icon="Users" 
                    title="No Recent Customers" 
                    description="Customer interactions will appear here."
                />
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] h-full flex flex-col group transition-all hover:shadow-md">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-lg font-bold text-slate-900">Recent Customers</h2>
                    <p className="text-sm text-slate-500 font-medium">Latest customer interactions</p>
                </div>
                <button className="text-sm font-bold text-[#6847BA] hover:text-[#5839a3] transition-colors">
                    View All
                </button>
            </div>

            <div className="space-y-4 flex-1">
                {data.map((customer) => {
                    const initials = customer.name.split(' ').map(n => n[0]).join('');
                    const isActive = customer.status === 'Active';

                    return (
                        <div key={customer.id} className="flex items-center justify-between group/row hover:bg-slate-50 p-2 -mx-2 rounded-xl transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6847BA] font-bold flex items-center justify-center">
                                        {initials}
                                    </div>
                                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${isActive ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">{customer.name}</p>
                                    <p className="text-xs font-semibold text-slate-400">Score: {customer.score}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-bold text-slate-900">{customer.ltv}</p>
                                <p className="text-xs font-semibold text-slate-400">LTV</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
