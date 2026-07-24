import React, { useState, useEffect } from 'react';
import billingService from '../../services/billingService';

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Forms State
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  const [newCoupon, setNewCoupon] = useState({ code: '', discount: '', type: 'once' });

  useEffect(() => {
    const loadBillingData = async () => {
      const plansList = await billingService.getPlans();
      const subsList = await billingService.getSubscriptions();
      const invsList = await billingService.getInvoices();
      const couponsList = await billingService.getCoupons();
      
      setPlans(plansList);
      setSubscriptions(subsList);
      setInvoices(invsList);
      setCoupons(couponsList);
      setLoading(false);
    };
    loadBillingData();
  }, []);

  const handleAddCouponSubmit = (e) => {
    e.preventDefault();
    const createdCoupon = {
      ...newCoupon,
      active: true,
      usageCount: 0
    };
    setCoupons([...coupons, createdCoupon]);
    setIsCouponModalOpen(false);
    setNewCoupon({ code: '', discount: '', type: 'once' });
  };

  const handleToggleCoupon = (code) => {
    setCoupons(coupons.map(c => {
      if (c.code === code) return { ...c, active: !c.active };
      return c;
    }));
  };

  return (
    <div className="billing-view-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Loading State */}
      {loading ? (
        <p style={{ color: 'var(--text-muted)', padding: '3rem', textAlign: 'center' }}>Loading billing data...</p>
      ) : (
        <>
          {/* Active Plans Cards */}
          <div>
            <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🏷️</span> Active Pricing Plans
            </h3>
            <div className="dashboard-grid">
              {plans.map(plan => (
                <div key={plan.id} className="glass-card stat-card glow-primary" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', minHeight: '260px' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{plan.name}</h4>
                      <span className="badge badge-indigo">{plan.activeTenants} tenants active</span>
                    </div>
                    <div style={{ margin: '1rem 0' }}>
                      <span style={{ fontSize: '2.25rem', fontWeight: '800' }}>${plan.price}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}> / {plan.interval}</span>
                    </div>
                    <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc', color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {plan.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="btn-secondary" style={{ width: '100%', marginTop: '1.5rem', fontSize: '0.85rem' }}>Edit limits & price</button>
                </div>
              ))}
            </div>
          </div>

          {/* Subscriptions & Invoices Split Grid */}
          <div className="widgets-grid">
            {/* Left Column - Tenant Subscriptions */}
            <div className="glass-card" style={{ padding: '1.5rem 0 0 0' }}>
              <div style={{ padding: '0 1.5rem 1rem 1.5rem', borderBottom: '1px solid var(--border-light)' }}>
                <h3 style={{ fontSize: '1.1rem' }}>Active Tenant Subscriptions</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Real-time billing cycles and plan associations</p>
              </div>
              <div className="table-container">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Organization</th>
                      <th>Plan Tier</th>
                      <th>Status</th>
                      <th>Amount</th>
                      <th>Next Renewal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscriptions.map(sub => (
                      <tr key={sub.id}>
                        <td><strong>{sub.orgName}</strong></td>
                        <td>
                          <span className={`badge ${sub.plan === 'Enterprise' ? 'badge-indigo' : sub.plan === 'Growth Pro' ? 'badge-cyan' : 'badge-amber'}`}>
                            {sub.plan}
                          </span>
                        </td>
                        <td>
                          <span className={`badge ${sub.status === 'active' ? 'badge-emerald' : sub.status === 'past_due' ? 'badge-amber' : 'badge-rose'}`}>
                            {sub.status.replace('_', ' ').toUpperCase()}
                          </span>
                        </td>
                        <td><code>{sub.amount}</code></td>
                        <td>{sub.renewalDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column - System Health Alerts / Coupon Management */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem' }}>Coupons & Promotions</h3>
                <button className="btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }} onClick={() => setIsCouponModalOpen(true)}>+ Create</button>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Active discount codes for marketing campaigns</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', overflowY: 'auto', flex: 1 }}>
                {coupons.map((coupon, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontFamily: 'monospace', fontWeight: '700', color: 'var(--accent-primary)', fontSize: '0.9rem', border: '1px dashed var(--accent-primary)', padding: '0.15rem 0.4rem', borderRadius: '4px', background: 'var(--accent-primary-glow)' }}>
                        {coupon.code}
                      </span>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-primary)', marginTop: '0.35rem' }}>{coupon.discount}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{coupon.usageCount} times used • {coupon.type === 'once' ? 'Single Use' : 'Recurring'}</div>
                    </div>
                    <span 
                      className={`badge ${coupon.active ? 'badge-emerald' : 'badge-rose'}`} 
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleToggleCoupon(coupon.code)}
                    >
                      {coupon.active ? 'ACTIVE' : 'INACTIVE'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Invoices Feed */}
          <div className="glass-card" style={{ padding: '1.5rem 0 0 0' }}>
            <div style={{ padding: '0 1.5rem 1rem 1.5rem', borderBottom: '1px solid var(--border-light)' }}>
              <h3 style={{ fontSize: '1.1rem' }}>Recent Transaction Invoices</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Latest payments processed via Stripe billing module</p>
            </div>
            <div className="table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Invoice ID</th>
                    <th>Organization</th>
                    <th>Billing Date</th>
                    <th>Amount Paid</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((inv, idx) => (
                    <tr key={idx}>
                      <td><code style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{inv.id}</code></td>
                      <td><strong>{inv.orgName}</strong></td>
                      <td>{inv.date}</td>
                      <td><strong>{inv.amount}</strong></td>
                      <td>
                        <span className={`badge ${inv.status === 'paid' ? 'badge-emerald' : 'badge-rose'}`}>
                          {inv.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Create Coupon Modal */}
      {isCouponModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: '400px', border: '1px solid var(--border-medium)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.1rem' }}>Create Promo Code</h3>
              <button 
                onClick={() => setIsCouponModalOpen(false)} 
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.1rem', color: 'var(--text-muted)' }}
              >✕</button>
            </div>
            
            <form onSubmit={handleAddCouponSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Coupon Code</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. SUMMER50" 
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem' }} 
                    value={newCoupon.code}
                    onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value.toUpperCase() })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Discount Amount/Label</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. 50% off first month" 
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem' }} 
                    value={newCoupon.discount}
                    onChange={(e) => setNewCoupon({ ...newCoupon, discount: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Discount Type</label>
                  <select 
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem', background: 'var(--bg-tertiary)' }}
                    value={newCoupon.type}
                    onChange={(e) => setNewCoupon({ ...newCoupon, type: e.target.value })}
                  >
                    <option value="once">Apply Once</option>
                    <option value="recurring">Recurring (Monthly)</option>
                  </select>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                <button type="button" className="btn-secondary" onClick={() => setIsCouponModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn-primary">Generate Code</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Plans;
