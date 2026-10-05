import React, { useState } from 'react';

export const ContactView: React.FC = () => {
  // Replace with your Formspree Form ID from https://formspree.io
  const FORMSPREE_FORM_ID = 'YOUR_FORM_ID';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    facility: '',
    serviceType: 'Medical Specimen Transport',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formspree.io/f/mjygvzze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          facility: '',
          serviceType: 'Medical Specimen Transport',
          message: '',
        });
      } else {
        const data = await response.json();
        throw new Error(data?.error || 'Failed to submit form. Please check requirements.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(
        err.message || 'An error occurred while sending your request. Please contact dispatch directly.'
      );
    }
  };

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Dispatch & Route Inquiry</h2>
        <p className="text-gray-600">
          Active Dispatch Desk (24/7):{' '}
          <a href="tel:9285471058" className="font-semibold text-blue-600 hover:underline">
            928-547-1058
          </a>{' '}
          |{' '}
          <a href="mailto:Info@omneecourier.com" className="font-semibold text-blue-600 hover:underline">
            Info@omneecourier.com
          </a>
        </p>
      </div>

      {status === 'success' ? (
        <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Inquiry Submitted Successfully</h3>
          <p>Thank you for reaching out. Our Flagstaff dispatch team will confirm your request shortly.</p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded text-sm">
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="jane@clinic.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="928-555-0199"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Facility / Practice Name</label>
              <input
                type="text"
                name="facility"
                value={formData.facility}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Coconino Medical Clinic"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Medical Specimen Transport">Medical Specimen Transport (Mon–Fri 5PM–6AM)</option>
              <option value="Veterinary Diagnostic Routes">Veterinary Diagnostic Routes (Daily Sweeps)</option>
              <option value="STAT Emergency Dispatches">STAT Emergency Dispatches (24/7)</option>
              <option value="Custom Account Inquiry">Professional Account / Custom Route Setup</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message / Pickup Details *</label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Provide pickup location, time sensitivity, temperature requirements (ambient, refrigerated, frozen)..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 disabled:opacity-50 transition duration-150"
          >
            {status === 'submitting' ? 'Submitting Inquiry...' : 'Submit Inquiry'}
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactView;
