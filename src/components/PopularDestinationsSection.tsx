
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Star } from 'lucide-react';

const PopularDestinationsSection = () => {
  const destinations = [
    {
      name: 'Rishikesh',
      image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      distance: '24 km from Haridwar',
      rating: 4.8
    },
    {
      name: 'Mussoorie',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      distance: '85 km from Haridwar',
      rating: 4.6
    },
    {
      name: 'Dehradun',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      distance: '52 km from Haridwar',
      rating: 4.5
    },
    {
      name: 'Auli',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      distance: '280 km from Haridwar',
      rating: 4.7
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-spiritual font-bold text-primary mb-4">
            Popular Destinations from Haridwar
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Explore the divine and scenic destinations easily accessible from Haridwar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
          {destinations.map((destination, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0">
              <div 
                className="relative h-80 md:h-96 bg-cover bg-center flex items-end"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${destination.image})`
                }}
              >
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                <CardContent className="relative z-10 p-6 text-white w-full">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl md:text-3xl font-spiritual font-bold">
                      {destination.name}
                    </h3>
                    <div className="flex items-center bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-white/90">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{destination.distance}</span>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinationsSection;
