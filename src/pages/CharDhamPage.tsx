
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CharDhamPage = () => {
  const itinerary = [
    {
      day: 1,
      title: "Arrival in Haridwar - Journey to Barkot",
      description: "Arrive in Haridwar, meet our representative, and drive to Barkot. Check-in to hotel and rest."
    },
    {
      day: 2,
      title: "Barkot to Yamunotri and back",
      description: "Early morning drive to Janki Chatti, trek to Yamunotri Temple (6 km), darshan, and return to Barkot."
    },
    {
      day: 3,
      title: "Barkot to Uttarkashi",
      description: "Drive to Uttarkashi via scenic mountain routes. Visit Vishwanath Temple and overnight stay."
    },
    {
      day: 4,
      title: "Uttarkashi to Gangotri and back",
      description: "Day trip to Gangotri Temple, darshan at the source of River Ganga, and return to Uttarkashi."
    },
    {
      day: 5,
      title: "Uttarkashi to Guptkashi",
      description: "Drive to Guptkashi via Rudraprayag. Visit local temples and prepare for Kedarnath journey."
    },
    {
      day: 6,
      title: "Guptkashi to Kedarnath",
      description: "Drive to Gaurikund, trek to Kedarnath (16 km) or helicopter option available. Temple darshan."
    },
    {
      day: 7,
      title: "Kedarnath to Guptkashi",
      description: "Morning darshan at Kedarnath Temple, trek back to Gaurikund, and drive to Guptkashi."
    },
    {
      day: 8,
      title: "Guptkashi to Badrinath",
      description: "Drive to Badrinath via Joshimath. Check-in to hotel and evening temple visit."
    },
    {
      day: 9,
      title: "Badrinath Darshan and Local Sightseeing",
      description: "Morning darshan at Badrinath Temple, visit Mana Village, Vyas Gufa, and Ganesh Gufa."
    },
    {
      day: 10,
      title: "Badrinath to Rudraprayag",
      description: "Drive to Rudraprayag via Joshimath. Overnight stay at Rudraprayag."
    },
    {
      day: 11,
      title: "Rudraprayag to Haridwar",
      description: "Drive back to Haridwar. Evening Ganga Aarti at Har Ki Pauri. Overnight in Haridwar."
    },
    {
      day: 12,
      title: "Departure from Haridwar",
      description: "Morning visit to local temples, shopping, and departure to your destination."
    }
  ];

  const inclusions = [
    "Accommodation in comfortable hotels/guesthouses",
    "All meals (breakfast, lunch, dinner)",
    "Transportation in comfortable vehicles",
    "Experienced guide and driver",
    "All temple entry fees",
    "First aid kit and oxygen cylinder",
    "Travel insurance coverage"
  ];

  const exclusions = [
    "Personal expenses and shopping",
    "Tips and gratuities",
    "Helicopter charges (optional)",
    "Medical expenses",
    "Any items not mentioned in inclusions",
    "GST as applicable"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-spiritual font-bold mb-4">Char Dham Yatra</h1>
          <p className="text-xl md:text-2xl">Complete Sacred Journey to Four Divine Abodes</p>
        </div>
      </section>

      {/* Package Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-spiritual font-bold text-primary mb-6">
                Complete Char Dham Spiritual Journey
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Embark on the most sacred pilgrimage in Hindu tradition - the Char Dham Yatra. 
                Visit all four divine abodes: Yamunotri, Gangotri, Kedarnath, and Badrinath in 
                the lap of the mighty Himalayas. This 12-day spiritual journey will cleanse your 
                soul and connect you with the divine.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-primary mb-2">Duration</h4>
                    <p>12 Days / 11 Nights</p>
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
                    <h4 className="font-semibold text-primary mb-2">Difficulty</h4>
                    <p>Moderate to Challenging</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-primary mb-2">Group Size</h4>
                    <p>4-20 Pilgrims</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-2xl font-spiritual text-primary">Package Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">₹45,000</p>
                      <p className="text-muted-foreground">per person</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p>✓ All meals included</p>
                      <p>✓ Comfortable accommodation</p>
                      <p>✓ Transportation</p>
                      <p>✓ Experienced guide</p>
                    </div>
                    <Button className="w-full spiritual-gradient divine-glow text-lg py-3">
                      Book Now
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      *Price may vary based on season and group size
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

      {/* Inclusions & Exclusions */}
      <section className="py-16 bg-background">
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
            Ready for Your Divine Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of blessed pilgrims who have experienced the transformative 
            power of Char Dham Yatra with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              Download Brochure
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Book Your Pilgrimage
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CharDhamPage;
