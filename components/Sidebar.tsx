"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Sparkles,
    LayoutGrid,
    Users,
    CheckCircle,
    Clock,
    CalendarDays,
    FileText
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function Sidebar() {
    const pathname = usePathname();

    const navItems = [
        { href: '/dashboard', icon: LayoutGrid, label: 'Dashboard' },
        { href: '/clients', icon: Users, label: 'Clients' },
        { href: '/tasks', icon: CheckCircle, label: 'Tasks' },
        { href: '/timetracker', icon: Clock, label: 'Time Tracker' },
        { href: '/content', icon: CalendarDays, label: 'Content Planner' },
        { href: '/documents', icon: FileText, label: 'Documents' },
    ];

    return (
        <nav className="glass-sidebar w-20 flex flex-col items-center flex-shrink-0 h-full py-6 space-y-6">
            {/* Logo */}
            <Link href="/dashboard" className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg hover:bg-brand-primary-hover transition-colors">
                <Sparkles className="text-white w-6 h-6" />
            </Link>

            {/* Main Navigation */}
            <div className="flex flex-col space-y-4 items-center w-full">
                {navItems.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            title={item.label}
                            className={cn(
                                "sidebar-link w-16 h-16 flex items-center justify-center rounded-xl text-gray-600",
                                isActive && "active text-brand-primary"
                            )}
                        >
                            <item.icon className="w-6 h-6" />
                        </Link>
                    );
                })}
            </div>

            {/* Profile / User (Demo) */}
            <div className="mt-auto">
                <img
                    src="https://placehold.co/100x100/E9D5FF/6D28D9?text=VA"
                    alt="Demo User"
                    className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                />
            </div>
        </nav>
    );
}
