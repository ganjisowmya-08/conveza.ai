import React, { useState, useEffect } from 'react';
import dashboardService from '../../../services/dashboardService';

const PlatformAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlerts = async () => {
      const result = await dashboardService.getAlerts();
      setAlerts(result);
      setLoading(false);
    };
    fetchAlerts();
  }, []);

  return (
    <div className="glass-card platform-alerts-widget">
      <div className="widget-header">
        <h3>System Health Alerts</h3>
        <span className="pulse-dot" style={{ backgroundColor: alerts.length > 0 ? 'var(--accent-rose)' : 'var(--accent-emerald)' }}></span>
      </div>

      {loading ? (
        <p style={{ color: 'var(--text-muted)', margin: '1rem 0' }}>Loading alerts...</p>
      ) : alerts.length === 0 ? (
        <div style={{ padding: '2rem 1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          <span style={{ fontSize: '1.75rem', display: 'block', marginBottom: '0.5rem' }}>✓</span>
          <strong>All Systems Operational</strong>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>No critical alerts or warnings detected at the gateways.</p>
        </div>
      ) : (
        <div className="alerts-list">
          {alerts.map(alert => (
            <div key={alert.id} className={`alert-item border-${alert.type}`}>
              <div className="alert-content">
                <span className={`alert-badge badge-${alert.type}`}>
                  {alert.type.toUpperCase()}
                </span>
                <p className="alert-message">{alert.message}</p>
              </div>
              <span className="alert-time">{alert.time}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlatformAlerts;
