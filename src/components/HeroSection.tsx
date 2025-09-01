import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Shield, Clock, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-electrician.jpg";

const HeroSection = () => {
  const scrollToQuoteForm = () => {
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
      quoteForm.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="flex items-center gap-2 text-sm px-4 py-2">
              <Shield className="w-4 h-4" />
              Licensed & Insured
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 text-sm px-4 py-2">
              <Clock className="w-4 h-4" />
              24/7 Emergency Service
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 text-sm px-4 py-2">
              <CheckCircle className="w-4 h-4" />
              Same Day Service
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Professional
            <br />
            <span className="text-accent">Electrical</span> Services
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Licensed, insured, and trusted by hundreds of homeowners and businesses. 
            Available 24/7 for emergency electrical repairs.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (555) 123-4567
            </Button>
            <Button 
              variant="heroOutline" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={scrollToQuoteForm}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;