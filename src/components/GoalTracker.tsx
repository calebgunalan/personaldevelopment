import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, TrendingUp, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Goal {
  id: string;
  title: string;
  description: string;
  progress: number;
  target: number;
  deadline: string;
  category: "health" | "career" | "learning" | "personal";
  priority: "high" | "medium" | "low";
}

const initialGoals: Goal[] = [
  {
    id: "1",
    title: "Complete React Certification",
    description: "Finish advanced React course and get certified",
    progress: 75,
    target: 100,
    deadline: "2024-12-31",
    category: "learning",
    priority: "high"
  },
  {
    id: "2", 
    title: "Run 5K Marathon",
    description: "Build endurance to complete a 5K run",
    progress: 45,
    target: 100,
    deadline: "2024-10-15",
    category: "health",
    priority: "medium"
  },
  {
    id: "3",
    title: "Read 24 Books This Year",
    description: "Expand knowledge through consistent reading",
    progress: 18,
    target: 24,
    deadline: "2024-12-31",
    category: "personal",
    priority: "medium"
  }
];

const categoryColors = {
  health: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  career: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  learning: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  personal: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
};

const priorityColors = {
  high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200", 
  low: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
};

export const GoalTracker: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>(initialGoals);

  const getDaysUntilDeadline = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getProgressPercentage = (goal: Goal) => {
    if (goal.category === "learning" || goal.category === "career") {
      return goal.progress;
    }
    return (goal.progress / goal.target) * 100;
  };

  return (
    <Card className="shadow-soft hover:shadow-medium transition-smooth">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          Goal Tracker
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal) => {
          const progressPercentage = getProgressPercentage(goal);
          const daysLeft = getDaysUntilDeadline(goal.deadline);
          
          return (
            <div
              key={goal.id}
              className="p-4 rounded-lg border bg-gradient-card hover:shadow-soft transition-smooth"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="space-y-1">
                  <h3 className="font-semibold">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="secondary" className={categoryColors[goal.category]}>
                    {goal.category}
                  </Badge>
                  <Badge variant="outline" className={priorityColors[goal.priority]}>
                    {goal.priority}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">
                    {goal.category === "learning" || goal.category === "career" 
                      ? `${goal.progress}%` 
                      : `${goal.progress}/${goal.target}`
                    }
                  </span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>
                      {daysLeft > 0 ? `${daysLeft} days left` : "Overdue"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-success" />
                    <span className="text-success font-medium">
                      {Math.round(progressPercentage)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
        <Button variant="outline" className="w-full mt-4">
          <Plus className="h-4 w-4 mr-2" />
          Add New Goal
        </Button>
      </CardContent>
    </Card>
  );
};