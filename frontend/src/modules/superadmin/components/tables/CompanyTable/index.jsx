import React, { useState, useEffect } from 'react';
import organizationService from '../../../services/organizationService';

const CompanyTable = ({ setCurrentTab }) => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrgs = async () => {
      const result = await organizationService.getOrganizations();
      setCompanies(result);
      setLoading(false);
    };
    fetchOrgs();
  }, []);

  return (
    <div className="glass-card company-table-widget">
      <div className="widget-header">
        <div className="widget-title-area">
          <h3>Active Organizations</h3>
          <p className="widget-subtitle">Tenant subscription levels and WhatsApp Gateway usage metrics</p>
        </div>
        <button className="btn-primary" onClick={() => setCurrentTab && setCurrentTab('organizations')}>Add Organization</button>
      </div>

      {loading ? (
        <p style={{ color: 'var(--text-muted)', margin: '2rem 0', textAlign: 'center' }}>Loading organizations...</p>
      ) : companies.length === 0 ? (
        <div style={{ padding: '3rem 1.5rem', textAlign: 'center', color: 'var(--text-muted)', border: '1px dashed var(--border-medium)', borderRadius: 'var(--radius-md)', margin: '1rem 0' }}>
          <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>🏢</span>
          <strong>No active organizations found</strong>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Add a tenant to start monitoring usage stats and limit controls.</p>
        </div>
      ) : (
        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Organization</th>
                <th>Plan</th>
                <th>Status</th>
                <th>WA Gateways</th>
                <th>Resource Limit</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {companies.map(company => (
                <tr key={company.id}>
                  <td>
                    <div 
                      className="company-info-cell" 
                      style={{ cursor: 'pointer' }}
                      title="Click to view tenant details"
                      onClick={() => setCurrentTab && setCurrentTab('organizations')}
                    >
                      <span className="company-logo-avatar">{company.name.charAt(0)}</span>
                      <div>
                        <div className="company-name-text" style={{ fontWeight: '600' }}>{company.name}</div>
                        <div className="company-domain-text">{company.domain}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`badge ${company.plan === 'Enterprise' ? 'badge-indigo' : company.plan === 'Growth Pro' ? 'badge-cyan' : 'badge-amber'}`}>
                      {company.plan}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${company.status === 'active' ? 'badge-emerald' : company.status === 'warning' ? 'badge-amber' : 'badge-rose'}`}>
                      {company.status.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    <div className="wa-count-cell" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-muted)' }}>
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                      <span>{company.waAccounts} Active</span>
                    </div>
                  </td>
                  <td>
                    <div className="usage-progress-container">
                      <div className="usage-progress-header">
                        <span>{company.usage}% limit used</span>
                      </div>
                      <div className="progress-bar-bg">
                        <div
                          className={`progress-bar-fill ${company.usage > 90 ? 'danger' : company.usage > 75 ? 'warning' : 'success'}`}
                          style={{ width: `${company.usage}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button className="action-icon-btn" title="Edit Organization" onClick={() => setCurrentTab && setCurrentTab('organizations')}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                      <button className="action-icon-btn" title="View Usage Insights" onClick={() => setCurrentTab && setCurrentTab('organizations')}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="20" x2="18" y2="10" />
                          <line x1="12" y1="20" x2="12" y2="4" />
                          <line x1="6" y1="20" x2="6" y2="14" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CompanyTable;
