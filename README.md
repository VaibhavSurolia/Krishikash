# 💰 Krishikash - Financial Literacy Game

**Krishikash** is an interactive financial literacy game designed to help users learn essential money management skills through engaging gameplay. Experience real-world financial decisions, manage your budget, handle unexpected events, and work towards achieving your financial goals in a fun and educational environment.



## 🎯 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Game Mechanics](#-game-mechanics)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## 📖 Overview

Krishikash is a month-by-month financial simulation game where players navigate through various financial scenarios while working towards their chosen goals. The game teaches important concepts such as:

- **Budgeting**: Learn to allocate your income wisely
- **Saving**: Build emergency funds and save for goals
- **Insurance**: Understand the importance of risk protection
- **Debt Management**: Make informed decisions about loans and repayments
- **Financial Planning**: Balance short-term needs with long-term objectives

## ✨ Features

### 🎮 Core Gameplay
- **Interactive Tutorial**: Beginner-friendly intro screen with game instructions
- **Goal Selection**: Choose from multiple financial goals (bike, car, house)
- **Monthly Progression**: Navigate through 50+ months of financial decisions
- **Dynamic Events**: Random events like medical emergencies, bonuses, and unexpected expenses
- **Decision Making**: Make critical financial choices each month

### 💼 Financial Tools
- **Savings Account**: Put money aside and watch it grow
- **Insurance System**: Purchase and manage insurance policies
- **Loan System**: Take loans when needed and manage repayments
- **Withdrawal Options**: Access savings during emergencies
- **Budget Tracking**: Monitor income, expenses, and balance

### 🎨 User Experience
- **Responsive Design**: Fully optimized for mobile and desktop
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Progress Tracking**: Visual indicators for goals and financial health
- **Confetti Celebrations**: Celebrate achievements with canvas-confetti
- **Dark/Light Mode**: Theme support via next-themes
- **Save/Load System**: Cloud save functionality with Supabase

### 📊 Dashboard & Analytics
- **Financial Overview**: Real-time stats cards showing balance, savings, debt, and stability
- **Monthly Summary**: Detailed breakdown of income, expenses, and financial changes
- **Game End Screen**: Comprehensive results showing your financial journey

## 🛠️ Tech Stack

### Frontend
- **[React 18.3.1](https://react.dev/)** - Modern UI library with hooks
- **[TypeScript 5.8.3](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite 5.4.19](https://vitejs.dev/)** - Lightning-fast build tool and dev server
- **[React Router DOM 6.30.1](https://reactrouter.com/)** - Client-side routing

### Styling & UI
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality React components built on Radix UI
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Class Variance Authority](https://cva.style/)** - Component variant management
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Animation & Effects
- **[Framer Motion 12.25.0](https://www.framer.com/motion/)** - Production-ready animation library
- **[Canvas Confetti 1.9.4](https://github.com/catdad/canvas-confetti)** - Celebration effects

### Backend & Data
- **[Supabase 2.89.0](https://supabase.com/)** - Backend-as-a-Service for authentication and database
- **[TanStack Query 5.83.0](https://tanstack.com/query)** - Powerful data synchronization and caching

### Forms & Validation
- **[React Hook Form 7.61.1](https://react-hook-form.com/)** - Performant form handling
- **[Zod 3.25.76](https://zod.dev/)** - TypeScript-first schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Form validation resolvers

### Additional Libraries
- **[date-fns 3.6.0](https://date-fns.org/)** - Modern date utility library
- **[Recharts 2.15.4](https://recharts.org/)** - Composable charting library
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[@vercel/analytics](https://vercel.com/analytics)** - Web analytics

### Development Tools
- **[ESLint 9.32.0](https://eslint.org/)** - Code linting
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript-specific linting
- **[Autoprefixer 10.4.21](https://github.com/postcss/autoprefixer)** - CSS vendor prefixing
- **[PostCSS 8.5.6](https://postcss.org/)** - CSS transformation

## 📁 Project Structure

```
krishikash/
├── src/
│   ├── components/
│   │   ├── game/                # Game-specific components
│   │   │   ├── GameContainer.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── DecisionPanel.tsx
│   │   │   ├── EventCard.tsx
│   │   │   ├── GameEndScreen.tsx
│   │   │   ├── GameHeader.tsx
│   │   │   ├── GoalSelectionScreen.tsx
│   │   │   ├── IntroScreen.tsx
│   │   │   ├── MonthIndicator.tsx
│   │   │   ├── MonthSummary.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   └── StatsCard.tsx
│   │   ├── ui/                  # shadcn/ui components
│   │   └── auth/                # Authentication components
│   ├── hooks/
│   │   ├── useGameState.tsx     # Core game logic
│   │   ├── useGameSave.tsx      # Save/load functionality
│   │   ├── useAuth.tsx          # Authentication logic
│   │   └── use-mobile.tsx       # Responsive utilities
│   ├── integrations/
│   │   └── supabase/            # Supabase client and types
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   ├── pages/
│   │   ├── Index.tsx            # Main game page
│   │   └── NotFound.tsx         # 404 page
│   ├── types/                   # TypeScript type definitions
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Global styles
├── public/                      # Static assets
├── supabase/                    # Supabase configuration
├── index.html                   # HTML entry point
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite configuration
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** or **bun** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd krishikash
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to start playing!

### Available Scripts

```json
{
  "dev": "vite",                    // Start development server
  "build": "vite build",            // Build for production
  "build:dev": "vite build --mode development",  // Development build
  "lint": "eslint .",               // Run ESLint
  "preview": "vite preview"         // Preview production build
}
```

## 🎲 Game Mechanics

### How to Play

1. **Introduction**: Start with an interactive intro screen explaining the game
2. **Choose Your Goal**: Select a financial goal (₹50,000 bike, ₹5,00,000 car, or ₹50,00,000 house)
3. **Monthly Cycle**:
   - View your dashboard with current financial stats
   - Start a new month
   - Face random events (bonuses, emergencies, expenses)
   - Make financial decisions (save, insure, loan, withdraw)
   - Review month summary
4. **Win Conditions**: 
   - Achieve your goal within the time limit
   - Maintain positive financial stability
5. **Game Over**: 
   - Run out of time
   - Go bankrupt (negative balance without recovery options)

### Financial Indicators

- **💰 Balance**: Current available money
- **🏦 Savings**: Money set aside for goals and emergencies
- **💳 Debt**: Outstanding loans to be repaid
- **📊 Stability**: Overall financial health score

### Strategy Tips

- Build an emergency fund early
- Consider insurance for protection against random events
- Balance saving with loan repayment
- Plan ahead for your chosen goal
- Manage monthly expenses carefully

## 🔐 Environment Variables

The application requires the following environment variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | Yes |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Your Supabase publishable API key | Yes |

### Setting up Supabase

1. Create a [Supabase](https://supabase.com/) account
2. Create a new project
3. Get your project URL and API key from Project Settings > API
4. Add them to your `.env` file




