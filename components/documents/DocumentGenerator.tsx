"use client";

import React, { useState } from 'react';
import { FilePlus2, X } from 'lucide-react';
import { clientData, ClientId } from '@/lib/data';
import { DocumentPreviewModal } from './DocumentPreviewModal';

export function DocumentGenerator() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState('Service Agreement');
    const [selectedClient, setSelectedClient] = useState<string>('jane');
    const [generatedContent, setGeneratedContent] = useState('');

    const handleGenerate = (e: React.FormEvent) => {
        e.preventDefault();
        const client = clientData[selectedClient as ClientId];
        const date = new Date().toLocaleDateString();

        let content = '';
        if (selectedTemplate === 'Service Agreement') {
            content = `SERVICE AGREEMENT\n\nDate: ${date}\n\nBETWEEN:\nEmpower Digital Solutions ("Provider")\n\nAND:\n${client.name}\n${client.company}\n("Client")\n\n1. SERVICES\nProvider agrees to provide Virtual Assistant services as detailed in the attached Schedule A.\n\n2. COMPENSATION\nClient agrees to pay Provider at the rate of $50/hour, billed bi-weekly.\n\n3. CONFIDENTIALITY\nProvider agrees to keep all Client information confidential.\n\nSigned:\n\n__________________\n${client.name}`;
        } else if (selectedTemplate === 'Project Quote') {
            content = `PROJECT QUOTE\n\nDate: ${date}\nTo: ${client.name} (${client.company})\n\nProject: Administrative Overhaul\n\nScope of Work:\n- Email inbox organization\n- Calendar management setup\n- Document filing system creation\n\nEstimated Hours: 20\nRate: $50/hr\nTotal Estimated Cost: $1,000\n\nValid for 30 days.`;
        } else {
            content = `NON-DISCLOSURE AGREEMENT\n\nThis Agreement is made between Empower Digital Solutions and ${client.company} (${client.name}).\n\nThe parties agree to keep all proprietary information confidential.\n\nDate: ${date}`;
        }

        setGeneratedContent(content);
        setIsFormOpen(false);
        setIsPreviewOpen(true);
    };

    return (
        <>
            <button
                onClick={() => setIsFormOpen(true)}
                className="bg-brand-primary text-white font-medium py-3 px-5 rounded-xl shadow-lg hover:bg-brand-primary-hover transition-all flex items-center gap-2"
            >
                <FilePlus2 className="w-5 h-5" />
                <span>Generate New Document</span>
            </button>

            {/* Form Modal */}
            {isFormOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsFormOpen(false)}></div>
                    <div className="glass-modal-content p-8 rounded-2xl shadow-xl w-full max-w-lg z-10 modal-content-inner">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Generate Document</h2>
                            <button onClick={() => setIsFormOpen(false)} className="text-gray-500 hover:text-gray-800">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <form onSubmit={handleGenerate} className="space-y-4">
                            <div>
                                <label htmlFor="doc-template-select" className="block text-sm font-medium text-gray-700 mb-1">Select Template</label>
                                <select
                                    id="doc-template-select"
                                    value={selectedTemplate}
                                    onChange={(e) => setSelectedTemplate(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary outline-none"
                                >
                                    <option value="Service Agreement">Service Agreement</option>
                                    <option value="Project Quote">Project Quote</option>
                                    <option value="NDA">Non-Disclosure Agreement</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="doc-client-select" className="block text-sm font-medium text-gray-700 mb-1">Select Client</label>
                                <select
                                    id="doc-client-select"
                                    value={selectedClient}
                                    onChange={(e) => setSelectedClient(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary outline-none"
                                >
                                    {Object.values(clientData).map(client => (
                                        <option key={client.id} value={client.id}>{client.name} ({client.company})</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex justify-end space-x-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsFormOpen(false)}
                                    className="bg-gray-100 text-gray-700 font-medium py-2 px-5 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-brand-primary text-white font-medium py-2 px-5 rounded-lg shadow-sm hover:bg-brand-primary-hover transition-colors"
                                >
                                    Generate
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <DocumentPreviewModal
                isOpen={isPreviewOpen}
                onClose={() => setIsPreviewOpen(false)}
                content={generatedContent}
                title={`${selectedTemplate} Preview`}
            />
        </>
    );
}
