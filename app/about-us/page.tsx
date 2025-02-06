import Image from "next/image";
import Link from "next/link";
import { FaCar, FaUserTie, FaHandshake, FaArrowRight } from "react-icons/fa";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-24 pb-12 lg:pb-20 min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-40 left-20 w-72 h-72 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-2xl animate-pulse" />
        
        {/* Image Container with Gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80 z-10" />
          <Image
            src="/car-hero.png"
            alt="Luxury car fleet"
            fill
            className="object-cover object-center brightness-[0.4] transition-all duration-1000 ease-in-out"
            priority
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 transition-all duration-700 ease-in-out">
              {/* Badge */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 transition-all duration-500 ease-in-out opacity-0 animate-fade-in border border-secondary/20" style={{ animationDelay: '0.5s' }}>
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  Our Story
                </div>
              </div>

              {/* Title */}
              <div className="overflow-hidden relative">
                <div className="relative z-10">
                  <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight text-secondary transition-all duration-700 ease-in-out">
                    About Us
                  </h1>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-secondary/5 to-transparent blur-xl" />
              </div>

              {/* Description */}
              <div className="relative">
                <p className="text-lg md:text-2xl max-w-2xl mx-auto px-4 text-secondary leading-relaxed opacity-0 animate-fade-in font-light" style={{ animationDelay: '1s' }}>
                  Your premium car rental service, delivering luxury and reliability since 2024
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-50 blur-xl" />
              </div>

              {/* Decorative Line */}
              <div className="flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute top-40 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="inline-block text-sm font-semibold px-3 py-1 bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 transition-all duration-500 ease-in-out">
              Our Mission
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold">What Drives Us</h3>
            <p className="text-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed">
              Providing exceptional vehicles and service excellence to make every journey memorable
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCar className="w-8 h-8 text-secondary" />,
                title: "Premium Fleet",
                description: "We maintain a diverse collection of luxury vehicles, ensuring you always travel in style and comfort."
              },
              {
                icon: <FaUserTie className="w-8 h-8 text-secondary" />,
                title: "Expert Service",
                description: "Our professional team is dedicated to providing exceptional customer service and support."
              },
              {
                icon: <FaHandshake className="w-8 h-8 text-secondary" />,
                title: "Trust & Reliability",
                description: "We pride ourselves on transparent pricing and reliable service that you can count on."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-background/80 backdrop-blur-xl p-8 rounded-[40px] shadow-lg hover:shadow-xl transition-all duration-500 group border border-secondary/10"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-[20px] flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-all duration-500">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] transition-all duration-1000 ease-in-out">
              {/* Decorative elements */}
              <div className="absolute inset-x-4 inset-y-8 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-[40px] transform -rotate-6 blur-2xl transition-all duration-1000 ease-in-out" />
              <div className="absolute inset-0 bg-secondary/10 rounded-[40px] transform -rotate-6 hover:-rotate-3 transition-all duration-1000 ease-in-out" />
              <div className="absolute inset-0 bg-primary/5 rounded-[40px] transform rotate-3 hover:rotate-6 transition-all duration-1000 ease-in-out" />
              
              {/* Image container */}
              <div className="absolute inset-0 rounded-[40px] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <div className="relative w-full h-full">
                  <Image
                    src="/car-hero.png"
                    alt="Our story"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-center transform group-hover:scale-105 transition-all duration-1000 ease-in-out"
                    quality={100}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="inline-block text-sm font-semibold px-3 py-1 bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 transition-all duration-500 ease-in-out">
                  Our Journey
                </h4>
                <h2 className="text-3xl md:text-5xl font-bold mt-4">Our Story</h2>
              </div>
              <div className="space-y-6">
                <p className="text-foreground/70 leading-relaxed">
                  Founded with a passion for automobiles and a commitment to excellence, 
                  CarRent has grown to become a leading name in luxury car rentals. Our 
                  journey began with a simple mission: to provide exceptional vehicles 
                  coupled with outstanding service.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Today, we continue to expand our fleet and services, always staying 
                  true to our core values of quality, reliability, and customer satisfaction. 
                  Whether you&apos;re renting for a special occasion or business needs, 
                  we&apos;re here to exceed your expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="inline-block text-sm font-semibold px-3 py-1 bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 transition-all duration-500 ease-in-out">
              Our Location
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold">Visit Our Showroom</h3>
            <p className="text-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed">
              Experience our premium fleet in person at our state-of-the-art facility
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Location Info */}
            <div className="space-y-8 p-8 bg-background/80 backdrop-blur-xl rounded-[40px] border border-secondary/10">
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-foreground">CarRent Headquarters</h4>
                <div className="space-y-2 text-foreground/70">
                  <p>123 Luxury Drive</p>
                  <p>Silicon Valley, CA 94025</p>
                  <p>United States</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Opening Hours</h4>
                <div className="space-y-2 text-foreground/70">
                  <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: 11:00 AM - 5:00 PM</p>
                </div>
              </div>

              <Link 
                href="https://maps.google.com/?q=Silicon+Valley+CA+94025"
                target="_blank"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-primary/90 hover:scale-105 hover:shadow-lg transition-all duration-500 group"
              >
                Get Directions
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-500" />
              </Link>
            </div>

            {/* Map Container */}
            <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-lg border border-secondary/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101550.96368011196!2d-122.18147037033404!3d37.4219998628376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sSilicon%20Valley%2C%20CA!5e0!3m2!1sen!2sus!4v1644338222276!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
        
        <div className="max-w-3xl mx-auto text-center space-y-8 relative">
          <h2 className="inline-block text-sm font-semibold px-3 py-1 bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 transition-all duration-500 ease-in-out">
            Get Started
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">Ready to Experience Luxury?</h3>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Browse our collection of premium vehicles and book your perfect ride today.
          </p>
          <Link 
            href="/cars" 
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 hover:scale-105 hover:shadow-lg transition-all duration-500 group"
          >
            View Our Fleet
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-500" />
          </Link>
        </div>
      </section>
    </main>
  );
}