import React from 'react';
import { Activity, ShieldCheck, Database, Zap } from 'lucide-react';
import SkeletonLoader from '../../common/SkeletonLoader';

export default function FooterSummary({ data, loading = false }) {
    if (loading) {
        return (
            <div className="flex flex-wrap gap-4 py-6 border-t border-purple-100/50 mt-4">
                <SkeletonLoader count={4} type="text" />
            </div>
        );
    }

    if (!data) return null;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-purple-100/50 mt-4">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Activity size={16} />
                </div>
                <div>
                    <p className="text-xs font-semibold text-slate-400">Server Status</p>
                    <p className="text-sm font-bold text-slate-900">{data.serverStatus}</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Database size={16} />
                </div>
                <div>
                    <p className="text-xs font-semibold text-slate-400">API Usage</p>
                    <p className="text-sm font-bold text-slate-900">{data.apiUsage}</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Zap size={16} />
                </div>
                <div>
                    <p className="text-xs font-semibold text-slate-400">Credits</p>
                    <p className="text-sm font-bold text-slate-900">{data.creditsRemaining}</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#6847BA] flex items-center justify-center shrink-0">
                    <ShieldCheck size={16} />
                </div>
                <div>
                    <p className="text-xs font-semibold text-slate-400">Subscription</p>
                    <p className="text-sm font-bold text-slate-900">{data.subscription}</p>
                </div>
            </div>
        </div>
    );
}
