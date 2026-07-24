import React, { useState, useEffect } from 'react';
import supportService from '../../services/supportService';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selectedTicket, setSelectedTicket] = useState(null);
  
  // Reply Form State
  const [replyMessage, setReplyMessage] = useState('');

  useEffect(() => {
    const fetchTickets = async () => {
      const data = await supportService.getTickets();
      setTickets(data);
      setLoading(false);
    };
    fetchTickets();
  }, []);

  const handleReplySubmit = (e) => {
    e.preventDefault();
    alert(`Reply sent to ${selectedTicket.customer}: "${replyMessage}"`);
    // Update local ticket status to 'pending' as we waiting for client response
    setTickets(tickets.map(t => {
      if (t.id === selectedTicket.id) {
        return { ...t, status: 'pending' };
      }
      return t;
    }));
    setReplyMessage('');
    setSelectedTicket(null);
  };

  const handleCloseTicket = (id) => {
    setTickets(tickets.map(t => {
      if (t.id === id) return { ...t, status: 'closed' };
      return t;
    }));
    if (selectedTicket && selectedTicket.id === id) {
      setSelectedTicket({ ...selectedTicket, status: 'closed' });
    }
  };

  const filteredTickets = tickets.filter(t => {
    if (filter === 'all') return true;
    return t.status === filter;
  });

  return (
    <div className="tickets-view-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Control tab */}
      <div className="glass-card" style={{ padding: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem' }}>Tenant Support Tickets</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Urgent support queries from individual organizations administrators</p>
          </div>
          
          <div style={{ display: 'flex', gap: '0.35rem', background: 'var(--bg-tertiary)', padding: '0.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            {['all', 'open', 'pending', 'closed'].map(status => (
              <button
                key={status}
                className={`btn-secondary ${filter === status ? 'active' : ''}`}
                style={{ 
                  padding: '0.4rem 0.8rem', 
                  fontSize: '0.8rem',
                  border: 'none', 
                  borderRadius: 'var(--radius-sm)',
                  background: filter === status ? 'var(--bg-card)' : 'transparent',
                  fontWeight: filter === status ? '600' : '400',
                  color: filter === status ? 'var(--text-primary)' : 'var(--text-secondary)'
                }}
                onClick={() => setFilter(status)}
              >
                {status.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main List */}
      <div className="glass-card" style={{ padding: '0' }}>
        {loading ? (
          <p style={{ color: 'var(--text-muted)', padding: '3rem', textAlign: 'center' }}>Loading tickets...</p>
        ) : filteredTickets.length === 0 ? (
          <div style={{ padding: '4rem 2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🎫</span>
            <h3>No tickets found</h3>
            <p style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>All customer concerns in this filter are solved!</p>
          </div>
        ) : (
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Ticket ID</th>
                  <th>Customer Org</th>
                  <th>Subject</th>
                  <th>Priority</th>
                  <th>Assignee</th>
                  <th>Created</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTickets.map(ticket => (
                  <tr key={ticket.id}>
                    <td><code style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{ticket.id}</code></td>
                    <td><strong>{ticket.customer}</strong></td>
                    <td><span style={{ cursor: 'pointer', hover: 'underline' }} onClick={() => setSelectedTicket(ticket)}>{ticket.subject}</span></td>
                    <td>
                      <span className={`badge ${ticket.priority === 'critical' ? 'badge-rose' : ticket.priority === 'high' ? 'badge-rose' : ticket.priority === 'medium' ? 'badge-amber' : 'badge-cyan'}`} style={{ opacity: ticket.priority === 'critical' ? 1 : 0.85 }}>
                        {ticket.priority.toUpperCase()}
                      </span>
                    </td>
                    <td>{ticket.assignedTo}</td>
                    <td style={{ fontSize: '0.85rem' }}>{ticket.createdAt}</td>
                    <td>
                      <span className={`badge ${ticket.status === 'open' ? 'badge-rose' : ticket.status === 'pending' ? 'badge-amber' : 'badge-emerald'}`}>
                        {ticket.status.toUpperCase()}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div className="table-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.35rem' }}>
                        <button className="btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }} onClick={() => setSelectedTicket(ticket)}>Reply</button>
                        {ticket.status !== 'closed' && (
                          <button className="btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', borderColor: 'var(--border-medium)' }} onClick={() => handleCloseTicket(ticket.id)}>Resolve</button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Ticket Details & Reply Overlay */}
      {selectedTicket && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: '550px', border: '1px solid var(--border-medium)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
              <div>
                <span className="badge badge-indigo" style={{ marginBottom: '0.25rem' }}>{selectedTicket.id}</span>
                <h3 style={{ fontSize: '1.1rem' }}>{selectedTicket.subject}</h3>
              </div>
              <button 
                onClick={() => setSelectedTicket(null)} 
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.1rem', color: 'var(--text-muted)' }}
              >✕</button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <span>From: <strong>{selectedTicket.customer}</strong></span>
                <span>Priority: <strong style={{ color: selectedTicket.priority === 'critical' || selectedTicket.priority === 'high' ? 'var(--accent-rose)' : 'var(--accent-amber)' }}>{selectedTicket.priority.toUpperCase()}</strong></span>
              </div>
              
              {/* Org Message */}
              <div style={{ backgroundColor: 'var(--bg-tertiary)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontSize: '0.85rem', lineHeight: 1.4, color: 'var(--text-primary)' }}>
                {selectedTicket.message}
              </div>

              {/* Reply field */}
              {selectedTicket.status !== 'closed' ? (
                <form onSubmit={handleReplySubmit}>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: '500' }}>Admin Reply Message</label>
                  <textarea 
                    required 
                    rows={4}
                    placeholder="Type your response to the organization administrator here..." 
                    className="search-input" 
                    style={{ width: '100%', paddingLeft: '0.75rem', height: '100px', resize: 'vertical', fontFamily: 'var(--font-sans)', fontSize: '0.85rem' }} 
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                  />
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem' }}>
                    <button type="button" className="btn-secondary" style={{ borderColor: 'var(--accent-rose)', color: 'var(--accent-rose)' }} onClick={() => handleCloseTicket(selectedTicket.id)}>Close Ticket</button>
                    <button type="submit" className="btn-primary">Send Response</button>
                  </div>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'rgba(16, 185, 129, 0.08)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(16, 185, 129, 0.15)', color: 'var(--accent-emerald)', fontSize: '0.85rem', fontWeight: '500' }}>
                  This support ticket is marked as RESOLVED/CLOSED. No further actions required.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tickets;
