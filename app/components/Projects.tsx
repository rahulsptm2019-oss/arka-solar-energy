const projects = [
    {
      title: "Residential Rooftop Solar",
      category: "Home Solar",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Commercial Solar Installation",
      category: "Business Solar",
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Large-Scale Solar Plant",
      category: "Industrial Solar",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=85",
    },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-widest text-blue-700">
              Solar Solutions
            </p>
  
            <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
              Solar systems for every property
            </h2>
  
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              We provide customized solar solutions for homes, businesses,
              institutions and industries across Aligarh and nearby areas.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
  
                <div className="p-7">
                  <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                    {project.category}
                  </p>
  
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>
  
                  <a
                    href="#contact"
                    className="mt-5 inline-block font-bold text-blue-800"
                  >
                    Request consultation →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }