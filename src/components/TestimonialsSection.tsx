
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      location: 'Delhi',
      text: 'Our Char Dham Yatra with Haridwar Tour & Travels was absolutely divine. The arrangements were perfect and our guide was very knowledgeable about the spiritual significance of each place.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      location: 'Mumbai',
      text: 'The Do Dham package exceeded our expectations. The helicopter service to Kedarnath was smooth and the overall experience was spiritually enriching. Highly recommended!',
      rating: 5
    },
    {
      name: 'Anand Kumar',
      location: 'Bangalore',
      text: 'Excellent car rental service with professional drivers. They made our family trip to Haridwar comfortable and memorable. Will definitely book again.',
      rating: 5
    },
    {
      name: 'Sunita Devi',
      location: 'Kolkata',
      text: 'The spiritual journey was life-changing. Every detail was taken care of with devotion and professionalism. Truly blessed to have chosen this travel company.',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Hindu Temple Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2834&q=80')`
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-spiritual font-bold text-white mb-4 divine-text-glow">
            Blessed Testimonials
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto px-4">
            Hear from our cherished pilgrims about their divine experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 divine-glow">
                    <CardContent className="p-4 md:p-8 text-center">
                      <div className="flex justify-center mb-3 md:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-primary text-lg md:text-2xl">⭐</span>
                        ))}
                      </div>
                      <blockquote className="text-sm md:text-lg italic text-white mb-4 md:mb-6 leading-relaxed px-2">
                        "{testimonial.text}"
                      </blockquote>
                      <div className="flex items-center justify-center">
                        <div>
                          <p className="font-semibold text-white font-spiritual text-lg md:text-xl">
                            {testimonial.name}
                          </p>
                          <p className="text-white/80 text-sm md:text-base">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
