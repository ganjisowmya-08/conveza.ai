import React, { useState, useEffect } from 'react';
import billingService from '../../services/billingService';

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Modals & Forms State
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  const [newCoupon, setNewCoupon] = useState({ code: '', discount: '', type: 'once' });

  // Tenant Details State
  const [selectedTenantSub, setSelectedTenantSub] = useState(null);

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

  const handleUpdatePlanPrice = (id, newPrice) => {
    if (newPrice < 0) return;
    setPlans(plans.map(p => {
      if (p.id === id) {
        return { ...p, price: newPrice };
      }
      return p;
    }));
  };

  // Filter invoices for selected tenant
  const tenantInvoices = selectedTenantSub
    ? invoices.filter(inv => inv.orgName.toLowerCase() === selectedTenantSub.orgName.toLowerCase())
    : [];

  return (
    <div className="billing-view-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* Loading State */}
      {loading ? (
        <p style={{ color: 'var(--text-muted)', padding: '3rem', textAlign: 'center' }}>Loading billing data...</p>
      ) : (
        <>
          {/* Subscriptions & Coupons Split Grid */}
          <div className="widgets-grid" style={{ marginBottom: '0.25rem' }}>
            
            {/* Left Column - Tenant Subscriptions */}
            <div className="glass-card" style={{ padding: '1.5rem 0 0 0' }}>
              <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', borderBottom: '1px solid var(--border-light)' }}>
                <h3 style={{ fontSize: '1.1rem' }}>Active Tenant Subscriptions</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Real-time billing cycles and plan associations. Click on any tenant to view details.</p>
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
                      <tr 
                        key={sub.id} 
                        style={{ cursor: 'pointer' }}
                        title="Click to view tenant plans and billing details"
                        onClick={() => setSelectedTenantSub(sub)}
                      >
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

            {/* Right Column - Coupon Management */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem' }}>Coupons & Promotions</h3>
                <button className="btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }} onClick={() => setIsCouponModalOpen(true)}>+ Create</button>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Active discount codes for marketing campaigns</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', overflowY: 'auto', flex: 1, maxHeight: '270px' }}>
                {coupons.map((coupon, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '700', color: 'var(--accent-primary)', fontSize: '0.9rem', border: '1px dashed var(--accent-primary)', padding: '0.15rem 0.4rem', borderRadius: '4px', background: 'var(--accent-primary-glow)' }}>
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

          {/* Subscription Cost Adjuster (Placed at the very end after invoices) */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
              <span>⚙️</span> Global Plan Price Adjuster
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Adjust the monthly subscription billing rates for membership tiers. New rates are updated live.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {plans.map(plan => (
                <div 
                  key={plan.id} 
                  className="glass-card" 
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '1rem', 
                    padding: '1.25rem',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>{plan.name} Tier</strong>
                    <span className="badge badge-indigo" style={{ fontSize: '0.65rem' }}>{plan.activeTenants} active tenants</span>
                  </div>

                  {/* Plus and Minus controls */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                    <button 
                      type="button" 
                      className="btn-secondary" 
                      style={{ padding: '0.25rem 0.6rem', fontSize: '0.9rem', fontWeight: '800', lineHeight: 1 }}
                      onClick={() => handleUpdatePlanPrice(plan.id, plan.price - 5)}
                    >
                      -
                    </button>
                    
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem' }}>
                      <span style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-primary)' }}>₹{plan.price.toLocaleString()}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/mo</span>
                    </div>

                    <button 
                      type="button" 
                      className="btn-secondary" 
                      style={{ padding: '0.25rem 0.6rem', fontSize: '0.9rem', fontWeight: '800', lineHeight: 1 }}
                      onClick={() => handleUpdatePlanPrice(plan.id, plan.price + 5)}
                    >
                      +
                    </button>
                  </div>

                  {/* Manual input */}
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <input 
                      type="number" 
                      className="search-input" 
                      style={{ flex: 1, padding: '0.35rem 0.5rem', textAlign: 'center', fontSize: '0.85rem' }} 
                      value={plan.price}
                      onChange={(e) => handleUpdatePlanPrice(plan.id, parseFloat(e.target.value) || 0)}
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>Custom Cost</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Tenant subscription Details Modal */}
      {selectedTenantSub && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: '600px', border: '1px solid var(--border-medium)', padding: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{selectedTenantSub.orgName} – Plan & Billing</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>Detailed billing configuration and invoice telemetry.</p>
              </div>
              <button 
                onClick={() => setSelectedTenantSub(null)} 
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: 'var(--text-muted)' }}
              >✕</button>
            </div>

            {/* Subscription Detail Elements */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'var(--bg-tertiary)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>ACTIVE PRICING TIER</span>
                <strong style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>{selectedTenantSub.plan}</strong>
              </div>
              <div style={{ background: 'var(--bg-tertiary)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>RECURRING PRICE</span>
                <strong style={{ fontSize: '1.05rem', color: 'var(--accent-primary)' }}>{selectedTenantSub.amount}</strong>
              </div>
              <div style={{ background: 'var(--bg-tertiary)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>NEXT BILLING DATE</span>
                <strong>{selectedTenantSub.renewalDate}</strong>
              </div>
              <div style={{ background: 'var(--bg-tertiary)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>SUBSCRIPTION STATUS</span>
                <span className={`badge ${selectedTenantSub.status === 'active' ? 'badge-emerald' : selectedTenantSub.status === 'past_due' ? 'badge-amber' : selectedTenantSub.status === 'suspended' ? 'badge-rose' : 'badge-rose'}`} style={{ marginTop: '0.2rem' }}>
                  {selectedTenantSub.status.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Invoice history inside details */}
            <div style={{ border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <div style={{ padding: '0.75rem 1rem', background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-light)', fontWeight: '600', fontSize: '0.85rem' }}>
                📜 Tenant Invoice History
              </div>
              {tenantInvoices.length === 0 ? (
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', padding: '1.5rem', textAlign: 'center' }}>No invoice payments records found for this organization.</p>
              ) : (
                <div style={{ maxHeight: '180px', overflowY: 'auto' }}>
                  <table className="custom-table" style={{ fontSize: '0.82rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '0.5rem 0.75rem' }}>Invoice ID</th>
                        <th style={{ padding: '0.5rem 0.75rem' }}>Billing Date</th>
                        <th style={{ padding: '0.5rem 0.75rem' }}>Amount</th>
                        <th style={{ padding: '0.5rem 0.75rem' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tenantInvoices.map((inv, idx) => (
                        <tr key={idx}>
                          <td style={{ padding: '0.5rem 0.75rem' }}><code>{inv.id}</code></td>
                          <td style={{ padding: '0.5rem 0.75rem' }}>{inv.date}</td>
                          <td style={{ padding: '0.5rem 0.75rem' }}><strong>{inv.amount}</strong></td>
                          <td style={{ padding: '0.5rem 0.75rem' }}>
                            <span className={`badge ${inv.status === 'paid' ? 'badge-emerald' : 'badge-rose'}`} style={{ fontSize: '0.65rem', padding: '0.1rem 0.35rem' }}>
                              {inv.status.toUpperCase()}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: '1.5rem' }}>
              <button className="btn-secondary" onClick={() => setSelectedTenantSub(null)}>Close Details</button>
            </div>
          </div>
        </div>
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
