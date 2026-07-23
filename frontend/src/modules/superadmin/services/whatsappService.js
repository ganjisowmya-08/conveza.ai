const API_BASE = '/api/superadmin';

export const whatsappService = {
  getGateways: async () => {
    try {
      const res = await fetch(`${API_BASE}/whatsapp/gateways`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Real API WhatsApp gateways endpoint offline. Returning empty list:", e);
    }
    return [];
  },

  getQueueStatus: async () => {
    try {
      const res = await fetch(`${API_BASE}/whatsapp/queue-status`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Real API WhatsApp queue endpoint offline. Returning empty status:", e);
    }
    return {
      connectionStatus: "offline",
      queueLoad: "0%"
    };
  }
};

export default whatsappService;
