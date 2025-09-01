import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home, 
  Building, 
  Zap, 
  Lightbulb, 
  Shield, 
  Settings 
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Electrical",
    description: "Complete home electrical services including wiring, outlets, lighting, and panel upgrades.",
    features: [
      "New home wiring",
      "Outlet installation", 
      "Circuit breaker repair",
      "Electrical inspections"
    ]
  },
  {
    icon: Building,
    title: "Commercial Electrical",
    description: "Professional commercial electrical solutions for businesses of all sizes.",
    features: [
      "Office lighting",
      "Industrial wiring",
      "Emergency systems",
      "Code compliance"
    ]
  },
  {
    icon: Zap,
    title: "Emergency Services",
    description: "24/7 emergency electrical repairs when you need them most.",
    features: [
      "Power outages",
      "Electrical fires",
      "Urgent repairs",
      "Safety hazards"
    ]
  },
  {
    icon: Lightbulb,
    title: "Lighting Solutions",
    description: "Modern lighting installations and energy-efficient LED upgrades.",
    features: [
      "LED conversions",
      "Smart lighting",
      "Outdoor lighting",
      "Landscape lighting"
    ]
  },
  {
    icon: Shield,
    title: "Safety Inspections",
    description: "Comprehensive electrical safety inspections and code compliance checks.",
    features: [
      "Home inspections",
      "Safety audits",
      "Code updates",
      "Insurance reports"
    ]
  },
  {
    icon: Settings,
    title: "Panel Upgrades",
    description: "Electrical panel upgrades and service installations for modern power needs.",
    features: [
      "Panel replacement",
      "Service upgrades",
      "Circuit additions",
      "Safety switches"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Electrical Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From simple repairs to complete electrical installations, we provide comprehensive 
            electrical services with professional quality and reliable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;