import React from "react";
import { Button } from "@/components/ui/button";
import { Dashboard } from "@/components/Dashboard";
import { ArrowRight, Sparkles, Target, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-growth.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Growth Gnome
                  <span className="block gradient-text bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent">
                    Guide
                  </span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Your intelligent companion for personal development. Track habits, achieve goals, 
                  and reflect on your journey with beautiful insights and analytics.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="hero" className="group">
                  Start Your Journey
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Target className="h-5 w-5" />
                  <span className="text-sm">Goal Tracking</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-sm">Progress Analytics</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-sm">Daily Insights</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 shadow-glow rounded-2xl"></div>
              <img 
                src={heroImage} 
                alt="Personal growth visualization" 
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your Personal Development Hub</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to track, measure, and celebrate your growth journey in one beautiful dashboard.
          </p>
        </div>
        
        <Dashboard />
      </section>
    </div>
  );
};

export default Index;
