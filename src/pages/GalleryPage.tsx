import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Users } from "lucide-react";
import Navigation from "@/components/Navigation";

const GalleryPage = () => {
  const mockSmiles = [
    { id: 1, score: 98, reward: 500, user: "0x1234...5678" },
    { id: 2, score: 95, reward: 400, user: "0x2345...6789" },
    { id: 3, score: 92, reward: 300, user: "0x3456...7890" },
    { id: 4, score: 90, reward: 250, user: "0x4567...8901" },
    { id: 5, score: 88, reward: 200, user: "0x5678...9012" },
    { id: 6, score: 85, reward: 150, user: "0x6789...0123" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Winning Smiles Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the highest-scoring smiles that have earned the biggest rewards. 
              Competition resets weekly with special bonus rounds.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <Card className="p-6 text-center bg-gradient-card backdrop-blur-sm border-border/50">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">1,247</div>
              <div className="text-sm text-muted-foreground">Total Smiles</div>
            </Card>
            <Card className="p-6 text-center bg-gradient-card backdrop-blur-sm border-border/50">
              <Star className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">342K</div>
              <div className="text-sm text-muted-foreground">SMILE Tokens Distributed</div>
            </Card>
            <Card className="p-6 text-center bg-gradient-card backdrop-blur-sm border-border/50">
              <Users className="w-8 h-8 text-accent-cyan mx-auto mb-2" />
              <div className="text-2xl font-bold">89</div>
              <div className="text-sm text-muted-foreground">Active Participants</div>
            </Card>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mockSmiles.map((smile, index) => (
              <Card key={smile.id} className="overflow-hidden bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-purple transition-all duration-300">
                <div className="aspect-square bg-secondary/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    😊
                  </div>
                  {index < 3 && (
                    <Badge 
                      className="absolute top-3 right-3 bg-gradient-primary text-primary-foreground"
                    >
                      #{index + 1}
                    </Badge>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">{smile.user}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <span className="font-medium">{smile.score}</span>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-primary">
                    +{smile.reward} SMILE
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GalleryPage;