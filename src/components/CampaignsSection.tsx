import CampaignCard from "@/components/CampaignCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import educationImage from "@/assets/education-campaign.jpg";
import waterImage from "@/assets/water-campaign.jpg";
import healthcareImage from "@/assets/healthcare-campaign.jpg";

const CampaignsSection = () => {
  const featuredCampaigns = [
    {
      title: "Education for All Children",
      description: "Providing books, supplies, and learning opportunities to underprivileged children in rural communities.",
      image: educationImage,
      raised: 45000,
      goal: 75000,
      donors: 234,
      daysLeft: 25,
      category: "Education"
    },
    {
      title: "Clean Water Initiative",
      description: "Building wells and water purification systems to bring clean, safe drinking water to remote villages.",
      image: waterImage,
      raised: 28500,
      goal: 50000,
      donors: 156,
      daysLeft: 18,
      category: "Water"
    },
    {
      title: "Healthcare Access Program",
      description: "Establishing mobile clinics and providing essential medical care to underserved communities.",
      image: healthcareImage,
      raised: 62000,
      goal: 100000,
      donors: 389,
      daysLeft: 42,
      category: "Healthcare"
    }
  ];

  return (
    <section id="campaigns" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Campaigns</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover meaningful causes and join thousands of donors making a real difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCampaigns.map((campaign, index) => (
            <CampaignCard key={index} {...campaign} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Campaigns
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CampaignsSection;