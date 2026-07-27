import React, { useState, useEffect } from 'react';
import dashboardService from '../../services/dashboardService';

const AuditLogs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadLogs = async () => {
      const activity = await dashboardService.getAuditLogs();
      setLogs(activity);
      setLoading(false);
    };
    loadLogs();
  }, []);

  const handleExportLogs = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(logs, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `superadmin_audit_logs_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const filteredLogs = logs.filter(log => {
    return log.action.toLowerCase().includes(search.toLowerCase()) || 
           log.user.toLowerCase().includes(search.toLowerCase()) ||
           log.ip.includes(search);
  });

  return (
    <div className="auditlogs-view-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Control tab */}
      <div className="glass-card" style={{ padding: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem' }}>Security & Administration Audit Trail</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Historical logs of logins, settings changes, and gateway re-routes</p>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="topbar-search" style={{ margin: '0' }}>
              <span className="search-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input 
                type="text" 
                placeholder="Search audit trail..." 
                className="search-input" 
                style={{ width: '220px', paddingLeft: '2.2rem' }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            <button className="btn-secondary" onClick={handleExportLogs}>📤 Export JSON</button>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="glass-card" style={{ padding: '0' }}>
        {loading ? (
          <p style={{ color: 'var(--text-muted)', padding: '3rem', textAlign: 'center' }}>Loading audit logs...</p>
        ) : filteredLogs.length === 0 ? (
          <div style={{ padding: '4rem 2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🛡️</span>
            <h3>No audit records match search</h3>
            <p style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>Adjust search string to show logs.</p>
          </div>
        ) : (
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Log ID</th>
                  <th>Action Event</th>
                  <th>Performed By</th>
                  <th>IP Address</th>
                  <th>Timestamp</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map(log => (
                  <tr key={log.id}>
                    <td><code style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>#LOG-0{log.id}</code></td>
                    <td><strong>{log.action}</strong></td>
                    <td><code>{log.user}</code></td>
                    <td><code>{log.ip}</code></td>
                    <td>{log.time}</td>
                    <td>
                      <span className="badge badge-emerald">SUCCESS</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuditLogs;
