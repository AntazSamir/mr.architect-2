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
        projectName: 'Modern Fashion E-Commerce',
        websiteType: 'E-Commerce',
        description: 'A cutting-edge online fashion store featuring AI-powered recommendations, virtual try-on, and seamless checkout experience.',
        targetAge: '18-35',
        targetLocation: 'Global (Primary: US, EU, Asia)',
        targetProfession: 'Fashion-conscious millennials and Gen Z shoppers',
        primaryGoal: 'Maximize conversions and customer lifetime value',
        kpis: ['Conversion Rate', 'Average Order Value', 'Customer Retention', 'Cart Abandonment Rate'],
        style: 'Modern, minimalist with bold typography',
        brandColors: '#1a1a1a, #ffffff, #ff6b6b',
        referenceUrls: 'asos.com, zara.com, shopify.com',
        budget: '$50,000 - $100,000',
        timeline: '4-6 months',
        scalability: 'High - Expected to handle 100K+ concurrent users',
        techPreferences: 'Next.js, Shopify API, Stripe, AWS CloudFront',
        thumbnail: '/demo-ecommerce.jpg',
        category: 'E-Commerce',
        createdDate: '2026-01-01',
        featured: true
    },
    {
        id: 'saas-productivity',
        projectName: 'TaskFlow - AI Project Management',
        websiteType: 'SaaS Platform',
        description: 'An intelligent project management platform with AI-powered task prioritization, team collaboration, and real-time analytics.',
        targetAge: '25-50',
        targetLocation: 'Global (B2B Focus)',
        targetProfession: 'Project managers, team leads, entrepreneurs',
        primaryGoal: 'Acquire paying customers and reduce churn',
        kpis: ['Monthly Recurring Revenue', 'Churn Rate', 'Customer Acquisition Cost', 'Daily Active Users'],
        style: 'Clean, professional with data visualization focus',
        brandColors: '#4f46e5, #10b981, #f3f4f6',
        referenceUrls: 'monday.com, notion.so, linear.app',
        budget: '$75,000 - $150,000',
        timeline: '6-8 months',
        scalability: 'Enterprise-grade - Multi-tenant architecture',
        techPreferences: 'React, Node.js, PostgreSQL, Redis, Kubernetes',
        thumbnail: '/demo-saas.jpg',
        category: 'SaaS',
        createdDate: '2026-01-02',
        featured: true
    },
    {
        id: 'portfolio-creative',
        projectName: 'Creative Studio Portfolio',
        websiteType: 'Portfolio/Agency',
        description: 'An immersive portfolio website showcasing creative work with stunning animations, case studies, and interactive elements.',
        targetAge: '25-45',
        targetLocation: 'Global',
        targetProfession: 'Creative directors, agencies, potential clients',
        primaryGoal: 'Generate high-quality leads and showcase expertise',
        kpis: ['Lead Generation', 'Time on Site', 'Portfolio Views', 'Contact Form Submissions'],
        style: 'Bold, creative with experimental interactions',
        brandColors: '#000000, #ffffff, #fbbf24, #8b5cf6',
        referenceUrls: 'awwwards.com, behance.net, dribbble.com',
        budget: '$20,000 - $40,000',
        timeline: '2-3 months',
        scalability: 'Medium - Optimized for performance and aesthetics',
        techPreferences: 'Next.js, Three.js, Framer Motion, Sanity CMS',
        thumbnail: '/demo-portfolio.jpg',
        category: 'Portfolio',
        createdDate: '2026-01-03',
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
