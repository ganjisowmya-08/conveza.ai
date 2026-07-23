const API_BASE = '/api/superadmin';

export const supportService = {
  getTickets: async () => {
    try {
      const res = await fetch(`${API_BASE}/support/tickets`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Real API support tickets endpoint offline. Returning empty list:", e);
    }
    return [];
  }
};

export default supportService;
