import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contact Us Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to get started? Contact our team of licensed electricians for a free consultation 
            and quote on your electrical project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-accent">(555) 123-4567</p>
                <p className="text-muted-foreground">Available 24/7 for emergencies</p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground">info@professionalelectric.com</p>
                <p className="text-muted-foreground">We'll respond within 1 hour</p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  Service Area
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground">Greater Metropolitan Area</p>
                <p className="text-muted-foreground">Serving a 50-mile radius</p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-foreground">
                  <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                  <p>Saturday: 8:00 AM - 4:00 PM</p>
                  <p>Sunday: Emergency calls only</p>
                </div>
                <p className="text-muted-foreground mt-2">24/7 emergency service available</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Emergency CTA */}
          <div className="flex flex-col justify-center">
            <Card className="bg-primary text-primary-foreground border-primary">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-2">Emergency Service</CardTitle>
                <CardDescription className="text-primary-foreground/80 text-lg">
                  Electrical emergencies can't wait. We're available 24/7 to help.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-primary-foreground/10 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Immediate Response</h4>
                    <p className="text-primary-foreground/90">
                      Emergency technician dispatched within 30 minutes
                    </p>
                  </div>
                  <div className="p-4 bg-primary-foreground/10 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Safety First</h4>
                    <p className="text-primary-foreground/90">
                      Licensed professionals trained in electrical safety protocols
                    </p>
                  </div>
                </div>
                
                <Button 
                  variant="heroOutline" 
                  size="lg" 
                  className="w-full text-lg py-6 h-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;