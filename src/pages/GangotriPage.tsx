
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Clock, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GangotriPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-orange-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/haridwar-tour-packages" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Gangotri Temple"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-spiritual font-bold text-primary mb-4 divine-text-glow">
              Gangotri Temple
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              One of the most sacred Hindu temples dedicated to Goddess Ganga, located at the source of River Ganga at an altitude of 3,100 meters. This ancient temple is part of the Char Dham pilgrimage and offers spiritual purification to thousands of devotees.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-600">Uttarkashi, Uttarakhand</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-600">4 Days / 3 Nights</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-600">All Age Groups</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-600">Sacred Pilgrimage</span>
              </div>
            </div>
            <Button className="w-fit spiritual-gradient text-white hover:opacity-90 transition-opacity">
              Book Your Pilgrimage Now
            </Button>
          </div>
        </div>

        {/* Temple Significance */}
        <Card className="mb-8 divine-glow">
          <CardContent className="p-8">
            <h2 className="text-3xl font-spiritual font-bold text-primary mb-6">Temple Significance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Spiritual Importance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gangotri Temple is dedicated to Goddess Ganga and marks the origin of the sacred River Ganga. 
                  It's one of the Char Dham pilgrimage sites and is believed to purify devotees from all sins.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Best Time to Visit</h3>
                <p className="text-gray-600 leading-relaxed">
                  The temple is open from May to October. The best time for pilgrimage is between May to September 
                  when weather conditions are favorable and the roads are accessible.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Itinerary */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-3xl font-spiritual font-bold text-primary mb-6">Detailed Pilgrimage Itinerary</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Day 1: Arrival in Haridwar</h3>
                <p className="text-gray-600">Arrive in Haridwar, check into hotel. Evening Ganga Aarti at Har Ki Pauri. Overnight stay in Haridwar.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Day 2: Haridwar to Uttarkashi</h3>
                <p className="text-gray-600">Early morning departure to Uttarkashi (150 km, 6-7 hours). Check into hotel. Visit Vishwanath Temple. Overnight stay in Uttarkashi.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Day 3: Uttarkashi to Gangotri</h3>
                <p className="text-gray-600">Drive to Gangotri (100 km). Darshan at Gangotri Temple. Visit the sacred Ganga origin point. Return to Uttarkashi for overnight stay.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Day 4: Uttarkashi to Haridwar Departure</h3>
                <p className="text-gray-600">Visit local temples in Uttarkashi. Drive back to Haridwar. Evening Ganga Aarti and departure. End of blessed pilgrimage.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Package Inclusions */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="divine-glow">
            <CardContent className="p-6">
              <h3 className="text-2xl font-spiritual font-bold text-primary mb-4">Package Inclusions</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Accommodation in comfortable hotels/guesthouses
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  All meals (breakfast, lunch, dinner)
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Transportation by AC vehicle
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Experienced local guide
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Temple darshan arrangements
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Local sightseeing included
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Travel insurance coverage
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="divine-glow">
            <CardContent className="p-6">
              <h3 className="text-2xl font-spiritual font-bold text-primary mb-4">Important Guidelines</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Carry valid ID proof and medical certificate
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Warm clothing essential for high altitude
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Physical fitness required for journey
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Follow temple dress code and customs
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Respect the sacred environment
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Book accommodation in advance
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Travel insurance recommended
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Booking Section */}
        <Card className="text-center spiritual-gradient text-white">
          <CardContent className="p-8">
            <h2 className="text-3xl font-spiritual font-bold mb-4">Begin Your Sacred Journey</h2>
            <p className="text-lg mb-6 opacity-90">
              Experience the divine purification at the sacred source of River Ganga
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="bg-white text-primary hover:bg-gray-100">
                Get Detailed Quote
              </Button>
              <Button variant="outline" className="bg-white text-primary hover:bg-gray-100">
                Call: +91 98765 43210
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default GangotriPage;
