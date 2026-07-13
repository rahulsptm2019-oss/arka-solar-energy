import {
  ArrowRight,
  BadgeIndianRupee,
  ClipboardCheck,
  FileCheck2,
  WalletCards,
} from "lucide-react";

const subsidyBenefits = [
  {
    icon: BadgeIndianRupee,
    title: "Government Subsidy",
    description:
      "Get guidance on available rooftop solar subsidy schemes for eligible residential installations.",
  },
  {
    icon: FileCheck2,
    title: "Application Assistance",
    description:
      "We guide you through registration, documentation and the complete subsidy application process.",
  },
  {
    icon: WalletCards,
    title: "Lower Installation Cost",
    description:
      "Eligible subsidy can reduce your upfront investment and improve your solar payback period.",
  },
];

export default function Subsidy() {
  return (
    <section
      id="subsidy"
      className="scroll-mt-24 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
            <ClipboardCheck className="h-8 w-8" />
          </div>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
            Solar Subsidy Support
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Make Solar More Affordable
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/85">
            Get professional guidance for subsidy eligibility, documentation
            and application support.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {subsidyBenefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emerald-700">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-bold">{benefit.title}</h3>

                <p className="mt-4 leading-7 text-white/85">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            Check Your Eligibility
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}