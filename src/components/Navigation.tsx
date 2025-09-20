import { Button } from "@/components/ui/button";
import { Brain, Home, BookOpen, GamepadIcon, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: BookOpen, label: "Lesson 1", path: "/lesson1" },
    { icon: Brain, label: "Lesson 2", path: "/lesson2" },
    { icon: GamepadIcon, label: "Games", path: "/games" },
    { icon: Users, label: "About", path: "/about" },
  ];

  return (
    <nav className="bg-card/80 backdrop-blur-sm shadow-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center animate-pulse-glow">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Neural Networks Academy
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "fun" : "ghost"}
                  size="sm"
                  className={`flex items-center gap-2 ${
                    isActive ? "animate-bounce-in" : ""
                  }`}
                  asChild
                >
                  <Link to={item.path}>
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};