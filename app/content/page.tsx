"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Calendar as CalendarIcon } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { cn } from '@/lib/utils';

// Define the type for a content plan item
type ContentPlan = {
    id: number;
    title: string;
    type: string;
    publish_date: string;
};

const initialContent: ContentPlan[] = [
    { id: 1, title: 'Launch Announcement', type: 'Social Media', publish_date: new Date().toISOString().split('T')[0] },
    { id: 2, title: 'Weekly Newsletter', type: 'Newsletter', publish_date: new Date(Date.now() + 86400000).toISOString().split('T')[0] },
];

export default function ContentPlannerPage() {
    const [content, setContent] = useState<ContentPlan[]>(initialContent);
    const [newContent, setNewContent] = useState({
        title: '',
        type: 'Social Media',
        date: ''
    });

    // Handler for form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewContent(prev => ({ ...prev, [name]: value }));
    };

    // Handler for adding a new content item
    const handleAddContent = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newContent.title || !newContent.date) return;

        const newItem: ContentPlan = {
            id: Date.now(),
            title: newContent.title,
            type: newContent.type,
            publish_date: newContent.date,
        };

        setContent(prev => [...prev, newItem].sort((a, b) => new Date(a.publish_date).getTime() - new Date(b.publish_date).getTime()));
        setNewContent({ title: '', type: 'Social Media', date: '' });
    };

    // Handler for deleting a content item
    const handleDeleteContent = (id: number) => {
        setContent(prev => prev.filter(item => item.id !== id));
    };

    // Group content by date for display
    const groupedContent = content.reduce((acc, item) => {
        const date = item.publish_date;
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(item);
        return acc;
    }, {} as Record<string, ContentPlan[]>);

    const dates = Object.keys(groupedContent);
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-4xl font-extrabold text-gray-800">Content Planner</h1>
                <p className="text-lg text-gray-600">Plan and track your business's marketing content.</p>
            </header>

            <GlassCard className="p-6">
                <h2 className="text-xl font-bold text-brand-primary mb-4 flex items-center gap-2">
                    <Plus className="w-5 h-5" /> Add New Content
                </h2>
                <form onSubmit={handleAddContent} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                    <div className="col-span-1 md:col-span-2">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={newContent.title}
                            onChange={handleInputChange}
                            placeholder="e.g., New blog post"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                        <select
                            id="type"
                            name="type"
                            value={newContent.type}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary outline-none"
                        >
                            <option>Social Media</option>
                            <option>Blog Post</option>
                            <option>Newsletter</option>
                            <option>Video</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Publish Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={newContent.date}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary outline-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="col-span-1 md:col-span-4 p-3 bg-brand-secondary text-white font-semibold rounded-xl shadow-md hover:bg-brand-secondary-dark transition-colors flex items-center justify-center gap-2"
                    >
                        <Plus className="w-5 h-5" /> Add Content
                    </button>
                </form>
            </GlassCard>

            <div className="space-y-6">
                {dates.length === 0 && (
                    <div className="text-center p-6 text-gray-500 italic glass-card rounded-xl">No content planned yet! Add one above.</div>
                )}
                <AnimatePresence>
                    {dates.map(date => (
                        <motion.div
                            key={date}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <h3 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                                    <CalendarIcon className="w-5 h-5 text-brand-primary" />
                                    {new Date(date).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                </h3>
                                {date === today && <span className="text-xs font-bold text-brand-secondary-dark bg-brand-secondary-light px-2 py-1 rounded-full">Today</span>}
                            </div>

                            <div className="space-y-3">
                                {groupedContent[date].map(item => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                    >
                                        <GlassCard className="p-4 flex justify-between items-center" hoverEffect>
                                            <div>
                                                <div className="font-semibold text-gray-800">{item.title}</div>
                                                <div className="text-sm text-brand-primary font-medium">{item.type}</div>
                                            </div>
                                            <button
                                                onClick={() => handleDeleteContent(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </GlassCard>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
