"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I know which solar system is right for my property?",
    answer:
      "Our experts evaluate your monthly electricity consumption, available roof space, future energy requirements, and budget to recommend the most suitable solar solution.",
  },
  {
    question: "Is government subsidy available for rooftop solar systems?",
    answer:
      "Yes. Eligible residential rooftop solar installations may qualify for government subsidy under the PM Surya Ghar Yojana. We assist customers throughout the documentation and application process.",
  },
  {
    question: "How much can I save on my electricity bills?",
    answer:
      "Savings depend on your electricity usage, system capacity, and local tariff. A properly designed solar system can significantly reduce your monthly electricity expenses.",
  },
  {
    question: "Do you provide financing or EMI options?",
    answer:
      "Yes. We help eligible customers explore financing and EMI options through our banking and financial partners, subject to approval.",
  },
  {
    question: "How long does the installation process take?",
    answer:
      "The installation timeline depends on project size and site conditions. Most residential projects are completed within a few days after approvals and material availability.",
  },
  {
    question: "Do you provide maintenance after installation?",
    answer:
      "Yes. We provide after-sales support, maintenance guidance, and technical assistance to ensure your solar system performs efficiently for years.",
  },
  {
    question: "Can solar panels work during cloudy or rainy weather?",
    answer:
      "Yes. Solar panels continue generating electricity even during cloudy conditions, although production may be lower compared to bright sunny days.",
  },
  {
    question: "Do you install solar systems for commercial and industrial projects?",
    answer:
      "Absolutely. We design and install customized solar solutions for residential homes, commercial establishments, institutions, and industrial facilities.",
  },
  {
    question: "How long do solar panels last?",
    answer:
      "High-quality solar panels generally have a lifespan of 25 years or more while maintaining excellent performance with minimal maintenance.",
  },
  {
    question: "How can I get a free consultation?",
    answer:
      "Simply fill out the consultation form on this page or contact us directly via phone or WhatsApp. Our team will assess your requirements and provide a personalized solar solution.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-700">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Everything You Need to Know About Solar Energy
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Find answers to the most common questions about rooftop solar
            systems, government subsidies, installation, financing, maintenance,
            and long-term savings.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-6 w-6 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200 px-6 py-5">
                    <p className="leading-8 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}