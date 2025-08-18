import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Heart, Brain, Star, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface JournalEntry {
  id: string;
  content: string;
  mood: "great" | "good" | "okay" | "challenging";
  date: string;
  tags: string[];
}

const moodEmojis = {
  great: "😊",
  good: "🙂", 
  okay: "😐",
  challenging: "😔"
};

const moodColors = {
  great: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  good: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  okay: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  challenging: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
};

const recentEntries: JournalEntry[] = [
  {
    id: "1",
    content: "Had a great day learning React! Completed two modules and feeling confident about the progress.",
    mood: "great",
    date: "2024-01-20",
    tags: ["learning", "achievement"]
  },
  {
    id: "2", 
    content: "Meditation session was peaceful. Need to work on consistency with my morning routine.",
    mood: "good",
    date: "2024-01-19",
    tags: ["mindfulness", "routine"]
  }
];

export const QuickJournal: React.FC = () => {
  const [entry, setEntry] = useState("");
  const [selectedMood, setSelectedMood] = useState<keyof typeof moodEmojis | null>(null);
  const { toast } = useToast();

  const handleSave = () => {
    if (!entry.trim()) {
      toast({
        title: "Empty Entry",
        description: "Please write something before saving.",
        variant: "destructive",
      });
      return;
    }

    if (!selectedMood) {
      toast({
        title: "Select Mood",
        description: "Please select how you're feeling today.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would save to a database
    toast({
      title: "Entry Saved!",
      description: "Your reflection has been recorded.",
    });

    setEntry("");
    setSelectedMood(null);
  };

  return (
    <Card className="shadow-soft hover:shadow-medium transition-smooth">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Quick Reflection
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <label className="text-sm font-medium">How are you feeling today?</label>
          <div className="flex gap-2">
            {Object.entries(moodEmojis).map(([mood, emoji]) => (
              <Button
                key={mood}
                variant={selectedMood === mood ? "default" : "outline"}
                size="sm"
                className="flex items-center gap-1"
                onClick={() => setSelectedMood(mood as keyof typeof moodEmojis)}
              >
                <span>{emoji}</span>
                <span className="capitalize">{mood}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium">What's on your mind?</label>
          <Textarea
            placeholder="Reflect on your day, achievements, challenges, or insights..."
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            rows={4}
            className="resize-none"
          />
        </div>

        <Button 
          onClick={handleSave}
          className="w-full"
          variant="gradient"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Reflection
        </Button>

        {recentEntries.length > 0 && (
          <div className="space-y-3 pt-4 border-t">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" />
              Recent Entries
            </h4>
            {recentEntries.map((entry) => (
              <div
                key={entry.id}
                className="p-3 rounded-lg bg-muted/20 border"
              >
                <div className="flex items-center justify-between mb-2">
                  <Badge className={moodColors[entry.mood]}>
                    {moodEmojis[entry.mood]} {entry.mood}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {entry.date}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{entry.content}</p>
                <div className="flex gap-1 mt-2">
                  {entry.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};