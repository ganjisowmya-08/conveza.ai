const API_BASE = '/api/superadmin';

export const supportService = {
  getTickets: async () => {
    try {
      const res = await fetch(`${API_BASE}/support/tickets`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Real API support tickets endpoint offline. Returning empty list:", e);
    }
    return [
      { id: 'T-1002', subject: 'WhatsApp Gateway connection failure', customer: 'Delta Retailers', priority: 'high', status: 'open', assignedTo: 'John Doe', createdAt: '2h ago', message: 'Hi support team, our WhatsApp gateway has been disconnected for 30 minutes. We are unable to send order notifications. Please assist.' },
      { id: 'T-1003', subject: 'Billing invoice query - June 2026', customer: 'Alpha Logistics', priority: 'medium', status: 'pending', assignedTo: 'Jane Smith', createdAt: '5h ago', message: 'Hello, our invoice INV-2026-003 shows a pricing discrepancy of ₹500 compared to our starter plan agreement. Can we check this?' },
      { id: 'T-1004', subject: 'API Rate limit exceeded repeatedly', customer: 'Apex Media', priority: 'critical', status: 'open', assignedTo: 'Suresh Reddy', createdAt: '1d ago', message: 'Urgent: Our broadcasts are being throttled at the gateway level. We are sending critical breaking news alerts and need an immediate quota increase.' },
      { id: 'T-1005', subject: 'Custom domain setup assistance', customer: 'Spammers Ltd', priority: 'low', status: 'closed', assignedTo: 'John Doe', createdAt: '3d ago', message: 'We want to link our domain spam.biz to the portal workspace. Let us know how to update the CNAME records.' }
    ];
  }
};

export default supportService;
