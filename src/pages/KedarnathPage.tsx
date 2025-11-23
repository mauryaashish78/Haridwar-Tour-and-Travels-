import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Clock, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const KedarnathPage = () => {
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
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Kedarnath Temple"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-spiritual font-bold text-primary mb-4 divine-text-glow">
              Kedarnath Temple
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              One of the most sacred Hindu temples dedicated to Lord Shiva, located at an altitude of 3,583 meters in the Himalayas. This ancient temple is part of the Char Dham pilgrimage and attracts thousands of devotees seeking spiritual blessings.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-600">Rudraprayag, Uttarakhand</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-600">7 Days / 6 Nights</span>
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
                  Kedarnath Temple is believed to be where Lord Shiva took the form of a bull to hide from the Pandavas. 
                  It's one of the twelve Jyotirlingas and holds immense significance in Hindu mythology and spirituality.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Best Time to Visit</h3>
                <p className="text-gray-600 leading-relaxed">
                  The temple is open from April to November. The best time for pilgrimage is between May to October 
                  when weather conditions are favorable for the arduous trek to the temple.
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Day 2: Haridwar to Guptkashi</h3>
                <p className="text-gray-600">Early morning departure to Guptkashi (210 km, 7-8 hours). Check into hotel. Visit Ardh Narishwar Temple. Overnight stay in Guptkashi.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Day 3: Guptkashi to Kedarnath</h3>
                <p className="text-gray-600">Drive to Gaurikund (30 km). Trek to Kedarnath (16 km) or helicopter service. Darshan at Kedarnath Temple. Overnight stay in Kedarnath.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Day 4: Kedarnath Temple Darshan</h3>
                <p className="text-gray-600">Early morning Temple Darshan and special prayers. Explore the spiritual ambiance. Evening prayers and meditation. Overnight stay in Kedarnath.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Day 5: Kedarnath to Guptkashi</h3>
                <p className="text-gray-600">Final darshan at Kedarnath. Trek back to Gaurikund and drive to Guptkashi. Rest and overnight stay in Guptkashi.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Day 6: Guptkashi to Rishikesh</h3>
                <p className="text-gray-600">Drive to Rishikesh (180 km). Visit Laxman Jhula and Ram Jhula. Evening at Triveni Ghat. Overnight stay in Rishikesh.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Day 7: Rishikesh to Haridwar Departure</h3>
                <p className="text-gray-600">Morning yoga and meditation session. Visit to local temples. Drive to Haridwar for departure. End of blessed pilgrimage.</p>
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
                  Helicopter service option available
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Temple darshan arrangements
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Medical support during trek
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
                  Physical fitness required for trekking
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
                  Book helicopter tickets in advance
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
              Experience the divine blessings of Lord Shiva at the sacred Kedarnath Temple
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

export default KedarnathPage;
