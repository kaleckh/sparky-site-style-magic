import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent">Professional Electric</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Licensed and insured electrical contractors serving the Greater Metropolitan Area 
              with professional electrical services since 1995.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Residential Wiring</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Commercial Electrical</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Panel Upgrades</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Lighting Installation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Emergency Repairs</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Safety Inspections</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Free Estimates</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Service Areas</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold">(555) 123-4567</p>
                  <p className="text-sm text-primary-foreground/80">24/7 Emergency Line</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold">info@professionalelectric.com</p>
                  <p className="text-sm text-primary-foreground/80">Quick Response</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold">Greater Metro Area</p>
                  <p className="text-sm text-primary-foreground/80">50-mile service radius</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-primary-foreground/80">
              © 2024 Professional Electric. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Licensed • Bonded • Insured • Master Electrician #ME-12345
            </p>
          </div>
          
          <div className="flex gap-6 text-sm text-primary-foreground/80">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;