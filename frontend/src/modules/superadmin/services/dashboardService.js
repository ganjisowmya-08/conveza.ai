const API_BASE = '/api/superadmin';

export const dashboardService = {
  getStats: async () => {
    try {
      const res = await fetch(`${API_BASE}/stats`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Real API Gateway stats endpoint offline. Rendering default empty states:", e);
    }
    // Return empty stats ready to be bound to actual live server metrics
    return [
      { id: 'revenue', title: "Total Monthly Revenue", value: "$0", trend: "0%", trendType: "up", colorClass: "primary" },
      { id: 'tenants', title: "Active Tenants", value: "0", trend: "0%", trendType: "up", colorClass: "cyan" },
      { id: 'gateways', title: "Active WA Gateways", value: "0", trend: "0%", trendType: "up", colorClass: "violet" },
      { id: 'latency', title: "Avg Server Latency", value: "-", trend: "0%", trendType: "down", colorClass: "rose" }
    ];
  },

  getRevenueGrowth: async () => {
    try {
      const res = await fetch(`${API_BASE}/revenue-growth`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Real API Gateway revenue growth endpoint offline. Rendering default empty states:", e);
    }
    // Return empty array to represent empty chart state before database binding
    return [];
  },

  getAlerts: async () => {
    try {
      const res = await fetch(`${API_BASE}/alerts`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Real API Gateway alerts endpoint offline. Rendering default empty states:", e);
    }
    // Return empty alert feed
    return [];
  },

  getAuditLogs: async () => {
    try {
      const res = await fetch(`${API_BASE}/audit-logs`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Real API Gateway audit logs endpoint offline. Rendering default empty states:", e);
    }
    // Return empty timeline
    return [];
  }
};

export default dashboardService;
