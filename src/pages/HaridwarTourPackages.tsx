import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const HaridwarTourPackages = () => {
    const packages = [
        {
            id: 'char-dham',
            title: 'Char Dham Yatra',
            description: 'Complete pilgrimage to all four sacred Dhams - Yamunotri, Gangotri, Kedarnath, and Badrinath',
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            duration: '12-14 Days',
            groupSize: 'Max 25 People',
            price: 'Starting ₹35,000',
            link: '/char-dham',
            size: 'large'
        },
        {
            id: 'do-dham',
            title: 'Do Dham Yatra',
            description: 'Sacred journey to Kedarnath and Badrinath, the most revered shrines in Uttarakhand',
            image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            duration: '7-8 Days',
            groupSize: 'Max 20 People',
            price: 'Starting ₹25,000',
            link: '/do-dham',
            size: 'medium'
        },
        {
            id: 'kedarnath',
            title: 'Kedarnath Special',
            description: 'Dedicated journey to Lord Shiva\'s abode with helicopter and trekking options',
            image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            duration: '4-5 Days',
            groupSize: 'Max 15 People',
            price: 'Starting ₹18,000',
            link: '/kedarnath',
            size: 'small'
        },
        {
            id: 'badrinath',
            title: 'Badrinath Dham',
            description: 'Visit the sacred temple of Lord Vishnu with comfortable accommodation',
            image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            duration: '3-4 Days',
            groupSize: 'Max 18 People',
            price: 'Starting ₹15,000',
            link: '/badrinath',
            size: 'medium'
        },
        {
            id: 'gangotri',
            title: 'Gangotri Dham',
            description: 'Journey to the source of holy Ganga with scenic mountain views',
            image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            groupSize: 'Max 20 People',
            price: 'Starting ₹12,000',
            link: '/gangotri',
            size: 'small'
        }
    ];

    const getCardClasses = (size: string) => {
        switch (size) {
            case 'large':
                return 'row-span-2';
            case 'medium':
                return 'col-span-2';
            case 'small':
                return '';
            default:
                return '';
        }
    };

    const getImageClasses = (size: string) => {
        switch (size) {
            case 'large':
                return 'h-64';
            case 'medium':
                return 'h-48';
            case 'small':
                return 'h-40';
            default:
                return 'h-48';
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
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1606298855672-3efb63017be8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                    }}
                />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Haridwar Tour Packages</h1>
                    <p className="text-xl md:text-2xl">Explore our top Haridwar tour packages, offering an unforgettable spiritual journey in this holy city. Experience the
                        sacred Ganga Aarti, visit ancient temples, and immerse yourself in serene ghats.</p>
                </div>
            </section>

            {/* Package Overview */}
            <section className="py-12 bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Our Packages</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {packages.map((pkg, index) => (
                            <Card
                                key={index}
                                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-primary/10  bg-white border border-red-600 rounded-lg shadow-lg overflow-hidden flex flex-col"
                            >
                                <div className="relative overflow-hidden h-80">
                                    <img
                                        src={pkg.image}
                                        alt={pkg.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                                        {pkg.price}
                                    </div>
                                </div>

                                <CardHeader className="pb-2 pt-3 px-4">
                                    <CardTitle className="text-lg font-spiritual text-primary group-hover:text-primary/80 transition-colors">
                                        {pkg.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="pt-0 px-4 pb-4 flex flex-col justify-between flex-grow">
                                    <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                                        {pkg.description}
                                    </p>

                                    <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <span>{pkg.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span>{pkg.groupSize}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 mt-auto">
                                        <Link to={pkg.link} className="flex-1">
                                            <Button
                                                variant="outline"
                                                className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors text-xs h-8"
                                            >
                                                Explore
                                            </Button>
                                        </Link>
                                        <Button className="flex-1 spiritual-gradient divine-glow text-xs h-8">
                                            Book Now
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
};

export default HaridwarTourPackages;
