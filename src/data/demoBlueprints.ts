import { BlueprintData } from '@/pages/CreateBlueprint';

export interface DemoBlueprint extends BlueprintData {
    id: string;
    thumbnail: string;
    category: string;
    createdDate: string;
    featured: boolean;
}

export const demoBlueprints: DemoBlueprint[] = [
    {
        id: 'ecommerce-fashion',
        projectName: 'Complete Architecture: LuxeFashion',
        websiteType: 'E-Commerce',
        description: 'A cutting-edge fashion node featuring AI-powered recommendation matrices, virtual try-on protocols, and seamless L1-checkout infrastructure.',
        targetAge: '18-35',
        targetLocation: 'Global (Primary: US, EU, Asia)',
        targetProfession: 'High-frequency digital consumers',
        primaryGoal: 'Synthesize optimal conversion pathways',
        kpis: ['LTV_MAX', 'AOV_STABILITY', 'CHURN_MIN', 'CTR_MAX'],
        style: 'Blueprint Noir: Minimalist, Bold',
        brandColors: '#0a0e14, #00ffff, #ffffff',
        referenceUrls: 'ssense.com, farfetch.com, shopify.com',
        budget: '$80,000 - $150,000',
        timeline: '12_WEEKS_SYNTH',
        scalability: 'Critical - 1M+ Concurrent Nodes',
        techPreferences: 'Next.js 14, Shopify Custom Storefront, Stripe, AWS Edge',
        thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
        category: 'Architecture',
        createdDate: '2026-03-01',
        featured: true
    },
    {
        id: 'saas-productivity',
        projectName: 'Smart Design System: VectorPulse',
        websiteType: 'SaaS Platform',
        description: 'An intelligent system design node with automated token synthesis, component registry, and multi-AI builder integration.',
        targetAge: '24-55',
        targetLocation: 'Global (B2B Focus)',
        targetProfession: 'System architects, lead engineers',
        primaryGoal: 'Establish authoritative design consensus',
        kpis: ['TOKEN_FIDELITY', 'NODE_CONSISTENCY', 'DEV_VELOCITY', 'MAINTENANCE_MIN'],
        style: 'Precision Engineering: High Contrast',
        brandColors: '#000000, #4f46e5, #00ffff',
        referenceUrls: 'linear.app, radis-ui.com, shadcn.com',
        budget: '$120,000 - $250,000',
        timeline: '16_WEEKS_SYNTH',
        scalability: 'Enterprise_Nodes: Multi-Tenant Schema',
        techPreferences: 'React, Tailwind Engine, Radix Primitives, Storybook, NX',
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
        category: 'Design System',
        createdDate: '2026-03-05',
        featured: true
    },
    {
        id: 'portfolio-creative',
        projectName: 'SEO Foundation: StudioMatrix',
        websiteType: 'Portfolio/Agency',
        description: 'An immersive agency node optimized for deep indexing, semantic structured data, and high-performance search visibility.',
        targetAge: '25-45',
        targetLocation: 'Global Reach',
        targetProfession: 'Creative agencies, high-tier consultants',
        primaryGoal: 'Achieve search authority dominance',
        kpis: ['SERP_DOMINANCE', 'INDEX_DEPTH', 'CWV_OPTIMAL', 'SEMANTIC_RELEVANCE'],
        style: 'Modern Cinematic: Glassmorphic',
        brandColors: '#000000, #ffffff, #fbbf24',
        referenceUrls: 'active-theory.com, resign.com, awwwards.com',
        budget: '$45,000 - $90,000',
        timeline: '8_WEEKS_SYNTH',
        scalability: 'Medium: Optimized for High-Latency Load',
        techPreferences: 'Next.js, Sanity.io, JSON-LD, Framer Motion, Vercel Edge',
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
        category: 'SEO',
        createdDate: '2026-03-10',
        featured: true
    },
    {
        id: 'healthcare-telemedicine',
        projectName: 'MediConnect - Telemedicine Platform',
        websiteType: 'Healthcare/Medical',
        description: 'A HIPAA-compliant telemedicine platform connecting patients with doctors through video consultations, e-prescriptions, and health records.',
        targetAge: '25-65',
        targetLocation: 'United States',
        targetProfession: 'Patients seeking remote healthcare, medical professionals',
        primaryGoal: 'Increase patient appointments and improve healthcare accessibility',
        kpis: ['Appointment Bookings', 'Patient Satisfaction Score', 'Platform Uptime', 'Doctor Response Time'],
        style: 'Clean, trustworthy, accessible design',
        brandColors: '#0891b2, #ffffff, #f0fdfa',
        referenceUrls: 'teladoc.com, mdlive.com, amwell.com',
        budget: '$100,000 - $200,000',
        timeline: '8-12 months',
        scalability: 'High - HIPAA compliance and data security required',
        techPreferences: 'React, Node.js, WebRTC, MongoDB, AWS HIPAA',
        thumbnail: '/demo-healthcare.jpg',
        category: 'Healthcare',
        createdDate: '2026-01-04',
        featured: false
    },
    {
        id: 'education-elearning',
        projectName: 'SkillForge - Online Learning Hub',
        websiteType: 'Education/E-Learning',
        description: 'An interactive online learning platform with video courses, live classes, gamification, and student progress tracking.',
        targetAge: '16-45',
        targetLocation: 'Global',
        targetProfession: 'Students, professionals seeking upskilling',
        primaryGoal: 'Increase course enrollments and completion rates',
        kpis: ['Course Completion Rate', 'Student Engagement', 'Revenue per Student', 'Net Promoter Score'],
        style: 'Friendly, engaging with gamification elements',
        brandColors: '#6366f1, #ec4899, #f9fafb',
        referenceUrls: 'udemy.com, coursera.org, skillshare.com',
        budget: '$60,000 - $120,000',
        timeline: '5-7 months',
        scalability: 'High - Video streaming and content delivery optimization',
        techPreferences: 'Next.js, Vimeo API, Stripe, Firebase, CDN',
        thumbnail: '/demo-education.jpg',
        category: 'Education',
        createdDate: '2026-01-05',
        featured: true
    },
    {
        id: 'food-delivery',
        projectName: 'QuickBite - Food Delivery App',
        websiteType: 'Food & Beverage',
        description: 'A modern food delivery platform with real-time order tracking, restaurant management, and smart recommendations.',
        targetAge: '18-45',
        targetLocation: 'Urban areas - Multi-city deployment',
        targetProfession: 'Busy professionals, students, families',
        primaryGoal: 'Maximize order volume and customer retention',
        kpis: ['Orders per Day', 'Average Delivery Time', 'Customer Retention', 'Restaurant Partner Growth'],
        style: 'Vibrant, appetizing, mobile-first design',
        brandColors: '#f97316, #fef3c7, #1f2937',
        referenceUrls: 'ubereats.com, doordash.com, grubhub.com',
        budget: '$80,000 - $150,000',
        timeline: '6-9 months',
        scalability: 'Very High - Real-time tracking and high transaction volume',
        techPreferences: 'React Native, Node.js, MongoDB, Google Maps API, Socket.io',
        thumbnail: '/demo-food.jpg',
        category: 'Food & Beverage',
        createdDate: '2026-01-06',
        featured: false
    },
    {
        id: 'real-estate',
        projectName: 'HomeVista - Property Marketplace',
        websiteType: 'Real Estate',
        description: 'A comprehensive real estate platform with 3D virtual tours, property comparisons, mortgage calculators, and agent matching.',
        targetAge: '25-60',
        targetLocation: 'United States (Expandable)',
        targetProfession: 'Home buyers, sellers, real estate agents',
        primaryGoal: 'Connect buyers with properties and facilitate transactions',
        kpis: ['Property Listings', 'Lead Generation', 'Virtual Tour Completions', 'Agent Connections'],
        style: 'Professional, luxurious, trust-building',
        brandColors: '#0f172a, #cbd5e1, #3b82f6',
        referenceUrls: 'zillow.com, redfin.com, realtor.com',
        budget: '$70,000 - $140,000',
        timeline: '6-8 months',
        scalability: 'High - Large property database and media files',
        techPreferences: 'Next.js, PostgreSQL, Matterport SDK, Mapbox, AWS S3',
        thumbnail: '/demo-realestate.jpg',
        category: 'Real Estate',
        createdDate: '2026-01-07',
        featured: true
    },
    {
        id: 'fitness-wellness',
        projectName: 'FitLife - Wellness & Fitness Hub',
        websiteType: 'Health & Fitness',
        description: 'A holistic fitness platform with workout plans, nutrition tracking, live classes, and community features for wellness enthusiasts.',
        targetAge: '20-50',
        targetLocation: 'Global',
        targetProfession: 'Fitness enthusiasts, health-conscious individuals',
        primaryGoal: 'Build engaged community and subscription revenue',
        kpis: ['Active Subscribers', 'Class Attendance', 'User Engagement', 'Community Growth'],
        style: 'Energetic, motivating, clean aesthetics',
        brandColors: '#10b981, #fbbf24, #f3f4f6',
        referenceUrls: 'peloton.com, myfitnesspal.com, fitbit.com',
        budget: '$50,000 - $100,000',
        timeline: '4-6 months',
        scalability: 'Medium to High - Video streaming and user data',
        techPreferences: 'React, Node.js, MongoDB, Vimeo, Stripe',
        thumbnail: '/demo-fitness.jpg',
        category: 'Health & Fitness',
        createdDate: '2026-01-05',
        featured: false
    }
];

export const getBlueprintById = (id: string): DemoBlueprint | undefined => {
    return demoBlueprints.find(bp => bp.id === id);
};

export const getFeaturedBlueprints = (): DemoBlueprint[] => {
    return demoBlueprints.filter(bp => bp.featured);
};

export const getBlueprintsByCategory = (category: string): DemoBlueprint[] => {
    return demoBlueprints.filter(bp => bp.category === category);
};

export const getAllCategories = (): string[] => {
    return Array.from(new Set(demoBlueprints.map(bp => bp.category)));
};
