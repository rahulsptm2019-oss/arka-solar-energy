export default function Location() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-700">
            Our Location
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Visit Our Office
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Visit our office or contact us directly for a free solar consultation.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
            <iframe
              title="Arka Solar Energy office location"
              src="https://www.google.com/maps?q=Jaharvirdham%20Road%20Opp.%20Vatsalya%20World%20School%20Aligarh%20202001&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl sm:p-10">
            <h3 className="text-3xl font-bold">Contact Information</h3>

            <div className="mt-8 space-y-7">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Address
                </p>

                <p className="mt-2 text-lg leading-8 text-slate-200">
                  Jaharvirdham Road,
                  <br />
                  Opp. Vatsalya World School,
                  <br />
                  Aligarh - 202001
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Phone
                </p>

                <a
                  href="tel:+917906461166"
                  className="mt-2 inline-block text-lg font-semibold transition hover:text-yellow-400"
                >
                  +91 7906461166
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Email
                </p>

                <a
                  href="mailto:info@arkasolarenergy.in"
                  className="mt-2 inline-block break-all text-lg font-semibold transition hover:text-yellow-400"
                >
                  info@arkasolarenergy.in
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Working Hours
                </p>

                <p className="mt-2 text-lg leading-8 text-slate-200">
                  Monday - Saturday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+917906461166"
                className="rounded-xl bg-yellow-400 px-6 py-4 text-center font-bold text-slate-950 transition hover:bg-yellow-300"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/917906461166"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-500 px-6 py-4 text-center font-bold text-white transition hover:bg-green-600"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}