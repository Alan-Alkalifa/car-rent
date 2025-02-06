import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative pt-24 lg:pt-24 pb-12 lg:pb-20 min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 -right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse transition-all duration-1000 ease-in-out" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse transition-all duration-1000 ease-in-out" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Right content - Car Image */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] lg:mt-0 transition-all duration-1000 ease-in-out order-first mt-12 lg:order-last">
            {/* Decorative elements */}
            <div className="absolute inset-x-4 inset-y-8 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-[40px] transform -rotate-6 blur-2xl transition-all duration-1000 ease-in-out" />
            <div className="absolute inset-0 bg-secondary/10 rounded-[40px] transform -rotate-6 hover:-rotate-3 transition-all duration-1000 ease-in-out" />
            <div className="absolute inset-0 bg-primary/5 rounded-[40px] transform rotate-3 hover:rotate-6 transition-all duration-1000 ease-in-out" />
            
            {/* Image container */}
            <div className="absolute inset-0 h-full rounded-[40px] overflow-hidden group transition-all duration-1000 ease-in-out animate-slide-left">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 transition-all duration-1000 ease-in-out" />
              <div className="relative w-full h-full flex items-center justify-center p-8 transition-all duration-1000 ease-in-out">
                <Image
                  src="/car-hero.png"
                  alt="Luxury Car"
                  fill
                  className="object-contain transform group-hover:scale-105 transition-all duration-1000 ease-in-out opacity-0 animate-fade-in"
                  priority
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-2 sm:-right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-xl p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-secondary/80 z-20 hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer">
              <div className="text-center transition-all duration-500 ease-in-out">
                <p className="text-xs sm:text-sm font-semibold text-secondary hover:text-secondary/80 transition-all duration-500 ease-in-out">Starting from</p>
                <p className="text-xl sm:text-2xl font-bold transition-all duration-500 ease-in-out">Rp 350,000<span className="text-xs sm:text-sm text-foreground/70">/day</span></p>
              </div>
            </div>

            {/* Additional decorative elements */}
            <div className="absolute -bottom-4 left-4 bg-background/40 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-secondary/10 z-20 hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out">
              <div className="flex items-center space-x-2 transition-all duration-500 ease-in-out">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse transition-all duration-500 ease-in-out" />
                <span className="text-sm font-medium hover:text-secondary transition-all duration-500 ease-in-out">Available Now</span>
              </div>
            </div>
          </div>

          {/* Left content */}
          <div className="space-y-8 md:space-y-10 text-center lg:text-left transition-all duration-700 ease-in-out order-last lg:order-first">
            <div className="space-y-5">
              <h2 className="inline-block text-sm font-semibold px-3 py-1 bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 transition-all duration-500 ease-in-out opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                #1 Indonesian Car Rental Service
              </h2>
              <div className="overflow-hidden">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight transition-all duration-700 ease-in-out whitespace-nowrap overflow-hidden border-r-4 border-secondary animate-typing">
                  Find Your Perfect
                  <span className="text-secondary block mt-2 animate-slide-up hover:scale-[1.02] transition-all duration-700 ease-in-out">Drive Today</span>
                </h1>
              </div>
              <p className="text-foreground/70 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed hover:text-foreground transition-all duration-500 ease-in-out opacity-0 animate-fade-in" style={{ animationDelay: '2.5s' }}>
                Discover the freedom of the open road with our premium car rental service. 
                Easy booking, competitive rates, and exceptional service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 ease-in-out">
              <button className="group relative px-8 py-4 rounded-full text-base font-medium border-2 border-secondary text-secondary-text bg-secondary hover:bg-primary hover:text-primary-text hover:border-secondary transform hover:scale-105 transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl">
                <span className="relative z-10 flex items-center justify-center transition-all duration-500 ease-in-out">
                  Book Now
                  <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-all duration-500 ease-in-out">
                    →
                  </span>
                </span>
              </button>
              <button className="group relative px-8 py-4 rounded-full text-base font-medium border-2 border-secondary text-secondary hover:bg-secondary/10 hover:scale-105 transition-all duration-500 ease-in-out">
                <span className="relative z-10 flex items-center justify-center transition-all duration-500 ease-in-out">
                  About Us
                  <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-all duration-500 ease-in-out">
                    →
                  </span>
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 lg:pt-12 transition-all duration-700 ease-in-out">
              {[
                { number: "50+", label: "Car Models" },
                { number: "100%", label: "Satisfaction" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-2xl bg-secondary/5 hover:bg-secondary/10 hover:scale-105 transition-all duration-500 ease-in-out cursor-default"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-secondary group-hover:scale-110 transition-all duration-500 ease-in-out">
                    {stat.number}
                  </h3>
                  <p className="text-foreground/70 text-sm mt-1 group-hover:text-foreground transition-all duration-500 ease-in-out">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
