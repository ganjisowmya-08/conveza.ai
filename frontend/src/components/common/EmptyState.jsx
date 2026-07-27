import React from 'react';
import * as LucideIcons from 'lucide-react';

export default function EmptyState({ 
    icon = "Inbox", 
    title = "No data available", 
    description = "There is currently no data to display in this section.",
    actionText,
    onAction
}) {
    const IconComponent = LucideIcons[icon] || LucideIcons.Inbox;

    return (
        <div className="flex flex-col items-center justify-center p-8 text-center bg-slate-50/50 rounded-3xl border border-dashed border-slate-200">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                <IconComponent className="text-slate-400" size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-slate-800 font-semibold mb-2">{title}</h3>
            <p className="text-slate-500 text-sm max-w-sm mb-6">{description}</p>
            
            {actionText && onAction && (
                <button 
                    onClick={onAction}
                    className="px-5 py-2.5 bg-white text-[#6847BA] font-semibold text-sm rounded-xl border border-purple-100 hover:bg-purple-50 transition-colors shadow-sm"
                >
                    {actionText}
                </button>
            )}
        </div>
    );
}
