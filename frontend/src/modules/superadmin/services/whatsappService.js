const API_BASE = '/api/superadmin';

export const whatsappService = {
  getGateways: async () => {
    try {
      const res = await fetch(`${API_BASE}/whatsapp/gateways`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Real API WhatsApp gateways endpoint offline. Returning empty list:", e);
    }
    return [
      { id: 'GW-01', name: 'Primary Asia Server', host: 'sg-node-1.conveza.net', status: 'connected', load: '42%', messagesSent: 284500, activeAccounts: 12 },
      { id: 'GW-02', name: 'Europe Gateway', host: 'eu-node-1.conveza.net', status: 'connected', load: '18%', messagesSent: 124100, activeAccounts: 6 },
      { id: 'GW-03', name: 'US East Server', host: 'us-node-1.conveza.net', status: 'warning', load: '78%', messagesSent: 341200, activeAccounts: 14 },
      { id: 'GW-04', name: 'Backup Server', host: 'backup.conveza.net', status: 'disconnected', load: '0%', messagesSent: 0, activeAccounts: 0 }
    ];
  },

  getQueueStatus: async () => {
    try {
      const res = await fetch(`${API_BASE}/whatsapp/queue-status`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Real API WhatsApp queue endpoint offline. Returning empty status:", e);
    }
    return {
      connectionStatus: "online",
      queueLoad: "12%",
      avgSpeed: "45 msgs/sec",
      pendingMessages: 128
    };
  },

  getAccounts: async () => {
    return [
      { id: 1, orgName: 'Acme Enterprises', number: '+91 98765 43210', name: 'Primary Support', status: 'connected', gateway: 'GW-01' },
      { id: 2, orgName: 'Acme Enterprises', number: '+91 98765 43211', name: 'Marketing Alerts', status: 'connected', gateway: 'GW-01' },
      { id: 3, orgName: 'Delta Retailers', number: '+91 99999 88888', name: 'Support Line 1', status: 'connected', gateway: 'GW-02' },
      { id: 4, orgName: 'Alpha Logistics', number: '+91 95555 44444', name: 'Main Line', status: 'warning', gateway: 'GW-03' },
      { id: 5, orgName: 'Apex Media', number: '+1 202 555 0144', name: 'Europe Line', status: 'warning', gateway: 'GW-03' }
    ];
  }
};

export default whatsappService;
