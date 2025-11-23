import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, Users, MapPin } from 'lucide-react';

const PopularPackagesSection = () => {
  const packages = [
    {
      id: 'char-dham',
      title: 'Char Dham Yatra',
      description: 'Complete pilgrimage to all four sacred Dhams - Yamunotri, Gangotri, Kedarnath, and Badrinath',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '12-14 Days',
      groupSize: 'Max 25 People',
      price: 'Starting ₹35,000',
      link: '/char-dham',
      size: 'small'
    },
    {
      id: 'do-dham',
      title: 'Do Dham Yatra',
      description: 'Sacred journey to Kedarnath and Badrinath, the most revered shrines in Uttarakhand',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '7-8 Days',
      groupSize: 'Max 20 People',
      price: 'Starting ₹25,000',
      link: '/do-dham',
      size: 'medium'
    },
    {
      id: 'kedarnath',
      title: 'Kedarnath Special',
      description: 'Dedicated journey to Lord Shiva\'s abode with helicopter and trekking options',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4-5 Days',
      groupSize: 'Max 15 People',
      price: 'Starting ₹18,000',
      link: '/kedarnath',
      size: 'small'
    },
    {
      id: 'badrinath',
      title: 'Badrinath Dham',
      description: 'Visit the sacred temple of Lord Vishnu with comfortable accommodation',
      image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3-4 Days',
      groupSize: 'Max 18 People',
      price: 'Starting ₹15,000',
      link: '/badrinath',
      size: 'medium'
    },
    {
      id: 'gangotri',
      title: 'Gangotri Dham',
      description: 'Journey to the source of holy Ganga with scenic mountain views',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3-4 Days',
      groupSize: 'Max 20 People',
      price: 'Starting ₹12,000',
      link: '/gangotri',
      size: 'large'
    },
    {
      id: 'kedarnath',
      title: 'Kedarnath Special',
      description: 'Dedicated journey to Lord Shiva\'s abode with helicopter and trekking options',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4-5 Days',
      groupSize: 'Max 15 People',
      price: 'Starting ₹18,000',
      link: '/kedarnath',
      size: 'small'
    },
  ];

  const getCardClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'sm:row-span-2';
      case 'medium':
        return 'sm:col-span-2';
      case 'small':
        return '';
      default:
        return '';
    }
  };

  const getImageClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'h-48 sm:h-62';
      case 'medium':
        return 'h-40 sm:h-48';
      case 'small':
        return 'h-36 sm:h-40';
      default:
        return 'h-40 sm:h-48';
    }
  };

  return (
    <section className="py-12 bg-gradient-to-br from-cream-50 to-orange-50 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 text-6xl text-primary font-spiritual animate-pulse">ॐ</div>
        <div className="absolute bottom-20 right-1/4 text-6xl text-primary font-spiritual animate-pulse" style={{animationDelay: '1s'}}>ॐ</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-spiritual font-bold text-primary mb-4">
            Explore Our Most Popular Tour Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated spiritual journeys designed for divine experiences
          </p>
        </div>
        

        {/* Compact Pinterest-style Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-3 sm:gap-4 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id} 
              className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-primary/10 overflow-hidden ${getCardClasses(pkg.size)}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-300 ${getImageClasses(pkg.size)}`}
                />
                <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                  {pkg.price}
                </div>
              </div>
              
              <CardHeader className="pb-2 pt-3 px-3 sm:px-4">
                <CardTitle className="text-base sm:text-lg font-spiritual text-primary group-hover:text-primary/80 transition-colors">
                  {pkg.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0 px-3 sm:px-4 pb-3 sm:pb-4">
                <p className="text-muted-foreground mb-3 leading-relaxed text-xs sm:text-sm">
                  {pkg.description}
                </p>
                
                <div className="flex items-center gap-2 sm:gap-3 mb-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={12} />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Link to={pkg.link} className="flex-1">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors text-xs h-8">
                      Explore
                    </Button>
                  </Link>
                  <Button className="flex-1 spiritual-gradient divine-glow text-xs h-8">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPackagesSection;
