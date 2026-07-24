import React, { useState, useEffect } from 'react';
import StatCard from '../../components/cards/StatCard';
import RevenueOverview from '../../components/widgets/RevenueOverview';
import PlatformAlerts from '../../components/widgets/PlatformAlerts';
import CompanyTable from '../../components/tables/CompanyTable';
import RecentActivity from '../../components/widgets/RecentActivity';
import dashboardService from '../../services/dashboardService';

const Dashboard = ({ setCurrentTab }) => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const data = await dashboardService.getStats();
      setStats(data);
      setLoading(false);
    };
    fetchStats();
  }, []);

  const getIconForStat = (id) => {
    switch (id) {
      case 'revenue':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        );
      case 'tenants':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
            <line x1="9" y1="22" x2="9" y2="16" />
            <line x1="15" y1="22" x2="15" y2="16" />
            <line x1="9" y1="16" x2="15" y2="16" />
            <path d="M9 8h6M9 12h6" />
          </svg>
        );
      case 'gateways':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        );
      case 'latency':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-view-container">
      {/* 4 Stat Cards */}
      <div className="dashboard-grid">
        {loading ? (
          // Skeleton Loader
          [1, 2, 3, 4].map(n => (
            <div key={n} className="glass-card stat-card" style={{ height: '140px', opacity: 0.6, animation: 'pulse 1.5s infinite' }}>
              <div style={{ width: '60%', height: '15px', background: 'var(--border-light)', borderRadius: '4px' }}></div>
              <div style={{ width: '40%', height: '35px', background: 'var(--border-light)', borderRadius: '4px', marginTop: '1rem' }}></div>
            </div>
          ))
        ) : (
          stats.map(stat => (
            <StatCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              trend={stat.trend}
              trendType={stat.trendType}
              icon={getIconForStat(stat.id)}
              colorClass={stat.colorClass}
              onClick={() => {
                if (setCurrentTab) {
                  if (stat.id === 'revenue') setCurrentTab('billing');
                  else if (stat.id === 'tenants') setCurrentTab('organizations');
                  else if (stat.id === 'gateways') setCurrentTab('whatsapp');
                  else if (stat.id === 'latency') setCurrentTab('settings');
                }
              }}
            />
          ))
        )}
      </div>

      {/* Grid of Chart and Alerts */}
      <div className="widgets-grid">
        <RevenueOverview />
        <PlatformAlerts />
      </div>

      {/* Bottom Row - Table and Audit Log */}
      <div className="widgets-grid">
        <CompanyTable setCurrentTab={setCurrentTab} />
        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;
