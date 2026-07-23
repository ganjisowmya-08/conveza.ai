const API_BASE = '/api/superadmin';

export const billingService = {
  getPlans: async () => {
    try {
      const res = await fetch(`${API_BASE}/billing/plans`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Real API billing plans endpoint offline. Returning empty plans:", e);
    }
    return [];
  }
};

export default billingService;
