import React, { useState, useEffect } from 'react';
import analyticsService from '../../services/analyticsService';

const Campaigns = () => {
  const [stats, setStats] = useState({ successRate: '0%', readRate: '0%', totalSent: '0' });
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    const loadCampaignData = async () => {
      const metrics = await analyticsService.getCampaignStats();
      const list = await analyticsService.getCampaigns();
      setStats(metrics);
      setCampaigns(list);
      setLoading(false);
    };
    loadCampaignData();
  }, []);

  const filteredCampaigns = campaigns.filter(c => {
    return filterStatus === 'all' || c.status === filterStatus;
  });

  return (
    <div className="campaigns-view-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {loading ? (
        <p style={{ color: 'var(--text-muted)', padding: '3rem', textAlign: 'center' }}>Loading broadcast analytics...</p>
      ) : (
        <>
          {/* Key Metrics cards */}
          <div className="dashboard-grid">
            <div className="glass-card stat-card glow-cyan" style={{ minHeight: '110px' }}>
              <div className="stat-card-header">
                <span className="stat-title">Total Campaign Broadcasts</span>
                <span className="stat-icon icon-cyan">📤</span>
              </div>
              <div className="stat-card-body" style={{ marginTop: '0.5rem' }}>
                <h2 className="stat-value">{stats.totalSent}</h2>
              </div>
            </div>
            <div className="glass-card stat-card glow-emerald" style={{ minHeight: '110px' }}>
              <div className="stat-card-header">
                <span className="stat-title">Success Rate</span>
                <span className="stat-icon icon-primary" style={{ backgroundColor: 'rgba(16, 185, 129, 0.08)', color: 'var(--accent-emerald)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>📈</span>
              </div>
              <div className="stat-card-body" style={{ marginTop: '0.5rem' }}>
                <h2 className="stat-value">{stats.successRate}</h2>
              </div>
            </div>
            <div className="glass-card stat-card glow-violet" style={{ minHeight: '110px' }}>
              <div className="stat-card-header">
                <span className="stat-title">Read/Open Rate</span>
                <span className="stat-icon icon-violet">👀</span>
              </div>
              <div className="stat-card-body" style={{ marginTop: '0.5rem' }}>
                <h2 className="stat-value">{stats.readRate}</h2>
              </div>
            </div>
          </div>

          {/* Broadcast Logs */}
          <div className="glass-card" style={{ padding: '1.5rem 0 0 0' }}>
            <div style={{ padding: '0 1.5rem 1rem 1.5rem', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem' }}>Global Broadcast Logs</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Real-time marketing campaigns dispatched across all tenants</p>
              </div>
              
              {/* Filter */}
              <div style={{ display: 'flex', gap: '0.35rem', background: 'var(--bg-tertiary)', padding: '0.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                {['all', 'active', 'completed', 'failed'].map(status => (
                  <button
                    key={status}
                    className={`btn-secondary ${filterStatus === status ? 'active' : ''}`}
                    style={{ 
                      padding: '0.35rem 0.7rem', 
                      fontSize: '0.75rem',
                      border: 'none', 
                      borderRadius: 'var(--radius-sm)',
                      background: filterStatus === status ? 'var(--bg-card)' : 'transparent',
                      fontWeight: filterStatus === status ? '600' : '400',
                      color: filterStatus === status ? 'var(--text-primary)' : 'var(--text-secondary)'
                    }}
                    onClick={() => setFilterStatus(status)}
                  >
                    {status.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Campaign Name</th>
                    <th>Tenant Organization</th>
                    <th>Messages Sent</th>
                    <th>Delivery Success</th>
                    <th>Read Rate</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCampaigns.map(camp => (
                    <tr key={camp.id}>
                      <td><code style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>#{camp.id}</code></td>
                      <td><strong>{camp.name}</strong></td>
                      <td>{camp.orgName}</td>
                      <td><code>{camp.sentCount.toLocaleString()}</code></td>
                      <td style={{ color: 'var(--accent-emerald)', fontWeight: '600' }}>{camp.successRate}</td>
                      <td>{camp.readRate}</td>
                      <td style={{ fontSize: '0.85rem' }}>{camp.date}</td>
                      <td>
                        <span className={`badge ${camp.status === 'completed' ? 'badge-emerald' : camp.status === 'active' ? 'badge-cyan' : 'badge-rose'}`}>
                          {camp.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Campaigns;
