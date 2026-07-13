import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Factory,
  House,
} from "lucide-react";

const services = [
  {
    icon: House,
    title: "Residential Solar",
    description:
      "Customized rooftop solar systems for homeowners who want lower electricity bills and reliable energy.",
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
      "Professional installation",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
            Our Services
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Complete Solar Solutions
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Professional solar services for homes, businesses and industries
            across Aligarh and nearby areas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-2xl font-bold text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-4">
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

                <div className="mt-auto pt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-bold text-blue-800 transition hover:gap-3 hover:text-blue-600"
                  >
                    Request consultation
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}