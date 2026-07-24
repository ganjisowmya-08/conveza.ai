import React from 'react';

const StatCard = ({ title, value, trend, trendType, icon, colorClass, onClick }) => {
  return (
    <div 
      className={`glass-card stat-card glow-${colorClass}`}
      onClick={onClick}
      style={onClick ? { cursor: 'pointer', transition: 'all 0.25s ease' } : undefined}
    >
      <div className="stat-card-header">
        <span className="stat-title">{title}</span>
        <span className={`stat-icon icon-${colorClass}`}>{icon}</span>
      </div>
      <div className="stat-card-body">
        <h2 className="stat-value">{value}</h2>
        <div className="stat-trend-container">
          <span className={`stat-trend ${trendType}`}>
            {trendType === 'up' ? '↗' : '↘'} {trend}
          </span>
          <span className="stat-trend-label">vs last month</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
