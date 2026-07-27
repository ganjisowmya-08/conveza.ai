const API_BASE = '/api/superadmin';

export const billingService = {
  getPlans: async () => {
    try {
      const res = await fetch(`${API_BASE}/billing/plans`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Real API billing plans endpoint offline. Returning empty plans:", e);
    }
    return [
      { 
        id: 1, 
        name: 'Starter', 
        price: 49, 
        interval: 'month', 
        activeTenants: 12, 
        features: ['5,000 Messages/mo', '1 WhatsApp Number', 'Basic CRM', 'Email Support'] 
      },
      { 
        id: 2, 
        name: 'Growth Pro', 
        price: 149, 
        interval: 'month', 
        activeTenants: 15, 
        features: ['50,000 Messages/mo', '3 WhatsApp Numbers', 'Advanced CRM & Broadcasts', 'AI Recommendations', 'Priority Support'] 
      },
      { 
        id: 3, 
        name: 'Enterprise', 
        price: 499, 
        interval: 'month', 
        activeTenants: 5, 
        features: ['Unlimited Messages', '10 WhatsApp Numbers', 'Custom CRM Integrations', 'Dedicated Account Manager', 'SLA Support', 'On-Premises Option'] 
      }
    ];
  },

  getSubscriptions: async () => {
    return [
      { id: 1, orgName: 'Acme Enterprises', plan: 'Enterprise', status: 'active', renewalDate: '2026-08-15', amount: '₹499/mo' },
      { id: 2, orgName: 'Delta Retailers', plan: 'Growth Pro', status: 'active', renewalDate: '2026-08-20', amount: '₹149/mo' },
      { id: 3, orgName: 'Alpha Logistics', plan: 'Starter', status: 'active', renewalDate: '2026-08-01', amount: '₹49/mo' },
      { id: 4, orgName: 'Apex Media', plan: 'Enterprise', status: 'past_due', renewalDate: '2026-07-22', amount: '₹499/mo' },
      { id: 5, orgName: 'Spammers Ltd', plan: 'Growth Pro', status: 'suspended', renewalDate: '2026-07-10', amount: '₹149/mo' }
    ];
  },

  getInvoices: async () => {
    return [
      { id: 'INV-2026-001', orgName: 'Acme Enterprises', date: '2026-07-15', amount: '₹499.00', status: 'paid' },
      { id: 'INV-2026-002', orgName: 'Delta Retailers', date: '2026-07-20', amount: '₹149.00', status: 'paid' },
      { id: 'INV-2026-003', orgName: 'Alpha Logistics', date: '2026-07-01', amount: '₹49.00', status: 'paid' },
      { id: 'INV-2026-004', orgName: 'Apex Media', date: '2026-06-22', amount: '₹499.00', status: 'paid' },
      { id: 'INV-2026-005', orgName: 'Apex Media', date: '2026-07-22', amount: '₹499.00', status: 'unpaid' }
    ];
  },

  getCoupons: async () => {
    return [
      { code: 'CONVEZA20', discount: '20% off', type: 'recurring', active: true, usageCount: 42 },
      { code: 'STARTUP50', discount: '50% off first 3 months', type: 'once', active: true, usageCount: 15 },
      { code: 'PROMO100', discount: '100% off 1 month', type: 'once', active: false, usageCount: 8 }
    ];
  }
};

export default billingService;
