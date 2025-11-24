"use client";

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { AddTaskModal } from '@/components/tasks/AddTaskModal';
import { clientData, ClientId } from '@/lib/data';

interface Task {
    id: string;
    title: string;
    client: string;
    status: 'todo' | 'in-progress' | 'done';
}

const initialTasks: Task[] = [
    { id: '1', title: 'Draft blog post "5 Automations to Boost Productivity"', client: 'internal', status: 'todo' },
    { id: '2', title: 'Send updated contract', client: 'jane', status: 'todo' },
    { id: '3', title: 'Website Content Update', client: 'jane', status: 'in-progress' },
    { id: '4', title: 'Quarterly Report', client: 'john', status: 'done' },
    { id: '5', title: 'Onboard Nicola Berry', client: 'nicola', status: 'done' },
];

export default function TasksPage() {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddTask = (newTask: { title: string; client: string }) => {
        const task: Task = {
            id: Math.random().toString(36).substr(2, 9),
            title: newTask.title,
            client: newTask.client,
            status: 'todo',
        };
        setTasks([...tasks, task]);
    };

    const getClientBadge = (clientId: string) => {
        if (clientId === 'internal') {
            return <span className="text-xs text-brand-primary bg-brand-secondary-light py-0.5 px-2 rounded-full">Content</span>;
        }
        const client = clientData[clientId as ClientId];
        if (!client) return <span className="text-xs text-gray-600 bg-gray-200 py-0.5 px-2 rounded-full">Unknown</span>;

        // Use green for Jane, Lilac for John to match demo, or dynamic based on data
        if (clientId === 'jane') {
            return <span className="text-xs text-brand-accent-dark bg-brand-accent-light py-0.5 px-2 rounded-full">{client.company}</span>;
        }
        if (clientId === 'john') {
            return <span className="text-xs text-brand-primary bg-brand-secondary-light py-0.5 px-2 rounded-full">{client.company}</span>;
        }
        return <span className="text-xs text-gray-600 bg-gray-200 py-0.5 px-2 rounded-full">{client.company}</span>;
    };

    const renderColumn = (status: Task['status'], title: string) => {
        const columnTasks = tasks.filter(t => t.status === status);
        return (
            <div className="bg-gray-100/50 rounded-2xl p-4">
                <h3 className="font-bold text-gray-700 mb-4 ml-2">{title}</h3>
                <div className={status === 'done' ? "space-y-3 opacity-60" : "space-y-3"}>
                    {columnTasks.map(task => (
                        <GlassCard key={task.id} className="p-4 shadow-sm">
                            <h4 className={`font-medium text-gray-800 ${status === 'done' ? 'line-through' : ''}`}>{task.title}</h4>
                            {getClientBadge(task.client)}
                        </GlassCard>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div>
            <header className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-4xl font-extrabold text-gray-800">Tasks</h1>
                    <p className="text-lg text-gray-600">Drag and drop to manage your workflow.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-brand-primary text-white font-medium py-3 px-5 rounded-xl shadow-lg hover:bg-brand-primary-hover transition-all flex items-center gap-2"
                >
                    <Plus className="w-5 h-5" />
                    <span>Add Task</span>
                </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {renderColumn('todo', 'To Do')}
                {renderColumn('in-progress', 'In Progress')}
                {renderColumn('done', 'Done')}
            </div>

            <AddTaskModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddTask}
            />
        </div>
    );
}
