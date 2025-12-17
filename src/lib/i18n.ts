// Internationalization utilities for Mr. Architect
// Supports: English (en), Spanish (es), French (fr)

export type Locale = 'en' | 'es' | 'fr';

export const locales: Locale[] = ['en', 'es', 'fr'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  es: '🇪🇸',
  fr: '🇫🇷',
};

// Translation keys organized by feature
export const translations = {
  en: {
    // Navigation & Common
    nav: {
      features: 'Features',
      howItWorks: 'How It Works',
      pricing: 'Pricing',
      login: 'Log In',
      getStarted: 'Get Started Free',
    },
    // Hero Section
    hero: {
      badge: 'AI-Powered Website Planning',
      title: 'Transform Website Planning',
      titleHighlight: 'From Days to Minutes',
      subtitle: 'Generate comprehensive, developer-ready website blueprints with AI. Architecture, design systems, SEO foundations, and tech stack recommendations — all in one intelligent platform.',
      cta: 'Create Your Blueprint',
      ctaSecondary: 'Watch Demo',
      trustedBy: 'Trusted by developers at',
    },
    // Features
    features: {
      sectionTitle: 'Everything You Need',
      sectionSubtitle: 'Powerful features designed for modern web development teams',
      architecture: {
        title: 'Smart Architecture',
        description: 'AI-generated page structures, navigation hierarchies, and user flows optimized for your specific project type.',
      },
      design: {
        title: 'Design Systems',
        description: 'Complete design specifications including typography, color palettes with WCAG validation, and component libraries.',
      },
      seo: {
        title: 'SEO Foundation',
        description: 'Keyword strategies, meta tag templates, content guidelines, and schema markup recommendations.',
      },
      techStack: {
        title: 'Tech Recommendations',
        description: 'Framework suggestions with justifications, performance benchmarks, and cost estimations.',
      },
      export: {
        title: 'Multi-Format Export',
        description: 'Export your blueprints as PDF, JSON, Markdown, or interactive HTML reports.',
      },
      collaboration: {
        title: 'Team Collaboration',
        description: 'Share blueprints, collect feedback, and track versions across your entire team.',
      },
    },
    // Form / Wizard
    wizard: {
      title: 'Create Your Blueprint',
      subtitle: 'Tell us about your project and we\'ll generate a comprehensive website plan.',
      step: 'Step',
      of: 'of',
      next: 'Continue',
      back: 'Back',
      generate: 'Generate Blueprint',
      generating: 'Generating...',
      steps: {
        basics: 'Project Basics',
        audience: 'Target Audience',
        objectives: 'Objectives',
        design: 'Design Preferences',
        technical: 'Technical Requirements',
        review: 'Review & Generate',
      },
      fields: {
        projectName: 'Project Name',
        projectNamePlaceholder: 'My Awesome Website',
        websiteType: 'Website Type',
        websiteTypePlaceholder: 'Select type...',
        description: 'Brief Description',
        descriptionPlaceholder: 'Describe your website in a few sentences...',
        targetAge: 'Target Age Range',
        targetLocation: 'Primary Location',
        targetProfession: 'Target Profession/Industry',
        primaryGoal: 'Primary Goal',
        kpis: 'Key Performance Indicators',
        style: 'Design Style',
        brandColors: 'Brand Colors (if any)',
        referenceUrls: 'Reference Websites',
        referenceUrlsPlaceholder: 'Enter URLs of websites you admire...',
        budget: 'Budget Range',
        timeline: 'Timeline',
        scalability: 'Scalability Needs',
        techPreferences: 'Technology Preferences',
      },
      websiteTypes: {
        saas: 'SaaS Product',
        portfolio: 'Portfolio',
        ecommerce: 'E-commerce',
        blog: 'Blog / Content',
        corporate: 'Corporate',
        community: 'Community',
        marketplace: 'Marketplace',
        landing: 'Landing Page',
      },
      goals: {
        sales: 'Drive Sales',
        leads: 'Generate Leads',
        information: 'Provide Information',
        engagement: 'Build Engagement',
        community: 'Build Community',
      },
      styles: {
        modern: 'Modern & Clean',
        minimalist: 'Minimalist',
        bold: 'Bold & Dynamic',
        playful: 'Playful & Fun',
        professional: 'Professional',
        creative: 'Creative & Artistic',
      },
    },
    // Blueprint Preview
    blueprint: {
      title: 'Your Website Blueprint',
      architecture: 'Architecture',
      designSystem: 'Design System',
      seoStrategy: 'SEO Strategy',
      techStack: 'Technology Stack',
      export: 'Export Blueprint',
      downloadPdf: 'Download PDF',
      downloadJson: 'Download JSON',
      share: 'Share Link',
      regenerate: 'Regenerate',
    },
    // Footer
    footer: {
      tagline: 'Transforming website planning with AI.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      features: 'Features',
      pricing: 'Pricing',
      docs: 'Documentation',
      about: 'About Us',
      blog: 'Blog',
      careers: 'Careers',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: '© 2024 Mr. Architect. All rights reserved.',
    },
  },
  es: {
    nav: {
      features: 'Características',
      howItWorks: 'Cómo Funciona',
      pricing: 'Precios',
      login: 'Iniciar Sesión',
      getStarted: 'Comenzar Gratis',
    },
    hero: {
      badge: 'Planificación de Sitios Web con IA',
      title: 'Transforma la Planificación',
      titleHighlight: 'De Días a Minutos',
      subtitle: 'Genera planos de sitios web completos y listos para desarrolladores con IA. Arquitectura, sistemas de diseño, fundamentos SEO y recomendaciones de tecnología — todo en una plataforma inteligente.',
      cta: 'Crear Tu Plano',
      ctaSecondary: 'Ver Demo',
      trustedBy: 'Usado por desarrolladores en',
    },
    features: {
      sectionTitle: 'Todo lo que Necesitas',
      sectionSubtitle: 'Funciones potentes diseñadas para equipos de desarrollo web modernos',
      architecture: {
        title: 'Arquitectura Inteligente',
        description: 'Estructuras de páginas generadas por IA, jerarquías de navegación y flujos de usuario optimizados para tu tipo de proyecto.',
      },
      design: {
        title: 'Sistemas de Diseño',
        description: 'Especificaciones de diseño completas incluyendo tipografía, paletas de colores con validación WCAG y bibliotecas de componentes.',
      },
      seo: {
        title: 'Fundamentos SEO',
        description: 'Estrategias de palabras clave, plantillas de meta tags, guías de contenido y recomendaciones de schema markup.',
      },
      techStack: {
        title: 'Recomendaciones Técnicas',
        description: 'Sugerencias de frameworks con justificaciones, benchmarks de rendimiento y estimaciones de costos.',
      },
      export: {
        title: 'Exportación Multi-Formato',
        description: 'Exporta tus planos como PDF, JSON, Markdown o informes HTML interactivos.',
      },
      collaboration: {
        title: 'Colaboración en Equipo',
        description: 'Comparte planos, recoge feedback y gestiona versiones en todo tu equipo.',
      },
    },
    wizard: {
      title: 'Crea Tu Plano',
      subtitle: 'Cuéntanos sobre tu proyecto y generaremos un plan de sitio web completo.',
      step: 'Paso',
      of: 'de',
      next: 'Continuar',
      back: 'Atrás',
      generate: 'Generar Plano',
      generating: 'Generando...',
      steps: {
        basics: 'Información Básica',
        audience: 'Audiencia Objetivo',
        objectives: 'Objetivos',
        design: 'Preferencias de Diseño',
        technical: 'Requisitos Técnicos',
        review: 'Revisar y Generar',
      },
      fields: {
        projectName: 'Nombre del Proyecto',
        projectNamePlaceholder: 'Mi Sitio Web Increíble',
        websiteType: 'Tipo de Sitio Web',
        websiteTypePlaceholder: 'Seleccionar tipo...',
        description: 'Descripción Breve',
        descriptionPlaceholder: 'Describe tu sitio web en pocas frases...',
        targetAge: 'Rango de Edad Objetivo',
        targetLocation: 'Ubicación Principal',
        targetProfession: 'Profesión/Industria Objetivo',
        primaryGoal: 'Objetivo Principal',
        kpis: 'Indicadores Clave de Rendimiento',
        style: 'Estilo de Diseño',
        brandColors: 'Colores de Marca (si los tienes)',
        referenceUrls: 'Sitios Web de Referencia',
        referenceUrlsPlaceholder: 'Ingresa URLs de sitios web que admiras...',
        budget: 'Rango de Presupuesto',
        timeline: 'Cronograma',
        scalability: 'Necesidades de Escalabilidad',
        techPreferences: 'Preferencias Tecnológicas',
      },
      websiteTypes: {
        saas: 'Producto SaaS',
        portfolio: 'Portafolio',
        ecommerce: 'Comercio Electrónico',
        blog: 'Blog / Contenido',
        corporate: 'Corporativo',
        community: 'Comunidad',
        marketplace: 'Marketplace',
        landing: 'Página de Aterrizaje',
      },
      goals: {
        sales: 'Impulsar Ventas',
        leads: 'Generar Prospectos',
        information: 'Proporcionar Información',
        engagement: 'Construir Engagement',
        community: 'Construir Comunidad',
      },
      styles: {
        modern: 'Moderno y Limpio',
        minimalist: 'Minimalista',
        bold: 'Atrevido y Dinámico',
        playful: 'Juguetón y Divertido',
        professional: 'Profesional',
        creative: 'Creativo y Artístico',
      },
    },
    blueprint: {
      title: 'Tu Plano de Sitio Web',
      architecture: 'Arquitectura',
      designSystem: 'Sistema de Diseño',
      seoStrategy: 'Estrategia SEO',
      techStack: 'Stack Tecnológico',
      export: 'Exportar Plano',
      downloadPdf: 'Descargar PDF',
      downloadJson: 'Descargar JSON',
      share: 'Compartir Enlace',
      regenerate: 'Regenerar',
    },
    footer: {
      tagline: 'Transformando la planificación web con IA.',
      product: 'Producto',
      company: 'Empresa',
      legal: 'Legal',
      features: 'Características',
      pricing: 'Precios',
      docs: 'Documentación',
      about: 'Sobre Nosotros',
      blog: 'Blog',
      careers: 'Carreras',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      copyright: '© 2024 Mr. Architect. Todos los derechos reservados.',
    },
  },
  fr: {
    nav: {
      features: 'Fonctionnalités',
      howItWorks: 'Comment ça marche',
      pricing: 'Tarifs',
      login: 'Connexion',
      getStarted: 'Commencer Gratuitement',
    },
    hero: {
      badge: 'Planification de Sites Web par IA',
      title: 'Transformez la Planification',
      titleHighlight: 'De Jours à Minutes',
      subtitle: 'Générez des plans de sites web complets et prêts pour les développeurs avec l\'IA. Architecture, systèmes de design, fondations SEO et recommandations technologiques — tout en une plateforme intelligente.',
      cta: 'Créer Votre Plan',
      ctaSecondary: 'Voir la Démo',
      trustedBy: 'Utilisé par les développeurs chez',
    },
    features: {
      sectionTitle: 'Tout Ce Dont Vous Avez Besoin',
      sectionSubtitle: 'Des fonctionnalités puissantes conçues pour les équipes de développement web modernes',
      architecture: {
        title: 'Architecture Intelligente',
        description: 'Structures de pages générées par IA, hiérarchies de navigation et flux utilisateur optimisés pour votre type de projet.',
      },
      design: {
        title: 'Systèmes de Design',
        description: 'Spécifications de design complètes incluant typographie, palettes de couleurs avec validation WCAG et bibliothèques de composants.',
      },
      seo: {
        title: 'Fondations SEO',
        description: 'Stratégies de mots-clés, modèles de balises meta, guides de contenu et recommandations de schema markup.',
      },
      techStack: {
        title: 'Recommandations Techniques',
        description: 'Suggestions de frameworks avec justifications, benchmarks de performance et estimations de coûts.',
      },
      export: {
        title: 'Export Multi-Format',
        description: 'Exportez vos plans en PDF, JSON, Markdown ou rapports HTML interactifs.',
      },
      collaboration: {
        title: 'Collaboration d\'Équipe',
        description: 'Partagez des plans, collectez des retours et gérez les versions dans toute votre équipe.',
      },
    },
    wizard: {
      title: 'Créez Votre Plan',
      subtitle: 'Parlez-nous de votre projet et nous générerons un plan de site web complet.',
      step: 'Étape',
      of: 'sur',
      next: 'Continuer',
      back: 'Retour',
      generate: 'Générer le Plan',
      generating: 'Génération...',
      steps: {
        basics: 'Informations de Base',
        audience: 'Public Cible',
        objectives: 'Objectifs',
        design: 'Préférences de Design',
        technical: 'Exigences Techniques',
        review: 'Réviser et Générer',
      },
      fields: {
        projectName: 'Nom du Projet',
        projectNamePlaceholder: 'Mon Super Site Web',
        websiteType: 'Type de Site Web',
        websiteTypePlaceholder: 'Sélectionner le type...',
        description: 'Brève Description',
        descriptionPlaceholder: 'Décrivez votre site web en quelques phrases...',
        targetAge: 'Tranche d\'Âge Cible',
        targetLocation: 'Localisation Principale',
        targetProfession: 'Profession/Industrie Cible',
        primaryGoal: 'Objectif Principal',
        kpis: 'Indicateurs Clés de Performance',
        style: 'Style de Design',
        brandColors: 'Couleurs de Marque (si applicable)',
        referenceUrls: 'Sites Web de Référence',
        referenceUrlsPlaceholder: 'Entrez les URLs des sites web que vous admirez...',
        budget: 'Fourchette de Budget',
        timeline: 'Calendrier',
        scalability: 'Besoins de Scalabilité',
        techPreferences: 'Préférences Technologiques',
      },
      websiteTypes: {
        saas: 'Produit SaaS',
        portfolio: 'Portfolio',
        ecommerce: 'E-commerce',
        blog: 'Blog / Contenu',
        corporate: 'Entreprise',
        community: 'Communauté',
        marketplace: 'Marketplace',
        landing: 'Page d\'Atterrissage',
      },
      goals: {
        sales: 'Augmenter les Ventes',
        leads: 'Générer des Prospects',
        information: 'Fournir des Informations',
        engagement: 'Créer de l\'Engagement',
        community: 'Construire une Communauté',
      },
      styles: {
        modern: 'Moderne et Épuré',
        minimalist: 'Minimaliste',
        bold: 'Audacieux et Dynamique',
        playful: 'Ludique et Amusant',
        professional: 'Professionnel',
        creative: 'Créatif et Artistique',
      },
    },
    blueprint: {
      title: 'Votre Plan de Site Web',
      architecture: 'Architecture',
      designSystem: 'Système de Design',
      seoStrategy: 'Stratégie SEO',
      techStack: 'Stack Technologique',
      export: 'Exporter le Plan',
      downloadPdf: 'Télécharger PDF',
      downloadJson: 'Télécharger JSON',
      share: 'Partager le Lien',
      regenerate: 'Régénérer',
    },
    footer: {
      tagline: 'Transformer la planification web avec l\'IA.',
      product: 'Produit',
      company: 'Entreprise',
      legal: 'Légal',
      features: 'Fonctionnalités',
      pricing: 'Tarifs',
      docs: 'Documentation',
      about: 'À Propos',
      blog: 'Blog',
      careers: 'Carrières',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
      copyright: '© 2024 Mr. Architect. Tous droits réservés.',
    },
  },
} as const;

export type TranslationKeys = typeof translations.en;

export function useTranslations(locale: Locale) {
  return translations[locale] as typeof translations.en;
}

// Format currency based on locale
export function formatCurrency(amount: number, locale: Locale, currency: string = 'USD'): string {
  const localeMap: Record<Locale, string> = {
    en: 'en-US',
    es: 'es-ES',
    fr: 'fr-FR',
  };
  
  const currencyMap: Record<Locale, string> = {
    en: 'USD',
    es: 'EUR',
    fr: 'EUR',
  };

  return new Intl.NumberFormat(localeMap[locale], {
    style: 'currency',
    currency: currency || currencyMap[locale],
  }).format(amount);
}

// Format date based on locale
export function formatDate(date: Date, locale: Locale): string {
  const localeMap: Record<Locale, string> = {
    en: 'en-US',
    es: 'es-ES',
    fr: 'fr-FR',
  };

  return new Intl.DateTimeFormat(localeMap[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
