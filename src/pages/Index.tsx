import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import JobRequestForm from "@/components/JobRequestForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <JobRequestForm />
    </div>
  );
};

export default Index;