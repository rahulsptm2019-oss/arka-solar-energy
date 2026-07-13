import {
    Building2,
    Factory,
    House,
    Quote,
    Star,
  } from "lucide-react";
  
  const testimonials = [
    {
      icon: House,
      title: "Residential Solar Consultation",
      location: "Aligarh",
      review:
        "This space will feature a verified homeowner review after the completion of a residential rooftop solar project.",
      status: "Verified review coming soon",
    },
    {
      icon: Building2,
      title: "Commercial Solar Consultation",
      location: "Aligarh Region",
      review:
        "This space will feature a verified business review covering project planning, savings assessment, and installation experience.",
      status: "Verified review coming soon",
    },
    {
      icon: Factory,
      title: "Industrial Solar Project",
      location: "Western Uttar Pradesh",
      review:
        "This space will feature a verified industrial client review after the completion of a commercial or industrial solar project.",
      status: "Verified review coming soon",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-widest text-blue-700">
              Customer Experiences
            </p>
  
            <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
              Building trust through quality solar service
            </h2>
  
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Verified customer reviews will be published here as Arka Solar
              Energy completes residential, commercial, and industrial projects.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => {
              const Icon = testimonial.icon;
  
              return (
                <article
                  key={testimonial.title}
                  className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <Quote className="absolute right-7 top-7 h-10 w-10 text-blue-100" />
  
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-800">
                    <Icon className="h-7 w-7" />
                  </div>
  
                  <div className="mt-6 flex gap-1 text-yellow-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-current"
                      />
                    ))}
                  </div>
  
                  <p className="mt-6 leading-8 text-slate-600">
                    {testimonial.review}
                  </p>
  
                  <div className="mt-8 border-t border-slate-200 pt-6">
                    <h3 className="font-bold text-slate-900">
                      {testimonial.title}
                    </h3>
  
                    <p className="mt-1 text-sm text-slate-500">
                      {testimonial.location}
                    </p>
  
                    <span className="mt-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                      {testimonial.status}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
  
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex rounded-xl bg-blue-900 px-7 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              Become Our Next Success Story
            </a>
          </div>
        </div>
      </section>
    );
  }