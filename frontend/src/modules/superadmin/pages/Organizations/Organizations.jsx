import React, { useState, useEffect } from 'react';
import organizationService from '../../services/organizationService';

const Organizations = () => {
  const [orgs, setOrgs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrg, setSelectedOrg] = useState(null);
  
  // Modals state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  
  // New Org Form State
  const [newOrg, setNewOrg] = useState({
    name: '',
    domain: '',
    plan: 'Growth Pro',
    adminName: '',
    adminEmail: '',
    limit: 100000,
    dbHost: 'db-prd-02.local'
  });

  useEffect(() => {
    const fetchOrgs = async () => {
      const data = await organizationService.getOrganizations();
      setOrgs(data);
      setLoading(false);
    };
    fetchOrgs();
  }, []);

  // Filter orgs based on search query and status filter
  const filteredOrgs = orgs.filter(org => {
    const matchesSearch = org.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          org.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          org.adminEmail.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || org.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Stats calculation
  const totalOrgs = orgs.length;
  const activeOrgs = orgs.filter(o => o.status === 'active').length;
  const warningOrgs = orgs.filter(o => o.status === 'warning').length;
  const suspendedOrgs = orgs.filter(o => o.status === 'suspended').length;

  const handleAddOrgSubmit = (e) => {
    e.preventDefault();
    const createdOrg = {
      ...newOrg,
      id: orgs.length + 1,
      status: 'active',
      whatsappStatus: 'connected',
      whatsappNumbers: [],
      totalCustomers: 0,
      totalBroadcasts: 0,
      customerTags: {},
      broadcastStats: { sent: 0, readRate: '0%', successRate: '0%' },
      usage: 0
    };
    setOrgs([...orgs, createdOrg]);
    setIsAddModalOpen(false);
    // Reset form
    setNewOrg({
      name: '',
      domain: '',
      plan: 'Growth Pro',
      adminName: '',
      adminEmail: '',
      limit: 100000,
      dbHost: 'db-prd-02.local'
    });
  };

  const handleToggleStatus = (id) => {
    setOrgs(orgs.map(org => {
      if (org.id === id) {
        const nextStatus = org.status === 'active' ? 'suspended' : org.status === 'suspended' ? 'warning' : 'active';
        return { ...org, status: nextStatus };
      }
      return org;
    }));
  };

  const handleViewDetails = (org) => {
    setSelectedOrg(org);
    setIsDetailModalOpen(true);
  };

  return (
    <div className="organizations-view-container">
      {/* Metrics Row */}
      <div className="dashboard-grid" style={{ marginBottom: '1.5rem' }}>
        <div className="glass-card stat-card glow-cyan" style={{ minHeight: '110px' }}>
          <div className="stat-card-header">
            <span className="stat-title">Total Organizations</span>
            <span className="stat-icon icon-cyan">🏢</span>
          </div>
          <div className="stat-card-body" style={{ marginTop: '0.5rem' }}>
            <h2 className="stat-value">{totalOrgs}</h2>
          </div>
        </div>
        <div className="glass-card stat-card glow-emerald" style={{ minHeight: '110px' }}>
          <div className="stat-card-header">
            <span className="stat-title">Active Tenants</span>
            <span className="stat-icon icon-primary" style={{ backgroundColor: 'rgba(16, 185, 129, 0.08)', color: 'var(--accent-emerald)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>🟢</span>
          </div>
          <div className="stat-card-body" style={{ marginTop: '0.5rem' }}>
            <h2 className="stat-value">{activeOrgs}</h2>
          </div>
        </div>
        <div className="glass-card stat-card glow-violet" style={{ minHeight: '110px' }}>
          <div className="stat-card-header">
            <span className="stat-title">Warning State</span>
            <span className="stat-icon icon-violet">🟡</span>
          </div>
          <div className="stat-card-body" style={{ marginTop: '0.5rem' }}>
            <h2 className="stat-value">{warningOrgs}</h2>
          </div>
        </div>
        <div className="glass-card stat-card glow-rose" style={{ minHeight: '110px' }}>
          <div className="stat-card-header">
            <span className="stat-title">Suspended</span>
            <span className="stat-icon icon-rose">🔴</span>
          </div>
          <div className="stat-card-body" style={{ marginTop: '0.5rem' }}>
            <h2 className="stat-value">{suspendedOrgs}</h2>
          </div>
        </div>
      </div>

      {/* Control Panel: Search & Filter & Add Button */}
      <div className="glass-card" style={{ padding: '1.25rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, minWidth: '300px' }}>
            {/* Search */}
            <div className="topbar-search" style={{ width: '100%', maxWidth: '320px' }}>
              <span className="search-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input 
                type="text" 
                placeholder="Search organizations, domains, emails..." 
                className="search-input" 
                style={{ width: '100%', paddingLeft: '2.2rem' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {/* Filter Tabs */}
            <div style={{ display: 'flex', gap: '0.35rem', background: 'var(--bg-tertiary)', padding: '0.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              {['all', 'active', 'warning', 'suspended'].map(tab => (
                <button
                  key={tab}
                  className={`btn-secondary ${statusFilter === tab ? 'active' : ''}`}
                  style={{ 
                    padding: '0.4rem 0.8rem', 
                    fontSize: '0.8rem',
                    border: 'none', 
                    borderRadius: 'var(--radius-sm)',
                    background: statusFilter === tab ? 'var(--bg-card)' : 'transparent',
                    boxShadow: statusFilter === tab ? 'var(--shadow-sm)' : 'none',
                    fontWeight: statusFilter === tab ? '600' : '400',
                    color: statusFilter === tab ? 'var(--text-primary)' : 'var(--text-secondary)'
                  }}
                  onClick={() => setStatusFilter(tab)}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          
          <button className="btn-primary" onClick={() => setIsAddModalOpen(true)}>+ Add Organization</button>
        </div>
      </div>

      {/* Main Table Grid */}
      <div className="glass-card" style={{ padding: '0' }}>
        {loading ? (
          <p style={{ color: 'var(--text-muted)', padding: '3rem', textAlign: 'center' }}>Loading organizations...</p>
        ) : filteredOrgs.length === 0 ? (
          <div style={{ padding: '4rem 2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🏢</span>
            <h3>No matching organizations found</h3>
            <p style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>Refine your filters or search keyword, or add a new organization.</p>
          </div>
        ) : (
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Organization</th>
                  <th>Subscription</th>
                  <th>Status</th>
                  <th>DB Host / Server</th>
                  <th>WhatsApp Numbers</th>
                  <th>Monthly Quota</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrgs.map(company => (
                  <tr key={company.id}>
                    <td>
                      <div 
                        className="company-info-cell" 
                        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
                        title="Click to view full tenant details"
                        onClick={() => handleViewDetails(company)}
                      >
                        <span className="company-logo-avatar" style={{ 
                          width: '36px', 
                          height: '36px', 
                          borderRadius: 'var(--radius-md)', 
                          backgroundColor: company.status === 'suspended' ? 'var(--border-medium)' : 'var(--accent-primary-glow)', 
                          color: company.status === 'suspended' ? 'var(--text-muted)' : 'var(--accent-primary)',
                          fontWeight: '700',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>{company.name.charAt(0)}</span>
                        <div>
                          <div className="company-name-text" style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{company.name}</div>
                          <div className="company-domain-text" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{company.domain}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${company.plan === 'Enterprise' ? 'badge-indigo' : company.plan === 'Growth Pro' ? 'badge-cyan' : 'badge-amber'}`}>
                        {company.plan}
                      </span>
                    </td>
                    <td>
                      <span 
                        className={`badge ${company.status === 'active' ? 'badge-emerald' : company.status === 'warning' ? 'badge-amber' : 'badge-rose'}`}
                        style={{ cursor: 'pointer' }}
                        title="Click to toggle status"
                        onClick={() => handleToggleStatus(company.id)}
                      >
                        {company.status.toUpperCase()}
                      </span>
                    </td>
                    <td>
                      <div style={{ fontSize: '0.85rem' }}>
                        <code style={{ background: 'var(--bg-tertiary)', padding: '0.15rem 0.35rem', borderRadius: '4px', border: '1px solid var(--border-light)', fontSize: '0.75rem' }}>
                          {company.dbHost}
                        </code>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem' }}>
                        <span style={{ color: company.whatsappStatus === 'connected' ? 'var(--accent-emerald)' : company.whatsappStatus === 'warning' ? 'var(--accent-amber)' : 'var(--accent-rose)' }}>●</span>
                        <span>{company.whatsappNumbers ? company.whatsappNumbers.length : 0} channels</span>
                      </div>
                    </td>
                    <td>
                      <div style={{ width: '120px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>
                          <span>{company.usage || 0}% used</span>
                          <span>{company.limit?.toLocaleString()}</span>
                        </div>
                        <div className="progress-bar-bg" style={{ height: '4px', background: 'var(--border-light)', borderRadius: '2px', overflow: 'hidden' }}>
                          <div 
                            className={`progress-bar-fill ${company.usage > 90 ? 'danger' : company.usage > 70 ? 'warning' : 'success'}`}
                            style={{ 
                              width: `${company.usage || 0}%`, 
                              height: '100%', 
                              backgroundColor: company.usage > 90 ? 'var(--accent-rose)' : company.usage > 70 ? 'var(--accent-amber)' : 'var(--accent-emerald)'
                            }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="table-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                        <button className="action-icon-btn" title="View details" onClick={() => handleViewDetails(company)}>👁️</button>
                        <button className="action-icon-btn" title="Toggle active/suspend" onClick={() => handleToggleStatus(company.id)}>⚠️</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add Organization Modal */}
      {isAddModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: '550px', maxHeight: '90vh', overflowY: 'auto', border: '1px solid var(--border-medium)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1.2rem' }}>Add New Tenant Organization</h3>
              <button 
                onClick={() => setIsAddModalOpen(false)} 
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: 'var(--text-muted)' }}
              >✕</button>
            </div>
            
            <form onSubmit={handleAddOrgSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Organization Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Beta Corp" 
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem' }} 
                    value={newOrg.name}
                    onChange={(e) => setNewOrg({ ...newOrg, name: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Subdomain Prefix</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. beta" 
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem' }} 
                    value={newOrg.domain}
                    onChange={(e) => setNewOrg({ ...newOrg, domain: e.target.value.includes('.conveza.ai') ? e.target.value : `${e.target.value}.conveza.ai` })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Subscription Plan</label>
                  <select 
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem', background: 'var(--bg-tertiary)' }}
                    value={newOrg.plan}
                    onChange={(e) => setNewOrg({ ...newOrg, plan: e.target.value })}
                  >
                    <option value="Starter">Starter ($49/mo)</option>
                    <option value="Growth Pro">Growth Pro ($149/mo)</option>
                    <option value="Enterprise">Enterprise ($499/mo)</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Admin Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="John Doe" 
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem' }} 
                    value={newOrg.adminName}
                    onChange={(e) => setNewOrg({ ...newOrg, adminName: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Admin Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="john@beta.com" 
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem' }} 
                    value={newOrg.adminEmail}
                    onChange={(e) => setNewOrg({ ...newOrg, adminEmail: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Message Quota Limit</label>
                  <input 
                    type="number" 
                    required 
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem' }} 
                    value={newOrg.limit}
                    onChange={(e) => setNewOrg({ ...newOrg, limit: parseInt(e.target.value) })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Database Host</label>
                  <select 
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem', background: 'var(--bg-tertiary)' }}
                    value={newOrg.dbHost}
                    onChange={(e) => setNewOrg({ ...newOrg, dbHost: e.target.value })}
                  >
                    <option value="db-prd-01.local">db-prd-01.local (Primary)</option>
                    <option value="db-prd-02.local">db-prd-02.local (Secondary)</option>
                    <option value="db-prd-03.local">db-prd-03.local (Enterprise HighPerf)</option>
                  </select>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: '1.5rem' }}>
                <button type="button" className="btn-secondary" onClick={() => setIsAddModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn-primary">Create tenant</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Organization Details Modal */}
      {isDetailModalOpen && selectedOrg && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: '750px', maxHeight: '90vh', overflowY: 'auto', border: '1px solid var(--border-medium)', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="company-logo-avatar" style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: 'var(--radius-md)', 
                  backgroundColor: selectedOrg.status === 'suspended' ? 'var(--border-medium)' : 'var(--accent-primary-glow)', 
                  color: selectedOrg.status === 'suspended' ? 'var(--text-muted)' : 'var(--accent-primary)',
                  fontWeight: '700',
                  fontSize: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>{selectedOrg.name.charAt(0)}</span>
                <div>
                  <h3 style={{ fontSize: '1.3rem', lineHeight: 1.1, color: 'var(--text-primary)' }}>{selectedOrg.name}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{selectedOrg.domain}</span>
                </div>
              </div>
              <button 
                onClick={() => setIsDetailModalOpen(false)} 
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.25rem', color: 'var(--text-muted)' }}
              >✕</button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {/* Left Column: Properties & Telemetry */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Core Properties Card */}
                <div style={{ border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1rem', backgroundColor: 'var(--bg-tertiary)' }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.25rem', fontWeight: '600' }}>Core Properties</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Plan Tier:</span>
                      <span className={`badge ${selectedOrg.plan === 'Enterprise' ? 'badge-indigo' : selectedOrg.plan === 'Growth Pro' ? 'badge-cyan' : 'badge-amber'}`} style={{ padding: '0.15rem 0.4rem', fontSize: '0.7rem' }}>
                        {selectedOrg.plan}
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Status:</span>
                      <span className={`badge ${selectedOrg.status === 'active' ? 'badge-emerald' : selectedOrg.status === 'warning' ? 'badge-amber' : 'badge-rose'}`} style={{ padding: '0.15rem 0.4rem', fontSize: '0.7rem' }}>
                        {selectedOrg.status.toUpperCase()}
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Database Host:</span>
                      <code style={{ fontSize: '0.75rem', background: 'var(--bg-card)', padding: '0.15rem 0.35rem', borderRadius: '4px', border: '1px solid var(--border-light)' }}>{selectedOrg.dbHost}</code>
                    </div>
                  </div>
                </div>

                {/* Admin Contact Card */}
                <div style={{ border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1rem', backgroundColor: 'var(--bg-tertiary)' }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.25rem', fontWeight: '600' }}>Administrator Contact</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem' }}>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.1rem' }}>Name:</span>
                      <strong>{selectedOrg.adminName}</strong>
                    </div>
                    <div style={{ marginTop: '0.25rem' }}>
                      <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.1rem' }}>Email Address:</span>
                      <code style={{ fontSize: '0.75rem', wordBreak: 'break-all' }}>{selectedOrg.adminEmail}</code>
                    </div>
                  </div>
                </div>

                {/* Broadcast stats card */}
                <div style={{ border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1rem', backgroundColor: 'var(--bg-tertiary)' }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.25rem', fontWeight: '600' }}>Broadcast Telemetry</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Total Campaigns:</span>
                      <strong>{selectedOrg.totalBroadcasts || 0} campaigns</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Messages Sent:</span>
                      <strong>{selectedOrg.broadcastStats?.sent?.toLocaleString() || 0} messages</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Success Rate:</span>
                      <strong style={{ color: 'var(--accent-emerald)' }}>{selectedOrg.broadcastStats?.successRate || '0%'}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Read Rate:</span>
                      <strong style={{ color: 'var(--accent-cyan)' }}>{selectedOrg.broadcastStats?.readRate || '0%'}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Customer Details & WA Accounts */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Customer tags breakdown */}
                <div style={{ border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1rem', backgroundColor: 'var(--bg-tertiary)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.25rem', fontWeight: '600' }}>
                    <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Customer Segments</h4>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700' }}>
                      Total: {(selectedOrg.totalCustomers || 0).toLocaleString()}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {/* VIPs */}
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.15rem' }}>
                        <span style={{ fontWeight: '500' }}>⭐ VIP Customers</span>
                        <strong>{(selectedOrg.customerTags?.VIP || 0).toLocaleString()}</strong>
                      </div>
                      <div style={{ height: '5px', background: 'var(--border-light)', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ width: `${((selectedOrg.customerTags?.VIP || 0) / (selectedOrg.totalCustomers || 1)) * 100}%`, height: '100%', background: 'var(--accent-primary)' }}></div>
                      </div>
                    </div>
                    {/* Repetitive */}
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.15rem' }}>
                        <span style={{ fontWeight: '500' }}>🔄 Repetitive / Recurring</span>
                        <strong>{(selectedOrg.customerTags?.Repetitive || 0).toLocaleString()}</strong>
                      </div>
                      <div style={{ height: '5px', background: 'var(--border-light)', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ width: `${((selectedOrg.customerTags?.Repetitive || 0) / (selectedOrg.totalCustomers || 1)) * 100}%`, height: '100%', background: 'var(--accent-cyan)' }}></div>
                      </div>
                    </div>
                    {/* Leads */}
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.15rem' }}>
                        <span style={{ fontWeight: '500' }}>🎯 Leads / Prospects</span>
                        <strong>{(selectedOrg.customerTags?.Leads || 0).toLocaleString()}</strong>
                      </div>
                      <div style={{ height: '5px', background: 'var(--border-light)', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ width: `${((selectedOrg.customerTags?.Leads || 0) / (selectedOrg.totalCustomers || 1)) * 100}%`, height: '100%', background: 'var(--accent-amber)' }}></div>
                      </div>
                    </div>
                    {/* Active */}
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.15rem' }}>
                        <span style={{ fontWeight: '500' }}>🟢 Active Engaged</span>
                        <strong>{(selectedOrg.customerTags?.Active || 0).toLocaleString()}</strong>
                      </div>
                      <div style={{ height: '5px', background: 'var(--border-light)', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ width: `${((selectedOrg.customerTags?.Active || 0) / (selectedOrg.totalCustomers || 1)) * 100}%`, height: '100%', background: 'var(--accent-emerald)' }}></div>
                      </div>
                    </div>
                    {/* Inactive */}
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.15rem' }}>
                        <span style={{ fontWeight: '500' }}>⚫ Inactive</span>
                        <strong>{(selectedOrg.customerTags?.Inactive || 0).toLocaleString()}</strong>
                      </div>
                      <div style={{ height: '5px', background: 'var(--border-light)', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ width: `${((selectedOrg.customerTags?.Inactive || 0) / (selectedOrg.totalCustomers || 1)) * 100}%`, height: '100%', background: 'var(--text-muted)' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Accounts details */}
                <div style={{ border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1rem', backgroundColor: 'var(--bg-tertiary)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.25rem', fontWeight: '600' }}>
                    <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>WhatsApp Numbers</h4>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700' }}>
                      {selectedOrg.whatsappNumbers?.length || 0} channels
                    </span>
                  </div>
                  
                  {(!selectedOrg.whatsappNumbers || selectedOrg.whatsappNumbers.length === 0) ? (
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>No active WhatsApp gateway connections linked.</p>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '160px', overflowY: 'auto', paddingRight: '4px' }}>
                      {selectedOrg.whatsappNumbers.map((num, idx) => (
                        <div 
                          key={idx} 
                          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--bg-card)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
                        >
                          <div>
                            <strong style={{ fontSize: '0.8rem', display: 'block' }}>{num.name}</strong>
                            <code style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{num.number}</code>
                          </div>
                          <span className={`badge ${num.status === 'connected' ? 'badge-emerald' : num.status === 'warning' ? 'badge-amber' : 'badge-rose'}`} style={{ fontSize: '0.65rem', padding: '0.15rem 0.35rem' }}>
                            {num.status.toUpperCase()}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: '1.5rem' }}>
              <button className="btn-secondary" onClick={() => setIsDetailModalOpen(false)}>Close Details</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Organizations;
