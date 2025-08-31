import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/smile", label: "Capture" },
    { path: "/gallery", label: "Gallery" },
    { path: "/profile", label: "Profile" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Based Smiles
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-colors hover:text-primary ${
                location.pathname === item.path 
                  ? "text-primary font-medium" 
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button variant="hero" className="gap-2">
          <Wallet className="w-4 h-4" />
          Connect Wallet
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;