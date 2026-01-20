import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer hassle-free returns within 30 days of purchase. Items must be unworn and in original packaging.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days. Overnight shipping available for rush orders.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to over 100 countries. International shipping rates vary by location and order total.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email. You can also track it in your account.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. All payments are processed securely.",
    },
    {
      question: "How do I use a promo code?",
      answer:
        "Enter your promo code at checkout in the discount code field before completing your purchase.",
    },
    {
      question: "Can I change my order after placing it?",
      answer:
        "Orders can be modified within 2 hours of placement. Contact our support team immediately if you need to make changes.",
    },
    {
      question: "Do you have a loyalty program?",
      answer:
        "Yes! Join our membership club to earn points on every purchase and receive exclusive offers.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-slate-600 mb-12">
          Find answers to common questions about our products and services
        </p>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="border rounded-lg p-6 cursor-pointer hover:bg-slate-50 group"
            >
              <summary className="flex items-center justify-between font-semibold text-lg">
                <span>{faq.question}</span>
                <ChevronDown
                  size={20}
                  className="group-open:rotate-180 transition-transform"
                />
              </summary>
              <p className="text-slate-600 mt-4 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
          <p className="text-slate-700 mb-6">
            Can't find the answer you're looking for? Our support team is here
            to help.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Support
            </Button>
            <Button variant="outline">Live Chat</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
