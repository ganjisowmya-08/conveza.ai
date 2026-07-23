import React, { useState, useEffect } from 'react';
import dashboardService from '../../../services/dashboardService';

const RecentActivity = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTimeline = async () => {
      const result = await dashboardService.getAuditLogs();
      setActivities(result);
      setLoading(false);
    };
    fetchTimeline();
  }, []);

  return (
    <div className="glass-card recent-activity-widget">
      <div className="widget-header">
        <h3>Superadmin Audit Log</h3>
        <button className="btn-text">View All</button>
      </div>

      {loading ? (
        <p style={{ color: 'var(--text-muted)', margin: '1rem 0' }}>Loading logs...</p>
      ) : activities.length === 0 ? (
        <div style={{ padding: '2rem 1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          <span style={{ fontSize: '1.75rem', display: 'block', marginBottom: '0.5rem' }}>📋</span>
          <strong>No recent activity</strong>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Administrative audit log updates will show up here.</p>
        </div>
      ) : (
        <div className="activity-timeline">
          {activities.map((act, idx) => (
            <div key={act.id} className="timeline-item">
              <div className="timeline-marker-container">
                <span className={`timeline-marker marker-${act.category}`}></span>
                {idx !== activities.length - 1 && <span className="timeline-line"></span>}
              </div>
              <div className="timeline-content">
                <p className="activity-text">
                  <strong className="admin-name">{act.admin}</strong> {act.action}
                </p>
                <span className="activity-time">{act.time}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentActivity;
