import React from 'react';
import Link from 'next/link';
import { Clock, FilePlus2, Plus } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';

export function QuickActions() {
    return (
        <GlassCard className="p-6">
            <h3 className="font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
                <Link href="/timetracker" className="bg-brand-primary text-white font-medium py-3 px-4 rounded-xl shadow-lg hover:bg-brand-primary-hover transition-all flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>Start Timer</span>
                </Link>
                <Link href="/tasks" className="bg-white text-gray-700 border border-gray-200 font-medium py-3 px-4 rounded-xl shadow-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                    <Plus className="w-5 h-5" />
                    <span>New Task</span>
                </Link>
                <Link href="/documents" className="col-span-2 bg-brand-secondary text-white font-medium py-3 px-4 rounded-xl shadow-lg hover:bg-brand-secondary-dark transition-all flex items-center justify-center gap-2">
                    <FilePlus2 className="w-5 h-5" />
                    <span>Generate Document</span>
                </Link>
            </div>
        </GlassCard>
    );
}
