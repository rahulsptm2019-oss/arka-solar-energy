export default function ContactForm() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
            Contact Us
          </p>

          <h2 className="text-4xl font-bold text-slate-950 md:text-5xl">
            Get Your Free Solar Consultation
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Share your requirements and our team will contact you with the
            right solar solution.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 rounded-3xl bg-white p-8 shadow-xl md:grid-cols-2 md:p-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-950">
              Talk to Our Solar Experts
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Get assistance with residential, commercial and industrial solar
              systems, subsidy guidance, finance options and installation.
            </p>

            <div className="mt-8 space-y-5 text-slate-700">
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919179064611" className="text-blue-700">
                  +91 91790 64611
                </a>
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@arkasolarenergy.in"
                  className="text-blue-700"
                >
                  info@arkasolarenergy.in
                </a>
              </p>

              <p>
                <strong>Service Area:</strong> Aligarh and nearby areas
              </p>
            </div>
          </div>

          <form
            action="https://formsubmit.co/info@arkasolarenergy.in"
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="_subject" value="New Solar Enquiry" />
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <label className="mb-2 block font-semibold text-slate-800">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-800">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-800">
                Solar Requirement
              </label>
              <select
                name="requirement"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              >
                <option>Residential Solar</option>
                <option>Commercial Solar</option>
                <option>Industrial Solar</option>
                <option>Subsidy Assistance</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-800">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                placeholder="Tell us about your electricity bill or requirement"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-yellow-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}