import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/+917453935660?text=Hello! I would like to inquire about your spiritual tour packages.', '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message with form data
    const message = `*New Inquiry from Website*

*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service Interest:* ${formData.service}
*Message:* ${formData.message}

*Inquiry Details:*
${formData.message || 'No additional message provided'}`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+917453935660?text=${encodedMessage}`;

    // Open WhatsApp with pre-filled message
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced background with gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-orange-50 to-cream-100"></div>
      <div className="absolute inset-0 mandala-bg"></div>

      {/* Subtle decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/3 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-spiritual font-bold text-primary mb-4">
            Connect With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Begin your spiritual journey today. We're here to guide you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/90 backdrop-blur-md border-border/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-spiritual text-primary">
                Plan Your Divine Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="mt-1"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      className="mt-1"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="mt-1"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    className="mt-1"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Interest</Label>
                  <select
                    id="service"
                    className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="char-dham">Char Dham Yatra</option>
                    <option value="do-dham">Do Dham Yatra</option>
                    <option value="car-rental">Car Rentals</option>
                    <option value="custom">Custom Package</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your spiritual journey requirements..."
                    className="mt-1 min-h-[100px]"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <Button type="submit" className="w-full spiritual-gradient divine-glow">
                  Send Inquiry via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card/90 backdrop-blur-md border-border/50 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-spiritual font-semibold text-primary mb-4">
                  Visit Our Office
                </h3>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Haridwar Tour & Travels</p>
                    <p className="text-muted-foreground">
                      123, Upper Road, Near Har Ki Pauri<br />
                      Haridwar, Uttarakhand - 249401<br />
                      India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/90 backdrop-blur-md border-border/50 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-spiritual font-semibold text-primary mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-3">
                  <p><span className="font-medium">Phone:</span> +91 7453935660</p>
                  <p><span className="font-medium">Email:</span> info@haridwartours.com</p>
                  <p><span className="font-medium">WhatsApp:</span> +91 7453935660</p>
                </div>

                <Button
                  onClick={handleWhatsApp}
                  className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="mr-2" size={18} />
                  Chat on WhatsApp
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
