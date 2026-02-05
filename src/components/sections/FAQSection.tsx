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
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Mr. Architect and how it can help you build better applications.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-6 border border-border/50"
          >
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.slice(0, 3).map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-border/50 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:text-primary transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
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
            className="glass-card rounded-2xl p-6 border border-border/50"
          >
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.slice(3, 6).map((faq, index) => (
                <AccordionItem 
                  key={index + 3} 
                  value={`item-${index + 3}`}
                  className="border-border/50 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:text-primary transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
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
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="mailto:support@mrarchitect.ai" className="text-primary hover:text-accent transition-colors font-medium">
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
