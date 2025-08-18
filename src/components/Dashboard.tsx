import React from "react";
import { StatCard } from "@/components/ui/stat-card";
import { HabitTracker } from "@/components/HabitTracker";
import { GoalTracker } from "@/components/GoalTracker";
import { QuickJournal } from "@/components/QuickJournal";
import { ProgressCircle } from "@/components/ui/progress-circle";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, BookOpen, Flame, Calendar, Award } from "lucide-react";

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Active Habits"
          value="5"
          subtitle="+2 this week"
          icon={Target}
          trend="up"
          variant="gradient"
        />
        <StatCard
          title="Goals Progress"
          value="73%"
          subtitle="3 of 4 on track"
          icon={TrendingUp}
          trend="up"
        />
        <StatCard
          title="Streak Days"
          value="12"
          subtitle="Personal best!"
          icon={Flame}
          trend="up"
          variant="success"
        />
        <StatCard
          title="Reflections"
          value="24"
          subtitle="This month"
          icon={BookOpen}
        />
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 shadow-soft">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold">Overall Progress</h3>
              <ProgressCircle value={78} size={140} strokeWidth={10}>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                    78%
                  </div>
                  <div className="text-sm text-muted-foreground">Complete</div>
                </div>
              </ProgressCircle>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">This Week</span>
                  <span className="font-medium">+12%</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-sm text-success">
                  <TrendingUp className="h-3 w-3" />
                  <span>Great momentum!</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Card className="shadow-soft">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Days Active</p>
                    <p className="text-2xl font-bold">45</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Achievements</p>
                    <p className="text-2xl font-bold">8</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="shadow-soft">
            <CardContent className="p-4">
              <h4 className="font-medium mb-3">Weekly Highlights</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <span>Completed 7-day meditation streak</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Finished 3 chapters of "Atomic Habits"</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Achieved personal running record</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HabitTracker />
        <GoalTracker />
      </div>

      {/* Journal Section */}
      <QuickJournal />
    </div>
  );
};