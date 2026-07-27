import React from "react";
import {
    Send,
    Users,
    MessageCircle,
    TrendingUp,
    CheckCircle,
    Clock,
    Zap,
    Bot,
    Play,
    PauseCircle,
    Sparkles,
    AlertTriangle,
    Lightbulb,
    Info,
    Activity,
    Radio,
    UserPlus,
    MessageSquareMore,
} from "lucide-react";

import {
    AreaChart,
    Area,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const cards = [
    {
        title: "Campaigns Sent",
        value: "18,245",
        trend: "18.5%",
        trendType: "up",
        trendLabel: "vs last month",
        icon: Send,
        colorClass: "primary",
    },
    {
        title: "Total Contacts",
        value: "7,980",
        trend: "8.3%",
        trendType: "up",
        trendLabel: "vs last month",
        icon: Users,
        colorClass: "cyan",
    },
    {
        title: "Replies",
        value: "3,146",
        trend: "15.2%",
        trendType: "up",
        trendLabel: "vs last month",
        icon: MessageCircle,
        colorClass: "violet",
    },
    {
        title: "Conversion Rate",
        value: "24.8%",
        trend: "4.3%",
        trendType: "up",
        trendLabel: "vs last week",
        icon: TrendingUp,
        colorClass: "rose",
    },
];

const campaigns = [
    {
        name: "Festival Promotion",
        status: "Completed",
        messages: "5,000",
        date: "27 July 2026",
    },
    {
        name: "Product Launch",
        status: "Running",
        messages: "3,200",
        date: "26 July 2026",
    },
    {
        name: "Welcome Campaign",
        status: "Completed",
        messages: "1,200",
        date: "25 July 2026",
    },
];

const campaignAnalytics = [
    {
        month: "Jan",
        sent: 4000,
        delivered: 3800,
    },
    {
        month: "Feb",
        sent: 5200,
        delivered: 5000,
    },
    {
        month: "Mar",
        sent: 6800,
        delivered: 6500,
    },
    {
        month: "Apr",
        sent: 8200,
        delivered: 7900,
    },
    {
        month: "May",
        sent: 9500,
        delivered: 9200,
    },
];


const engagementAnalytics = [
    {
        week: "Week 1",
        replies: 500
    },
    {
        week: "Week 2",
        replies: 900
    },
    {
        week: "Week 3",
        replies: 1400
    },
    {
        week: "Week 4",
        replies: 2200
    },
];

const automationData = [
    {
        name: "Welcome Messages",
        status: "Active",
        triggered: 2450,
        successRate: "98%",
    },
    {
        name: "Abandoned Cart",
        status: "Active",
        triggered: 860,
        successRate: "91%",
    },
    {
        name: "Order Updates",
        status: "Paused",
        triggered: 520,
        successRate: "95%",
    },
    {
        name: "Feedback Collection",
        status: "Active",
        triggered: 1350,
        successRate: "89%",
    },
];

const aiInsights = [
    {
        type: "success",
        title: "Best Performing Campaign",
        message: "Festival Promotion achieved a 96% delivery rate and 24% conversion."
    },
    {
        type: "warning",
        title: "Delivery Issue",
        message: "Product Launch campaign has a higher-than-normal failure rate."
    },
    {
        type: "info",
        title: "Best Time to Send",
        message: "Your audience is most active between 6 PM and 8 PM."
    },
    {
        type: "tip",
        title: "AI Recommendation",
        message: "Create a follow-up campaign for users who opened but didn't reply."
    }
];

const liveActivities = [
    {
        type: "campaign",
        title: "Festival Promotion launched",
        time: "2 minutes ago",
    },
    {
        type: "contact",
        title: "35 new contacts imported",
        time: "8 minutes ago",
    },
    {
        type: "reply",
        title: "Customer replied to Product Launch",
        time: "15 minutes ago",
    },
    {
        type: "automation",
        title: "Welcome Message automation triggered",
        time: "22 minutes ago",
    },
    {
        type: "delivery",
        title: "4,250 messages delivered successfully",
        time: "30 minutes ago",
    },
];



export default function Dashboard() {
    return (
        <div className="dashboard-view-container" style={{ padding: 0, minHeight: 'auto', background: 'transparent' }}>



            {/* KPI Cards */}
            <div className="dashboard-grid">
                {cards.map((card, index) => {
                    const Icon = card.icon;
                    return (
                        <div key={index} className={`glass-card stat-card glow-${card.colorClass}`}>
                            <div className="stat-card-header">
                                <span className="stat-title">{card.title}</span>
                                <span className={`stat-icon icon-${card.colorClass}`}>
                                    <Icon size={18} strokeWidth={2.5} />
                                </span>
                            </div>
                            <div className="stat-card-body">
                                <h2 className="stat-value">{card.value}</h2>
                                <div className="stat-trend-container">
                                    <span className={`stat-trend ${card.trendType}`}>
                                        {card.trendType === 'up' ? '↗' : '↘'} {card.trend}
                                    </span>
                                    <span className="stat-trend-label">{card.trendLabel}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Analytics Section */}
            <div className="widgets-grid">

                {/* Campaign Performance */}
                <div className="glass-card revenue-overview-widget">
                    <div className="widget-header">
                        <div className="widget-title-area">
                            <h3>Campaign Performance</h3>
                            <p className="widget-subtitle">Delivery and engagement overview</p>
                        </div>
                        <button className="btn-secondary" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>
                            View Reports
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-6">
                        {/* Delivery Rate */}
                        <div className="bg-slate-50/50 rounded-xl p-5 border border-slate-100">
                            <div className="flex justify-between">
                                <p className="font-body text-sm text-gray-500 font-medium">Delivery Rate</p>
                                <CheckCircle size={20} className="text-emerald-500" />
                            </div>
                            <h2 className="font-mono text-3xl font-bold mt-4 text-slate-800">96%</h2>
                            <div className="h-2 bg-gray-200 rounded-full mt-5 overflow-hidden">
                                <div className="h-2 bg-emerald-500 rounded-full" style={{ width: "96%" }}></div>
                            </div>
                        </div>

                        {/* Failed Messages */}
                        <div className="bg-slate-50/50 rounded-xl p-5 border border-slate-100">
                            <div className="flex justify-between">
                                <p className="font-body text-sm text-gray-500 font-medium">Failed Messages</p>
                                <Clock size={20} className="text-amber-500" />
                            </div>
                            <h2 className="font-mono text-3xl font-bold mt-4 text-slate-800">120</h2>
                            <p className="text-xs text-gray-500 mt-4 font-medium">Need attention</p>
                        </div>
                    </div>
                </div>

                {/* Engagement */}
                <div className="glass-card platform-alerts-widget">
                    <div className="widget-header">
                        <div className="widget-title-area">
                            <h3>Engagement</h3>
                        </div>
                    </div>

                    <div className="space-y-6 mt-4">
                        <div>
                            <p className="font-body text-sm text-gray-500 font-medium">Response Rate</p>
                            <h4 className="font-mono text-2xl font-bold mt-1 text-slate-800">72.4%</h4>
                        </div>
                        <div>
                            <p className="font-body text-sm text-gray-500 font-medium">Conversations</p>
                            <h4 className="font-mono text-2xl font-bold mt-1 text-slate-800">12,540</h4>
                        </div>
                        <div>
                            <p className="font-body text-sm text-gray-500 font-medium">Avg Response Time</p>
                            <h4 className="font-mono text-2xl font-bold mt-1 text-slate-800">2m 14s</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Analytics Charts */}

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6" style={{ marginTop: '40px', marginBottom: '40px' }}>


                {/* Campaign Growth Chart */}
                <div className="glass-card">
                    <div className="widget-header">
                        <div className="widget-title-area">
                            <h3>Campaign Growth</h3>
                        </div>
                    </div>

                    <div className="h-[300px] mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={campaignAnalytics}>
                                <defs>
                                    <linearGradient id="colorSent" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6847ba" stopOpacity={0.4}/>
                                        <stop offset="95%" stopColor="#6847ba" stopOpacity={0.0}/>
                                    </linearGradient>
                                    <linearGradient id="colorDelivered" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4}/>
                                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip />
                                <Area type="monotone" dataKey="sent" stroke="#6847ba" fillOpacity={1} fill="url(#colorSent)" strokeWidth={3} />
                                <Area type="monotone" dataKey="delivered" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorDelivered)" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Engagement Chart */}
                <div className="glass-card">
                    <div className="widget-header">
                        <div className="widget-title-area">
                            <h3>Customer Engagement</h3>
                        </div>
                    </div>

                    <div className="h-[300px] mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={engagementAnalytics}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="week" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="replies" fill="var(--color-primary, #6847ba)" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>


            </div>

            {/* Automation Overview */}

            <div className="glass-card">

                <div className="flex justify-between items-center mb-6" style={{ marginBottom: '24px' }}>

                    <div>

                        <h3 className="font-heading text-xl font-bold text-brand-primary">
                            Automation Overview
                        </h3>

                        <p className="font-body text-sm text-gray-500 mt-1">
                            Monitor your automated workflows
                        </p>

                    </div>

                    <Zap className="text-yellow-500" size={28} />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5" style={{ gap: '20px' }}>

                    {automationData.map((item, index) => (

                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
                            style={{ padding: '20px' }}
                        >

                            <div className="flex justify-between items-center">

                                <Bot className="text-brand-primary" size={24} />

                                <span
                                    className={`flex items-center rounded-full text-xs font-semibold ${item.status === "Active"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-yellow-100 text-yellow-700"
                                        }`}
                                    style={{ padding: '4px 12px', gap: '4px' }}
                                >
                                    {item.status === "Active"
                                        ? <Play size={12} />
                                        : <PauseCircle size={12} />
                                    }

                                    {item.status}
                                </span>

                            </div>

                            <h4 className="font-heading font-semibold text-lg" style={{ marginTop: '20px' }}>
                                {item.name}
                            </h4>

                            <div className="space-y-2" style={{ marginTop: '20px' }}>

                                <div className="flex justify-between">

                                    <span className="text-sm text-gray-500">
                                        Triggered
                                    </span>

                                    <span className="font-mono font-bold">
                                        {item.triggered}
                                    </span>

                                </div>

                                <div className="flex justify-between" style={{ marginTop: '8px' }}>

                                    <span className="text-sm text-gray-500">
                                        Success Rate
                                    </span>

                                    <span className="font-mono font-bold text-green-600">
                                        {item.successRate}
                                    </span>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            {/* Live Activity Feed */}

            <div className="glass-card" style={{ marginTop: '40px' }}>

                <div className="flex justify-between items-center mb-6">

                    <div>

                        <h3 className="font-heading text-xl font-bold text-brand-primary">
                            Live Activity Feed
                        </h3>

                        <p className="text-gray-500 mt-1">
                            Real-time updates from your workspace
                        </p>

                    </div>

                    <Activity className="text-red-500" size={28} />

                </div>

                <div className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                    {liveActivities.map((activity, index) => {

                        let Icon = Radio;
                        let color = "text-blue-500";
                        let bg = "bg-blue-50";

                        if (activity.type === "campaign") {
                            Icon = Send;
                            color = "text-purple-600";
                            bg = "bg-purple-50";
                        }

                        if (activity.type === "contact") {
                            Icon = UserPlus;
                            color = "text-green-600";
                            bg = "bg-green-50";
                        }

                        if (activity.type === "reply") {
                            Icon = MessageSquareMore;
                            color = "text-indigo-600";
                            bg = "bg-indigo-50";
                        }

                        if (activity.type === "automation") {
                            Icon = Bot;
                            color = "text-yellow-600";
                            bg = "bg-yellow-50";
                        }

                        if (activity.type === "delivery") {
                            Icon = CheckCircle;
                            color = "text-emerald-600";
                            bg = "bg-emerald-50";
                        }

                        return (

                            <div
                                key={index}
                                className="flex items-center justify-between rounded-xl border border-gray-200 hover:shadow-md transition-all"
                                style={{ padding: '16px' }}
                            >

                                <div className="flex items-center" style={{ gap: '16px' }}>

                                    <div className={`${bg} rounded-full`} style={{ padding: '12px' }}>
                                        <Icon className={color} size={20} />
                                    </div>

                                    <div>

                                        <h4 className="font-medium">
                                            {activity.title}
                                        </h4>

                                        <p className="text-sm text-gray-500" style={{ marginTop: '4px' }}>
                                            {activity.time}
                                        </p>

                                    </div>

                                </div>

                                <span className="text-xs bg-green-100 text-green-700 rounded-full" style={{ padding: '4px 12px' }}>
                                    Live
                                </span>

                            </div>

                        );

                    })}

                </div>

            </div>

            {/* Recent Campaigns */}
            <div className="glass-card" style={{ marginTop: '40px' }}>
                <div className="widget-header">
                    <div className="widget-title-area">
                        <h3>Recent Campaigns</h3>
                    </div>
                    <button className="btn-secondary" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>
                        View All
                    </button>
                </div>

                <div className="table-container mt-4">
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>Campaign</th>
                                <th>Status</th>
                                <th>Messages</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaigns.map((campaign, index) => (
                                <tr key={index}>
                                    <td className="font-medium text-slate-800">{campaign.name}</td>
                                    <td>
                                        <span className={`badge ${campaign.status === "Completed" ? "badge-emerald" : "badge-amber"}`}>
                                            {campaign.status}
                                        </span>
                                    </td>
                                    <td className="mono-text">{campaign.messages}</td>
                                    <td>{campaign.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* AI Insights */}

            <div className="glass-card" style={{ marginTop: '40px' }}>

                <div className="flex justify-between items-center mb-6">

                    <div>

                        <h3 className="font-heading text-xl font-bold text-brand-primary">
                            AI Insights & Recommendations
                        </h3>

                        <p className="text-gray-500 mt-1">
                            Personalized recommendations generated from your campaign performance.
                        </p>

                    </div>

                    <Sparkles className="text-violet-500" size={28} />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ gap: '20px' }}>

                    {aiInsights.map((item, index) => {

                        let Icon = Info;
                        let color = "text-blue-500";
                        let bg = "bg-blue-50";

                        if (item.type === "success") {
                            Icon = CheckCircle;
                            color = "text-green-600";
                            bg = "bg-green-50";
                        }

                        if (item.type === "warning") {
                            Icon = AlertTriangle;
                            color = "text-yellow-600";
                            bg = "bg-yellow-50";
                        }

                        if (item.type === "tip") {
                            Icon = Lightbulb;
                            color = "text-purple-600";
                            bg = "bg-purple-50";
                        }

                        return (

                            <div
                                key={index}
                                className={`${bg} rounded-xl border border-gray-200 hover:shadow-md transition-all`}
                                style={{ padding: '20px' }}
                            >

                                <div className="flex items-center gap-3" style={{ gap: '12px' }}>

                                    <Icon className={color} size={24} />

                                    <h4 className="font-semibold text-lg">
                                        {item.title}
                                    </h4>

                                </div>

                                <p className="text-gray-600 text-sm leading-6" style={{ marginTop: '16px' }}>
                                    {item.message}
                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </div>
    );
}