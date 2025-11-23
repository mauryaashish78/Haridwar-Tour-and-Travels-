
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      title: 'Char Dham Yatra',
      description: 'Complete pilgrimage to all four sacred Dhams - Yamunotri, Gangotri, Kedarnath, and Badrinath',
      icon: '🏔️',
      link: '/char-dham',
      features: ['14 Days Complete Journey', 'Comfortable Accommodation', 'Experienced Guide', 'All Meals Included']
    },
    {
      title: 'Do Dham Yatra',
      description: 'Sacred journey to Kedarnath and Badrinath, the most revered shrines in Uttarakhand',
      icon: '🛕',
      link: '/do-dham',
      features: ['8 Days Spiritual Tour', 'Premium Hotels', 'Helicopter Options', 'VIP Darshan']
    },
    {
      title: 'Car Rentals',
      description: 'Premium vehicle rentals for comfortable and safe travel to spiritual destinations',
      icon: '🚗',
      link: '/car-rentals',
      features: ['Well-maintained Fleet', 'Experienced Drivers', 'Flexible Packages', '24/7 Support']
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-spiritual font-bold text-primary mb-4">
            Our Sacred Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Discover our carefully crafted spiritual journeys and premium travel services designed for your divine experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl md:text-2xl font-spiritual text-primary mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm md:text-base px-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs md:text-sm">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to={service.link} className="block">
                  <Button className="w-full spiritual-gradient divine-glow hover:scale-105 transition-transform text-sm md:text-base">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
