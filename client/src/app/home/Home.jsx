import Hero from "@/components/home/Hero";
import ToolsSection from "@/components/home/ToolsSection";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ToolsSection />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
