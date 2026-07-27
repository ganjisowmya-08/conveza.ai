export const statsData = [
    {
        id: "total_contacts",
        title: "Total Contacts",
        value: "15,640",
        growth: "+8.2%",
        trend: "up",
        subtitle: "Compared to last month",
        icon: "Users",
    },
    {
        id: "campaigns_sent",
        title: "Campaigns Sent",
        value: "148",
        growth: "+12%",
        trend: "up",
        subtitle: "Compared to last month",
        icon: "Send",
    },
    {
        id: "messages_delivered",
        title: "Messages Delivered",
        value: "252K",
        growth: "98.6%",
        trend: "up",
        subtitle: "Delivery Success",
        icon: "MessageSquare",
    },
    {
        id: "reply_rate",
        title: "Reply Rate",
        value: "34%",
        growth: "+4%",
        trend: "up",
        subtitle: "Compared to last month",
        icon: "TrendingUp",
    },
];

export const campaignPerformanceData = [
    { name: "Mon", messages: 1000, replies: 300 },
    { name: "Tue", messages: 1800, replies: 600 },
    { name: "Wed", messages: 2600, replies: 800 },
    { name: "Thu", messages: 2000, replies: 500 },
    { name: "Fri", messages: 3000, replies: 700 },
    { name: "Sat", messages: 3800, replies: 900 },
    { name: "Sun", messages: 4500, replies: 1200 },
];

export const monthlyTargetData = {
    target: 100000,
    achieved: 72000,
    performanceGrowth: "+12.5%",
};

export const recentCampaignsData = [
    {
        id: 1,
        name: "Diwali Mega Sale",
        subtext: "Campaign #1",
        status: "running",
        sent: "12,500",
        delivered: "98%",
        replies: "34%",
    },
    {
        id: 2,
        name: "Flash Sale Alert",
        subtext: "Campaign #2",
        status: "completed",
        sent: "8,400",
        delivered: "99%",
        replies: "41%",
    },
    {
        id: 3,
        name: "Weekend Offer",
        subtext: "Campaign #3",
        status: "scheduled",
        sent: "-",
        delivered: "-",
        replies: "-",
    },
    {
        id: 4,
        name: "Inactive User Reactivation",
        subtext: "Campaign #4",
        status: "completed",
        sent: "5,000",
        delivered: "95%",
        replies: "12%",
    },
];

export const notificationsData = [
    {
        id: 1,
        type: "success",
        title: "Campaign Completed",
        message: "Diwali campaign finished successfully.",
        time: "5m ago",
    },
    {
        id: 2,
        type: "info",
        title: "Template Approved",
        message: "Festival template approved by Meta.",
        time: "20m ago",
    },
    {
        id: 3,
        type: "system",
        title: "Payment Successful",
        message: "Subscription renewed.",
        time: "1h ago",
    },
    {
        id: 4,
        type: "warning",
        title: "Low Credit",
        message: "Credits below 20%.",
        time: "Yesterday",
    },
];

export const quickActionsData = [
    { id: "create_campaign", title: "Create Campaign", icon: "Plus", color: "bg-[#6847BA]" },
    { id: "import_contacts", title: "Import Contacts", icon: "Users", color: "bg-blue-500" },
    { id: "templates", title: "Templates", icon: "FileText", color: "bg-emerald-500" },
    { id: "analytics", title: "Analytics", icon: "BarChart3", color: "bg-amber-500" },
];

export const conversationActivityData = [
    { id: 1, time: "10:42 AM", title: "Customer Replied", desc: "User responded to Diwali Campaign", icon: "MessageSquare", type: "user" },
    { id: 2, time: "10:45 AM", title: "AI Agent Responded", desc: "Sent discount code automatically", icon: "Bot", type: "ai" },
    { id: 3, time: "11:00 AM", title: "Agent Assigned", desc: "Hema joined the conversation", icon: "UserCircle", type: "agent" },
    { id: 4, time: "11:15 AM", title: "Conversation Closed", desc: "Marked as resolved", icon: "CheckCircle", type: "system" },
];

export const deviceAnalyticsData = [
    { name: "Mobile", value: 75, color: "#6847BA" },
    { name: "Desktop", value: 20, color: "#FCD144" },
    { name: "Tablet", value: 5, color: "#8B5CF6" },
];

export const topPerformingCampaignsData = [
    { name: "Diwali Offer", openRate: 85, replyRate: 42 },
    { name: "Flash Sale", openRate: 72, replyRate: 35 },
    { name: "Winback", openRate: 65, replyRate: 28 },
    { name: "Newsletter", openRate: 50, replyRate: 15 },
];

export const aiInsightsData = [
    {
        id: 1,
        title: "Best Time to Send",
        description: "Your audience is most active between 6 PM and 8 PM on weekdays.",
        icon: "Clock",
    },
    {
        id: 2,
        title: "Audience Segment",
        description: "250 contacts are highly likely to convert based on previous replies.",
        icon: "Target",
    },
];

export const recentCustomersData = [
    { id: 1, name: "Rahul Sharma", status: "Active", score: 95, ltv: "₹12,500" },
    { id: 2, name: "Priya Patel", status: "Active", score: 88, ltv: "₹8,200" },
    { id: 3, name: "Amit Kumar", status: "Inactive", score: 45, ltv: "₹3,400" },
    { id: 4, name: "Neha Singh", status: "Active", score: 92, ltv: "₹15,000" },
];

export const footerSummaryData = {
    apiUsage: "45K / 100K calls",
    creditsRemaining: "55,000",
    subscription: "Pro Plan",
    serverStatus: "99.99% Uptime",
};
