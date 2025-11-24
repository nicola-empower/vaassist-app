export const clientData = {
    jane: {
        id: "jane",
        name: "Jane Smith",
        initials: "JS",
        initialsBg: "bg-brand-accent-light",
        initialsText: "text-brand-accent-dark",
        email: "jane.smith@beta.llc",
        phone: "+44-20-7946-0958",
        company: "Beta LLC",
        industry: "Finance",
        since: "Sep 1, 2023",
        notes: "Needs weekly social media posts and monthly analytics reports.",
        status: "Active"
    },
    john: {
        id: "john",
        name: "John Doe",
        initials: "JD",
        initialsBg: "bg-brand-secondary-light",
        initialsText: "text-brand-primary",
        email: "john.doe@acme.com",
        phone: "+1-555-123-4567",
        company: "Acme Corporation",
        industry: "Technology",
        since: "May 15, 2024",
        notes: "Mainly requires document automation for new client contracts.",
        status: "Active"
    },
    nicola: {
        id: "nicola",
        name: "Nicola Berry",
        initials: "NB",
        initialsBg: "bg-pink-100",
        initialsText: "text-pink-700",
        email: "nicola@empowerdigitalsolutions.co.uk",
        phone: "07557988549",
        company: "Empower Digital Solutions",
        industry: "Digital",
        since: "Nov 21, 2025",
        notes: "Onboarding new client.",
        status: "Onboarding"
    }
};

export type ClientId = keyof typeof clientData;
export type Client = typeof clientData[ClientId];
