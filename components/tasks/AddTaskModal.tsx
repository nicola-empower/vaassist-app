"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { clientData } from '@/lib/data';
import { cn } from '@/lib/utils';

interface AddTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (task: { title: string; client: string }) => void;
}

export function AddTaskModal({ isOpen, onClose, onAdd }: AddTaskModalProps) {
    const [title, setTitle] = useState('');
    const [clientId, setClientId] = useState('jane');
    const [priority, setPriority] = useState('medium');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd({ title, client: clientId });
        setTitle('');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
            <div className="glass-modal-content p-8 rounded-2xl shadow-xl w-full max-w-lg z-10 modal-content-inner">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Add New Task</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="new-task-title" className="block text-sm font-medium text-gray-700 mb-1">Task Title</label>
                        <input
                            type="text"
                            id="new-task-title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary outline-none"
                            placeholder="e.g., Draft blog post"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="new-task-client" className="block text-sm font-medium text-gray-700 mb-1">Assign to Client</label>
                        <select
                            id="new-task-client"
                            value={clientId}
                            onChange={(e) => setClientId(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary outline-none"
                        >
                            {Object.values(clientData).map(client => (
                                <option key={client.id} value={client.id}>{client.name} ({client.company})</option>
                            ))}
                            <option value="internal">Internal Task</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="new-task-priority" className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                        <select
                            id="new-task-priority"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary outline-none"
                        >
                            <option value="high">High - Prioritise</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div className="flex justify-end space-x-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-100 text-gray-700 font-medium py-2 px-5 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-brand-primary text-white font-medium py-2 px-5 rounded-lg shadow-sm hover:bg-brand-primary-hover transition-colors"
                        >
                            Save Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
