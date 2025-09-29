import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, Users, Calendar } from "lucide-react";

interface CampaignCardProps {
  title: string;
  description: string;
  image: string;
  raised: number;
  goal: number;
  donors: number;
  daysLeft: number;
  category: string;
}

const CampaignCard = ({ title, description, image, raised, goal, donors, daysLeft, category }: CampaignCardProps) => {
  const progressPercentage = (raised / goal) * 100;

  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-gradient-card border-0">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Progress */}
        <div className="space-y-3">
          <Progress value={progressPercentage} className="h-2" />
          
          <div className="flex justify-between text-sm">
            <span className="font-semibold text-primary">
              ${raised.toLocaleString()}
            </span>
            <span className="text-muted-foreground">
              of ${goal.toLocaleString()}
            </span>
          </div>

          {/* Stats */}
          <div className="flex justify-between items-center pt-2 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{donors} donors</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{daysLeft} days left</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button variant="donate" className="w-full group-hover:scale-105 transition-transform duration-200">
          <Heart className="mr-2 h-4 w-4" />
          Donate Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CampaignCard;