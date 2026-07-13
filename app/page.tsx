import ContactForm from "@/app/components/ContactForm";
import FAQ from "@/app/components/FAQ";
import FloatingButtons from "@/app/components/FloatingButtons";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Location from "@/app/components/Location";
import Navbar from "@/app/components/Navbar";
import Projects from "@/app/components/Projects";
import Services from "@/app/components/Services";
import Subsidy from "@/app/components/Subsidy";
import Testimonials from "@/app/components/Testimonials";
import WhyChooseUs from "@/app/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Subsidy />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Location />
      <ContactForm />
      <Footer />
      <FloatingButtons />
    </main>
  );
}