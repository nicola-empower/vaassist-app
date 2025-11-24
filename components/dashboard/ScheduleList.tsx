import React from 'react';

export function ScheduleList() {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-600 w-20">09:00 AM</span>
                <div className="h-10 w-1 bg-brand-secondary rounded-full"></div>
                <div>
                    <h4 className="font-semibold text-gray-700">Client Onboarding Call</h4>
                    <p className="text-sm text-gray-500">Acme Corporation (John Doe)</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-600 w-20">11:00 AM</span>
                <div className="h-10 w-1 bg-brand-primary rounded-full"></div>
                <div>
                    <h4 className="font-semibold text-gray-700">Draft Social Media Posts</h4>
                    <p className="text-sm text-gray-500">For Beta LLC (Jane Smith)</p>
                </div>
            </div>
            <div className="flex items-center gap-4 opacity-50">
                <span className="text-sm font-semibold text-gray-600 w-20">02:00 PM</span>
                <div className="h-10 w-1 bg-gray-300 rounded-full"></div>
                <div>
                    <h4 className="font-semibold text-gray-700">Quarterly Report Prep</h4>
                    <p className="text-sm text-gray-500">Internal Task</p>
                </div>
            </div>
        </div>
    );
}
