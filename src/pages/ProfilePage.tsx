import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, Trophy, Star, TrendingUp, Copy } from "lucide-react";
import Navigation from "@/components/Navigation";

const ProfilePage = () => {
  const mockStats = {
    totalSmiles: 23,
    totalEarnings: 4750,
    avgScore: 87.3,
    bestScore: 98,
    rank: 12
  };

  const recentSmiles = [
    { id: 1, score: 94, reward: 350, date: "2024-03-15" },
    { id: 2, score: 91, reward: 300, date: "2024-03-14" },
    { id: 3, score: 89, reward: 250, date: "2024-03-13" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Your Profile
            </h1>
            <p className="text-xl text-muted-foreground">
              Track your smile performance and earnings on Base network
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border/50 shadow-glass">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                    😊
                  </div>
                  <h2 className="text-xl font-bold mb-2">Anonymous User</h2>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-secondary/20 rounded-lg p-2">
                    <Wallet className="w-4 h-4" />
                    <span className="font-mono">0x1234...5678</span>
                    <Button variant="ghost" size="sm" className="p-1 h-auto">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Global Rank</span>
                    <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                      #{mockStats.rank}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">SMILE Balance</span>
                    <span className="font-bold text-lg text-primary">{mockStats.totalEarnings}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Best Score</span>
                    <span className="font-medium">{mockStats.bestScore}/100</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Stats & Activity */}
            <div className="lg:col-span-2 space-y-8">
              {/* Stats Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border/50">
                  <div className="flex items-center gap-3 mb-3">
                    <Trophy className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold">Total Smiles</h3>
                  </div>
                  <div className="text-3xl font-bold">{mockStats.totalSmiles}</div>
                </Card>

                <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border/50">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-6 h-6 text-accent" />
                    <h3 className="font-semibold">Average Score</h3>
                  </div>
                  <div className="text-3xl font-bold">{mockStats.avgScore}</div>
                </Card>

                <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border/50">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-accent-cyan" />
                    <h3 className="font-semibold">Total Earnings</h3>
                  </div>
                  <div className="text-3xl font-bold text-primary">{mockStats.totalEarnings} SMILE</div>
                </Card>

                <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border/50">
                  <div className="flex items-center gap-3 mb-3">
                    <Wallet className="w-6 h-6 text-muted-foreground" />
                    <h3 className="font-semibold">Network</h3>
                  </div>
                  <div className="text-xl font-bold">Base Sepolia</div>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border/50">
                <h3 className="text-xl font-bold mb-6">Recent Smiles</h3>
                <div className="space-y-4">
                  {recentSmiles.map((smile) => (
                    <div key={smile.id} className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">😊</div>
                        <div>
                          <div className="font-medium">Score: {smile.score}/100</div>
                          <div className="text-sm text-muted-foreground">{smile.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary">+{smile.reward} SMILE</div>
                        <Badge variant="secondary" className="mt-1">Verified</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;