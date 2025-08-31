# Based Smiles - Web3 Smile-to-Earn Application

A beautiful Web3 frontend prototype for Based Smiles, built with React, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

Based Smiles is a smile-to-earn Web3 application where users can:
- Capture authentic smiles using camera or file upload
- Get AI-powered smile verification and scoring
- Earn SMILE tokens based on quality scores
- View winning smiles in the community gallery
- Track earnings and performance in their profile

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom Web3 design system
- **UI Components**: Shadcn/ui with custom variants
- **Icons**: Lucide React
- **Routing**: React Router v6
- **State Management**: TanStack Query

## 🎨 Design System

The app features a Base blockchain-inspired design with:
- **Primary Colors**: Base blue (#0052FF) to purple gradients
- **Accent Colors**: Bright purple, cyan highlights
- **Theme**: Dark mode with glass morphism effects
- **Typography**: Modern crypto-friendly fonts
- **Animations**: Smooth transitions and hover effects

## 📱 Features

### Landing Page (/)
- Hero section with Web3 aesthetics
- How it works explanation
- Call-to-action buttons
- Live statistics display

### Smile Capture (/smile)
- Camera interface mockup
- File upload functionality 
- Reward preview
- Processing simulation

### Gallery (/gallery)
- Top-scoring smiles showcase
- Community stats
- Ranking system
- Reward information

### Profile (/profile)
- Wallet connection UI
- Personal statistics
- Recent activity
- Earnings tracking

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

## 🔗 Extending to Full-Stack

This frontend prototype can be extended into a complete Web3 application by adding:

### Backend Components
- **Smart Contracts**: Solidity contracts on Base Sepolia
- **API Server**: Node.js/Express for oracle callbacks
- **AI Oracle**: Openputer AI integration for smile verification
- **IPFS Storage**: Image hash storage
- **Wallet Integration**: Privy authentication

### Recommended Architecture
```
/frontend → This React app
/contracts → Solidity + Hardhat setup  
/backend → Express server
/scripts → Deployment scripts
/.github/workflows → CI/CD pipelines
```

## 🔧 Development with Replit Agent v2

To continue development in Replit Agent v2:

1. Import this repository into Replit
2. The project includes all necessary configuration files
3. Use Replit's built-in tools for:
   - Smart contract development with Hardhat
   - Backend API development
   - Database integration
   - Deployment automation

## 📦 Build & Deploy

### Production Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

The app is optimized for deployment on:
- Vercel
- Netlify  
- GitHub Pages
- Any static hosting service

## 🎨 Customization

The design system is fully customizable through:
- `src/index.css` - CSS variables and design tokens
- `tailwind.config.ts` - Tailwind theme configuration
- `src/components/ui/` - Component variants

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions welcome! This is a prototype meant to showcase the vision for Based Smiles.

---

**Built with ❤️ for the Base ecosystem**