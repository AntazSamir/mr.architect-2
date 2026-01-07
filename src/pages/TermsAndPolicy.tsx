import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, Shield, FileText, Lock } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const TermsAndPolicy = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative overflow-hidden font-sans">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 py-8 relative z-10 max-w-4xl">
                <div className="mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="group flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
                    >
                        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                        Back
                    </button>

                    <h1 className="text-4xl font-bold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        Legal Information
                    </h1>
                    <p className="text-muted-foreground">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-[250px_1fr]">
                    {/* Sidebar Navigation (Hidden on mobile for simplicity or kept as sticky) */}
                    <aside className="hidden md:block">
                        <nav className="sticky top-8 flex flex-col space-y-2">
                            <a href="#terms" className="px-4 py-2 rounded-lg bg-secondary/50 text-foreground font-medium border border-border/50 hover:bg-secondary hover:text-primary transition-all">
                                <FileText className="w-4 h-4 inline-block mr-2" />
                                Terms of Service
                            </a>
                            <a href="#privacy" className="px-4 py-2 rounded-lg bg-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/30 transition-all">
                                <Shield className="w-4 h-4 inline-block mr-2" />
                                Privacy Policy
                            </a>
                            <a href="#security" className="px-4 py-2 rounded-lg bg-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/30 transition-all">
                                <Lock className="w-4 h-4 inline-block mr-2" />
                                Security
                            </a>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <div className="space-y-12">

                        {/* Terms of Service Section */}
                        <section id="terms" className="scroll-mt-20 glass-card p-8 rounded-2xl animate-fade-in">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-semibold">Terms of Service</h2>
                            </div>

                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Welcome to Mr. Architect. By accessing or using our AI-powered blueprint generation platform, you agree to show respect to the terms outlined below.
                                </p>

                                <h3 className="text-foreground font-medium text-lg mt-6">1. Acceptance of Terms</h3>
                                <p>
                                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                                </p>

                                <h3 className="text-foreground font-medium text-lg mt-6">2. AI Generation Usage</h3>
                                <p>
                                    Our platform utilizes advanced artificial intelligence to generate architectural blueprints and code structures. You acknowledge that AI-generated content may require review and validation by human professionals before deployment in production environments.
                                </p>

                                <h3 className="text-foreground font-medium text-lg mt-6">3. Intellectual Property</h3>
                                <p>
                                    The blueprints and code structures generated by you using our platform become your intellectual property upon creation. However, the underlying AI models, UI designs, and platform architecture remain the property of Mr. Architect.
                                </p>
                            </div>
                        </section>

                        {/* Privacy Policy Section */}
                        <section id="privacy" className="scroll-mt-20 glass-card p-8 rounded-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-semibold">Privacy Policy</h2>
                            </div>

                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Your privacy is critically important to us. At Mr. Architect, we have a few fundamental principles:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>We don't ask you for personal information unless we truly need it.</li>
                                    <li>We don't share your personal information with anyone except to comply with the law, develop our products, or protect our rights.</li>
                                    <li>We don't store personal information on our servers unless required for the on-going operation of one of our services.</li>
                                </ul>

                                <h3 className="text-foreground font-medium text-lg mt-6">Data Collection</h3>
                                <p>
                                    We collect non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request.
                                </p>

                                <h3 className="text-foreground font-medium text-lg mt-6">Project Data</h3>
                                <p>
                                    Information you input into the blueprint generator is processed to create your results. We may use anonymized usage data to improve our AI models, but your specific project details are treated as confidential.
                                </p>
                            </div>
                        </section>

                        {/* Security Section */}
                        <section id="security" className="scroll-mt-20 glass-card p-8 rounded-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-semibold">Security</h2>
                            </div>

                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    We take reasonable measures to protect your personal information and project data from unauthorized access, use, or disclosure.
                                </p>
                                <p>
                                    Our platform uses industry-standard encryption for data in transit and at rest. We regularly audit our systems for vulnerabilities.
                                </p>
                            </div>
                        </section>

                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-muted-foreground/50">
                        &copy; {new Date().getFullYear()} Mr. Architect. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsAndPolicy;
