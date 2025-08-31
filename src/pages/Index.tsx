import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Trophy, Users, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-primary text-primary-foreground border-0 px-6 py-2 text-sm font-medium">
            Built on Base Network 🔵
          </Badge>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            Based Smiles
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Turn your smile into crypto rewards. Powered by AI verification and Base blockchain technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/smile">
              <Button variant="hero" size="lg" className="gap-3 px-8 py-6 text-lg">
                <Camera className="w-6 h-6" />
                Capture Your Smile
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            
            <Link to="/gallery">
              <Button variant="secondary" size="lg" className="px-8 py-6 text-lg border border-border/50 backdrop-blur-sm">
                Explore Gallery
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">1,247</div>
              <div className="text-sm text-foreground/70">Smiles Verified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">342K</div>
              <div className="text-sm text-foreground/70">SMILE Tokens</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-cyan mb-1">89</div>
              <div className="text-sm text-foreground/70">Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background/95">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to turn your authentic smile into valuable rewards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-purple transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Camera className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">1. Capture</h3>
              <p className="text-muted-foreground">
                Take or upload a photo of your genuine smile using our secure capture interface.
              </p>
            </Card>

            <Card className="p-8 text-center bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-purple transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">2. Verify</h3>
              <p className="text-muted-foreground">
                Our AI oracle analyzes your smile authenticity and quality using advanced algorithms.
              </p>
            </Card>

            <Card className="p-8 text-center bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-purple transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Trophy className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">3. Earn</h3>
              <p className="text-muted-foreground">
                Receive SMILE tokens directly to your wallet based on your smile's quality score.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the community of smile earners and start generating rewards today.
          </p>
          <Link to="/smile">
            <Button variant="hero" size="lg" className="gap-3 px-8 py-6 text-lg">
              <Users className="w-6 h-6" />
              Start Earning Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;