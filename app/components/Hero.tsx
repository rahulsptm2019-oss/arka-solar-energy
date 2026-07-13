export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center px-6 py-24 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1660330589243-4c640d878052?auto=format&fit=crop&q=85&w=2000')",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/75" />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/70 to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300 backdrop-blur">
            Solar Solutions for Homes, Businesses & Industries
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Reduce Your Electricity Bill with
            <span className="block text-yellow-400">
              Arka Solar Energy
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Premium rooftop solar installation in Aligarh and nearby areas,
            with subsidy assistance, easy EMI options and dependable
            after-sales support.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-xl bg-yellow-400 px-7 py-4 text-center font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Get Free Solar Consultation
            </a>

            <a
              href="tel:+917906461166"
              className="rounded-xl border border-white/40 bg-white/10 px-7 py-4 text-center font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Call Now
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/20 bg-black/30 p-4 backdrop-blur">
              <p className="text-2xl font-bold text-yellow-400">100 KM</p>
              <p className="mt-1 text-sm text-slate-200">
                Service Coverage
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-black/30 p-4 backdrop-blur">
              <p className="text-2xl font-bold text-yellow-400">EMI</p>
              <p className="mt-1 text-sm text-slate-200">
                Finance Available
              </p>
            </div>

            <div className="col-span-2 rounded-2xl border border-white/20 bg-black/30 p-4 backdrop-blur sm:col-span-1">
              <p className="text-2xl font-bold text-yellow-400">Support</p>
              <p className="mt-1 text-sm text-slate-200">
                End-to-End Assistance
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/20 bg-slate-950/60 p-8 shadow-2xl backdrop-blur-xl">
          <p className="text-sm font-bold uppercase tracking-widest text-yellow-300">
            Free Solar Savings Report
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Find the right solar system for your property
          </h2>

          <p className="mt-4 text-slate-200">
            Share your electricity bill and get a customized recommendation
            for system size, estimated savings, subsidy eligibility and EMI
            options.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Residential Solar",
              "Commercial Solar",
              "Government Subsidy Assistance",
              "Loan & EMI Facility",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/10 px-5 py-4"
              >
                <span>{item}</span>
                <span className="font-bold text-yellow-400">✓</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-8 block w-full rounded-xl bg-yellow-400 px-6 py-4 text-center font-bold text-slate-950 transition hover:bg-yellow-300"
          >
            Book Free Site Survey
          </a>
        </div>
      </div>
    </section>
  );
}