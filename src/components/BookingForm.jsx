import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = ({ packageId, packageTitle }) => {
    const [formData, setFormData] = useState({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        travelDate: '',
        travelers: 1
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            // In a real app, use the actual API endpoint
            // await axios.post(`${import.meta.env.VITE_API_URL}/api/bookings`, { ...formData, package: packageId });

            // Simulating success
            setTimeout(() => {
                setStatus('success');
                setFormData({ customerName: '', customerEmail: '', customerPhone: '', travelDate: '', travelers: 1 });
            }, 1500);
        } catch (err) {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-green-50 text-green-800 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-2">Booking Request Sent!</h3>
                <p>We will contact you shortly to confirm your trip to {packageTitle}.</p>
                <button onClick={() => setStatus('idle')} className="mt-4 text-green-700 underline">Book another</button>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-2xl card-shadow">
            <h3 className="text-2xl font-serif font-bold mb-6 text-primary">Book This Trip</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input
                        type="text"
                        name="customerName"
                        required
                        value={formData.customerName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-accent"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        name="customerEmail"
                        required
                        value={formData.customerEmail}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-accent"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input
                        type="tel"
                        name="customerPhone"
                        required
                        value={formData.customerPhone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-accent"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Travel Date</label>
                        <input
                            type="date"
                            name="travelDate"
                            required
                            value={formData.travelDate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-accent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Travelers</label>
                        <input
                            type="number"
                            name="travelers"
                            min="1"
                            required
                            value={formData.travelers}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-accent"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 rounded-xl transition-colors disabled:opacity-70"
                >
                    {status === 'submitting' ? 'Processing...' : 'Confirm Booking'}
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
