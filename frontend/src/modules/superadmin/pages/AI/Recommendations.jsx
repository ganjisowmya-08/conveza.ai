import React, { useState, useEffect } from 'react';
import analyticsService from '../../services/analyticsService';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [predictions, setPredictions] = useState(null);
  
  // Simulator State
  const [toggleWizard, setToggleWizard] = useState(false);
  const [toggleLatency, setToggleLatency] = useState(false);
  const [togglePersonalization, setTogglePersonalization] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const recs = await analyticsService.getAIRecommendations();
      const pred = await analyticsService.getCustomerPredictions();
      setRecommendations(recs);
      setPredictions(pred);
      setLoading(false);
    };
    loadData();
  }, []);

  const handleApplyRecommendation = (id) => {
    setRecommendations(recommendations.filter(r => r.id !== id));
    // Simulate updating toggles if applied
    if (id === 1) setTogglePersonalization(true);
    if (id === 2) setToggleLatency(true);
    if (id === 3) setToggleWizard(true);
  };

  const calculatedLift = (toggleWizard ? 5.2 : 0) + (toggleLatency ? 3.5 : 0) + (togglePersonalization ? 6.8 : 0);

  return (
    <div className="recommendations-view-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Top summary cards */}
      <div className="dashboard-grid">
        <div className="glass-card stat-card glow-primary" style={{ minHeight: '110px' }}>
          <div className="stat-card-header">
            <span className="stat-title">Predictive Growth</span>
            <span className="stat-icon icon-primary">📈</span>
          </div>
          <div className="stat-card-body" style={{ marginTop: '0.5rem' }}>
            <h2 className="stat-value">{predictions?.predictedGrowth || '+14.8%'}</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Estimated next month</span>
          </div>
        </div>
        <div className="glass-card stat-card glow-violet" style={{ minHeight: '110px' }}>
          <div className="stat-card-header">
            <span className="stat-title">Active AI Insights</span>
            <span className="stat-icon icon-violet">🤖</span>
          </div>
          <div className="stat-card-body" style={{ marginTop: '0.5rem' }}>
            <h2 className="stat-value">{recommendations.length} advices</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Actionable alerts</span>
          </div>
        </div>
        <div className="glass-card stat-card glow-cyan" style={{ minHeight: '110px' }}>
          <div className="stat-card-header">
            <span className="stat-title">AI Model Accuracy</span>
            <span className="stat-icon icon-cyan">🎯</span>
          </div>
          <div className="stat-card-body" style={{ marginTop: '0.5rem' }}>
            <h2 className="stat-value" style={{ color: 'var(--accent-emerald)', fontSize: '1.8rem', fontWeight: '700' }}>98.6%</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Confidence interval</span>
          </div>
        </div>
      </div>

      {/* Main Layout: Simulator & Predictions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        
        {/* Left Card: Customer Change Simulator */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem' }}>
          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
              <span>⚡</span> AI Customer Conversion Simulator
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
              Select website/platform changes below to see predicted conversion lifts on user traffic.
            </p>
          </div>

          {/* Toggle Switches */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <div 
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', backgroundColor: togglePersonalization ? 'var(--accent-primary-glow)' : 'var(--bg-tertiary)', transition: 'all 0.2s ease' }}
            >
              <div>
                <strong style={{ fontSize: '0.85rem', display: 'block', color: 'var(--text-primary)' }}>Summer Camp Mustache Personalization</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>AI personalization parameters lift conversions</span>
              </div>
              <button 
                className={`btn-${togglePersonalization ? 'primary' : 'secondary'}`} 
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}
                onClick={() => setTogglePersonalization(!togglePersonalization)}
              >
                {togglePersonalization ? '✓ Enabled (+6.8%)' : 'Enable Change'}
              </button>
            </div>

            <div 
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', backgroundColor: toggleLatency ? 'var(--accent-cyan-glow)' : 'var(--bg-tertiary)', transition: 'all 0.2s ease' }}
            >
              <div>
                <strong style={{ fontSize: '0.85rem', display: 'block', color: 'var(--text-primary)' }}>Optimize Routing API Gateway Latency</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mitigate 12% customer churn risk probability</span>
              </div>
              <button 
                className={`btn-${toggleLatency ? 'primary' : 'secondary'}`} 
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}
                onClick={() => setToggleLatency(!toggleLatency)}
              >
                {toggleLatency ? '✓ Enabled (+3.5%)' : 'Enable Change'}
              </button>
            </div>

            <div 
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', backgroundColor: toggleWizard ? 'var(--accent-amber-glow)' : 'var(--bg-tertiary)', transition: 'all 0.2s ease' }}
            >
              <div>
                <strong style={{ fontSize: '0.85rem', display: 'block', color: 'var(--text-primary)' }}>Switch to Multi-step Guided Wizard</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Reduces visitor signup drop-offs by 15%</span>
              </div>
              <button 
                className={`btn-${toggleWizard ? 'primary' : 'secondary'}`} 
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}
                onClick={() => setToggleWizard(!toggleWizard)}
              >
                {toggleWizard ? '✓ Enabled (+5.2%)' : 'Enable Change'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Card: Predictive Lift Output */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: '1.5rem', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
              <span>📊</span> AI Predicted Conversion Impact
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
              Calculated real-time lift metrics based on simulated platform changes.
            </p>
          </div>

          <div style={{ textAlign: 'center', padding: '1.5rem 1rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Simulated Conversion Lift</span>
            <h1 style={{ fontSize: '3rem', fontWeight: '800', color: calculatedLift > 0 ? 'var(--accent-emerald)' : 'var(--text-secondary)', margin: '0.5rem 0' }}>
              +{calculatedLift.toFixed(1)}%
            </h1>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {calculatedLift > 0 
                ? 'Great! These combined modifications are predicted to increase platform-wide revenue growth.' 
                : 'Toggle any changes on the left to estimate performance lift coefficients.'}
            </p>
          </div>

          {/* Lift progress bar */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem', fontWeight: '500' }}>
              <span>Target Conversion Growth (Max Lift)</span>
              <span>{((calculatedLift / 15.5) * 100).toFixed(0)}% reached</span>
            </div>
            <div style={{ height: '8px', background: 'var(--border-light)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${(calculatedLift / 15.5) * 100}%`, height: '100%', background: 'linear-gradient(90deg, var(--accent-primary) 0%, var(--accent-emerald) 100%)', transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Insights Panel (Bottom Feed) */}
      <div className="glass-card" style={{ padding: '1.75rem' }}>
        <h3 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
          <span>💡</span> AI Insight Feed & Customer Change Predictions
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          Heuristic model advice scanning tenant databases, message response logs, and subscriber lifecycles.
        </p>

        {loading ? (
          <p style={{ color: 'var(--text-muted)', padding: '2rem', textAlign: 'center' }}>Analyzing system parameters...</p>
        ) : recommendations.length === 0 ? (
          <div style={{ padding: '3rem 1.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            <span style={{ fontSize: '3.5rem', display: 'block', marginBottom: '1rem' }}>🏆</span>
            <strong>All customer analytics parameters fully optimized!</strong>
            <p style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>No scaling, conversion drop-offs, or configuration issues detected.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {recommendations.map(rec => (
              <div 
                key={rec.id} 
                className="glass-card" 
                style={{ 
                  background: 'var(--bg-tertiary)', 
                  borderLeft: `4px solid ${rec.severity === 'high' ? 'var(--accent-rose)' : rec.severity === 'medium' ? 'var(--accent-amber)' : 'var(--accent-cyan)'}`,
                  padding: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <span className={`alert-badge ${rec.severity === 'high' ? 'badge-rose' : rec.severity === 'medium' ? 'badge-amber' : 'badge-info'}`} style={{ padding: '0.15rem 0.4rem', fontSize: '0.65rem' }}>
                        {rec.severity.toUpperCase()}
                      </span>
                      <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>{rec.title}</strong>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{rec.description}</p>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', marginTop: '0.5rem', fontWeight: '600' }}>
                      ✨ Expected Impact: {rec.impact}
                    </div>
                  </div>
                  <button 
                    className="btn-primary" 
                    style={{ padding: '0.45rem 0.9rem', fontSize: '0.75rem' }}
                    onClick={() => handleApplyRecommendation(rec.id)}
                  >
                    Apply Optimization
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
