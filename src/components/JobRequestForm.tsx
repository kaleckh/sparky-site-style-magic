import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Wrench, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const jobRequestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select a service type"),
  urgency: z.string().min(1, "Please select urgency level"),
  description: z.string().min(10, "Please provide at least 10 characters describing your project"),
  address: z.string().min(5, "Please enter your address"),
});

type JobRequestFormData = z.infer<typeof jobRequestSchema>;

const JobRequestForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<JobRequestFormData>({
    resolver: zodResolver(jobRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      urgency: "",
      description: "",
      address: "",
    },
  });

  const onSubmit = (data: JobRequestFormData) => {
    console.log("Job request submitted:", data);
    setIsSubmitted(true);
    toast({
      title: "Request Submitted Successfully!",
      description: "We'll contact you within 24 hours to discuss your project.",
    });
    form.reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (isSubmitted) {
    return (
    <section id="quote-form" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-primary/20">
            <CardContent className="p-12">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Thank You for Your Request!
              </h3>
              <p className="text-muted-foreground text-lg">
                We've received your job request and will contact you within 24 hours to discuss your electrical project in detail.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="quote-form" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Request a Job Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your electrical project? Fill out our form below and we'll provide 
            you with a free, detailed quote within 24 hours.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-3 text-2xl text-foreground">
              <Wrench className="w-6 h-6 text-primary" />
              Project Details
            </CardTitle>
            <CardDescription className="text-lg">
              Tell us about your electrical needs and we'll get back to you with a comprehensive quote
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Smith" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Main St, City, State 12345" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="residential-wiring">Residential Wiring</SelectItem>
                            <SelectItem value="commercial-electrical">Commercial Electrical</SelectItem>
                            <SelectItem value="panel-upgrade">Panel Upgrade</SelectItem>
                            <SelectItem value="outlet-installation">Outlet Installation</SelectItem>
                            <SelectItem value="lighting-installation">Lighting Installation</SelectItem>
                            <SelectItem value="electrical-repair">Electrical Repair</SelectItem>
                            <SelectItem value="emergency-service">Emergency Service</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="urgency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Urgency Level</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select urgency" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="emergency">Emergency (Same Day)</SelectItem>
                            <SelectItem value="urgent">Urgent (Within 3 Days)</SelectItem>
                            <SelectItem value="normal">Normal (Within 1 Week)</SelectItem>
                            <SelectItem value="flexible">Flexible (Within 2 Weeks)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please describe your electrical project in detail. Include any specific requirements, current issues, or goals you have in mind."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-center pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="px-12 py-6 text-lg h-auto"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Submitting..." : "Request Free Quote"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default JobRequestForm;