import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Upload, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";

const SmilePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Capture Your Smile
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload or capture your best smile to participate in Based Smiles rewards. 
              Each verified smile earns you tokens on Base network.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border/50 shadow-glass">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Camera Capture */}
                <div className="text-center">
                  <div className="w-full aspect-video bg-secondary/20 rounded-lg border-2 border-dashed border-border mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Camera Preview</p>
                    </div>
                  </div>
                  <Button variant="hero" className="w-full gap-2">
                    <Camera className="w-5 h-5" />
                    Start Camera
                  </Button>
                </div>

                {/* File Upload */}
                <div className="text-center">
                  <div className="w-full aspect-video bg-secondary/20 rounded-lg border-2 border-dashed border-border mb-6 flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="text-center">
                      <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Drop image here or click to browse</p>
                    </div>
                  </div>
                  <Button variant="secondary" className="w-full gap-2">
                    <Upload className="w-5 h-5" />
                    Choose File
                  </Button>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Reward per verified smile: <span className="text-primary font-medium">100 SMILE</span>
                  </div>
                  <Button disabled className="gap-2">
                    <Zap className="w-4 h-4" />
                    Process Smile
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SmilePage;