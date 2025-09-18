import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero text-hero-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-hero-foreground/90 leading-relaxed">
              Get in touch with our team of experts to discuss your VAS requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-gradient-card border-0">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input 
                        type="text" 
                        placeholder="Your first name" 
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input 
                        type="text" 
                        placeholder="Your last name" 
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input 
                        type="email" 
                        placeholder="your.email@company.com" 
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input 
                        type="tel" 
                        placeholder="+234 xxx xxx xxxx" 
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Your company name" 
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service of Interest
                    </label>
                    <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                      <option>Select a service...</option>
                      <option>SMS Gateway</option>
                      <option>USSD Services</option>
                      <option>IVR Solutions</option>
                      <option>Mobile Payments</option>
                      <option>Custom Integration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your requirements..."
                      className="w-full min-h-32"
                    />
                  </div>

                  <Button variant="cta" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6 border-0 text-white" style={{ backgroundColor: '#5cbc8c' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Office Address</h3>
                  </div>
                </div>
                <p className="leading-relaxed text-white">
                  4, Babatope Bejide Crescent,<br />
                  Lekki, Lagos, Nigeria
                </p>
              </Card>

              <Card className="p-6 border-0 bg-gradient-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                  </div>
                </div>
                <a 
                  href="mailto:tech@vastracktech.com.ng"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  tech@vastracktech.com.ng
                </a>
              </Card>

              <Card className="p-6 border-0 bg-gradient-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                  </div>
                </div>
                <a 
                  href="tel:+2348160443352"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +234(0)816-0443-352
                </a>
              </Card>

              <Card className="p-6 border-0 bg-gradient-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Business Hours</h3>
                  </div>
                </div>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;