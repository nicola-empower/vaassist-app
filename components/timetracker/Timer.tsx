"use client";

import React, { useState, useEffect } from 'react';
import { PlayCircle, PauseCircle, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { clientData, ClientId } from '@/lib/data';

// Mock time tracking data for each client
const clientTimeData: Record<ClientId, { elapsedThisMonth: number; availableHours: number; project: string }> = {
    jane: {
        elapsedThisMonth: 8.5 * 3600, // 8.5 hours in seconds
        availableHours: 20,
        project: 'Website Update'
    },
    john: {
        elapsedThisMonth: 12.25 * 3600, // 12.25 hours in seconds
        availableHours: 15,
        project: 'Monthly Report'
    },
    internal: {
        elapsedThisMonth: 5.75 * 3600, // 5.75 hours in seconds
        availableHours: 0, // Unlimited for internal
        project: 'Internal Tasks'
    }
};

export function Timer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [selectedClient, setSelectedClient] = useState<ClientId>('jane');

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = (totalSeconds: number) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const formatHours = (totalSeconds: number) => {
        const hours = (totalSeconds / 3600).toFixed(2);
        return `${hours}h`;
    };

    const toggleTimer = () => setIsRunning(!isRunning);
    const resetTimer = () => {
        setIsRunning(false);
        setTime(0);
    };

    const currentClientData = clientTimeData[selectedClient];
    const client = selectedClient === 'internal' ? null : clientData[selectedClient];
    const clientName = client ? client.company : 'Internal';

    return (
        <div className="space-y-6">
            {/* Client Selection */}
            <div className="max-w-md mx-auto">
                <label htmlFor="client-select" className="block text-sm font-medium text-gray-700 mb-2">
                    Select Client
                </label>
                <select
                    id="client-select"
                    value={selectedClient}
                    onChange={(e) => setSelectedClient(e.target.value as ClientId)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary outline-none text-lg"
                    disabled={isRunning}
                >
                    {Object.values(clientData).map((client) => (
                        <option key={client.id} value={client.id}>
                            {client.name} - {client.company}
                        </option>
                    ))}
                    <option value="internal">Internal Tasks</option>
                </select>
            </div>

            {/* Timer Display */}
            <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Project: {currentClientData.project}
                </h3>
                <p className="text-brand-secondary-dark mb-6">Client: {clientName}</p>

                <div className="text-6xl font-extrabold text-gray-800 mb-8 font-mono">
                    {formatTime(time)}
                </div>

                <div className="flex space-x-4 justify-center mb-8">
                    <button
                        onClick={toggleTimer}
                        className={cn(
                            "w-full max-w-xs text-white font-medium py-4 px-6 rounded-xl shadow-lg transition-all text-lg flex items-center justify-center gap-3",
                            isRunning ? "bg-brand-red hover:bg-brand-red-hover" : "bg-brand-secondary hover:bg-brand-secondary-hover"
                        )}
                    >
                        {isRunning ? (
                            <>
                                <PauseCircle className="w-6 h-6" />
                                <span>Pause Timer</span>
                            </>
                        ) : (
                            <>
                                <PlayCircle className="w-6 h-6" />
                                <span>Start Timer</span>
                            </>
                        )}
                    </button>
                    <button
                        onClick={resetTimer}
                        className="flex-shrink-0 bg-gray-200 text-gray-700 font-medium p-4 rounded-xl shadow-sm hover:bg-gray-300 transition-all"
                    >
                        <RotateCcw className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Time Summary */}
            <div className="max-w-md mx-auto grid grid-cols-2 gap-4">
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Elapsed This Month</p>
                    <p className="text-2xl font-bold text-brand-primary">
                        {formatHours(currentClientData.elapsedThisMonth)}
                    </p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">
                        {currentClientData.availableHours > 0 ? 'Available Hours' : 'Unlimited'}
                    </p>
                    <p className="text-2xl font-bold text-brand-secondary-dark">
                        {currentClientData.availableHours > 0 ? `${currentClientData.availableHours}h` : '∞'}
                    </p>
                </div>
            </div>
        </div>
    );
}
