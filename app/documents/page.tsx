import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { DocumentGenerator } from '@/components/documents/DocumentGenerator';

export default function DocumentsPage() {
    return (
        <div>
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold text-gray-800">Document Automation</h1>
                <p className="text-lg text-gray-600">Manage your quotes, contracts, and templates.</p>
            </header>
            <GlassCard className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Document Generator</h3>
                <p className="text-gray-700 mb-6">This simulator demonstrates how client data can be automatically merged with templates to create new documents, showcasing the "Empower Automation" service.</p>
                <DocumentGenerator />
            </GlassCard>
        </div>
    );
}
