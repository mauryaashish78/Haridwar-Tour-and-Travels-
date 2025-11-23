import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import carImage from '../assests/car.png'

const CarRentalsPage = () => {
  // State for mobile swipe functionality
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const carOptions = [
    {
      name: "Maruti Suzuki Swift",
      category: "Economy",
      seats: 4,
      price: 2500,
      image: "🚗",
      features: ["AC", "Music System", "Clean Interior", "Fuel Efficient"]
    },
    {
      name: "Toyota Innova",
      category: "Premium",
      seats: 7,
      price: 4500,
      image: "🚙",
      features: ["Spacious", "Comfortable Seats", "AC", "Music System", "Luggage Space"]
    },
    {
      name: "Mahindra XUV500",
      category: "SUV",
      seats: 7,
      price: 5500,
      image: "🚐",
      features: ["4WD", "Hill Climbing", "Premium Interior", "Safety Features"]
    },
    {
      name: "Force Tempo Traveller",
      category: "Group Travel",
      seats: 12,
      price: 8000,
      image: "🚌",
      features: ["Group Travel", "Luggage Space", "Comfortable Journey", "Experienced Driver"]
    }
  ];

  // Swipe functionality handlers
  const handleStart = (clientX, clientY) => {
    setDragStart({ x: clientX, y: clientY });
    setIsDragging(true);
  };

  const handleMove = (clientX, clientY) => {
    if (!isDragging || dragStart === null) return;
    
    const diffX = clientX - dragStart.x;
    const diffY = clientY - dragStart.y;
    
    // Only handle horizontal swipes, ignore vertical scrolling
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
      setDragOffset(diffX);
    }
  };

  const handleEnd = () => {
    if (!isDragging) return;
    
    const threshold = 100;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (dragOffset < 0 && currentIndex < carOptions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
    
    setDragStart(null);
    setDragOffset(0);
    setIsDragging(false);
  };

  // Touch events
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const diffX = touch.clientX - dragStart.x;
    const diffY = touch.clientY - dragStart.y;
    
    // Only prevent default and handle as swipe if it's clearly a horizontal gesture
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
      e.preventDefault();
      handleMove(touch.clientX, touch.clientY);
    }
  };

  const handleTouchEnd = (e) => {
    handleEnd();
  };

  // Mouse events
  const handleMouseDown = (e) => {
    handleStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Add/remove mouse events
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  const nextCard = () => {
    if (currentIndex < carOptions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-spiritual font-bold mb-4">Car Rentals</h1>
          <p className="text-xl md:text-2xl">Premium Vehicles for Your Spiritual Journey</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-spiritual font-bold text-primary mb-6">
            Comfortable & Safe Travel
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
            Travel in comfort and safety with our well-maintained fleet of vehicles. Our experienced 
            drivers know every route to sacred destinations and ensure your spiritual journey is 
            smooth and peaceful. All vehicles are regularly serviced and equipped with safety features.
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <img 
            className='w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl mt-4 h-auto object-contain' 
            src={carImage} 
            alt="car image" 
          />
        </div>
      </section>

      {/* Car Options */}
      <section className="pb-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-spiritual font-bold text-primary text-center mb-12">
            Our Vehicle Fleet
          </h2>
          
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {carOptions.map((car, index) => (
                <Card key={index} className="hover:shadow border-2 border-red-400 transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="text-6xl mb-4">{car.image}</div>
                    <CardTitle className="text-xl font-spiritual text-primary">{car.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{car.category}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Seats:</span>
                        <span className="font-semibold">{car.seats} People</span>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">₹{car.price}</p>
                        <p className="text-sm text-muted-foreground">per day</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Features:</h4>
                        <ul className="space-y-1">
                          {car.features.map((feature, idx) => (
                            <li key={idx} className="text-sm flex items-center">
                              <span className="text-green-600 mr-2">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full spiritual-gradient">
                        Select Vehicle
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile Layout with Swipe */}
          <div className="md:hidden">
            <div className="relative max-w-sm mx-auto">
              {/* Progress Indicator */}
              <div className="flex justify-center mb-6 space-x-2">
                {carOptions.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Instructions */}
              <div className="text-center mb-4">
                <p className="text-sm text-muted-foreground">
                  Swipe left or right to browse vehicles
                </p>
              </div>

              {/* Card Stack Container */}
              <div 
                ref={containerRef}
                className="relative h-[580px] overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
              >
                {carOptions.map((car, index) => {
                  const isActive = index === currentIndex;
                  const isPrev = index === currentIndex - 1;
                  const isNext = index === currentIndex + 1;
                  
                  let translateX = 0;
                  let zIndex = 1;
                  let scale = 0.95;
                  let opacity = 0.7;
                  
                  if (isActive) {
                    translateX = dragOffset;
                    zIndex = 3;
                    scale = 1;
                    opacity = 1;
                  } else if (isPrev) {
                    translateX = -100 + dragOffset * 0.3;
                    zIndex = 2;
                    scale = 0.95;
                    opacity = 0.7;
                  } else if (isNext) {
                    translateX = 100 + dragOffset * 0.3;
                    zIndex = 2;
                    scale = 0.95;
                    opacity = 0.7;
                  } else {
                    translateX = index < currentIndex ? -200 : 200;
                    zIndex = 1;
                    scale = 0.9;
                    opacity = 0.3;
                  }

                  return (
                    <div
                      key={index}
                      className="absolute inset-0 transition-all duration-300 ease-out"
                      style={{
                        transform: `translateX(${translateX}px) scale(${scale})`,
                        zIndex,
                        opacity,
                        filter: isActive ? 'none' : 'blur(1px)',
                      }}
                    >
                      <Card className="h-full border-2 border-red-400 shadow-xl bg-white">
                        <CardHeader className="text-center">
                          <div className="text-6xl mb-4">{car.image}</div>
                          <CardTitle className="text-xl font-spiritual text-primary">{car.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{car.category}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Seats:</span>
                              <span className="font-semibold">{car.seats} People</span>
                            </div>
                            
                            <div className="text-center">
                              <p className="text-2xl font-bold text-primary">₹{car.price}</p>
                              <p className="text-sm text-muted-foreground">per day</p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-2">Features:</h4>
                              <ul className="space-y-1">
                                {car.features.map((feature, idx) => (
                                  <li key={idx} className="text-sm flex items-center">
                                    <span className="text-green-600 mr-2">✓</span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <Button className="w-full spiritual-gradient">
                              Select Vehicle
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevCard}
                  disabled={currentIndex === 0}
                  className="flex items-center space-x-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </Button>
                
                <span className="text-sm text-muted-foreground">
                  {currentIndex + 1} of {carOptions.length}
                </span>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextCard}
                  disabled={currentIndex === carOptions.length - 1}
                  className="flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-spiritual font-bold text-primary text-center mb-12">
            Transparent Pricing
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className='border-2 border-red-400'>
              <CardHeader>
                <CardTitle className="text-xl font-spiritual text-primary">Included in Price</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Experienced Driver</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Driver Allowance</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Vehicle Insurance</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Regular Maintenance</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>24/7 Support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className='border-2 border-red-400'>
              <CardHeader>
                <CardTitle className="text-xl font-spiritual text-primary">Additional Charges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Fuel Charges</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Toll & Parking</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>State Taxes</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Hill Station Charges</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">•</span>Overtime Charges</li>
                </ul>
              </CardContent>
            </Card>

            <Card className='border-2 border-red-400'>
              <CardHeader>
                <CardTitle className="text-xl font-spiritual text-primary">Special Offers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center"><span className="text-primary mr-2">🎉</span>10% off on 5+ days</li>
                  <li className="flex items-center"><span className="text-primary mr-2">🎉</span>Free pickup/drop in city</li>
                  <li className="flex items-center"><span className="text-primary mr-2">🎉</span>Group booking discounts</li>
                  <li className="flex items-center"><span className="text-primary mr-2">🎉</span>Festival season packages</li>
                  <li className="flex items-center"><span className="text-primary mr-2">🎉</span>Loyalty rewards</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-16 spiritual-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-spiritual font-bold text-white mb-4">
                Get Your Quote
              </h2>
              <p className="text-xl text-white/90">
                Fill the form below and we'll provide you with the best rental package for your journey
              </p>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="pickupDate">Pickup Date</Label>
                      <Input id="pickupDate" type="date" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="returnDate">Return Date</Label>
                      <Input id="returnDate" type="date" className="mt-1" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="pickupLocation">Pickup Location</Label>
                      <Input id="pickupLocation" placeholder="Enter pickup location" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="destination">Destination</Label>
                      <Input id="destination" placeholder="Where are you traveling?" className="mt-1" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="vehicleType">Vehicle Type</Label>
                      <select id="vehicleType" className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md">
                        <option value="">Select vehicle type</option>
                        <option value="economy">Economy (Swift)</option>
                        <option value="premium">Premium (Innova)</option>
                        <option value="suv">SUV (XUV500)</option>
                        <option value="group">Group Travel (Tempo Traveller)</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="passengers">Number of Passengers</Label>
                      <select id="passengers" className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md">
                        <option value="">Select passengers</option>
                        <option value="1-2">1-2 People</option>
                        <option value="3-4">3-4 People</option>
                        <option value="5-7">5-7 People</option>
                        <option value="8+">8+ People</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your full name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 9876543210" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="requirements">Special Requirements</Label>
                    <Textarea 
                      id="requirements" 
                      placeholder="Any special requirements or additional information..."
                      className="mt-1 min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3">
                    Get Quote Now
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-spiritual font-bold text-primary text-center mb-12">
            Why Choose Our Car Rental Service?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-spiritual font-semibold text-primary mb-3">Safety First</h3>
                <p className="text-muted-foreground">All vehicles undergo regular safety checks and are fully insured for your peace of mind</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">👨‍✈️</div>
                <h3 className="text-xl font-spiritual font-semibold text-primary mb-3">Expert Drivers</h3>
                <p className="text-muted-foreground">Experienced drivers familiar with mountain routes and spiritual destinations</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-xl font-spiritual font-semibold text-primary mb-3">24/7 Support</h3>
                <p className="text-muted-foreground">Round-the-clock roadside assistance and customer support during your journey</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CarRentalsPage;