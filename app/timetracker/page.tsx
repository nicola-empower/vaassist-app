import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Timer } from '@/components/timetracker/Timer';

export default function TimeTrackerPage() {
    return (
        <div>
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold text-gray-800">Time Tracker</h1>
                <p className="text-lg text-gray-600">Track your billable hours with one click.</p>
            </header>
            <GlassCard className="p-8 max-w-lg mx-auto">
                <Timer />
            </GlassCard>
        </div>
    );
}
