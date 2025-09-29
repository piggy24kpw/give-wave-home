import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, TrendingUp, Calendar, Award, Plus } from "lucide-react";

const UserDashboard = () => {
  const recentDonations = [
    { campaign: "Education for All", amount: 50, date: "2024-01-15", status: "completed" },
    { campaign: "Clean Water Initiative", amount: 100, date: "2024-01-10", status: "completed" },
    { campaign: "Healthcare Access", amount: 75, date: "2024-01-05", status: "completed" },
  ];

  return (
    <section id="dashboard" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Impact Dashboard</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your contributions and see the difference you're making in the world
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Donated</CardTitle>
              <Heart className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">$1,425</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Campaigns Supported</CardTitle>
              <TrendingUp className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">12</div>
              <p className="text-xs text-muted-foreground">3 new this month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Impact Score</CardTitle>
              <Award className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">95</div>
              <p className="text-xs text-muted-foreground">Top 10% of donors</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lives Impacted</CardTitle>
              <Calendar className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">47</div>
              <p className="text-xs text-muted-foreground">Direct beneficiaries</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Donations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Recent Donations
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  New Donation
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDonations.map((donation, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium">{donation.campaign}</p>
                      <p className="text-sm text-muted-foreground">{donation.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-success">${donation.amount}</p>
                      <p className="text-xs text-muted-foreground capitalize">{donation.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Monthly Goal */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Donation Goal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Progress</span>
                  <span className="text-sm font-medium">$225 / $300</span>
                </div>
                <Progress value={75} className="h-3" />
                <p className="text-sm text-muted-foreground">
                  You're 75% towards your monthly goal! Just $75 more to reach your target.
                </p>
                <Button variant="donate" className="w-full">
                  <Heart className="mr-2 h-4 w-4" />
                  Continue Giving
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;