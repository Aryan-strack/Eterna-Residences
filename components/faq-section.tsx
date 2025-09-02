"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "What is the starting price for apartments?",
      answer:
        "Prices start from $180,000 for 2 BHK apartments, with flexible payment options and financing available through leading banks. We also offer attractive payment plans to suit different budgets.",
    },
    {
      question: "Is bank financing available?",
      answer:
        "Yes, we have partnerships with leading banks and financial institutions to provide competitive home loan options. Our team can help you with the loan application process and documentation.",
    },
    {
      question: "When will the project be completed?",
      answer:
        "Phase 1 is scheduled for completion by December 2026, with Phase 2 following in mid-2027. We maintain strict timelines and provide regular construction updates to our buyers.",
    },
    {
      question: "Is the property RERA approved?",
      answer:
        "Yes, Luxury Residences is fully registered and approved under RERA (Real Estate Regulatory Authority). All necessary approvals and clearances are in place for a secure investment.",
    },
    {
      question: "What amenities are included in the maintenance?",
      answer:
        "The maintenance covers all common area amenities including swimming pool, fitness center, landscaped gardens, security services, power backup, and common area cleaning. Individual apartment utilities are separate.",
    },
    {
      question: "Can I customize the interiors of my apartment?",
      answer:
        "Yes, we offer customization options for interiors including flooring, kitchen fittings, bathroom fixtures, and paint colors. Our design team can help you create your perfect home within the available options.",
    },
    {
      question: "What is the possession timeline?",
      answer:
        "Possession will be offered as per the construction schedule. Buyers will receive 60 days advance notice before possession, along with completion certificates and all necessary documentation.",
    },
    {
      question: "Are there any additional charges?",
      answer:
        "Apart from the base price, there are standard charges for parking, club membership, and legal documentation. All charges are transparently communicated upfront with no hidden costs.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-playfair)] text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Find answers to common questions about Luxury Residences. Can't find what you're looking for? Contact our
            team for personalized assistance.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="animate-fade-in-up animate-delay-200">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
