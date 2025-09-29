import { Button } from "@/components/ui/button";
import { Heart, Users, Target } from "lucide-react";
import heroImage from "@/assets/hero-donation.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="People volunteering and making a difference in their community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Together, We Can
            <span className="block bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              Change Lives
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Join millions of compassionate donors making a real difference in communities worldwide. 
            Every donation, no matter the size, creates ripples of positive change.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Heart className="mr-2 h-5 w-5" />
              Start Donating
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Users className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">$2.5M+</div>
              <div className="text-white/80">Total Donated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
              <div className="text-white/80">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">200+</div>
              <div className="text-white/80">Active Campaigns</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-secondary/30 rounded-full animate-pulse"></div>
    </section>
  );
};

export default HeroSection;