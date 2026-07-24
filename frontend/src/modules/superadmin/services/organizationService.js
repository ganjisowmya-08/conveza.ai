const API_BASE = '/api/superadmin';

export const organizationService = {
  getOrganizations: async () => {
    try {
      const res = await fetch(`${API_BASE}/organizations`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Real API Gateway organizations endpoint offline. Returning fallback dataset:", e);
    }
    // Return rich structured fallback for developer inspection
    return [
      {
        id: 1,
        name: 'Acme Enterprises',
        domain: 'acme.conveza.ai',
        plan: 'Enterprise',
        status: 'active',
        dbHost: 'db-prd-01.local',
        limit: 500000,
        adminName: 'Alice Johnson',
        adminEmail: 'alice@acme.com',
        teamMembers: 18,
        whatsappStatus: 'connected',
        whatsappNumbers: [
          { number: '+91 98765 43210', name: 'Primary Support', status: 'connected' },
          { number: '+91 98765 43211', name: 'Marketing Alerts', status: 'connected' },
          { number: '+91 98765 43212', name: 'Sales Pipeline', status: 'connected' },
          { number: '+91 98765 43213', name: 'OTP Auth Gateway', status: 'connected' }
        ],
        totalCustomers: 24200,
        totalBroadcasts: 142,
        customerTags: { VIP: 1250, Leads: 8200, Active: 14200, Inactive: 550, Repetitive: 4500 },
        broadcastStats: { sent: 1200000, readRate: '86.4%', successRate: '99.5%' }
      },
      {
        id: 2,
        name: 'Delta Retailers',
        domain: 'delta.conveza.ai',
        plan: 'Growth Pro',
        status: 'active',
        dbHost: 'db-prd-02.local',
        limit: 100000,
        adminName: 'Bob Smith',
        adminEmail: 'bob@delta.io',
        teamMembers: 6,
        whatsappStatus: 'connected',
        whatsappNumbers: [
          { number: '+91 99999 88888', name: 'Support line 1', status: 'connected' },
          { number: '+91 99999 77777', name: 'Delivery Alerts', status: 'connected' }
        ],
        totalCustomers: 8500,
        totalBroadcasts: 48,
        customerTags: { VIP: 340, Leads: 2500, Active: 5200, Inactive: 460, Repetitive: 1800 },
        broadcastStats: { sent: 320000, readRate: '81.2%', successRate: '99.1%' }
      },
      {
        id: 3,
        name: 'Alpha Logistics',
        domain: 'alpha.conveza.ai',
        plan: 'Starter',
        status: 'active',
        dbHost: 'db-prd-01.local',
        limit: 50000,
        adminName: 'Charlie Brown',
        adminEmail: 'charlie@alpha.com',
        teamMembers: 2,
        whatsappStatus: 'warning',
        whatsappNumbers: [
          { number: '+91 95555 44444', name: 'Main Line', status: 'warning' }
        ],
        totalCustomers: 1200,
        totalBroadcasts: 12,
        customerTags: { VIP: 45, Leads: 450, Active: 680, Inactive: 25, Repetitive: 120 },
        broadcastStats: { sent: 45000, readRate: '78.5%', successRate: '98.0%' }
      },
      {
        id: 4,
        name: 'Apex Media',
        domain: 'apexmedia.net',
        plan: 'Enterprise',
        status: 'warning',
        dbHost: 'db-prd-03.local',
        limit: 500000,
        adminName: 'David Lee',
        adminEmail: 'david@apexmedia.net',
        teamMembers: 12,
        whatsappStatus: 'warning',
        whatsappNumbers: [
          { number: '+1 202 555 0143', name: 'North America Broadcast', status: 'connected' },
          { number: '+1 202 555 0144', name: 'Europe Line', status: 'warning' },
          { number: '+1 202 555 0145', name: 'Support', status: 'connected' }
        ],
        totalCustomers: 18200,
        totalBroadcasts: 96,
        customerTags: { VIP: 980, Leads: 5400, Active: 11200, Inactive: 620, Repetitive: 3100 },
        broadcastStats: { sent: 780000, readRate: '84.1%', successRate: '98.7%' }
      },
      {
        id: 5,
        name: 'Spammers Ltd',
        domain: 'spam.biz',
        plan: 'Growth Pro',
        status: 'suspended',
        dbHost: 'db-prd-02.local',
        limit: 100000,
        adminName: 'Eve Miller',
        adminEmail: 'eve@spam.biz',
        teamMembers: 4,
        whatsappStatus: 'disconnected',
        whatsappNumbers: [
          { number: '+91 90000 11111', name: 'Broadcast Line', status: 'disconnected' }
        ],
        totalCustomers: 3400,
        totalBroadcasts: 4,
        customerTags: { VIP: 12, Leads: 1800, Active: 1200, Inactive: 388, Repetitive: 95 },
        broadcastStats: { sent: 12000, readRate: '45.0%', successRate: '88.2%' }
      }
    ];
  }
};

export default organizationService;
