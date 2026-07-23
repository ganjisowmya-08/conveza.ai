import React from 'react';

const Topbar = ({ currentTab }) => {
  const getTabTitle = () => {
    switch (currentTab) {
      case 'dashboard': return 'Dashboard Overview';
      case 'organizations': return 'Organizations Management';
      case 'billing': return 'Billing & Subscriptions';
      case 'whatsapp': return 'WhatsApp Accounts';
      case 'crm': return 'Campaigns & Broadcasts';
      case 'ai': return 'AI Recommendation & Insights';
      case 'integrations': return 'Integrations Hub';
      case 'support': return 'Support & Tickets';
      case 'security': return 'Security & Audit Logs';
      case 'settings': return 'System Settings';
      default: return 'Superadmin Dashboard';
    }
  };

  return (
    <header className="topbar-container">
      <div className="topbar-left">
        <h1 className="page-title">{getTabTitle()}</h1>
        <p className="page-subtitle">Real-time system monitoring and management</p>
      </div>

      <div className="topbar-right">
        {/* Status Indicators */}
        <div className="system-statuses">
          <div className="status-item">
            <span className="status-indicator online"></span>
            <span className="status-label">API Gateway</span>
          </div>
          <div className="status-item">
            <span className="status-indicator online"></span>
            <span className="status-label">WhatsApp Server</span>
          </div>
        </div>

        {/* Search */}
        <div className="topbar-search">
          <span className="search-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input type="text" placeholder="Search tenants, tickets, users..." className="search-input" />
        </div>

        {/* Notifications */}
        <button className="topbar-btn notifications-btn">
          <span className="btn-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </span>
          <span className="badge-count">3</span>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
