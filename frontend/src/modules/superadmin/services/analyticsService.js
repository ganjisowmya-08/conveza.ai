const API_BASE = '/api/superadmin';

export const analyticsService = {
  getCampaignStats: async () => {
    try {
      const res = await fetch(`${API_BASE}/analytics/campaign-stats`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Real API campaign stats endpoint offline. Returning empty parameters:", e);
    }
    return {
      successRate: "0%",
      readRate: "0%",
      totalSent: "0"
    };
  },

  getAIRecommendations: async () => {
    try {
      const res = await fetch(`${API_BASE}/analytics/ai-recommendations`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Real API AI recommendations endpoint offline. Returning empty list:", e);
    }
    return [];
  }
};

export default analyticsService;
