
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
//    { href: '/char-dham', label: 'Char Dham' },
//    { href: '/do-dham', label: 'Do Dham' },
 
    { href: '/haridwar-tour-packages', label: 'Haridwar Tour Packages' },
    { href: '/car-rentals', label: 'Car Rentals' },
  ];

  return (
    <nav className="bg-gray-900 top-0 left-0 right-0 ">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
              <span className="text-white font-spiritual text-xl om-pulse">ॐ</span>
            </div>
            <div>
              <h1 className="text-xl font-spiritual font-bold text-white drop-shadow-lg">
                Haridwar Tour & Travels
              </h1>
              <p className="text-xs text-white/80">Divine Journeys</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Button className="spiritual-gradient divine-glow shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Book Now
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className="block w-5 h-0.5 bg-white mb-1 transition-all duration-300"></span>
                  <span className="block w-5 h-0.5 bg-white mb-1 transition-all duration-300"></span>
                  <span className="block w-5 h-0.5 bg-white transition-all duration-300"></span>
                </div>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-md">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-spiritual text-lg">ॐ</span>
                  </div>
                  <h2 className="text-lg font-spiritual font-bold text-primary">
                    Haridwar Tour & Travels
                  </h2>
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-3 border-b border-border/50"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
           
               
                <Button className="spiritual-gradient divine-glow mt-6 shadow-lg">
                  Book Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
