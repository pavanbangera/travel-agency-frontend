import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Trash2, Edit, LogOut } from 'lucide-react';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [activeTab, setActiveTab] = useState('packages'); // packages, bookings, contacts
    const [packages, setPackages] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [contacts, setContacts] = useState([]);

    // Login State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Package Form State
    const [isEditing, setIsEditing] = useState(false);
    const [currentPackage, setCurrentPackage] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        destination: '',
        price: '',
        duration: '',
        description: '',
        images: ''
    });

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (token) {
            setIsAuthenticated(true);
            fetchData();
        }
    }, [isAuthenticated]);

    const fetchData = async () => {
        // Mock data for now
        setPackages([
            { _id: '1', title: 'Kerala Backwaters', destination: 'Kerala', price: 15000, duration: '5 Days' },
            { _id: '2', title: 'Taj Mahal Tour', destination: 'Agra', price: 8000, duration: '3 Days' }
        ]);
        setBookings([
            { _id: '1', customerName: 'John Doe', package: { title: 'Kerala Backwaters' }, status: 'Pending', travelDate: '2024-12-25' }
        ]);
        setContacts([
            { _id: '1', name: 'Jane Smith', email: 'jane@example.com', message: 'Interested in Goa trip.' }
        ]);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, { username, password });
            if (username === 'admin' && password === 'admin') {
                localStorage.setItem('adminToken', 'mock-token');
                setIsAuthenticated(true);
                setError('');
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError('Login failed');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        setIsAuthenticated(false);
    };

    const handleSavePackage = async (e) => {
        e.preventDefault();
        // Logic to save/update package
        const newPkg = { ...formData, _id: Date.now().toString() };
        setPackages([...packages, newPkg]);
        setIsEditing(false);
        setFormData({ title: '', destination: '', price: '', duration: '', description: '', images: '' });
    };

    const handleDeletePackage = (id) => {
        setPackages(packages.filter(p => p._id !== id));
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-primary">Admin Login</h2>
                    {error && <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm">{error}</div>}
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-accent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-accent"
                            />
                        </div>
                        <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg hover:bg-slate-800 transition-colors">Login</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-serif font-bold text-primary">Admin Dashboard</h1>
                    <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 hover:text-red-700">
                        <LogOut size={20} /> Logout
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8 border-b border-slate-200">
                    {['packages', 'bookings', 'contacts'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 px-4 font-medium capitalize ${activeTab === tab ? 'text-accent border-b-2 border-accent' : 'text-slate-500'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                    {activeTab === 'packages' && (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold">Manage Packages</h2>
                                <button
                                    onClick={() => { setIsEditing(true); setCurrentPackage(null); }}
                                    className="bg-accent text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-accent-hover"
                                >
                                    <Plus size={18} /> Add New
                                </button>
                            </div>

                            {isEditing ? (
                                <form onSubmit={handleSavePackage} className="space-y-4 max-w-2xl">
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            placeholder="Title"
                                            value={formData.title}
                                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                                            className="border p-2 rounded"
                                            required
                                        />
                                        <input
                                            placeholder="Destination"
                                            value={formData.destination}
                                            onChange={e => setFormData({ ...formData, destination: e.target.value })}
                                            className="border p-2 rounded"
                                            required
                                        />
                                        <input
                                            placeholder="Price"
                                            type="number"
                                            value={formData.price}
                                            onChange={e => setFormData({ ...formData, price: e.target.value })}
                                            className="border p-2 rounded"
                                            required
                                        />
                                        <input
                                            placeholder="Duration"
                                            value={formData.duration}
                                            onChange={e => setFormData({ ...formData, duration: e.target.value })}
                                            className="border p-2 rounded"
                                            required
                                        />
                                    </div>
                                    <textarea
                                        placeholder="Description"
                                        value={formData.description}
                                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                                        className="border p-2 rounded w-full h-32"
                                        required
                                    />
                                    <div className="flex gap-2">
                                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
                                        <button type="button" onClick={() => setIsEditing(false)} className="bg-slate-500 text-white px-4 py-2 rounded">Cancel</button>
                                    </div>
                                </form>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-slate-100 text-slate-500">
                                                <th className="pb-3">Title</th>
                                                <th className="pb-3">Destination</th>
                                                <th className="pb-3">Price</th>
                                                <th className="pb-3">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {packages.map(pkg => (
                                                <tr key={pkg._id} className="border-b border-slate-50">
                                                    <td className="py-4 font-medium">{pkg.title}</td>
                                                    <td className="py-4">{pkg.destination}</td>
                                                    <td className="py-4">₹{pkg.price}</td>
                                                    <td className="py-4 flex gap-2">
                                                        <button className="text-blue-500 hover:text-blue-700"><Edit size={18} /></button>
                                                        <button onClick={() => handleDeletePackage(pkg._id)} className="text-red-500 hover:text-red-700"><Trash2 size={18} /></button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'bookings' && (
                        <div>
                            <h2 className="text-xl font-bold mb-6">Recent Bookings</h2>
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-slate-100 text-slate-500">
                                        <th className="pb-3">Customer</th>
                                        <th className="pb-3">Package</th>
                                        <th className="pb-3">Date</th>
                                        <th className="pb-3">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map(booking => (
                                        <tr key={booking._id} className="border-b border-slate-50">
                                            <td className="py-4 font-medium">{booking.customerName}</td>
                                            <td className="py-4">{booking.package.title}</td>
                                            <td className="py-4">{booking.travelDate}</td>
                                            <td className="py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                    {booking.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'contacts' && (
                        <div>
                            <h2 className="text-xl font-bold mb-6">Messages</h2>
                            <div className="space-y-4">
                                {contacts.map(contact => (
                                    <div key={contact._id} className="border border-slate-100 p-4 rounded-lg">
                                        <div className="flex justify-between mb-2">
                                            <h3 className="font-bold">{contact.name}</h3>
                                            <span className="text-sm text-slate-500">{contact.email}</span>
                                        </div>
                                        <p className="text-slate-600">{contact.message}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin;
