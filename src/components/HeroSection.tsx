import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      {/* Spiritual overlay pattern */}
      <div className="absolute inset-0 mandala-bg opacity-30"></div>

      {/* Enhanced floating Om symbols */}
      <div className="absolute top-20 left-10 text-6xl text-primary opacity-20 om-pulse hidden lg:block animate-pulse">ॐ</div>
      <div className="absolute bottom-20 right-10 text-4xl text-accent opacity-30 lotus-float hidden lg:block">ॐ</div>
      <div className="absolute top-40 right-4 text-5xl text-primary opacity-15 om-pulse hidden lg:block" style={{ animationDelay: '1s' }}>ॐ</div>
      <div className="absolute bottom-40 left-20 text-3xl text-accent opacity-25 lotus-float hidden lg:block" style={{ animationDelay: '2s' }}>ॐ</div>

      {/* Content with enhanced glow effects */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-7xl font-spiritual font-bold text-white mb-2 drop-shadow-lg divine-text-glow">
            Explore Haridwar Most
          </h1>
          <div className="text-2xl md:text-6xl font-spiritual text-white mb-6 drop-shadow-lg divine-text-glow">
            Popular Tour Packages
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed glowing-text">
            Plan your spiritual journey with curated Haridwar and Char Dham tour packages, and rent vehicles with ease — all from one trusted platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/char-dham">
              <Button size="lg" className="spiritual-gradient divine-glow text-lg px-8 py-3 hover:scale-105 transition-transform shadow-2xl">
                Explore Packages
              </Button>
            </Link>
            <Link to="/car-rentals">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-3 hover:scale-105 transition-transform shadow-xl">
                Book a Rental
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
