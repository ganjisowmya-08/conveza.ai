import React, { useState, useEffect } from 'react';
import integrationService from '../../services/integrationService';

const InstalledApps = () => {
  const [integrations, setIntegrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Configure Modal State
  const [configuringApp, setConfiguringApp] = useState(null);
  const [mockCredentials, setMockCredentials] = useState({ clientId: '', clientSecret: '' });

  // API Keys state
  const [apiKeys, setApiKeys] = useState([
    { name: 'Primary Webhook Sync', prefix: 'cvz_live_••••8a3d', created: '2026-06-12', active: true },
    { name: 'Analytics Fetch Agent', prefix: 'cvz_live_••••2f9c', created: '2026-07-01', active: false }
  ]);
  const [newKeyName, setNewKeyName] = useState('');
  const [generatedKey, setGeneratedKey] = useState('');

  useEffect(() => {
    const loadIntegrations = async () => {
      const activeList = await integrationService.getInstalledApps();
      setIntegrations(activeList);
      setLoading(false);
    };
    loadIntegrations();
  }, []);

  const handleToggleIntegration = (id) => {
    setIntegrations(integrations.map(app => {
      if (app.id === id) {
        return { ...app, status: app.status === 'active' ? 'inactive' : 'active' };
      }
      return app;
    }));
  };

  const handleGenerateKey = (e) => {
    e.preventDefault();
    const keyVal = `cvz_live_${Math.random().toString(36).substring(2, 10)}${Math.random().toString(36).substring(2, 10)}`;
    const newEntry = {
      name: newKeyName,
      prefix: `${keyVal.substring(0, 13)}••••${keyVal.substring(keyVal.length - 4)}`,
      created: new Date().toISOString().split('T')[0],
      active: true
    };
    setApiKeys([...apiKeys, newEntry]);
    setGeneratedKey(keyVal);
    setNewKeyName('');
  };

  const handleToggleKey = (prefix) => {
    setApiKeys(apiKeys.map(k => {
      if (k.prefix === prefix) return { ...k, active: !k.active };
      return k;
    }));
  };

  const handleOpenConfigure = (app) => {
    setConfiguringApp(app);
    setMockCredentials({
      clientId: app.status === 'active' ? 'cvz_client_' + Math.random().toString(36).substring(5, 12) : '',
      clientSecret: app.status === 'active' ? '••••••••••••••••••••••••••••••••' : ''
    });
  };

  const handleSaveCredentials = (e) => {
    e.preventDefault();
    setIntegrations(integrations.map(app => {
      if (app.id === configuringApp.id) {
        return { ...app, status: 'active' };
      }
      return app;
    }));
    setConfiguringApp(null);
  };

  // Filter integrations based on active category tab
  const categories = ['All', 'Marketing', 'Communication', 'Commerce', 'Payments', 'CRM', 'Productivity'];
  const filteredApps = integrations.filter(app => activeCategory === 'All' || app.category === activeCategory);

  return (
    <div className="integrations-view-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Category Tabs Header */}
      <div className="glass-card" style={{ padding: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>Connectors & Integrations Hub</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Configure connection channels, tokens, and webhooks for external third-party software.</p>
          </div>
          
          {/* Tabs switch */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', background: 'var(--bg-tertiary)', padding: '0.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`btn-secondary ${activeCategory === cat ? 'active' : ''}`}
                style={{ 
                  padding: '0.4rem 0.75rem', 
                  fontSize: '0.75rem',
                  border: 'none', 
                  borderRadius: 'var(--radius-sm)',
                  background: activeCategory === cat ? 'var(--bg-card)' : 'transparent',
                  boxShadow: activeCategory === cat ? 'var(--shadow-sm)' : 'none',
                  fontWeight: activeCategory === cat ? '600' : '400',
                  color: activeCategory === cat ? 'var(--text-primary)' : 'var(--text-secondary)'
                }}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Integrations Grid */}
      {loading ? (
        <p style={{ color: 'var(--text-muted)', padding: '3rem', textAlign: 'center' }}>Loading integrations hub...</p>
      ) : filteredApps.length === 0 ? (
        <div className="glass-card" style={{ padding: '4rem 2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🔌</span>
          <h3>No active integrations found in {activeCategory}</h3>
          <p style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>Select a different category filter or check connection values.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {filteredApps.map(app => (
            <div 
              key={app.id} 
              className="glass-card" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                padding: '1.25rem', 
                background: 'var(--bg-card)', 
                border: '1px solid var(--border-light)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                minHeight: '200px'
              }}
            >
              <div>
                {/* Header Icon + Switch */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div style={{ fontSize: '1.5rem', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-tertiary)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                    {app.icon}
                  </div>
                  
                  {/* Switch Toggle */}
                  <label style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input 
                      type="checkbox" 
                      checked={app.status === 'active'} 
                      onChange={() => handleToggleIntegration(app.id)}
                      style={{ display: 'none' }}
                    />
                    <div style={{ 
                      width: '32px', 
                      height: '18px', 
                      background: app.status === 'active' ? 'var(--accent-primary)' : 'var(--border-medium)', 
                      borderRadius: '9px', 
                      position: 'relative',
                      transition: 'background 0.2s'
                    }}>
                      <div style={{ 
                        width: '12px', 
                        height: '12px', 
                        background: '#fff', 
                        borderRadius: '50%', 
                        position: 'absolute', 
                        top: '3px', 
                        left: app.status === 'active' ? '17px' : '3px',
                        transition: 'left 0.2s'
                      }}></div>
                    </div>
                  </label>
                </div>

                {/* Integration Info */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                    <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{app.name}</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{app.version}</span>
                  </div>
                  <span className="badge badge-indigo" style={{ display: 'inline-block', fontSize: '0.65rem', padding: '0.1rem 0.35rem', margin: '0.25rem 0' }}>{app.category}</span>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.3, marginTop: '0.25rem' }}>{app.description}</p>
                </div>
              </div>

              {/* Action configure buttons */}
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem' }}>
                <button 
                  className="btn-secondary" 
                  style={{ flex: 1, padding: '0.35rem 0', fontSize: '0.75rem', textAlign: 'center' }}
                  onClick={() => handleOpenConfigure(app)}
                >
                  ⚙️ Configure Settings
                </button>
                <span className={`badge ${app.status === 'active' ? 'badge-emerald' : 'badge-rose'}`} style={{ display: 'flex', alignItems: 'center', fontSize: '0.65rem', padding: '0 0.5rem' }}>
                  {app.status === 'active' ? 'ACTIVE' : 'OFFLINE'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Configure Settings Modal overlay */}
      {configuringApp && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: '480px', border: '1px solid var(--border-medium)', padding: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{configuringApp.icon}</span>
                <h3 style={{ fontSize: '1.15rem' }}>Configure {configuringApp.name}</h3>
              </div>
              <button 
                onClick={() => setConfiguringApp(null)} 
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: 'var(--text-muted)' }}
              >✕</button>
            </div>

            <form onSubmit={handleSaveCredentials}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Developer Client ID / App Key</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. cvz_client_83d289"
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem' }}
                    value={mockCredentials.clientId}
                    onChange={(e) => setMockCredentials({ ...mockCredentials, clientId: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>App Token / Client Secret</label>
                  <input 
                    type="password" 
                    required 
                    placeholder="Enter secret token value"
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem' }}
                    value={mockCredentials.clientSecret}
                    onChange={(e) => setMockCredentials({ ...mockCredentials, clientSecret: e.target.value })}
                  />
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  💡 This credential will activate tenant routing hooks for {configuringApp.name} integrations globally.
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                <button type="button" className="btn-secondary" onClick={() => setConfiguringApp(null)}>Cancel</button>
                <button type="submit" className="btn-primary">Save Settings & Link</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* API Keys Configuration Row */}
      <div className="widgets-grid" style={{ marginTop: '0.5rem' }}>
        <div className="glass-card" style={{ padding: '1.5rem 0 0 0' }}>
          <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', borderBottom: '1px solid var(--border-light)' }}>
            <h3 style={{ fontSize: '1.1rem' }}>Global API Credentials</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Developer tokens for system-level API sync integrations</p>
          </div>

          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Key Identifier</th>
                  <th>Token Preview</th>
                  <th>Date Created</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {apiKeys.map((key, idx) => (
                  <tr key={idx}>
                    <td><strong>{key.name}</strong></td>
                    <td><code style={{ fontSize: '0.8rem', background: 'var(--bg-tertiary)', padding: '0.15rem 0.35rem', borderRadius: '4px' }}>{key.prefix}</code></td>
                    <td>{key.created}</td>
                    <td>
                      <span 
                        className={`badge ${key.active ? 'badge-emerald' : 'badge-rose'}`} 
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleToggleKey(key.prefix)}
                      >
                        {key.active ? 'ACTIVE' : 'REVOKED'}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button className="action-icon-btn" title="Revoke key" onClick={() => handleToggleKey(key.prefix)}>🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Generate key form */}
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Generate API Key</h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Provision a new token for programmatic gateway webhook calls</p>
          
          <form onSubmit={handleGenerateKey}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Label / Description</label>
              <input 
                type="text" 
                required 
                placeholder="e.g. ERP integration client" 
                className="search-input" 
                style={{ width: '100%', paddingLeft: '0.75rem' }} 
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Generate Token</button>
          </form>

          {generatedKey && (
            <div style={{ marginTop: '1.25rem', padding: '0.75rem', background: 'var(--accent-primary-glow)', border: '1px dashed var(--border-accent)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '0.25rem' }}>KEY GENERATED (COPY NOW - CANNOT BE VIEWED AGAIN):</span>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <code style={{ fontSize: '0.8rem', fontWeight: '700', wordBreak: 'break-all', display: 'block', flex: 1 }}>{generatedKey}</code>
                <button 
                  className="btn-secondary" 
                  style={{ padding: '0.25rem 0.5rem', fontSize: '0.7rem' }}
                  onClick={() => {
                    navigator.clipboard.writeText(generatedKey);
                    alert('API Key copied to clipboard!');
                  }}
                >Copy</button>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default InstalledApps;
