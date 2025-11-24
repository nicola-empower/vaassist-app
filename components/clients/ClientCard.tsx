import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Client } from '@/lib/data';
import { cn } from '@/lib/utils';

interface ClientCardProps {
    client: Client;
    onClick?: () => void;
}

export function ClientCard({ client, onClick }: ClientCardProps) {
    return (
        <GlassCard
            className={cn("cursor-pointer", onClick && "hover:scale-[1.02] transition-transform")}
            onClick={onClick}
        >
            <div className="flex items-center justify-between mb-4">
                <span className={cn(
                    "w-12 h-12 rounded-full font-bold flex items-center justify-center text-lg",
                    client.initialsBg,
                    client.initialsText
                )}>
                    {client.initials}
                </span>
                <span className={cn(
                    "text-xs font-medium py-1 px-3 rounded-full",
                    client.status === 'Active' ? "bg-brand-secondary-light text-brand-secondary-dark" : "bg-gray-200 text-gray-600"
                )}>
                    {client.status}
                </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800">{client.name}</h3>
            <p className="text-brand-primary font-medium mb-4">{client.company}</p>
            <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {client.email}
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {client.phone}
            </p>
        </GlassCard>
    );
}
