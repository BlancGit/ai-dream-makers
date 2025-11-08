import { Button } from "@/components/ui/button";
import { Brain, Home, BookOpen, GamepadIcon, Users, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navigation = () => {
  const location = useLocation();

  const leftNavItems = [
    { label: "Home", path: "/" },
    { label: "Lessons", path: "/lessons/1" },
    { label: "Activities", path: "/games" },
  ];

  const rightNavItems = [
    { label: "About", path: "/about" },
  ];

  const allLessons = [
    { label: "Lesson 1", path: "/lessons/1" },
    { label: "Lesson 2", path: "/lessons/2" },
    { label: "Lesson 3", path: "/lessons/3" },
    { label: "Lesson 4", path: "/lessons/4" },
    { label: "Lesson 5", path: "/lessons/5" },
    { label: "C# Programming", path: "/lessons/csharp" },
    { label: "Python Programming", path: "/lessons/python" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Left Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {leftNavItems.map((item) => {
              const isActive = location.pathname === item.path ||
                (item.path === "/lessons/1" && location.pathname.startsWith("/lessons"));

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-foreground ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Logo - Centered */}
          <Link to="/" className="flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
            <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-background" />
            </div>
            <h1 className="text-lg font-bold tracking-tight hidden sm:block">
              Neural Networks Academy
            </h1>
          </Link>

          {/* Right Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {rightNavItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-foreground ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button
              asChild
              className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6"
            >
              <Link to="/lessons/1">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden ml-auto">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex flex-col gap-4">
                  {leftNavItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="text-base font-medium text-foreground hover:text-secondary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  {rightNavItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="text-base font-medium text-foreground hover:text-secondary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <p className="text-xs font-bold uppercase text-muted-foreground mb-3">All Lessons</p>
                  <div className="flex flex-col gap-3">
                    {allLessons.map((lesson) => (
                      <Link
                        key={lesson.path}
                        to={lesson.path}
                        className="text-sm text-foreground hover:text-secondary transition-colors"
                      >
                        {lesson.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <Button
                  asChild
                  className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full mt-4"
                >
                  <Link to="/lessons/1">Get Started</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};