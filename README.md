# VAAssist: Client Management & Document Generation Portal

A streamlined, internal web application designed to help Virtual Assistants manage client relationships, track project statuses, and rapidly generate essential business documents.

## Project Overview

The VAAssist Portal is built using Next.js and React for a professional, scalable, and component-based structure, transforming manual, multi-step processes into an intuitive dashboard experience.

## Key Features

### Client Dashboard and Filtering
- **Centralised Client List**: Displays a list of clients with essential metadata (Name, Company, Status)
- **Status Filtering**: Quickly filter the client list by operational status:
  - **Active**: Current ongoing projects
  - **Lead**: Prospective clients in the sales pipeline
  - **Archived**: Completed or inactive client records

### Rapid Document Generation
The core utility of the app is the ability to generate specific documents instantly based on client data:
- **Invoice Generation**: Pre-filled invoice template with project details and fees
- **Scope of Work (SOW)**: Project documentation outlining agreed-upon services and deliverables
- **Non-Disclosure Agreement (NDA)**: Standardised legal document pre-filled with client and company names
- **Live Preview**: Documents are generated and displayed in a modal preview before final export/action

### Time Tracking
- **Client-Specific Timers**: Track time spent on each client's projects
- **Monthly Summaries**: View elapsed time and available hours per client
- **Project Assignment**: Associate time entries with specific projects

### Task Management
- **Kanban Board**: Organise tasks across To Do, In Progress, and Done columns
- **Client Assignment**: Link tasks to specific clients
- **Priority Levels**: Categorise tasks by priority

### Content Planning
- **Calendar View**: Plan and schedule content across dates
- **Content Types**: Manage different content types (Social Media, Blog Posts, Newsletters, Videos)
- **Visual Timeline**: See all planned content at a glance

## Technology Stack

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **Framework** | Next.js 15+ | Server-side rendering (SSR), API routes, and file-system routing for scalable architecture |
| **Frontend** | React 18+ | Component-based UI development for maintainability and state management |
| **Styling** | Tailwind CSS v4 | Utility-first CSS framework for rapid, responsive design and consistent theming |
| **Animations** | Framer Motion | Smooth, professional animations and transitions |
| **State Management** | React Hooks | Efficient local state management with useState, useEffect, and custom hooks |
| **Icons** | Lucide React | Lightweight, customisable icons for the interface |
| **Database** | Firebase (Planned) | NoSQL database for real-time, secure storage of client and task data |
| **Authentication** | Firebase Auth (Planned) | User access management for VA and clients |

## Design System

### Colour Palette
- **Empower Teal** (`#184E56`): Primary actions, main buttons, key highlights
- **Sage Green** (`#6B9A8B`): Secondary actions, status indicators, supporting elements
- **Soft Lilac** (`#AA9CC3`): Accents, alternative highlights

### Visual Style
- **Glassmorphism**: Frosted glass effect with backdrop blur
- **Smooth Animations**: Framer Motion for polished interactions
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Setup and Development

### Prerequisites
- Node.js (v18+)
- npm or yarn
- A Firebase project configured for Firestore and Authentication (for future features)

### Installation

1. **Clone the repository**:
   ```bash
   git clone [your-repo-link]
   cd vaassist-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables** (for future Firebase integration):
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   ```

### Running the Application

Start the Next.js development server:
```bash
npm run dev
# or
yarn dev
```

The application will be accessible at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
vaassist-app/
├── app/                      # Next.js App Router
│   ├── dashboard/           # Dashboard page
│   ├── clients/             # Client management
│   ├── tasks/               # Task management
│   ├── timetracker/         # Time tracking
│   ├── content/             # Content planner
│   ├── documents/           # Document generation
│   ├── layout.tsx           # Root layout with sidebar
│   └── globals.css          # Global styles and theme
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   ├── clients/             # Client-specific components
│   ├── tasks/               # Task-specific components
│   ├── timetracker/         # Timer components
│   ├── documents/           # Document generation components
│   └── Sidebar.tsx          # Main navigation
├── lib/                     # Utility functions and data
│   ├── data.ts             # Mock client data
│   └── utils.ts            # Helper functions
└── public/                  # Static assets
```

## Current Features

- ✅ Client management with profile drawers
- ✅ Task management with Kanban board
- ✅ Time tracking with client selection
- ✅ Content planning calendar
- ✅ Document generation (Invoice, SOW, NDA)
- ✅ Responsive glassmorphism design
- ✅ Smooth animations and transitions

## Future Roadmap

### Phase 1: Data Persistence
- [ ] Firebase integration for client data
- [ ] Real-time task synchronisation
- [ ] Time tracking history storage
- [ ] Content calendar persistence

### Phase 2: Enhanced Features
- [ ] Client onboarding wizard
- [ ] Multi-step intake form for new clients
- [ ] Advanced filtering and search
- [ ] Bulk operations for tasks

### Phase 3: Client Portal
- [ ] Secure client-facing interface
- [ ] Task submission portal for clients
- [ ] Client task history and status tracking
- [ ] Document sharing and approval workflow

### Phase 4: Integrations
- [ ] PDF export functionality (jsPDF or serverless)
- [ ] Google Apps Script automations
- [ ] QuickBooks integration
- [ ] Calendar sync (Google Calendar, Outlook)
- [ ] Email notifications

### Phase 5: Analytics
- [ ] Time tracking reports
- [ ] Client profitability analysis
- [ ] Task completion metrics
- [ ] Content performance tracking

## Contributing

This is a portfolio project. If you'd like to contribute or have suggestions, please reach out!

## Licence

This project is for portfolio demonstration purposes.

---

**Built with ❤️ using Next.js, React, and Tailwind CSS. Nicola Berry**