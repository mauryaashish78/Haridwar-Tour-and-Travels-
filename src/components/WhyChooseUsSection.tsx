
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Car, Clock, Award, Heart } from 'lucide-react';

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: 'Trusted & Safe',
      description: 'Licensed and insured with 15+ years of experience in spiritual tourism'
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Expert Guides',
      description: 'Knowledgeable local guides who understand the spiritual significance'
    },
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      title: 'Comfortable Travel',
      description: 'Well-maintained vehicles with experienced drivers for your safety'
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance during your spiritual journey'
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: 'Best Prices',
      description: 'Affordable packages without compromising on quality and comfort'
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: 'Personal Touch',
      description: 'Customized experiences tailored to your spiritual needs'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Om background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl text-primary font-spiritual">ॐ</div>
        <div className="absolute top-40 right-10 text-9xl text-primary font-spiritual">ॐ</div>
        <div className="absolute top-80 left-0 text-9xl text-primary font-spiritual">ॐ</div>
       
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-spiritual font-bold text-primary mb-4">
            Why Choose Us for Your Sacred Journey?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience divine comfort and spiritual fulfillment with our trusted pilgrimage services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-cream-50 border-2 border-primary/10 hover:border-primary/30">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-spiritual font-semibold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
