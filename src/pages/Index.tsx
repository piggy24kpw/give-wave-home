import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CampaignsSection from "@/components/CampaignsSection";
import UserDashboard from "@/components/UserDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <CampaignsSection />
        <UserDashboard />
      </main>
    </div>
  );
};

export default Index;
