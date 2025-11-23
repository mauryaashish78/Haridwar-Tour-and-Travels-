
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-spiritual text-lg">ॐ</span>
              </div>
              <div>
                <h3 className="text-lg font-spiritual font-bold">Haridwar Tour & Travels</h3>
                <p className="text-xs text-background/70">Divine Journeys</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Your trusted partner for spiritual journeys and sacred pilgrimages. 
              Experience the divine with our blessed travel services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary font-spiritual">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-background/80 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/char-dham" className="text-background/80 hover:text-primary transition-colors">Char Dham Yatra</Link></li>
              <li><Link to="/do-dham" className="text-background/80 hover:text-primary transition-colors">Do Dham Yatra</Link></li>
              <li><Link to="/car-rentals" className="text-background/80 hover:text-primary transition-colors">Car Rentals</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-primary font-spiritual">Our Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Spiritual Pilgrimage Tours</li>
              <li>Temple Darshan Packages</li>
              <li>Helicopter Services</li>
              <li>Group & Family Tours</li>
              <li>Hotel Bookings</li>
              <li>Travel Insurance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-primary font-spiritual">Contact Us</h4>
            <div className="space-y-2 text-sm text-background/80">
              <p>📍 Haridwar, Uttarakhand</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@haridwartours.com</p>
              <p>💬 WhatsApp: +91 7453935660</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/70 text-sm">
              © 2024 Haridwar Tour & Travels. All rights reserved. 
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/70 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">Terms & Conditions</a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">Cancellation Policy</a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-background/60 text-sm font-spiritual">
              "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः" - May all beings be happy and free from illness
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
