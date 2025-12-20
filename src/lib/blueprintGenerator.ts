import { BlueprintData } from '@/pages/CreateBlueprint';

export interface GeneratedBlueprint {
  overview: {
    name: string;
    type: string;
    description: string;
    targetAudience: string;
    primaryGoal: string;
    uniqueValue: string;
  };
  pages: Array<{
    name: string;
    path: string;
    sections: string[];
    priority: 'Critical' | 'High' | 'Medium' | 'Low';
    description: string;
  }>;
  navigation: {
    style: string;
    items: string[];
    cta: string;
    mobileStrategy: string;
  };
  components: Array<{
    name: string;
    purpose: string;
    priority: 'Core' | 'Important' | 'Enhancement';
  }>;
  designSystem: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
    typography: {
      headingFont: string;
      bodyFont: string;
      scale: string;
    };
    spacing: string;
    borderRadius: string;
    shadows: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: Array<{
      keyword: string;
      volume: string;
      difficulty: 'Low' | 'Medium' | 'High';
      intent: string;
    }>;
    structuredData: string[];
  };
  techStack: {
    frontend: string;
    styling: string;
    animation: string;
    stateManagement: string;
    routing: string;
    backend: string;
    database: string;
    hosting: string;
    analytics: string;
  };
  aiPrompts: {
    lovable: string;
    cursor: string;
    bolt: string;
    replit: string;
  };
}

const websiteTypeConfig: Record<string, {
  pages: Array<{ name: string; path: string; sections: string[]; priority: 'Critical' | 'High' | 'Medium' | 'Low'; description: string }>;
  components: Array<{ name: string; purpose: string; priority: 'Core' | 'Important' | 'Enhancement' }>;
  suggestedGoals: string[];
}> = {
  ecommerce: {
    pages: [
      { name: 'Home', path: '/', sections: ['Hero Banner', 'Featured Products', 'Categories Grid', 'Promotions', 'Testimonials', 'Newsletter'], priority: 'Critical', description: 'Main landing page showcasing products and deals' },
      { name: 'Shop', path: '/shop', sections: ['Product Grid', 'Filters Sidebar', 'Sort Options', 'Pagination', 'Quick View Modal'], priority: 'Critical', description: 'Browse and filter all products' },
      { name: 'Product Detail', path: '/product/:id', sections: ['Product Gallery', 'Product Info', 'Add to Cart', 'Reviews', 'Related Products'], priority: 'Critical', description: 'Individual product page with all details' },
      { name: 'Cart', path: '/cart', sections: ['Cart Items', 'Order Summary', 'Promo Code', 'Continue Shopping'], priority: 'Critical', description: 'Shopping cart with item management' },
      { name: 'Checkout', path: '/checkout', sections: ['Shipping Info', 'Payment Method', 'Order Review', 'Confirmation'], priority: 'Critical', description: 'Multi-step checkout process' },
      { name: 'Account', path: '/account', sections: ['Profile', 'Orders History', 'Wishlist', 'Settings'], priority: 'High', description: 'User account management' },
      { name: 'About', path: '/about', sections: ['Brand Story', 'Team', 'Values', 'Contact'], priority: 'Medium', description: 'Company information and story' },
    ],
    components: [
      { name: 'Product Card', purpose: 'Display product with image, price, and quick actions', priority: 'Core' },
      { name: 'Shopping Cart Drawer', purpose: 'Slide-out cart for quick access', priority: 'Core' },
      { name: 'Product Gallery', purpose: 'Image carousel with zoom and thumbnails', priority: 'Core' },
      { name: 'Filter System', purpose: 'Category, price, and attribute filters', priority: 'Core' },
      { name: 'Checkout Stepper', purpose: 'Multi-step checkout progress indicator', priority: 'Core' },
      { name: 'Review Component', purpose: 'Star ratings and customer reviews', priority: 'Important' },
      { name: 'Wishlist Button', purpose: 'Save products for later', priority: 'Enhancement' },
    ],
    suggestedGoals: ['conversions', 'sales', 'customer-retention'],
  },
  portfolio: {
    pages: [
      { name: 'Home', path: '/', sections: ['Hero Introduction', 'Featured Work', 'Skills Overview', 'Testimonials', 'Contact CTA'], priority: 'Critical', description: 'Personal introduction and work highlights' },
      { name: 'Work', path: '/work', sections: ['Project Grid', 'Category Filters', 'Case Study Previews'], priority: 'Critical', description: 'Showcase of all projects and work' },
      { name: 'Case Study', path: '/work/:id', sections: ['Project Header', 'Challenge', 'Process', 'Solution', 'Results', 'Gallery'], priority: 'High', description: 'Detailed project breakdown' },
      { name: 'About', path: '/about', sections: ['Bio', 'Skills & Tools', 'Experience Timeline', 'Education'], priority: 'High', description: 'Personal background and expertise' },
      { name: 'Contact', path: '/contact', sections: ['Contact Form', 'Social Links', 'Availability Status'], priority: 'High', description: 'Ways to get in touch' },
    ],
    components: [
      { name: 'Project Card', purpose: 'Showcase project with hover effects', priority: 'Core' },
      { name: 'Hero Section', purpose: 'Animated introduction with name and role', priority: 'Core' },
      { name: 'Skills Grid', purpose: 'Visual display of technologies and tools', priority: 'Important' },
      { name: 'Timeline', purpose: 'Experience and education history', priority: 'Important' },
      { name: 'Contact Form', purpose: 'Email/message submission', priority: 'Core' },
      { name: 'Image Lightbox', purpose: 'Full-screen project image viewing', priority: 'Enhancement' },
    ],
    suggestedGoals: ['leads', 'brand-awareness', 'engagement'],
  },
  saas: {
    pages: [
      { name: 'Home', path: '/', sections: ['Hero with CTA', 'Problem/Solution', 'Features Grid', 'How It Works', 'Pricing', 'Testimonials', 'FAQ', 'Final CTA'], priority: 'Critical', description: 'Main landing page for conversions' },
      { name: 'Features', path: '/features', sections: ['Feature Deep Dives', 'Use Cases', 'Integrations', 'Comparison Table'], priority: 'High', description: 'Detailed feature explanations' },
      { name: 'Pricing', path: '/pricing', sections: ['Pricing Tiers', 'Feature Comparison', 'FAQ', 'Enterprise Contact'], priority: 'Critical', description: 'Pricing plans and options' },
      { name: 'About', path: '/about', sections: ['Company Story', 'Team', 'Values', 'Press/Awards'], priority: 'Medium', description: 'Company information' },
      { name: 'Blog', path: '/blog', sections: ['Article Grid', 'Categories', 'Search', 'Newsletter'], priority: 'Medium', description: 'Content marketing hub' },
      { name: 'Contact', path: '/contact', sections: ['Contact Form', 'Support Options', 'Office Locations'], priority: 'Medium', description: 'Get in touch' },
      { name: 'Dashboard', path: '/dashboard', sections: ['Overview', 'Analytics', 'Settings', 'Account'], priority: 'High', description: 'User dashboard (post-login)' },
    ],
    components: [
      { name: 'Feature Card', purpose: 'Highlight individual features with icons', priority: 'Core' },
      { name: 'Pricing Table', purpose: 'Compare plan tiers with toggle', priority: 'Core' },
      { name: 'Testimonial Carousel', purpose: 'Social proof from customers', priority: 'Important' },
      { name: 'FAQ Accordion', purpose: 'Expandable frequently asked questions', priority: 'Important' },
      { name: 'CTA Section', purpose: 'Conversion-focused call-to-action blocks', priority: 'Core' },
      { name: 'Dashboard Widgets', purpose: 'Analytics and metrics displays', priority: 'Core' },
      { name: 'Onboarding Flow', purpose: 'New user setup wizard', priority: 'Important' },
    ],
    suggestedGoals: ['conversions', 'signups', 'engagement'],
  },
  blog: {
    pages: [
      { name: 'Home', path: '/', sections: ['Featured Post', 'Recent Articles', 'Categories', 'Newsletter', 'About Author'], priority: 'Critical', description: 'Blog homepage with latest content' },
      { name: 'Article', path: '/post/:slug', sections: ['Article Header', 'Content', 'Author Bio', 'Related Posts', 'Comments'], priority: 'Critical', description: 'Individual blog post' },
      { name: 'Category', path: '/category/:slug', sections: ['Category Header', 'Article Grid', 'Pagination'], priority: 'High', description: 'Posts filtered by category' },
      { name: 'About', path: '/about', sections: ['Author Story', 'Mission', 'Contact'], priority: 'Medium', description: 'About the blog and author' },
      { name: 'Contact', path: '/contact', sections: ['Contact Form', 'Social Links'], priority: 'Low', description: 'Contact page' },
    ],
    components: [
      { name: 'Article Card', purpose: 'Post preview with image and excerpt', priority: 'Core' },
      { name: 'Reading Progress', purpose: 'Article reading progress indicator', priority: 'Enhancement' },
      { name: 'Table of Contents', purpose: 'Article navigation sidebar', priority: 'Important' },
      { name: 'Newsletter Signup', purpose: 'Email subscription form', priority: 'Core' },
      { name: 'Share Buttons', purpose: 'Social media sharing options', priority: 'Important' },
      { name: 'Comments Section', purpose: 'Reader engagement and discussion', priority: 'Important' },
    ],
    suggestedGoals: ['engagement', 'subscribers', 'traffic'],
  },
  corporate: {
    pages: [
      { name: 'Home', path: '/', sections: ['Hero', 'Services Overview', 'Why Choose Us', 'Clients/Partners', 'Testimonials', 'CTA'], priority: 'Critical', description: 'Company homepage' },
      { name: 'Services', path: '/services', sections: ['Services Grid', 'Process', 'Case Studies Preview'], priority: 'Critical', description: 'Detailed service offerings' },
      { name: 'About', path: '/about', sections: ['Company History', 'Mission & Vision', 'Team', 'Values'], priority: 'High', description: 'Company background' },
      { name: 'Case Studies', path: '/case-studies', sections: ['Project Grid', 'Filters', 'Results Highlights'], priority: 'High', description: 'Success stories and portfolio' },
      { name: 'Careers', path: '/careers', sections: ['Culture', 'Benefits', 'Open Positions', 'Application'], priority: 'Medium', description: 'Job opportunities' },
      { name: 'Contact', path: '/contact', sections: ['Contact Form', 'Locations', 'Support'], priority: 'High', description: 'Get in touch' },
    ],
    components: [
      { name: 'Service Card', purpose: 'Highlight service with icon and description', priority: 'Core' },
      { name: 'Team Grid', purpose: 'Display team members with bios', priority: 'Important' },
      { name: 'Stats Counter', purpose: 'Animated company statistics', priority: 'Important' },
      { name: 'Client Logo Grid', purpose: 'Showcase partner and client logos', priority: 'Important' },
      { name: 'Contact Form', purpose: 'Business inquiry form', priority: 'Core' },
      { name: 'Office Locations Map', purpose: 'Interactive office locations', priority: 'Enhancement' },
    ],
    suggestedGoals: ['leads', 'brand-awareness', 'conversions'],
  },
  landing: {
    pages: [
      { name: 'Landing Page', path: '/', sections: ['Hero with CTA', 'Problem Statement', 'Solution', 'Features', 'Social Proof', 'Pricing/Offer', 'FAQ', 'Final CTA'], priority: 'Critical', description: 'Single high-converting landing page' },
      { name: 'Thank You', path: '/thank-you', sections: ['Confirmation', 'Next Steps', 'Social Share'], priority: 'High', description: 'Post-conversion confirmation' },
    ],
    components: [
      { name: 'Hero Section', purpose: 'Above-the-fold conversion-focused hero', priority: 'Core' },
      { name: 'Feature Blocks', purpose: 'Benefits and features display', priority: 'Core' },
      { name: 'Testimonial Cards', purpose: 'Social proof elements', priority: 'Core' },
      { name: 'Pricing Card', purpose: 'Offer or pricing display', priority: 'Core' },
      { name: 'FAQ Accordion', purpose: 'Address objections', priority: 'Important' },
      { name: 'Countdown Timer', purpose: 'Urgency for limited offers', priority: 'Enhancement' },
      { name: 'Email Capture', purpose: 'Lead generation form', priority: 'Core' },
    ],
    suggestedGoals: ['conversions', 'leads', 'signups'],
  },
};

const styleToColors: Record<string, { primary: string; secondary: string; accent: string; bg: string; text: string }> = {
  modern: { primary: '#6366F1', secondary: '#22D3EE', accent: '#F59E0B', bg: '#0F172A', text: '#F8FAFC' },
  minimal: { primary: '#18181B', secondary: '#71717A', accent: '#3B82F6', bg: '#FFFFFF', text: '#09090B' },
  bold: { primary: '#DC2626', secondary: '#FBBF24', accent: '#10B981', bg: '#1F2937', text: '#F9FAFB' },
  elegant: { primary: '#7C3AED', secondary: '#EC4899', accent: '#14B8A6', bg: '#F5F3FF', text: '#1E1B4B' },
  playful: { primary: '#F43F5E', secondary: '#8B5CF6', accent: '#22C55E', bg: '#FFF7ED', text: '#1C1917' },
  corporate: { primary: '#1E40AF', secondary: '#0891B2', accent: '#059669', bg: '#F8FAFC', text: '#0F172A' },
  dark: { primary: '#06B6D4', secondary: '#A855F7', accent: '#FACC15', bg: '#030712', text: '#F9FAFB' },
  nature: { primary: '#16A34A', secondary: '#84CC16', accent: '#D97706', bg: '#ECFDF5', text: '#14532D' },
};

const goalToKPIs: Record<string, string[]> = {
  conversions: ['Conversion Rate', 'Cost Per Acquisition', 'Revenue Per Visitor', 'Cart Abandonment Rate'],
  leads: ['Lead Generation Rate', 'Form Completion Rate', 'Lead Quality Score', 'Cost Per Lead'],
  engagement: ['Time on Site', 'Pages Per Session', 'Bounce Rate', 'Return Visitor Rate'],
  sales: ['Total Revenue', 'Average Order Value', 'Customer Lifetime Value', 'Repeat Purchase Rate'],
  signups: ['Signup Conversion Rate', 'Trial-to-Paid Ratio', 'Activation Rate', 'Churn Rate'],
  'brand-awareness': ['Brand Mentions', 'Social Shares', 'Direct Traffic', 'Search Volume'],
  traffic: ['Organic Traffic', 'Referral Traffic', 'Page Views', 'New vs Returning Users'],
  subscribers: ['Subscriber Growth Rate', 'Email Open Rate', 'Click-Through Rate', 'Unsubscribe Rate'],
  'customer-retention': ['Customer Retention Rate', 'Net Promoter Score', 'Customer Satisfaction', 'Repeat Purchase Rate'],
};

export function generateBlueprint(data: BlueprintData): GeneratedBlueprint {
  const websiteType = data.websiteType?.toLowerCase() || 'corporate';
  const typeConfig = websiteTypeConfig[websiteType] || websiteTypeConfig.corporate;
  const styleConfig = styleToColors[data.style?.toLowerCase() || 'modern'] || styleToColors.modern;
  
  // Parse brand colors if provided
  let primaryColor = styleConfig.primary;
  let secondaryColor = styleConfig.secondary;
  if (data.brandColors) {
    const colors = data.brandColors.split(/[,\s]+/).filter(c => c.startsWith('#') || c.match(/^[a-zA-Z]+$/));
    if (colors[0]) primaryColor = colors[0].startsWith('#') ? colors[0] : styleConfig.primary;
    if (colors[1]) secondaryColor = colors[1].startsWith('#') ? colors[1] : styleConfig.secondary;
  }

  // Generate unique value proposition
  const uniqueValue = generateUniqueValue(data);

  // Generate SEO keywords
  const keywords = generateSEOKeywords(data);

  // Determine tech stack based on requirements
  const techStack = determineTechStack(data);

  // Generate AI prompts
  const aiPrompts = generateAIPrompts(data, typeConfig, techStack);

  return {
    overview: {
      name: data.projectName || 'Website Project',
      type: websiteType,
      description: data.description || `A professional ${websiteType} website`,
      targetAudience: formatTargetAudience(data),
      primaryGoal: data.primaryGoal || 'engagement',
      uniqueValue,
    },
    pages: typeConfig.pages,
    navigation: {
      style: determineNavStyle(websiteType, data.style || 'modern'),
      items: typeConfig.pages.filter(p => p.priority !== 'Low').slice(0, 5).map(p => p.name),
      cta: determineCTA(data.primaryGoal || 'engagement', websiteType),
      mobileStrategy: 'Hamburger menu with slide-out drawer, sticky header on scroll',
    },
    components: typeConfig.components,
    designSystem: {
      primaryColor,
      secondaryColor,
      accentColor: styleConfig.accent,
      backgroundColor: styleConfig.bg,
      textColor: styleConfig.text,
      typography: determineTypography(data.style || 'modern'),
      spacing: '4px base unit (0.25rem), 8-point grid system',
      borderRadius: data.style === 'minimal' ? '0-4px' : data.style === 'playful' ? '16-24px' : '8-12px',
      shadows: data.style === 'minimal' ? 'Subtle, low elevation' : 'Medium elevation with colored glow effects',
    },
    seo: {
      title: `${data.projectName || 'Website'} | ${capitalize(websiteType)} ${data.primaryGoal === 'leads' ? 'Solutions' : 'Platform'}`,
      description: data.description?.slice(0, 155) || `Discover ${data.projectName || 'our'} - the best ${websiteType} solution for ${data.targetProfession || 'professionals'}.`,
      keywords,
      structuredData: determineStructuredData(websiteType),
    },
    techStack,
    aiPrompts,
  };
}

function generateUniqueValue(data: BlueprintData): string {
  const type = data.websiteType?.toLowerCase() || 'website';
  const audience = data.targetProfession || data.targetAge || 'users';
  const goal = data.primaryGoal || 'success';
  
  const templates = [
    `Empowering ${audience} with a seamless ${type} experience designed for ${goal}`,
    `The modern ${type} solution that helps ${audience} achieve ${goal}`,
    `Built for ${audience} who demand excellence in their ${type} experience`,
    `Where ${type} meets innovation - designed with ${audience} in mind`,
  ];
  
  return templates[Math.floor(Math.random() * templates.length)];
}

function formatTargetAudience(data: BlueprintData): string {
  const parts = [];
  if (data.targetAge) parts.push(data.targetAge);
  if (data.targetProfession) parts.push(data.targetProfession);
  if (data.targetLocation) parts.push(`based in ${data.targetLocation}`);
  return parts.length > 0 ? parts.join(', ') : 'General audience';
}

function generateSEOKeywords(data: BlueprintData): GeneratedBlueprint['seo']['keywords'] {
  const type = data.websiteType?.toLowerCase() || 'website';
  const name = data.projectName?.toLowerCase() || 'website';
  
  return [
    { keyword: `best ${type} platform`, volume: '22,000', difficulty: 'High', intent: 'Commercial' },
    { keyword: `${type} for ${data.targetProfession?.toLowerCase() || 'professionals'}`, volume: '8,100', difficulty: 'Medium', intent: 'Informational' },
    { keyword: name, volume: 'Branded', difficulty: 'Low', intent: 'Navigational' },
    { keyword: `${type} ${data.primaryGoal || 'solutions'}`, volume: '12,400', difficulty: 'Medium', intent: 'Commercial' },
    { keyword: `online ${type}`, volume: '18,200', difficulty: 'High', intent: 'Transactional' },
  ];
}

function determineTechStack(data: BlueprintData): GeneratedBlueprint['techStack'] {
  const scalability = data.scalability?.toLowerCase() || 'medium';
  const prefs = data.techPreferences?.toLowerCase() || '';
  
  let backend = 'Node.js + Express';
  let database = 'PostgreSQL';
  let hosting = 'Vercel';
  
  if (scalability === 'high' || prefs.includes('enterprise')) {
    backend = 'Node.js + NestJS';
    database = 'PostgreSQL + Redis';
    hosting = 'AWS / Google Cloud';
  } else if (scalability === 'low' || data.budget === 'Low') {
    backend = 'Serverless Functions';
    database = 'Supabase';
    hosting = 'Vercel / Netlify';
  }
  
  if (prefs.includes('supabase')) {
    database = 'Supabase';
    backend = 'Supabase Edge Functions';
  }
  
  return {
    frontend: 'React 18 + TypeScript',
    styling: 'Tailwind CSS + shadcn/ui',
    animation: 'Framer Motion',
    stateManagement: scalability === 'high' ? 'Zustand + React Query' : 'React Query',
    routing: 'React Router v6',
    backend,
    database,
    hosting,
    analytics: 'Plausible / PostHog',
  };
}

function determineNavStyle(type: string, style: string): string {
  if (type === 'portfolio') return 'Minimal fixed header with centered logo, smooth scroll navigation';
  if (type === 'ecommerce') return 'Multi-level header with search, categories mega menu, and utility links';
  if (type === 'landing') return 'Transparent header with anchor links, converts to solid on scroll';
  if (style === 'minimal') return 'Clean fixed header with logo and minimal navigation items';
  return 'Fixed header with logo, primary nav, and CTA button';
}

function determineCTA(goal: string, type: string): string {
  const ctaMap: Record<string, Record<string, string>> = {
    conversions: { default: 'Get Started Free', ecommerce: 'Shop Now', saas: 'Start Free Trial' },
    leads: { default: 'Contact Us', ecommerce: 'Get Quote', saas: 'Request Demo' },
    engagement: { default: 'Learn More', blog: 'Subscribe', portfolio: 'View Work' },
    signups: { default: 'Sign Up Free', saas: 'Create Account', blog: 'Join Newsletter' },
    sales: { default: 'Buy Now', ecommerce: 'Add to Cart', saas: 'Upgrade Plan' },
  };
  
  return ctaMap[goal]?.[type] || ctaMap[goal]?.default || 'Get Started';
}

function determineTypography(style: string): GeneratedBlueprint['designSystem']['typography'] {
  const typographyMap: Record<string, { headingFont: string; bodyFont: string; scale: string }> = {
    modern: { headingFont: 'Inter / Cal Sans', bodyFont: 'Inter', scale: '1.250 (Major Third)' },
    minimal: { headingFont: 'Söhne / SF Pro', bodyFont: 'System UI', scale: '1.200 (Minor Third)' },
    bold: { headingFont: 'Clash Display / Bebas Neue', bodyFont: 'DM Sans', scale: '1.333 (Perfect Fourth)' },
    elegant: { headingFont: 'Playfair Display / Cormorant', bodyFont: 'Lato', scale: '1.250 (Major Third)' },
    playful: { headingFont: 'Fredoka / Nunito', bodyFont: 'Quicksand', scale: '1.200 (Minor Third)' },
    corporate: { headingFont: 'IBM Plex Sans / Source Sans Pro', bodyFont: 'Open Sans', scale: '1.250 (Major Third)' },
    dark: { headingFont: 'JetBrains Mono / Space Grotesk', bodyFont: 'Inter', scale: '1.250 (Major Third)' },
    nature: { headingFont: 'Merriweather / Libre Baskerville', bodyFont: 'Source Serif Pro', scale: '1.200 (Minor Third)' },
  };
  
  return typographyMap[style] || typographyMap.modern;
}

function determineStructuredData(type: string): string[] {
  const baseData = ['Organization', 'WebSite', 'BreadcrumbList'];
  
  const typeData: Record<string, string[]> = {
    ecommerce: ['Product', 'Offer', 'AggregateRating', 'Review'],
    blog: ['Article', 'BlogPosting', 'Person'],
    saas: ['SoftwareApplication', 'FAQPage', 'HowTo'],
    corporate: ['LocalBusiness', 'Service', 'ContactPoint'],
    portfolio: ['Person', 'CreativeWork', 'ImageGallery'],
    landing: ['FAQPage', 'HowTo', 'Offer'],
  };
  
  return [...baseData, ...(typeData[type] || [])];
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateAIPrompts(
  data: BlueprintData,
  typeConfig: typeof websiteTypeConfig[string],
  techStack: GeneratedBlueprint['techStack']
): GeneratedBlueprint['aiPrompts'] {
  const basePrompt = `Create a ${data.websiteType || 'modern'} website called "${data.projectName || 'My Website'}".

## Project Overview
${data.description || 'A professional web application'}

## Target Audience
- Age Group: ${data.targetAge || 'All ages'}
- Location: ${data.targetLocation || 'Global'}
- Profession: ${data.targetProfession || 'General'}

## Primary Goal
${data.primaryGoal || 'Engagement'} - Focus on maximizing this metric

## Design Requirements
- Style: ${data.style || 'Modern'} aesthetic
- Colors: ${data.brandColors || 'Use appropriate color palette for the style'}
${data.referenceUrls ? `- Reference Sites: ${data.referenceUrls}` : ''}

## Pages Required
${typeConfig.pages.map(p => `- ${p.name} (${p.path}): ${p.sections.join(', ')}`).join('\n')}

## Core Components
${typeConfig.components.filter(c => c.priority === 'Core').map(c => `- ${c.name}: ${c.purpose}`).join('\n')}

## Technical Requirements
- Budget Level: ${data.budget || 'Medium'}
- Timeline: ${data.timeline || 'Standard'}
- Scalability: ${data.scalability || 'Medium'}
${data.techPreferences ? `- Preferences: ${data.techPreferences}` : ''}`;

  return {
    lovable: `${basePrompt}

## Lovable-Specific Instructions
- Use React 18 with TypeScript for type safety
- Implement Tailwind CSS with shadcn/ui components
- Add Framer Motion for smooth page transitions and micro-interactions
- Set up React Router for navigation with lazy loading
- Create a comprehensive design system in index.css and tailwind.config.ts
- Implement responsive design with mobile-first approach
- Add proper SEO meta tags and semantic HTML
- Include toast notifications for user feedback
- Use React Query for any data fetching needs`,

    cursor: `${basePrompt}

## Cursor-Specific Instructions
- Create a well-organized folder structure (components/, pages/, hooks/, lib/, types/)
- Use TypeScript strictly with proper interfaces and types
- Implement ESLint and Prettier configurations
- Create reusable custom hooks for common logic
- Add comprehensive error boundaries
- Implement proper loading states and skeletons
- Use environment variables for configuration
- Add unit tests for critical components
- Document complex functions with JSDoc comments`,

    bolt: `${basePrompt}

## Bolt.new-Specific Instructions
- Initialize with Vite + React + TypeScript template
- Configure Tailwind CSS with custom design tokens
- Create a component library with consistent patterns
- Implement state management with Zustand if needed
- Add proper TypeScript path aliases (@/ imports)
- Create reusable layout components
- Implement dark/light mode toggle
- Add proper form validation with React Hook Form
- Include loading states and error handling`,

    replit: `${basePrompt}

## Replit-Specific Instructions
- Set up a full-stack monorepo structure
- Configure Express.js backend with TypeScript
- Set up database with Prisma ORM
- Implement JWT authentication if user accounts needed
- Create RESTful API endpoints
- Add CORS and security middleware
- Set up environment variables with .env
- Include database migrations
- Add health check endpoints
- Configure for Replit deployment`,
  };
}
