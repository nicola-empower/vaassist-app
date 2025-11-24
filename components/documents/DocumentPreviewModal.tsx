"use client";

import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DocumentPreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: string;
    title: string;
}

export function DocumentPreviewModal({ isOpen, onClose, content, title }: DocumentPreviewModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
            <div className="glass-modal-content p-8 rounded-2xl shadow-xl w-full max-w-3xl z-10 max-h-[80vh] flex flex-col modal-content-inner">
                <div className="flex justify-between items-center mb-4 flex-shrink-0">
                    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="bg-white/70 p-6 rounded-lg border border-gray-200 overflow-y-auto">
                    <div className="prose max-w-none whitespace-pre-wrap font-serif text-gray-800">
                        {content}
                    </div>
                </div>
                <div className="flex justify-end space-x-3 pt-6 flex-shrink-0">
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-gray-100 text-gray-700 font-medium py-2 px-5 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        Close
                    </button>
                    <button
                        type="button"
                        className="bg-brand-secondary text-white font-medium py-2 px-5 rounded-lg shadow-sm hover:bg-brand-secondary-dark transition-colors"
                    >
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
}
