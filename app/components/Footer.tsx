export default function Footer() {
    return (
      <footer className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
  
          <div>
            <h2 className="text-2xl font-bold text-yellow-400">
              Arka Solar Energy
            </h2>
  
            <p className="mt-5 text-slate-400 leading-7">
              Helping homes and businesses reduce electricity bills through
              reliable solar energy solutions.
            </p>
          </div>
  
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
  
            <div className="mt-5 flex flex-col gap-3 text-slate-400">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#subsidy">Subsidy</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
  
          <div>
            <h3 className="text-lg font-bold">Contact</h3>
  
            <div className="mt-5 space-y-3 text-slate-400">
              <p>📞 +91 7906461166</p>
              <p>✉ info@arkasolarenergy.in</p>
              <p>📍 Aligarh, Uttar Pradesh</p>
            </div>
          </div>
  
          <div>
            <h3 className="text-lg font-bold">Business Hours</h3>
  
            <div className="mt-5 space-y-3 text-slate-400">
              <p>Monday – Saturday</p>
              <p>9:00 AM – 7:00 PM</p>
  
              <a
                href="https://wa.me/917906461166"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-xl bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
  
        </div>
  
        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          © 2026 Arka Solar Energy. All Rights Reserved.
        </div>
      </footer>
    );
  }