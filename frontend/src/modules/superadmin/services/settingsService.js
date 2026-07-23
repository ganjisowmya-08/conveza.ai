const API_BASE = '/api/superadmin';

export const settingsService = {
  getSettings: async () => {
    try {
      const res = await fetch(`${API_BASE}/settings`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Real API settings endpoint offline. Returning empty settings:", e);
    }
    return {
      rootDomain: "",
      adminEmail: ""
    };
  }
};

export default settingsService;
