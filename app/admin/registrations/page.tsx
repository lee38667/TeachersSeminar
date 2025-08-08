'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RegistrationsManagement() {
  const [registrations, setRegistrations] = useState([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    participationType: '',
    region: '',
    hasAttendedBefore: '',
  });
  const [selectedRegistrations, setSelectedRegistrations] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchRegistrations();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [registrations, filters]);

  const fetchRegistrations = async () => {
    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch('/api/admin/registrations', {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        const data = await response.json();
        setRegistrations(data);
      } else {
        router.push('/admin');
      }
    } catch (error) {
      console.error('Failed to fetch registrations:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = registrations.filter((reg: any) => {
      const matchesSearch = !filters.search || 
        reg.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        reg.email.toLowerCase().includes(filters.search.toLowerCase()) ||
        reg.school.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesType = !filters.participationType || reg.participationType === filters.participationType;
      const matchesRegion = !filters.region || reg.region === filters.region;
      const matchesAttended = !filters.hasAttendedBefore || reg.hasAttendedBefore === filters.hasAttendedBefore;

      return matchesSearch && matchesType && matchesRegion && matchesAttended;
    });

    setFilteredRegistrations(filtered);
  };

  const exportToCSV = () => {
    const headers = [
      'Name', 'Email', 'Phone', 'School', 'Region', 'Role', 'Years Teaching',
      'Participation Type', 'Has Attended Before', 'Presentation Title',
      'Topic Strand', 'Expectations', 'Registration Date'
    ];

    const csvData = filteredRegistrations.map((reg: any) => [
      reg.name,
      reg.email,
      reg.phoneNumber,
      reg.school,
      reg.region,
      reg.role,
      reg.yearsTeaching || '',
      reg.participationType,
      reg.hasAttendedBefore,
      reg.presentationTitle || '',
      reg.topicStrand || '',
      reg.expectations || '',
      new Date(reg.createdAt).toLocaleDateString()
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `registrations-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRegistrations(filteredRegistrations.map((reg: any) => reg._id));
    } else {
      setSelectedRegistrations([]);
    }
  };

  const handleSelectRegistration = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedRegistrations([...selectedRegistrations, id]);
    } else {
      setSelectedRegistrations(selectedRegistrations.filter(regId => regId !== id));
    }
  };

  const sendEmailToSelected = async () => {
    // TODO: Implement bulk email functionality
    alert(`Sending emails to ${selectedRegistrations.length} selected participants...`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-500 angular-icon mx-auto mb-4 animate-pulse"></div>
          <p className="text-gray-600">Loading registrations...</p>
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
                <h1 className="text-2xl font-bold text-gray-900">Registration Management</h1>
                <p className="text-gray-600">{filteredRegistrations.length} registrations</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              {selectedRegistrations.length > 0 && (
                <button
                  onClick={sendEmailToSelected}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white angular-button hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Selected ({selectedRegistrations.length})
                </button>
              )}
              
              <button
                onClick={exportToCSV}
                className="flex items-center px-4 py-2 bg-green-600 text-white angular-button hover:bg-green-700 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export CSV
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white angular-form shadow mb-6">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="form-label">Search</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Name, email, or school..."
                  value={filters.search}
                  onChange={(e) => setFilters({...filters, search: e.target.value})}
                />
              </div>
              
              <div>
                <label className="form-label">Participation Type</label>
                <select
                  className="form-input"
                  value={filters.participationType}
                  onChange={(e) => setFilters({...filters, participationType: e.target.value})}
                >
                  <option value="">All Types</option>
                  <option value="attendee">Attendee</option>
                  <option value="presenter">Presenter</option>
                </select>
              </div>
              
              <div>
                <label className="form-label">Region</label>
                <select
                  className="form-input"
                  value={filters.region}
                  onChange={(e) => setFilters({...filters, region: e.target.value})}
                >
                  <option value="">All Regions</option>
                  <option value="khomas">Khomas</option>
                  <option value="erongo">Erongo</option>
                  <option value="hardap">Hardap</option>
                  <option value="karas">Karas</option>
                  <option value="kavango-east">Kavango East</option>
                  <option value="kavango-west">Kavango West</option>
                  <option value="kunene">Kunene</option>
                  <option value="ohangwena">Ohangwena</option>
                  <option value="omaheke">Omaheke</option>
                  <option value="omusati">Omusati</option>
                  <option value="oshana">Oshana</option>
                  <option value="oshikoto">Oshikoto</option>
                  <option value="otjozondjupa">Otjozondjupa</option>
                  <option value="zambezi">Zambezi</option>
                </select>
              </div>
              
              <div>
                <label className="form-label">Previous Attendance</label>
                <select
                  className="form-input"
                  value={filters.hasAttendedBefore}
                  onChange={(e) => setFilters({...filters, hasAttendedBefore: e.target.value})}
                >
                  <option value="">All</option>
                  <option value="yes">Returning</option>
                  <option value="no">First Time</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Registrations Table */}
        <div className="bg-white angular-form shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedRegistrations.length === filteredRegistrations.length && filteredRegistrations.length > 0}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="form-checkbox"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participant</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School & Region</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Presentation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredRegistrations.map((registration: any) => (
                  <tr key={registration._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedRegistrations.includes(registration._id)}
                        onChange={(e) => handleSelectRegistration(registration._id, e.target.checked)}
                        className="form-checkbox"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{registration.name}</div>
                        <div className="text-sm text-gray-500">{registration.role}</div>
                        {registration.yearsTeaching && (
                          <div className="text-xs text-gray-400">{registration.yearsTeaching} years exp.</div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm text-gray-900">{registration.email}</div>
                        <div className="text-sm text-gray-500">{registration.phoneNumber}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm text-gray-900">{registration.school}</div>
                        <div className="text-sm text-gray-500 capitalize">{registration.region}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          registration.participationType === 'presenter' 
                            ? 'bg-purple-100 text-purple-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {registration.participationType}
                        </span>
                        <div>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            registration.hasAttendedBefore === 'yes' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {registration.hasAttendedBefore === 'yes' ? 'Returning' : 'First Time'}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {registration.participationType === 'presenter' && (
                        <div>
                          <div className="text-sm font-medium text-gray-900">{registration.presentationTitle}</div>
                          {registration.topicStrand && (
                            <div className="text-xs text-gray-500">{registration.topicStrand}</div>
                          )}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(registration.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => {/* TODO: View details modal */}}
                        className="text-blue-600 hover:text-blue-900 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
