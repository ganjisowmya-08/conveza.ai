export const COLORS = {
    primary: "#6847BA",
    secondary: "#8B5CF6",
    accent: "#FCD144",
    success: "#10B981", // Emerald 500
    warning: "#F59E0B", // Amber 500
    danger: "#EF4444",  // Red 500
    info: "#3B82F6",    // Blue 500
    background: "#F8FAFC",
    border: "#ECE7FA",
    textPrimary: "#1F2937",
    textSecondary: "#64748B",
};

export const STATUS_COLORS = {
    running: {
        bg: "bg-emerald-100",
        text: "text-emerald-700",
        dot: "bg-emerald-500",
        label: "Running",
    },
    scheduled: {
        bg: "bg-amber-100",
        text: "text-amber-700",
        dot: "bg-amber-500",
        label: "Scheduled",
    },
    completed: {
        bg: "bg-blue-100",
        text: "text-blue-700",
        dot: "bg-blue-500",
        label: "Completed",
    },
    paused: {
        bg: "bg-slate-100",
        text: "text-slate-700",
        dot: "bg-slate-500",
        label: "Paused",
    },
    failed: {
        bg: "bg-rose-100",
        text: "text-rose-700",
        dot: "bg-rose-500",
        label: "Failed",
    },
};

export const NOTIFICATION_TYPES = {
    success: { icon: "CheckCircle", color: "text-emerald-500", bg: "bg-emerald-50" },
    warning: { icon: "AlertTriangle", color: "text-amber-500", bg: "bg-amber-50" },
    error: { icon: "XCircle", color: "text-rose-500", bg: "bg-rose-50" },
    info: { icon: "Info", color: "text-blue-500", bg: "bg-blue-50" },
    system: { icon: "Settings", color: "text-slate-500", bg: "bg-slate-50" },
};
