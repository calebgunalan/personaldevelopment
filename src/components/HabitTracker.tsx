import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ProgressCircle } from "@/components/ui/progress-circle";
import { Check, Plus, Target, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface Habit {
  id: string;
  name: string;
  streak: number;
  completed: boolean;
  target: number;
  current: number;
}

const initialHabits: Habit[] = [
  { id: "1", name: "Morning Meditation", streak: 7, completed: true, target: 1, current: 1 },
  { id: "2", name: "Read 30 Minutes", streak: 3, completed: false, target: 1, current: 0 },
  { id: "3", name: "Exercise", streak: 12, completed: true, target: 1, current: 1 },
  { id: "4", name: "Drink 8 Glasses Water", streak: 5, completed: false, target: 8, current: 6 },
  { id: "5", name: "Journal Writing", streak: 2, completed: false, target: 1, current: 0 },
];

export const HabitTracker: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>(initialHabits);

  const toggleHabit = (habitId: string) => {
    setHabits(prev => prev.map(habit => 
      habit.id === habitId 
        ? { 
            ...habit, 
            completed: !habit.completed,
            current: !habit.completed ? habit.target : 0,
            streak: !habit.completed ? habit.streak + 1 : Math.max(0, habit.streak - 1)
          }
        : habit
    ));
  };

  const completedHabits = habits.filter(h => h.completed).length;
  const totalHabits = habits.length;
  const completionRate = totalHabits > 0 ? (completedHabits / totalHabits) * 100 : 0;

  return (
    <Card className="shadow-soft hover:shadow-medium transition-smooth">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Daily Habits
          </CardTitle>
          <ProgressCircle 
            value={completionRate} 
            size={60} 
            strokeWidth={4}
            showValue={false}
          >
            <span className="text-sm font-bold">
              {completedHabits}/{totalHabits}
            </span>
          </ProgressCircle>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Today's Progress</span>
            <span className="font-medium">{Math.round(completionRate)}% Complete</span>
          </div>
          <Progress value={completionRate} className="h-2" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className={cn(
              "flex items-center justify-between p-3 rounded-lg border transition-smooth",
              habit.completed 
                ? "bg-success/5 border-success/20" 
                : "bg-muted/20 border-border hover:bg-muted/40"
            )}
          >
            <div className="flex items-center gap-3">
              <Button
                size="icon"
                variant={habit.completed ? "success" : "outline"}
                className="h-8 w-8"
                onClick={() => toggleHabit(habit.id)}
              >
                <Check className="h-4 w-4" />
              </Button>
              <div>
                <p className={cn(
                  "font-medium",
                  habit.completed && "line-through text-muted-foreground"
                )}>
                  {habit.name}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Flame className="h-3 w-3" />
                  <span>{habit.streak} day streak</span>
                  {habit.target > 1 && (
                    <span className="ml-2">
                      {habit.current}/{habit.target}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {habit.target > 1 && (
              <div className="w-16">
                <Progress 
                  value={(habit.current / habit.target) * 100} 
                  className="h-1.5"
                />
              </div>
            )}
          </div>
        ))}
        <Button variant="outline" className="w-full mt-4">
          <Plus className="h-4 w-4 mr-2" />
          Add New Habit
        </Button>
      </CardContent>
    </Card>
  );
};