import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScheduleList } from '@/components/dashboard/ScheduleList';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { Clock, CheckSquare } from 'lucide-react';

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-4xl font-extrabold text-gray-800">Good Morning, Nicola!</h1>
                <p className="text-lg text-gray-600">Here's what's on your plate for today.</p>
            </header>

            {/* Portfolio Note */}
            <GlassCard className="mb-8 border-l-4 border-brand-primary">
                <h4 className="font-bold text-brand-primary">Portfolio Dev Note:</h4>
                <p className="text-gray-700">
                    This dashboard demonstrates the core layout and glassmorphism aesthetic.
                    Data is currently static for demonstration purposes.
                </p>
            </GlassCard>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Schedule & Tasks */}
                <div className="lg:col-span-2 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Clock className="w-6 h-6 text-gray-600" /> Today's Schedule
                        </h2>
                        <ScheduleList />
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <CheckSquare className="w-6 h-6 text-gray-600" /> Priority Tasks
                        </h2>
                        <div className="space-y-4">
                            <GlassCard className="p-4 flex items-start gap-4" hoverEffect>
                                <div className="flex-shrink-0 mt-1">
                                    <span className="w-10 h-10 rounded-full bg-brand-secondary-light text-brand-primary font-semibold flex items-center justify-center">JD</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-gray-800">Finalize Monthly Report</h3>
                                        <span className="text-xs font-bold text-red-500 bg-red-100 px-2 py-1 rounded-full">High</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">Compile analytics and send to John Doe.</p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <input type="checkbox" className="mt-1 h-5 w-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" />
                                        <span className="text-sm text-gray-500">Mark as complete</span>
                                    </div>
                                </div>
                            </GlassCard>

                            <GlassCard className="p-4 flex items-start gap-4" hoverEffect>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-gray-800">Draft Social Media Posts</h3>
                                        <span className="text-xs font-bold text-orange-500 bg-orange-100 px-2 py-1 rounded-full">Medium</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">Create content for Acme Corp's upcoming launch.</p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <input type="checkbox" className="mt-1 h-5 w-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" />
                                        <span className="text-sm text-gray-500">Mark as complete</span>
                                    </div>
                                    <div className="mt-2">
                                        <span className="text-sm text-brand-primary bg-brand-secondary-light py-0.5 px-2 rounded-full">Acme Corp</span>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </section>
                </div>

                {/* Right Column: Quick Actions & Stats */}
                <div className="space-y-8">
                    <QuickActions />

                    {/* Mini Stats (Placeholder) */}
                    <GlassCard className="p-6">
                        <h3 className="font-bold text-gray-800 mb-4">Weekly Overview</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Hours Tracked</span>
                                <span className="font-bold text-gray-800">24.5h</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-brand-secondary h-2.5 rounded-full" style={{ width: '70%' }}></div>
                            </div>

                            <div className="flex justify-between items-center pt-2">
                                <span className="text-gray-600">Tasks Completed</span>
                                <span className="font-bold text-gray-800">12/18</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-brand-primary h-2.5 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
}
