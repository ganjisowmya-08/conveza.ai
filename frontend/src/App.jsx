import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Marketing and Auth components from main branch
import Navbar from "./components/Navbar";
import Hero from "./pages/marketing/Home/Hero";
import Features from "./pages/marketing/Home/Features";
import Solutions from "./pages/marketing/Home/Solutions";
import Pricing from "./pages/marketing/Home/Pricing";
import Customers from "./pages/marketing/Home/Customers";
import Resources from "./pages/marketing/Home/Resources";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/Signup";

// Superadmin layouts and components from admin branch
import AdminLayout from './modules/superadmin/layouts/AdminLayout';
import Dashboard from './modules/superadmin/pages/Dashboard/Dashboard';
import organizationService from './modules/superadmin/services/organizationService';
import billingService from './modules/superadmin/services/billingService';
import analyticsService from './modules/superadmin/services/analyticsService';
import whatsappService from './modules/superadmin/services/whatsappService';
import integrationService from './modules/superadmin/services/integrationService';
import supportService from './modules/superadmin/services/supportService';
import settingsService from './modules/superadmin/services/settingsService';
import dashboardService from './modules/superadmin/services/dashboardService';
import './modules/superadmin/styles/globals.css';

function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  
  // Data states for tabs
  const [tabLoading, setTabLoading] = useState(false);
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [plans, setPlans] = useState([]);
  const [gateways, setGateways] = useState([]);
  const [waQueue, setWaQueue] = useState({ connectionStatus: 'offline', queueLoad: '0%' });
  const [campaignStats, setCampaignStats] = useState({ successRate: '0%', readRate: '0%', totalSent: '0' });
  const [recommendations, setRecommendations] = useState([]);
  const [integrations, setIntegrations] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [auditLogs, setAuditLogs] = useState([]);
  const [settings, setSettings] = useState({ rootDomain: '', adminEmail: '' });

  // Fetch data dynamically depending on active tab
  useEffect(() => {
    const loadTabContent = async () => {
      setTabLoading(true);
      try {
        switch (currentTab) {
          case 'organizations':
            const orgs = await organizationService.getOrganizations();
            setOrganizations(orgs);
            if (orgs.length > 0) {
              setSelectedOrg(orgs[0]);
            } else {
              setSelectedOrg(null);
            }
            break;
          case 'billing':
            const planList = await billingService.getPlans();
            setPlans(planList);
            break;
          case 'whatsapp':
            const gws = await whatsappService.getGateways();
            const queue = await whatsappService.getQueueStatus();
            setGateways(gws);
            setWaQueue(queue);
            break;
          case 'crm':
            const stats = await analyticsService.getCampaignStats();
            setCampaignStats(stats);
            break;
          case 'ai':
            const recs = await analyticsService.getAIRecommendations();
            setRecommendations(recs);
            break;
          case 'integrations':
            const apps = await integrationService.getInstalledApps();
            setIntegrations(apps);
            break;
          case 'support':
            const tix = await supportService.getTickets();
            setTickets(tix);
            break;
          case 'security':
            const logs = await dashboardService.getAuditLogs();
            setAuditLogs(logs);
            break;
          case 'settings':
            const confs = await settingsService.getSettings();
            setSettings(confs);
            break;
          default:
            break;
        }
      } catch (e) {
        console.error("Error loading tab dataset:", e);
      }
      setTabLoading(false);
    };

    loadTabContent();
  }, [currentTab]);

  const renderSuperAdminContent = () => {
    if (tabLoading) {
      return (
        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
          <p style={{ color: 'var(--text-muted)' }}>Fetching dashboard parameters...</p>
        </div>
      );
    }

    switch (currentTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'organizations':
        return (
          <div className="organizations-tab-split" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1.5rem', alignItems: 'start' }}>
            {/* Left Panel: Table List */}
            <div className="glass-card">
              <div className="widget-header">
                <div className="widget-title-area">
                  <h3>Organizations Directory</h3>
                  <p className="widget-subtitle">Manage all workspaces, subscriptions, and databases</p>
                </div>
              </div>
              
              {organizations.length === 0 ? (
                <div style={{ padding: '3rem 1.5rem', textAlign: 'center', color: 'var(--text-muted)', border: '1px dashed var(--border-medium)', borderRadius: 'var(--radius-md)' }}>
                  <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>🏢</span>
                  <strong>No tenant organizations configured</strong>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Create organization records in the database to bind them here.</p>
                </div>
              ) : (
                <div className="table-container">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>Organization</th>
                        <th>Plan</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {organizations.map(org => (
                        <tr 
                          key={org.id} 
                          onClick={() => setSelectedOrg(org)} 
                          style={{ cursor: 'pointer', backgroundColor: selectedOrg?.id === org.id ? 'var(--bg-tertiary)' : '' }}
                        >
                          <td>
                            <div className="company-info-cell">
                              <span className="company-logo-avatar">{org.name.charAt(0)}</span>
                              <div>
                                <div className="company-name-text">{org.name}</div>
                                <div className="company-domain-text">{org.domain}</div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className={`badge ${org.plan === 'Enterprise' ? 'badge-indigo' : org.plan === 'Growth Pro' ? 'badge-cyan' : 'badge-amber'}`}>
                              {org.plan}
                            </span>
                          </td>
                          <td>
                            <span className={`badge ${org.status === 'active' ? 'badge-emerald' : org.status === 'warning' ? 'badge-amber' : 'badge-rose'}`}>
                              {org.status.toUpperCase()}
                            </span>
                          </td>
                          <td>
                            <button className="action-icon-btn" title="Inspect Stats" style={{ color: 'var(--accent-primary)', borderColor: selectedOrg?.id === org.id ? 'var(--accent-primary)' : '' }}>
                              🔍
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Right Panel: Detail Drawer */}
            {selectedOrg ? (
              <div className="glass-card" style={{ border: '1px solid var(--border-accent)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
                  <span className="company-logo-avatar" style={{ width: '42px', height: '42px', fontSize: '1.2rem', backgroundColor: 'var(--accent-primary-glow)', color: 'var(--accent-primary)' }}>
                    {selectedOrg.name.charAt(0)}
                  </span>
                  <div>
                    <h3 style={{ fontSize: '1.25rem' }}>{selectedOrg.name}</h3>
                    <code style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{selectedOrg.domain}</code>
                  </div>
                </div>

                {/* Section 1: Overview */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Administrator</span>
                    <strong style={{ fontSize: '0.9rem' }}>{selectedOrg.adminName}</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block' }}>{selectedOrg.adminEmail}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Database Host</span>
                    <code style={{ fontSize: '0.85rem' }}>{selectedOrg.dbHost}</code>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Team Seats</span>
                    <strong style={{ fontSize: '0.9rem' }}>{selectedOrg.teamMembers} members</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Monthly Limit</span>
                    <strong style={{ fontSize: '0.9rem' }}>{selectedOrg.limit.toLocaleString()}</strong>
                  </div>
                </div>

                {/* Section 2: WhatsApp Channels */}
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span>💬</span> WhatsApp Numbers ({selectedOrg.whatsappNumbers?.length || 0})
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {selectedOrg.whatsappNumbers?.map((num, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-primary)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                        <div>
                          <strong>{num.number}</strong>
                          <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', display: 'block' }}>{num.name}</span>
                        </div>
                        <span className={`badge ${num.status === 'connected' ? 'badge-emerald' : num.status === 'warning' ? 'badge-amber' : 'badge-rose'}`}>
                          {num.status.toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 3: Customer Metrics & Tag counts */}
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span>👥</span> Customer Metrics
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                    Total active customers: <strong>{selectedOrg.totalCustomers?.toLocaleString() || 0}</strong>
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {Object.entries(selectedOrg.customerTags || {}).map(([tag, count]) => (
                      <div key={tag} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'var(--bg-tertiary)', padding: '0.3rem 0.6rem', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>#{tag}:</span>
                        <strong>{count.toLocaleString()}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 4: Campaigns Broadcast Performance */}
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span>📢</span> Campaign Broadcasts
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
                    <div style={{ background: 'var(--bg-primary)', padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Campaigns</span>
                      <strong style={{ fontSize: '1rem', color: 'var(--accent-primary)' }}>{selectedOrg.totalBroadcasts}</strong>
                    </div>
                    <div style={{ background: 'var(--bg-primary)', padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Read Rate</span>
                      <strong style={{ fontSize: '1rem', color: 'var(--accent-cyan)' }}>{selectedOrg.broadcastStats?.readRate}</strong>
                    </div>
                    <div style={{ background: 'var(--bg-primary)', padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Success Rate</span>
                      <strong style={{ fontSize: '1rem', color: 'var(--accent-emerald)' }}>{selectedOrg.broadcastStats?.successRate}</strong>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="glass-card" style={{ textAlign: 'center', padding: '3rem 1.5rem', color: 'var(--text-muted)' }}>
                <p>Select an organization from the directory to inspect its metrics.</p>
              </div>
            )}
          </div>
        );
      case 'billing':
        return (
          <div className="glass-card">
            <h2>Subscription Plan Tiers</h2>
            <p style={{ color: 'var(--text-muted)', margin: '0.5rem 0 1.5rem 0' }}>
              Configure base thresholds, pricing models, and coupon codes for SaaS tenants.
            </p>
            {plans.length === 0 ? (
              <div style={{ padding: '3rem 1.5rem', textAlign: 'center', color: 'var(--text-muted)', border: '1px dashed var(--border-medium)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>💳</span>
                <strong>No active plan tiers defined</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Please define SaaS subscription products in your database backend.</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                {plans.map(plan => (
                  <div key={plan.id} className="glass-card" style={{ border: '1px solid var(--border-medium)' }}>
                    <h3>{plan.name}</h3>
                    <h2 style={{ margin: '1rem 0', color: 'var(--accent-primary)' }}>${plan.price}<span style={{ fontSize: '1rem' }}>/mo</span></h2>
                    <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <li>✓ Gateways: {plan.gateways}</li>
                      <li>✓ Limit: {plan.limit}</li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 'whatsapp':
        return (
          <div className="glass-card">
            <h2>WhatsApp API Gateway Hub</h2>
            <p style={{ color: 'var(--text-muted)', margin: '0.5rem 0 1.5rem 0' }}>
              Real-time message routing logs, Meta app approvals, and webhook queue state.
            </p>
            
            <div className="status-item" style={{ marginBottom: '1.5rem' }}>
              <span className={`status-indicator ${waQueue.connectionStatus === 'online' ? 'online' : 'offline'}`}></span>
              <strong>Meta API Server connection status: {waQueue.connectionStatus.toUpperCase()}</strong>
            </div>

            {gateways.length === 0 ? (
              <div style={{ padding: '3rem 1.5rem', textAlign: 'center', color: 'var(--text-muted)', border: '1px dashed var(--border-medium)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>💬</span>
                <strong>No WhatsApp phone gateways active</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Link your Meta developer app credentials to start dispatching messaging webhooks.</p>
              </div>
            ) : (
              <div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Queue Load: <strong>{waQueue.queueLoad}</strong>
                </p>
              </div>
            )}
          </div>
        );
      case 'crm':
        return (
          <div className="glass-card">
            <h2>Campaigns & Marketing Broadcasts</h2>
            <p style={{ color: 'var(--text-muted)', margin: '0.5rem 0 1.5rem 0' }}>
              Global overview of active campaigns, average read rates, and click engagement indexes.
            </p>
            
            <div className="dashboard-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <div className="glass-card">
                <h4>Broadcast Success Rate</h4>
                <h2 style={{ color: 'var(--accent-emerald)', marginTop: '0.5rem' }}>{campaignStats.successRate}</h2>
              </div>
              <div className="glass-card">
                <h4>Average Read Rate</h4>
                <h2 style={{ color: 'var(--accent-cyan)', marginTop: '0.5rem' }}>{campaignStats.readRate}</h2>
              </div>
              <div className="glass-card">
                <h4>Total Messages Sent</h4>
                <h2 style={{ color: 'var(--accent-violet)', marginTop: '0.5rem' }}>{campaignStats.totalSent}</h2>
              </div>
            </div>
          </div>
        );
      case 'ai':
        return (
          <div className="glass-card">
            <h2>AI Recommendation Dashboard</h2>
            <p style={{ color: 'var(--text-muted)', margin: '0.5rem 0 1.5rem 0' }}>
              Automated intelligence insights identifying high-churn tenants and optimizing routing limits.
            </p>
            {recommendations.length === 0 ? (
              <div style={{ padding: '3rem 1.5rem', textAlign: 'center', color: 'var(--text-muted)', border: '1px dashed var(--border-medium)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>🤖</span>
                <strong>No intelligence recommendations active</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>AI recommendation models will generate insights as message logs accumulate.</p>
              </div>
            ) : (
              recommendations.map(rec => (
                <div key={rec.id} className={`alert-item border-${rec.type}`} style={{ background: 'rgba(255,255,255,0.01)', marginBottom: '0.75rem' }}>
                  <div>
                    <strong>{rec.title}</strong>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2.rem' }}>
                      {rec.message}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        );
      case 'integrations':
        return (
          <div className="glass-card">
            <h2>Meta Integration Marketplace</h2>
            <p style={{ color: 'var(--text-muted)', margin: '0.5rem 0 1.5rem 0' }}>
              Installed applications and external API gateway hooks.
            </p>
            {integrations.length === 0 ? (
              <div style={{ padding: '3rem 1.5rem', textAlign: 'center', color: 'var(--text-muted)', border: '1px dashed var(--border-medium)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>🔌</span>
                <strong>No integrations connected</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Access Shopify, HubSpot, or custom webhook keys to expand tenant workspaces.</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                {integrations.map(app => (
                  <div key={app.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '2.5rem' }}>🔌</span>
                    <h4>{app.name}</h4>
                    <span className="badge badge-emerald">{app.status.toUpperCase()}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 'support':
        return (
          <div className="glass-card">
            <h2>Support Tickets Queue</h2>
            <p style={{ color: 'var(--text-muted)', margin: '0.5rem 0 1.5rem 0' }}>
              System issue submissions from tenant administration panels.
            </p>
            {tickets.length === 0 ? (
              <div style={{ padding: '3rem 1.5rem', textAlign: 'center', color: 'var(--text-muted)', border: '1px dashed var(--border-medium)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>🎫</span>
                <strong>All tickets cleared</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>System health stands at 100% operational. No tickets in queue.</p>
              </div>
            ) : (
              <div>
                <p>Support Queue: {tickets.length} open tickets.</p>
              </div>
            )}
          </div>
        );
      case 'security':
        return (
          <div className="glass-card">
            <h2>Security Audit Logs</h2>
            <p style={{ color: 'var(--text-muted)', margin: '0.5rem 0 1.5rem 0' }}>
              Immutable action trails for compliance and billing validation.
            </p>
            {auditLogs.length === 0 ? (
              <div style={{ padding: '3rem 1.5rem', textAlign: 'center', color: 'var(--text-muted)', border: '1px dashed var(--border-medium)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>🛡️</span>
                <strong>No audit logs recorded</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Security logs will populate as superadmin operations are performed.</p>
              </div>
            ) : (
              <pre style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: 'var(--radius-md)', color: 'var(--text-primary)', fontSize: '0.85rem', overflowX: 'auto', border: '1px solid var(--border-light)' }}>
                {auditLogs.map(log => `[${log.time}] - USER ${log.admin}: ${log.action}`).join('\n')}
              </pre>
            )}
          </div>
        );
      case 'settings':
        return (
          <div className="glass-card">
            <h2>System Settings</h2>
            <p style={{ color: 'var(--text-muted)', margin: '0.5rem 0 1.5rem 0' }}>
              Configure global app domain boundaries, SMTP servers, and payment hooks.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>System Root Domain</label>
                <input type="text" placeholder="e.g. yourdomain.com" defaultValue={settings.rootDomain} className="search-input" style={{ width: '100%', paddingLeft: '0.75rem' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>Global Admin Email</label>
                <input type="email" placeholder="e.g. admin@yourdomain.com" defaultValue={settings.adminEmail} className="search-input" style={{ width: '100%', paddingLeft: '0.75rem' }} />
              </div>
              <button className="btn-primary" style={{ width: 'fit-content' }}>Save Configurations</button>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  const isSuperAdmin = window.location.pathname.startsWith('/superadmin') || window.location.hash.startsWith('#/superadmin');

  return (
    <Router>
      {!isSuperAdmin && <Navbar />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/features" element={<Features />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route 
          path="/superadmin" 
          element={
            <AdminLayout currentTab={currentTab} setCurrentTab={setCurrentTab}>
              {renderSuperAdminContent()}
            </AdminLayout>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;