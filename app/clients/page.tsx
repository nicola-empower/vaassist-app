"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { Plus } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ClientCard } from '@/components/clients/ClientCard';
import { ClientProfileDrawer } from '@/components/clients/ClientProfileDrawer';
import { clientData, Client, ClientId } from '@/lib/data';

function ClientsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [selectedClient, setSelectedClient] = useState<Client | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Sync with URL params
    useEffect(() => {
        const clientId = searchParams.get('client');
        if (clientId && clientData[clientId as ClientId]) {
            setSelectedClient(clientData[clientId as ClientId]);
            setIsDrawerOpen(true);
        } else {
            setIsDrawerOpen(false);
            // Small delay to clear data after animation
            setTimeout(() => setSelectedClient(null), 300);
        }
    }, [searchParams]);

    const handleClientClick = (client: Client) => {
        router.push(`/clients?client=${client.id}`);
    };

    const handleCloseDrawer = () => {
        router.push('/clients');
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.values(clientData).map((client) => (
                    <ClientCard
                        key={client.id}
                        client={client}
                        onClick={() => handleClientClick(client)}
                    />
                ))}
            </div>

            <ClientProfileDrawer
                client={selectedClient}
                isOpen={isDrawerOpen}
                onClose={handleCloseDrawer}
            />
        </>
    );
}

export default function ClientsPage() {
    return (
        <div className="relative">
            <header className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-4xl font-extrabold text-gray-800">Clients</h1>
                    <p className="text-lg text-gray-600">Organise and manage your client relationships.</p>
                </div>
                <button className="bg-brand-primary text-white font-medium py-3 px-5 rounded-xl shadow-lg hover:bg-brand-primary-hover transition-all flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    <span>Add Client</span>
                </button>
            </header>

            <Suspense fallback={<div>Loading clients...</div>}>
                <ClientsContent />
            </Suspense>
        </div>
    );
}
