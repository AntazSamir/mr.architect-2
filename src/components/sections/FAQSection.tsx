import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Mr. Architect?",
    answer: "Mr. Architect is an AI-powered blueprint generator that helps you create detailed technical specifications for your web applications. Simply describe your project, and our AI will generate a comprehensive blueprint including architecture, features, and implementation details."
  },
  {
    question: "How does the blueprint generation work?",
    answer: "Our AI analyzes your project requirements through a simple wizard interface. You provide details about your target audience, objectives, design preferences, and technical requirements. The AI then generates a customized blueprint tailored to your specific needs."
  },
  {
    question: "Is Mr. Architect free to use?",
    answer: "Yes! You can generate blueprints for free. We offer a generous free tier that allows you to create multiple blueprints. Premium features and advanced customization options are available for power users."
  },
  {
    question: "Can I export my blueprints?",
    answer: "Absolutely! All generated blueprints can be exported in multiple formats including PDF, Markdown, and JSON. You can also share them directly with your team or stakeholders via a unique link."
  },
  {
    question: "What types of projects can I create blueprints for?",
    answer: "Mr. Architect supports a wide range of web applications including e-commerce platforms, SaaS products, portfolio sites, dashboards, mobile apps, and more. Our AI adapts to your specific use case and industry."
  },
  {
    question: "How accurate are the generated blueprints?",
    answer: "Our blueprints are designed by experienced architects and refined by AI to provide production-ready specifications. They include best practices, scalability considerations, and modern technology recommendations tailored to your project."
  }
]

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 relative bg-[#0a0e14] overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-10 -z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)] -z-10" />

      <div className="container relative mx-auto px-6">
        {/* Cinematic Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-mono tracking-[0.2em] text-primary uppercase mb-6">
            KNOWLEDGE_BASE v2.0
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-8">
            Expert <span className="text-primary italic">Inquiry</span>.
          </h2>
          <p className="text-lg text-muted-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Technical clarification for the Mr. Architect synthesis protocol and 
            deployment workflows.
          </p>
        </motion.div>

        {/* Technical FAQ Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(0, 3).map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[#0d1117] border border-white/5 px-6 rounded-sm data-[state=open]:border-primary/30 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-display font-bold text-white/80 hover:text-primary transition-colors py-6 uppercase tracking-tight">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-mono text-muted-foreground/30">NODE_QUERY::0{index + 1}</span>
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground/60 text-sm leading-relaxed pb-8 font-sans border-t border-white/5 pt-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(3, 6).map((faq, index) => (
                <AccordionItem
                  key={index + 3}
                  value={`item-${index + 3}`}
                  className="bg-[#0d1117] border border-white/5 px-6 rounded-sm data-[state=open]:border-primary/30 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-display font-bold text-white/80 hover:text-primary transition-colors py-6 uppercase tracking-tight">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-mono text-muted-foreground/30">NODE_QUERY::0{index + 4}</span>
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground/60 text-sm leading-relaxed pb-8 font-sans border-t border-white/5 pt-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-24 border-t border-white/5 pt-12"
        >
          <p className="text-sm font-mono text-muted-foreground/40 uppercase tracking-[0.2em]">
            Protocol unresolved?{" "}
            <a href="mailto:support@mrarchitect.ai" className="text-primary hover:text-white transition-all underline decoration-primary/20 hover:decoration-white">
              INITIALIZE_SUPPORT_LINK
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
