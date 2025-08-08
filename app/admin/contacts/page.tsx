'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactManagement() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    status: '',
  });
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [contacts, filters]);

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch('/api/admin/contacts', {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      } else {
        router.push('/admin');
      }
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = contacts.filter((contact: any) => {
      const matchesSearch = !filters.search || 
        contact.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        contact.email.toLowerCase().includes(filters.search.toLowerCase()) ||
        contact.subject.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesStatus = !filters.status || contact.status === filters.status;

      return matchesSearch && matchesStatus;
    });

    setFilteredContacts(filtered);
  };

  const updateContactStatus = async (id: string, status: string) => {
    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'PATCH',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });

      if (response.ok) {
        fetchContacts(); // Refresh the list
      }
    } catch (error) {
      console.error('Failed to update contact status:', error);
    }
  };

  const markAsRead = (id: string) => updateContactStatus(id, 'read');
  const markAsReplied = (id: string) => updateContactStatus(id, 'replied');

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-teal-500 angular-icon mx-auto mb-4 animate-pulse"></div>
          <p className="text-gray-600">Loading contact messages...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <button
                onClick={() => router.push('/admin')}
                className="mr-4 p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Contact Messages</h1>
                <p className="text-gray-600">{filteredContacts.length} messages</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white angular-form shadow mb-6">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Search</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Name, email, or subject..."
                  value={filters.search}
                  onChange={(e) => setFilters({...filters, search: e.target.value})}
                />
              </div>
              
              <div>
                <label className="form-label">Status</label>
                <select
                  className="form-input"
                  value={filters.status}
                  onChange={(e) => setFilters({...filters, status: e.target.value})}
                >
                  <option value="">All Status</option>
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Messages */}
        <div className="space-y-4">
          {filteredContacts.map((contact: any) => (
            <div key={contact._id} className="bg-white angular-form shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{contact.subject}</h3>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        contact.status === 'new' ? 'bg-red-100 text-red-800' :
                        contact.status === 'read' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {contact.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="mr-4">{contact.name}</span>
                      
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                      <span className="mr-4">{contact.email}</span>
                      
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{new Date(contact.createdAt).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded border">
                      <p className="text-gray-700 whitespace-pre-wrap">{contact.message}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <a
                    href={`mailto:${contact.email}?subject=Re: ${contact.subject}`}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white angular-button hover:bg-blue-700 transition-colors text-sm"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Reply
                  </a>
                  
                  {contact.status === 'new' && (
                    <button
                      onClick={() => markAsRead(contact._id)}
                      className="flex items-center px-4 py-2 bg-yellow-600 text-white angular-button hover:bg-yellow-700 transition-colors text-sm"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Mark as Read
                    </button>
                  )}
                  
                  {contact.status !== 'replied' && (
                    <button
                      onClick={() => markAsReplied(contact._id)}
                      className="flex items-center px-4 py-2 bg-green-600 text-white angular-button hover:bg-green-700 transition-colors text-sm"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Mark as Replied
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {filteredContacts.length === 0 && (
            <div className="bg-white angular-form shadow p-8 text-center">
              <div className="w-16 h-16 bg-gray-200 angular-icon mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No messages found</h3>
              <p className="text-gray-600">No contact messages match your current filters.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
