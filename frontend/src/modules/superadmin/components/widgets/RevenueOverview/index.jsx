import React, { useState, useEffect } from 'react';
import dashboardService from '../../../services/dashboardService';

const RevenueOverview = () => {
  const [data, setData] = useState([]);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRevenue = async () => {
      const result = await dashboardService.getRevenueGrowth();
      setData(result);
      setLoading(false);
    };
    fetchRevenue();
  }, []);

  // SVG Chart Dimensions
  const width = 600;
  const height = 200;
  const padding = 20;

  if (loading || data.length === 0) {
    return (
      <div className="glass-card revenue-overview-widget" style={{ minHeight: '276px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--text-muted)' }}>Loading growth chart...</p>
      </div>
    );
  }

  // Find min/max for scaling
  const maxRevenue = Math.max(...data.map(d => d.revenue)) * 1.1; // 10% headroom
  const minRevenue = 0;

  // Helper to map data coordinates to SVG space
  const getCoordinates = (index, val) => {
    const x = padding + (index / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - ((val - minRevenue) / (maxRevenue - minRevenue)) * (height - padding * 2);
    return { x, y };
  };

  // Generate path coordinates
  const coords = data.map((d, i) => getCoordinates(i, d.revenue));
  
  // Construct path string
  let pathD = '';
  if (coords.length > 0) {
    pathD = `M ${coords[0].x} ${coords[0].y}`;
    for (let i = 1; i < coords.length; i++) {
      const prev = coords[i - 1];
      const curr = coords[i];
      const cpX1 = prev.x + (curr.x - prev.x) / 2;
      const cpY1 = prev.y;
      const cpX2 = prev.x + (curr.x - prev.x) / 2;
      const cpY2 = curr.y;
      pathD += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${curr.x} ${curr.y}`;
    }
  }

  // Path for gradient area underneath
  let areaD = '';
  if (coords.length > 0) {
    areaD = `${pathD} L ${coords[coords.length - 1].x} ${height - padding} L ${coords[0].x} ${height - padding} Z`;
  }

  return (
    <div className="glass-card revenue-overview-widget">
      <div className="widget-header">
        <div className="widget-title-area">
          <h3>Platform Revenue Growth</h3>
          <p className="widget-subtitle">Monthly recurring subscription revenue (ARR & MRR)</p>
        </div>
        <div className="chart-legend">
          <span className="legend-dot revenue"></span> Revenue ($)
        </div>
      </div>

      <div className="chart-wrapper">
        <svg viewBox={`0 0 ${width} ${height}`} className="svg-chart" width="100%" height="100%">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--accent-primary)" />
              <stop offset="100%" stopColor="var(--accent-cyan)" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
            const y = padding + ratio * (height - padding * 2);
            return (
              <line
                key={i}
                x1={padding}
                y1={y}
                x2={width - padding}
                y2={y}
                stroke="var(--border-light)"
                strokeDasharray="4,4"
              />
            );
          })}

          {/* Area Fill */}
          {areaD && <path d={areaD} fill="url(#chartGradient)" />}

          {/* Path Line */}
          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          )}

          {/* Tooltip vertical bar */}
          {hoveredIdx !== null && (
            <line
              x1={coords[hoveredIdx].x}
              y1={padding}
              x2={coords[hoveredIdx].x}
              y2={height - padding}
              stroke="rgba(0, 0, 0, 0.1)"
              strokeDasharray="2,2"
            />
          )}

          {/* Data Points */}
          {coords.map((c, i) => (
            <g key={i}>
              <circle
                cx={c.x}
                cy={c.y}
                r={hoveredIdx === i ? 6 : 4}
                fill={hoveredIdx === i ? "var(--accent-cyan)" : "var(--accent-primary)"}
                stroke="var(--bg-secondary)"
                strokeWidth="2"
                style={{ cursor: 'pointer', transition: 'r 0.1s ease' }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              />
              {/* X axis labels */}
              <text
                x={c.x}
                y={height - 2}
                textAnchor="middle"
                fill="var(--text-muted)"
                fontSize="10"
                fontFamily="var(--font-sans)"
              >
                {data[i].month}
              </text>
            </g>
          ))}
        </svg>

        {/* Dynamic HTML Tooltip overlaid inside component */}
        {hoveredIdx !== null && (
          <div
            className="chart-tooltip"
            style={{
              left: `${(coords[hoveredIdx].x / width) * 100}%`,
              transform: `translateX(-50%) translateY(-100%)`
            }}
          >
            <p className="tooltip-month">{data[hoveredIdx].month}</p>
            <p className="tooltip-value">${data[hoveredIdx].revenue.toLocaleString()}</p>
            <p className="tooltip-sub">{data[hoveredIdx].activeAccts} Active Orgs</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RevenueOverview;
