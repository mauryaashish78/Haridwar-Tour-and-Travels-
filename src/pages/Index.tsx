
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import PopularPackagesSection from '@/components/PopularPackagesSection';
import PopularDestinationsSection from '@/components/PopularDestinationsSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
//import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Enhanced side border decorations */}
      <div className="fixed left-0 top-0 w-2 h-full spiritual-border-left z-40 hidden lg:block"></div>
      <div className="fixed right-0 top-0 w-2 h-full spiritual-border-right z-40 hidden lg:block"></div>
    
      <Navbar />
      <HeroSection />
      <WhyChooseUsSection />
      <PopularPackagesSection />
      <PopularDestinationsSection />
   
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
