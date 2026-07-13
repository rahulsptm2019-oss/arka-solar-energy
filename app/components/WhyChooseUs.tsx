import {
  BadgeCheck,
  Headphones,
  IndianRupee,
  Wrench,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Trusted Solar Brands",
    description:
      "Reliable solar panels, inverters and components from leading manufacturers.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description:
      "Careful system planning and installation focused on safety and long-term performance.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description:
      "Clear quotations, honest recommendations and no unnecessary hidden charges.",
  },
  {
    icon: Headphones,
    title: "Reliable Support",
    description:
      "Complete assistance from consultation and subsidy guidance to after-sales support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-widest text-yellow-400">
              Why Arka Solar Energy
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Honest advice and dependable solar solutions
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              We help homeowners, businesses and industries choose the right
              solar system based on electricity usage, property type and budget.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Book Free Consultation
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-slate-950">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}