import {
  Building2,
  Factory,
  House,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: House,
    title: "Residential Solar",
    description:
      "Customized rooftop solar systems for homeowners who want lower electricity bills and long-term savings.",
    features: [
      "Subsidy assistance",
      "Loan and EMI options",
      "Complete installation support",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description:
      "Reliable solar solutions for shops, offices, schools, hospitals, hotels and other commercial properties.",
    features: [
      "Electricity bill analysis",
      "Customized system design",
      "Return-on-investment guidance",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Solar",
    description:
      "High-capacity solar plants designed for factories, warehouses and energy-intensive industrial operations.",
    features: [
      "Detailed technical assessment",
      "Scalable solar solutions",
      "Professional project execution",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-700">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Solar solutions for every requirement
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            From initial consultation to installation and after-sales support,
            Arka Solar Energy provides complete solar solutions across Aligarh
            and nearby areas.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-800 transition group-hover:bg-blue-800 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 font-bold text-blue-800 transition group-hover:gap-3"
                >
                  Request consultation
                  <ArrowRight className="h-5 w-5" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}