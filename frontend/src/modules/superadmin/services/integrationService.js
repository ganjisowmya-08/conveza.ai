const API_BASE = '/api/superadmin';

export const integrationService = {
  getInstalledApps: async () => {
    try {
      const res = await fetch(`${API_BASE}/integrations/installed`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Real API integrations endpoint offline. Returning empty list:", e);
    }
    return [];
  }
};

export default integrationService;
