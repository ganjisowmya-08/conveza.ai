import React, { useState, useEffect } from 'react';
import whatsappService from '../../services/whatsappService';

const WhatsAppAccounts = () => {
  const [gateways, setGateways] = useState([]);
  const [queue, setQueue] = useState({ connectionStatus: 'online', queueLoad: '0%', avgSpeed: '0 m/s', pendingMessages: 0 });
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  // QR Code Scanner Simulation
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [qrStep, setQrStep] = useState(1); // 1 = Select Tenant, 2 = Display QR Code, 3 = Connect Success
  const [scanOrg, setScanOrg] = useState('Acme Enterprises');
  const [scanName, setScanName] = useState('New Support Line');
  const [scanNumber, setScanNumber] = useState('+91 91234 56789');

  useEffect(() => {
    const loadWhatsAppStats = async () => {
      const gws = await whatsappService.getGateways();
      const qStatus = await whatsappService.getQueueStatus();
      const accs = await whatsappService.getAccounts();
      setGateways(gws);
      setQueue(qStatus);
      setAccounts(accs);
      setLoading(false);
    };
    loadWhatsAppStats();
  }, []);

  const handleToggleGateway = (id) => {
    setGateways(gateways.map(gw => {
      if (gw.id === id) {
        const nextStatus = gw.status === 'connected' ? 'disconnected' : gw.status === 'disconnected' ? 'warning' : 'connected';
        const nextLoad = nextStatus === 'disconnected' ? '0%' : '20%';
        return { ...gw, status: nextStatus, load: nextLoad };
      }
      return gw;
    }));
  };

  const handleScanSubmit = (e) => {
    e.preventDefault();
    setQrStep(2);
    // Simulate scan success after 3.5 seconds
    setTimeout(() => {
      setQrStep(3);
    }, 3500);
  };

  const handleCompleteConnection = () => {
    const newAcc = {
      id: accounts.length + 1,
      orgName: scanOrg,
      name: scanName,
      number: scanNumber,
      status: 'connected',
      gateway: 'GW-01'
    };
    setAccounts([...accounts, newAcc]);
    setIsQrModalOpen(false);
    setQrStep(1);
  };

  return (
    <div className="whatsapp-view-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {loading ? (
        <p style={{ color: 'var(--text-muted)', padding: '3rem', textAlign: 'center' }}>Loading gateway connections...</p>
      ) : (
        <>
          {/* Quick Metrics Bar */}
          <div className="dashboard-grid" style={{ marginBottom: '0rem' }}>
            <div className="glass-card stat-card glow-primary" style={{ minHeight: '110px' }}>
              <div className="stat-card-header">
                <span className="stat-title">Gateway Connection Status</span>
                <span className="stat-icon icon-primary">🌐</span>
              </div>
              <div className="stat-card-body" style={{ marginTop: '0.5rem' }}>
                <h2 className="stat-value" style={{ color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.75rem' }}>
                  <span style={{ fontSize: '1rem' }}>●</span> {queue.connectionStatus.toUpperCase()}
                </h2>
              </div>
            </div>
            <div className="glass-card stat-card glow-cyan" style={{ minHeight: '110px' }}>
              <div className="stat-card-header">
                <span className="stat-title">Average Dispatch Speed</span>
                <span className="stat-icon icon-cyan">⚡</span>
              </div>
              <div className="stat-card-body" style={{ marginTop: '0.5rem' }}>
                <h2 className="stat-value">{queue.avgSpeed}</h2>
              </div>
            </div>
            <div className="glass-card stat-card glow-violet" style={{ minHeight: '110px' }}>
              <div className="stat-card-header">
                <span className="stat-title">Queue Buffer Load</span>
                <span className="stat-icon icon-violet">📊</span>
              </div>
              <div className="stat-card-body" style={{ marginTop: '0.5rem' }}>
                <h2 className="stat-value">{queue.queueLoad}</h2>
              </div>
            </div>
            <div className="glass-card stat-card glow-rose" style={{ minHeight: '110px' }}>
              <div className="stat-card-header">
                <span className="stat-title">Pending Messages</span>
                <span className="stat-icon icon-rose">📨</span>
              </div>
              <div className="stat-card-body" style={{ marginTop: '0.5rem' }}>
                <h2 className="stat-value">{queue.pendingMessages} msgs</h2>
              </div>
            </div>
          </div>

          {/* Gateway Servers Grid */}
          <div>
            <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🖥️</span> WhatsApp Server Gateways
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {gateways.map(gw => (
                <div key={gw.id} className="glass-card" style={{ borderTop: `4px solid ${gw.status === 'connected' ? 'var(--accent-emerald)' : gw.status === 'warning' ? 'var(--accent-amber)' : 'var(--accent-rose)'}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div>
                      <strong style={{ display: 'block', fontSize: '1rem' }}>{gw.name}</strong>
                      <code style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{gw.host}</code>
                    </div>
                    <span className={`badge ${gw.status === 'connected' ? 'badge-emerald' : gw.status === 'warning' ? 'badge-amber' : 'badge-rose'}`}>
                      {gw.id}
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: '1rem 0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Server Load:</span>
                      <strong>{gw.load}</strong>
                    </div>
                    <div className="progress-bar-bg" style={{ height: '4px', background: 'var(--border-light)', borderRadius: '2px' }}>
                      <div 
                        style={{ 
                          width: gw.load, 
                          height: '100%', 
                          background: gw.status === 'connected' ? 'var(--accent-primary)' : gw.status === 'warning' ? 'var(--accent-amber)' : 'var(--border-medium)',
                          borderRadius: '2px' 
                        }}
                      ></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Channels:</span>
                      <strong>{gw.activeAccounts} accounts</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Dispatched Messages:</span>
                      <strong>{gw.messagesSent.toLocaleString()}</strong>
                    </div>
                  </div>

                  <button 
                    className="btn-secondary" 
                    style={{ width: '100%', fontSize: '0.8rem', padding: '0.4rem' }}
                    onClick={() => handleToggleGateway(gw.id)}
                  >
                    {gw.status === 'connected' ? 'Disconnect Server' : 'Boot Server'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Active Channels Table */}
          <div className="glass-card" style={{ padding: '1.5rem 0 0 0' }}>
            <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem' }}>Active Customer Channels</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Connected WhatsApp numbers active on current nodes</p>
              </div>
              <button className="btn-primary" onClick={() => setIsQrModalOpen(true)}>+ Connect Number</button>
            </div>
            
            <div className="table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Organization</th>
                    <th>Friendly Name</th>
                    <th>WhatsApp Number</th>
                    <th>Gateway Route</th>
                    <th>Status</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.map(acc => (
                    <tr key={acc.id}>
                      <td><strong>{acc.orgName}</strong></td>
                      <td>{acc.name}</td>
                      <td><code style={{ fontSize: '0.85rem' }}>{acc.number}</code></td>
                      <td>
                        <span className="badge" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-light)', color: 'var(--text-primary)' }}>
                          {acc.gateway}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${acc.status === 'connected' ? 'badge-emerald' : 'badge-amber'}`}>
                          {acc.status.toUpperCase()}
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button className="btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>Re-route</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* WhatsApp QR Scan Modal Simulation */}
      {isQrModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: '450px', border: '1px solid var(--border-medium)', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.1rem' }}>Connect New WhatsApp Account</h3>
              <button 
                onClick={() => { setIsQrModalOpen(false); setQrStep(1); }} 
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.1rem', color: 'var(--text-muted)' }}
              >✕</button>
            </div>

            {qrStep === 1 && (
              <form onSubmit={handleScanSubmit} style={{ textAlign: 'left' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Tenant Organization</label>
                    <input 
                      type="text" 
                      required 
                      className="search-input" 
                      style={{ width: '100%', paddingLeft: '0.75rem' }} 
                      value={scanOrg}
                      onChange={(e) => setScanOrg(e.target.value)}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Channel Label</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Sales Alerts" 
                      className="search-input" 
                      style={{ width: '100%', paddingLeft: '0.75rem' }} 
                      value={scanName}
                      onChange={(e) => setScanName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>WhatsApp Number</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="+91 99999 88888" 
                      className="search-input" 
                      style={{ width: '100%', paddingLeft: '0.75rem' }} 
                      value={scanNumber}
                      onChange={(e) => setScanNumber(e.target.value)}
                    />
                  </div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                  <button type="button" className="btn-secondary" onClick={() => setIsQrModalOpen(false)}>Cancel</button>
                  <button type="submit" className="btn-primary">Generate QR Code</button>
                </div>
              </form>
            )}

            {qrStep === 2 && (
              <div style={{ padding: '1rem' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Open WhatsApp on your mobile phone, navigate to Linked Devices, and scan the QR code below:
                </p>
                <div style={{ border: '1px solid var(--border-medium)', padding: '1rem', width: '200px', height: '200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: '8px' }}>
                  {/* Simulated QR Code using boxes */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px', width: '100%', height: '100%' }}>
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} style={{ background: (i % 2 === 0 || i % 3 === 0) ? '#000' : '#fff' }}></div>
                    ))}
                  </div>
                </div>
                <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                  <div className="pulse-dot" style={{ width: '8px', height: '8px' }}></div>
                  <span>Waiting for mobile device response...</span>
                </div>
              </div>
            )}

            {qrStep === 3 && (
              <div style={{ padding: '2rem 1rem' }}>
                <span style={{ fontSize: '3rem', display: 'block', marginBottom: '0.75rem' }}>✅</span>
                <h4 style={{ color: 'var(--accent-emerald)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Successfully Connected!</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Number <strong>{scanNumber}</strong> is now securely linked to gateway server node <strong>GW-01</strong>.
                </p>
                <button className="btn-primary" style={{ width: '100%' }} onClick={handleCompleteConnection}>Finish & Register</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppAccounts;
