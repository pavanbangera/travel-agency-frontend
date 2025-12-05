import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            // await axios.post(`${import.meta.env.VITE_API_URL}/api/contacts`, formData);
            setTimeout(() => {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            }, 1500);
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <div className="pt-24 pb-20 min-h-screen bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-serif font-bold text-primary mb-4">Get in Touch</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Have a question or ready to plan your next trip? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl card-shadow flex items-start gap-4">
                            <div className="bg-accent/10 p-3 rounded-full text-accent">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Phone</h3>
                                <p className="text-slate-500 mb-1">Mon-Fri from 8am to 5pm.</p>
                                <p className="text-lg font-medium text-primary">+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl card-shadow flex items-start gap-4">
                            <div className="bg-accent/10 p-3 rounded-full text-accent">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Email</h3>
                                <p className="text-slate-500 mb-1">Our friendly team is here to help.</p>
                                <p className="text-lg font-medium text-primary">hello@luxetravel.com</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl card-shadow flex items-start gap-4">
                            <div className="bg-accent/10 p-3 rounded-full text-accent">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Office</h3>
                                <p className="text-slate-500 mb-1">Come say hello at our office HQ.</p>
                                <p className="text-lg font-medium text-primary">123 Luxury Lane, Travel City, TC 90210</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl card-shadow">
                        {status === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-slate-500">We'll get back to you as soon as possible.</p>
                                <button onClick={() => setStatus('idle')} className="mt-6 text-accent font-medium">Send another message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-accent"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-accent"
                                        placeholder="you@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-accent"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 rounded-xl transition-colors disabled:opacity-70"
                                >
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
