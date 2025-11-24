"use client";

import React, { useState } from 'react';
import { X, User, FileText, Calendar, CheckSquare, Clock, Download, ExternalLink } from 'lucide-react';
import { Client } from '@/lib/data';
import { cn } from '@/lib/utils';
import { GlassCard } from '@/components/ui/GlassCard';

interface ClientProfileDrawerProps {
    client: Client | null;
    isOpen: boolean;
    onClose: () => void;
}

type Tab = 'profile' | 'documents' | 'events' | 'todos' | 'timekeeper';

export function ClientProfileDrawer({ client, isOpen, onClose }: ClientProfileDrawerProps) {
    const [activeTab, setActiveTab] = useState<Tab>('profile');

    if (!client) return null;

    const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'documents', label: 'Documents', icon: FileText },
        { id: 'events', label: 'Events', icon: Calendar },
        { id: 'todos', label: 'To-dos', icon: CheckSquare },
        { id: 'timekeeper', label: 'Timekeeper', icon: Clock },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <div>
                            <label className="text-sm font-medium text-gray-500">Email Addresses</label>
                            <p className="text-lg font-medium text-gray-800">{client.email}</p>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-500">Phone Numbers</label>
                            <p className="text-lg font-medium text-gray-800">{client.phone}</p>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-500">Company Name</label>
                            <p className="text-lg font-medium text-gray-800">{client.company}</p>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-500">Industry</label>
                            <p className="text-lg font-medium text-gray-800">{client.industry}</p>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-500">Client Since</label>
                            <p className="text-lg font-medium text-gray-800">{client.since}</p>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-500">Notes</label>
                            <p className="text-lg font-medium text-gray-800 bg-white/50 p-4 rounded-lg border border-gray-200">{client.notes}</p>
                        </div>
                    </div>
                );
            case 'documents':
                return (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <GlassCard className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="bg-red-100 p-2 rounded-lg">
                                    <FileText className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Service Agreement.pdf</h4>
                                    <p className="text-xs text-gray-500">Added on {client.since}</p>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-brand-primary transition-colors">
                                <Download className="w-5 h-5" />
                            </button>
                        </GlassCard>
                        <GlassCard className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <FileText className="w-6 h-6 text-blue-500" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Invoice #1024.pdf</h4>
                                    <p className="text-xs text-gray-500">Added 2 days ago</p>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-brand-primary transition-colors">
                                <Download className="w-5 h-5" />
                            </button>
                        </GlassCard>
                        <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 font-medium hover:border-brand-primary hover:text-brand-primary transition-colors flex items-center justify-center gap-2">
                            <ExternalLink className="w-5 h-5" /> Upload New Document
                        </button>
                    </div>
                );
            case 'events':
                return (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <GlassCard className="p-4 border-l-4 border-brand-primary">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-bold text-gray-800">Weekly Sync</h4>
                                    <p className="text-sm text-gray-600">Review content calendar and tasks.</p>
                                </div>
                                <span className="text-xs font-bold bg-brand-secondary-light text-brand-primary px-2 py-1 rounded-md">
                                    Every Mon, 10:00 AM
                                </span>
                            </div>
                        </GlassCard>
                        <GlassCard className="p-4 border-l-4 border-brand-secondary">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-bold text-gray-800">Quarterly Review</h4>
                                    <p className="text-sm text-gray-600">Performance analysis and goal setting.</p>
                                </div>
                                <span className="text-xs font-bold bg-brand-secondary-light text-brand-secondary-dark px-2 py-1 rounded-md">
                                    Dec 15, 2:00 PM
                                </span>
                            </div>
                        </GlassCard>
                    </div>
                );
            case 'todos':
                return (
                    <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                            <input type="checkbox" className="w-5 h-5 text-brand-primary rounded focus:ring-brand-primary" />
                            <span className="text-gray-700 font-medium">Send updated contract</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                            <input type="checkbox" className="w-5 h-5 text-brand-primary rounded focus:ring-brand-primary" defaultChecked />
                            <span className="text-gray-500 line-through">Initial consultation</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                            <input type="checkbox" className="w-5 h-5 text-brand-primary rounded focus:ring-brand-primary" />
                            <span className="text-gray-700 font-medium">Setup client portal access</span>
                        </div>
                    </div>
                );
            case 'timekeeper':
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <div className="text-center p-6 bg-brand-secondary-light/30 rounded-2xl border border-brand-secondary-light">
                            <h4 className="text-gray-600 font-medium mb-2">Total Hours (This Month)</h4>
                            <div className="text-4xl font-bold text-brand-primary">12h 45m</div>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-800 mb-3">Recent Sessions</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                                    <span className="text-gray-700">Content Creation</span>
                                    <span className="font-mono text-gray-600">2h 30m</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                                    <span className="text-gray-700">Email Management</span>
                                    <span className="font-mono text-gray-600">45m</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                                    <span className="text-gray-700">Meeting</span>
                                    <span className="font-mono text-gray-600">1h 00m</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/20 z-40 transition-opacity duration-300",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={onClose}
            />

            {/* Drawer */}
            <div className={cn(
                "glass-drawer fixed top-0 right-0 z-50 w-full max-w-2xl h-full shadow-2xl flex",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                {/* Internal Sidebar */}
                <div className="w-48 bg-white/30 p-6 flex-shrink-0 hidden md:block border-r border-white/20">
                    <div className="flex items-center gap-3 mb-8">
                        <span className={cn(
                            "w-10 h-10 rounded-full font-bold flex items-center justify-center text-lg",
                            client.initialsBg,
                            client.initialsText
                        )}>
                            {client.initials}
                        </span>
                        <h2 className="text-xl font-bold text-gray-800 truncate">{client.name.split(' ')[0]}</h2>
                    </div>
                    <nav className="flex flex-col space-y-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "w-full font-medium py-2 px-3 rounded-lg flex items-center gap-2 transition-colors text-left",
                                    activeTab === tab.id
                                        ? "text-brand-primary bg-brand-secondary-light"
                                        : "text-gray-600 hover:bg-white/50"
                                )}
                            >
                                <tab.icon className="w-5 h-5" /> {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Drawer Content */}
                <div className="flex-1 p-8 overflow-y-auto">
                    <header className="flex justify-between items-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-800">
                            {tabs.find(t => t.id === activeTab)?.label}
                        </h3>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-800 hover:bg-white/50 rounded-full p-2">
                            <X className="w-6 h-6" />
                        </button>
                    </header>

                    {renderContent()}
                </div>
            </div>
        </>
    );
}
