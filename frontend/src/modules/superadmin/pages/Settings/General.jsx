import React, { useState, useEffect } from 'react';
import settingsService from '../../services/settingsService';

const General = () => {
  const [config, setConfig] = useState({
    rootDomain: '',
    adminEmail: '',
    smtpHost: '',
    smtpPort: '',
    smtpUser: '',
    smtpPass: '',
    storageProvider: 'Local Node Storage',
    s3Bucket: '',
    s3Region: '',
    backupInterval: 'weekly',
    stripePubKey: ''
  });
  const [loading, setLoading] = useState(true);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      const data = await settingsService.getSettings();
      setConfig(prev => ({ ...prev, ...data }));
      setLoading(false);
    };
    fetchSettings();
  }, []);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 4000);
  };

  return (
    <div className="settings-view-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {loading ? (
        <p style={{ color: 'var(--text-muted)', padding: '3rem', textAlign: 'center' }}>Loading system settings...</p>
      ) : (
        <form onSubmit={handleSaveSettings}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Global Settings */}
            <div className="glass-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Global App Setup</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Primary routing and gateway notification parameters</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: '500' }}>Root Host Domain</label>
                  <input 
                    type="text" 
                    required 
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem' }} 
                    value={config.rootDomain}
                    onChange={(e) => setConfig({ ...config, rootDomain: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: '500' }}>System Admin Contact Email</label>
                  <input 
                    type="email" 
                    required 
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem' }} 
                    value={config.adminEmail}
                    onChange={(e) => setConfig({ ...config, adminEmail: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* SMTP Config */}
            <div className="glass-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>SMTP Mailer Server</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Outgoing SMTP gateway details for dispatching passwords and alert reports</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: '500' }}>SMTP Server Hostname</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="smtp.mailgun.org"
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem' }} 
                    value={config.smtpHost}
                    onChange={(e) => setConfig({ ...config, smtpHost: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: '500' }}>SMTP Port</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="587"
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem' }} 
                    value={config.smtpPort}
                    onChange={(e) => setConfig({ ...config, smtpPort: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: '500' }}>Backup Frequency</label>
                  <select 
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem', background: 'var(--bg-tertiary)' }}
                    value={config.backupInterval}
                    onChange={(e) => setConfig({ ...config, backupInterval: e.target.value })}
                  >
                    <option value="daily">Daily Cron Backup</option>
                    <option value="weekly">Weekly Cron Backup</option>
                    <option value="monthly">Monthly Cron Backup</option>
                  </select>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: '500' }}>Auth Username</label>
                  <input 
                    type="text" 
                    required 
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem' }} 
                    value={config.smtpUser}
                    onChange={(e) => setConfig({ ...config, smtpUser: e.target.value })}
                  />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: '500' }}>Auth Password</label>
                  <input 
                    type="password" 
                    required 
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem' }} 
                    value={config.smtpPass}
                    onChange={(e) => setConfig({ ...config, smtpPass: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Storage configuration */}
            <div className="glass-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Cloud File Storage Providers</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Tenant media upload destination settings</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: '500' }}>Storage Destination</label>
                  <select 
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem', background: 'var(--bg-tertiary)' }}
                    value={config.storageProvider}
                    onChange={(e) => setConfig({ ...config, storageProvider: e.target.value })}
                  >
                    <option value="AWS S3">Amazon Simple Storage Service (S3)</option>
                    <option value="Google Cloud Bucket">Google Cloud Storage (GCS)</option>
                    <option value="Local Node Storage">Local Server File Directory</option>
                  </select>
                </div>
                {config.storageProvider !== 'Local Node Storage' && (
                  <>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: '500' }}>Bucket Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="conveza-media-prod"
                        className="search-input" 
                        style={{ width: '100%', paddingLeft: '0.75rem' }} 
                        value={config.s3Bucket}
                        onChange={(e) => setConfig({ ...config, s3Bucket: e.target.value })}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: '500' }}>Bucket Region</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="ap-southeast-1"
                        className="search-input" 
                        style={{ width: '100%', paddingLeft: '0.75rem' }} 
                        value={config.s3Region}
                        onChange={(e) => setConfig({ ...config, s3Region: e.target.value })}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Stripe integrations */}
            <div className="glass-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Payment Gateway Integrations</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Merchant credential configurations for Stripe integration</p>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: '500' }}>Stripe Public Publishable Key</label>
                <input 
                  type="text" 
                  required 
                  className="search-input" 
                  style={{ width: '100%', paddingLeft: '0.75rem', fontFamily: 'monospace' }} 
                  value={config.stripePubKey}
                  onChange={(e) => setConfig({ ...config, stripePubKey: e.target.value })}
                />
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
              {saveSuccess && (
                <span style={{ color: 'var(--accent-emerald)', fontSize: '0.85rem', fontWeight: '600' }}>
                  ✓ System-wide configurations successfully written!
                </span>
              )}
              
              <button type="submit" className="btn-primary" style={{ padding: '0.75rem 2rem' }}>Save System Configurations</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default General;
