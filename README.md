# DiaSole

<div align="center">
**Health Monitoring Application for Diabetes Management**
</div>

## 📱 Overview

DiaSole is a comprehensive web application designed to help users monitor and manage their diabetes condition. The app combines diet tracking, health monitoring, and (in development) ulcer detection using IoT and machine learning technology.

**Deployment: [https://diasole.vercel.app/](https://diasole.vercel.app/)**

## ✨ Key Features

- **Diet Tracking**: Helps users manage their diet and nutrient intake
- **Health Monitoring**: Monitor and visualize vital health data such as:
  - Glucose levels
  - Blood pressure
  - Cholesterol
  - Uric acid
- **Ulcer Detection** (in development): Integration with IoT devices and machine learning for detecting potential diabetic ulcers

## 🛠 Tech Stack

DiaSole is built with modern technologies for optimal performance and user experience:

- **Frontend & Backend**: [Next.js](https://nextjs.org/)
- **Database**: [Neon Database](https://neon.tech/)
- **Authentication**: Stack Auth (Neon-auth)
- **UI Components**: [Shadcn-ui](https://ui.shadcn.com/)
- **Data Fetching**: [Tanstack Query](https://tanstack.com/query)
- **ORM**: [Prisma](https://www.prisma.io/)
- **AI Integration**: [Google AI Studio (Gemini)](https://ai.google.dev/)
- **Form Validation**: [Zod](https://zod.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or newer)
- NPM 
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/diasole.git

# Navigate to the project directory
cd diasole

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your database credentials and API keys

# Run database migrations
npx prisma generate
npx prisma migrate dev

# Run the application in development mode
npm run dev
# or
yarn dev
```

## Deployment

DiaSole is currently deployed using [Vercel](https://vercel.com/).

## 📂 Project Structure

```
diasole/
├── src/                  
│   ├── app/              
│   ├── components/              
│   ├── generated/        
│   ├── hooks/
│   ├── lib/
│   ├── providers
│   ├── middleware.ts
│   └── stack.tsx            
├── prisma/               
├── public/               
└── ...
```

## 🔐 Authentication and Security

DiaSole uses Stack Auth with Neon-auth for secure authentication.

## 📱 Application Features

### Diet Tracking
Users can record and monitor their food intake, with a focus on nutrients that are important for diabetes management.

### Health Monitoring
The health monitoring module allows users to:
- Record important health measurements
- View data in easy-to-read charts
- Gain insights into their health trends

### Ulcer Detection (Coming Soon)
Feature **under development** to detect potential diabetic ulcers using:
- Integration with IoT devices
- Early detection for complication prevention

## 🤝 Contributing

Contributions to DiaSole are highly appreciated. Current contributors:

- **Abdullah Faqih Muzakki** (qmuza) - Machine learning model and ulcer detection feature
- **Rayhan Firdaus Ardian** (HappyRehund) - Frontend and Backend

---

&copy; 2025 DiaSole | [Website](https://diasole.vercel.app/)
