
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const DoDhamPage = () => {
  const itinerary = [
    {
      day: 1,
      title: "Arrival in Haridwar - Journey to Guptkashi",
      description: "Arrive in Haridwar, meet our representative, and drive to Guptkashi via Rishikesh and Devprayag. Check-in to hotel."
    },
    {
      day: 2,
      title: "Guptkashi to Kedarnath",
      description: "Early morning drive to Gaurikund, helicopter ride to Kedarnath (weather permitting) or trek. Temple darshan and overnight stay."
    },
    {
      day: 3,
      title: "Kedarnath Morning Darshan - Return to Guptkashi",
      description: "Early morning special darshan at Kedarnath Temple, helicopter/trek back to Gaurikund, and drive to Guptkashi."
    },
    {
      day: 4,
      title: "Guptkashi to Badrinath",
      description: "Drive to Badrinath via Joshimath and enjoy scenic mountain views. Check-in to hotel and evening temple visit."
    },
    {
      day: 5,
      title: "Badrinath Darshan and Local Sightseeing",
      description: "Morning VIP darshan at Badrinath Temple, visit Mana Village (last Indian village), Vyas Gufa, Ganesh Gufa, and Saraswati River."
    },
    {
      day: 6,
      title: "Badrinath to Joshimath",
      description: "Drive to Joshimath, visit Narsingh Temple and Shankaracharya Math. Overnight stay in Joshimath."
    },
    {
      day: 7,
      title: "Joshimath to Rudraprayag",
      description: "Drive to Rudraprayag, visit confluence of rivers Alaknanda and Mandakini. Rest and overnight stay."
    },
    {
      day: 8,
      title: "Rudraprayag to Haridwar - Departure",
      description: "Drive back to Haridwar. Evening Ganga Aarti at Har Ki Pauri and departure to your destination."
    }
  ];

  const inclusions = [
    "Accommodation in premium hotels/guesthouses",
    "All meals (breakfast, lunch, dinner)",  
    "Transportation in deluxe vehicles",
    "Helicopter service to Kedarnath (subject to weather)",
    "VIP darshan arrangements",
    "Experienced guide and driver",
    "All temple entry fees and donations",
    "Travel insurance and medical kit"
  ];

  const exclusions = [
    "Personal expenses and laundry",
    "Tips and gratuities", 
    "Additional helicopter charges if weather delays",
    "Medical expenses and medications",
    "Any items not mentioned in inclusions",
    "GST as per government rates"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-spiritual font-bold mb-4">Do Dham Yatra</h1>
          <p className="text-xl md:text-2xl">Sacred Journey to Kedarnath & Badrinath</p>
        </div>
      </section>

      {/* Package Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-spiritual font-bold text-primary mb-6">
                Premium Do Dham Spiritual Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Experience the divine blessings of Lord Shiva at Kedarnath and Lord Vishnu at 
                Badrinath in this carefully curated 8-day spiritual journey. Our Do Dham Yatra 
                package includes helicopter services, VIP darshan, and premium accommodations 
                for a comfortable and blessed pilgrimage.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-primary mb-2">Duration</h4>
                    <p>8 Days / 7 Nights</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-primary mb-2">Best Time</h4>
                    <p>May to October</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-primary mb-2">Helicopter Service</h4>
                    <p>Available for Kedarnath</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-primary mb-2">VIP Darshan</h4>
                    <p>Special Arrangements</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-2xl font-spiritual text-primary">Premium Package</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">₹35,000</p>
                      <p className="text-muted-foreground">per person</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p>✓ Helicopter service included</p>
                      <p>✓ VIP darshan arrangements</p>
                      <p>✓ Premium accommodation</p>
                      <p>✓ All meals & transportation</p>
                    </div>
                    <Button className="w-full spiritual-gradient divine-glow text-lg py-3">
                      Book Premium Package
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      *Helicopter subject to weather conditions
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Day-wise Itinerary */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-spiritual font-bold text-primary text-center mb-12">
            Day-wise Itinerary
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {itinerary.map((day) => (
                <AccordionItem key={day.day} value={`day-${day.day}`}>
                  <AccordionTrigger className="text-left hover:text-primary">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {day.day}
                      </div>
                      <span className="font-semibold">{day.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="ml-14 text-muted-foreground">
                      {day.description}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-spiritual font-bold text-primary text-center mb-12">
            Special Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🚁</div>
                <h3 className="text-xl font-spiritual font-semibold text-primary mb-3">Helicopter Service</h3>
                <p className="text-muted-foreground">Skip the challenging trek with our helicopter service to Kedarnath (weather permitting)</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">👑</div>
                <h3 className="text-xl font-spiritual font-semibold text-primary mb-3">VIP Darshan</h3>
                <p className="text-muted-foreground">Special darshan arrangements for quicker and blessed temple visits</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🏨</div>
                <h3 className="text-xl font-spiritual font-semibold text-primary mb-3">Premium Stay</h3>
                <p className="text-muted-foreground">Comfortable accommodation in the best available hotels near temples</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-spiritual text-primary">Package Inclusions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {inclusions.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-spiritual text-primary">Package Exclusions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exclusions.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-red-500 font-bold mt-1">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 spiritual-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-spiritual font-bold text-white mb-6">
            Experience Divine Blessings
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your Do Dham Yatra today and receive the divine blessings of 
            Lord Shiva and Lord Vishnu in the most comfortable way possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              Download Itinerary
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Book Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DoDhamPage;
