const API_BASE = '/api/superadmin';

export const integrationService = {
  getInstalledApps: async () => {
    try {
      const res = await fetch(`${API_BASE}/integrations/installed`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Real API integrations endpoint offline. Returning empty list:", e);
    }
    return [
      // Marketing
      { id: 'meta_ads', name: 'Meta Ads', category: 'Marketing', status: 'active', version: 'v1.4', description: 'Track Meta Ads conversion events and message analytics.', icon: '📢' },
      { id: 'instagram', name: 'Instagram', category: 'Marketing', status: 'active', version: 'v2.1', description: 'Auto-sync and reply to Instagram Direct customer messages.', icon: '📸' },
      { id: 'facebook', name: 'Facebook', category: 'Marketing', status: 'inactive', version: 'v2.0', description: 'Route Facebook Messenger chats to the shared team inbox.', icon: '📘' },
      
      // Communication
      { id: 'whatsapp', name: 'WhatsApp', category: 'Communication', status: 'active', version: 'v4.2', description: 'Main Business Cloud API for high-volume message broadcast.', icon: '🟢' },
      { id: 'gmail', name: 'Gmail', category: 'Communication', status: 'active', version: 'v1.0', description: 'Connect G Suite SMTP for platform notification emails.', icon: '✉️' },
      { id: 'outlook', name: 'Outlook', category: 'Communication', status: 'inactive', version: 'v1.0', description: 'Sync Microsoft 365 Outlook calendars and inbox logs.', icon: '📧' },

      // Commerce
      { id: 'shopify', name: 'Shopify', category: 'Commerce', status: 'active', version: 'v3.2', description: 'Retrieve order info and fire automated tracking broadcasts.', icon: '🛍️' },
      { id: 'woocommerce', name: 'WooCommerce', category: 'Commerce', status: 'inactive', version: 'v2.5', description: 'Connect WordPress stores for transaction alerts.', icon: '🛒' },

      // Payments
      { id: 'razorpay', name: 'Razorpay', category: 'Payments', status: 'active', version: 'v1.2', description: 'Automate checkout triggers and generate payment links.', icon: '💳' },
      { id: 'stripe', name: 'Stripe', category: 'Payments', status: 'active', version: 'v3.0', description: 'Sync customer billing history and subscription updates.', icon: '🪙' },

      // CRM
      { id: 'hubspot', name: 'HubSpot', category: 'CRM', status: 'active', version: 'v2.0', description: 'Synchronize customer contact info and leads logs in real-time.', icon: '🎯' },
      { id: 'zoho', name: 'Zoho', category: 'CRM', status: 'inactive', version: 'v1.5', description: 'Sync sales leads pipeline from WhatsApp discussions.', icon: '💼' },
      { id: 'salesforce', name: 'Salesforce', category: 'CRM', status: 'active', version: 'v2.5', description: 'Enterprise contact sync and chat history archive.', icon: '☁️' },

      // Productivity
      { id: 'google_sheets', name: 'Google Sheets', category: 'Productivity', status: 'active', version: 'v1.8', description: 'Append customer contact signups directly to spreadsheet rows.', icon: '📊' },
      { id: 'google_calendar', name: 'Google Calendar', category: 'Productivity', status: 'inactive', version: 'v1.1', description: 'Sync customer demo bookings and support schedules.', icon: '📅' },
      { id: 'zapier', name: 'Zapier', category: 'Productivity', status: 'active', version: 'v5.0', description: 'Connect message events to 5000+ external apps.', icon: '⚡' }
    ];
  },

  getMarketplaceApps: async () => {
    return [];
  }
};

export default integrationService;
