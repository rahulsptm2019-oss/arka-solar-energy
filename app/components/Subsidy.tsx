import {
    BadgeIndianRupee,
    FileCheck2,
    House,
    ArrowRight,
  } from "lucide-react";
  
  const benefits = [
    {
      icon: House,
      title: "Residential Rooftop Solar",
      description:
        "Government subsidy support is available for eligible residential rooftop solar installations.",
    },
    {
      icon: FileCheck2,
      title: "Application Assistance",
      description:
        "We guide you through registration, documentation and the subsidy application process.",
    },
    {
      icon: BadgeIndianRupee,
      title: "Lower Installation Cost",
      description:
        "Eligible subsidy can reduce your upfront investment and improve your solar payback period.",
    },
  ];
  
  export default function Subsidy() {
    return (
      <section
        id="subsidy"
        className="bg-gradient-to-br from-emerald-700 via-green-700 to-emerald-900 px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-widest text-green-200">
              Government Solar Benefits
            </p>
  
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              PM Surya Ghar Subsidy Assistance
            </h2>
  
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-100">
              Arka Solar Energy helps eligible homeowners understand the subsidy
              process and complete the required steps for rooftop solar
              installation.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
  
              return (
                <article
                  key={benefit.title}
                  className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/15"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-emerald-800">
                    <Icon className="h-8 w-8" />
                  </div>
  
                  <h3 className="mt-6 text-2xl font-bold">
                    {benefit.title}
                  </h3>
  
                  <p className="mt-4 leading-7 text-green-100">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
  
          <div className="mt-14 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Check Your Eligibility
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    );
  }