import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface ScriptureCardProps {
  verse: string;
  reference: string;
  reflection?: string;
  className?: string;
}

export function ScriptureCard({
  verse,
  reference,
  reflection,
  className,
}: ScriptureCardProps) {
  return (
    <Card
      className={cn(
        "max-w-2xl mx-auto overflow-hidden",
        "bg-gradient-to-br from-primary/5 via-background to-primary/10",
        "border-primary/20",
        className
      )}
    >
      <CardContent className="p-8 md:p-12 space-y-6">
        <Quote className="h-10 w-10 text-primary/30" />

        <blockquote className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-foreground font-serif italic">
          &ldquo;{verse}&rdquo;
        </blockquote>

        <p className="text-right text-primary font-semibold text-lg">
          — {reference}
        </p>

        {reflection && (
          <div className="pt-6 border-t border-primary/20">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Suy niệm
            </h3>
            <p className="text-muted-foreground leading-relaxed">{reflection}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface FeaturedVerseProps {
  verse: string;
  reference: string;
  className?: string;
}

export function FeaturedVerse({ verse, reference, className }: FeaturedVerseProps) {
  return (
    <div className={cn("text-center space-y-4", className)}>
      <Quote className="h-8 w-8 mx-auto text-primary/50" />
      <blockquote className="text-lg md:text-xl italic text-muted-foreground leading-relaxed max-w-3xl mx-auto">
        &ldquo;{verse}&rdquo;
      </blockquote>
      <p className="text-primary font-medium">— {reference}</p>
    </div>
  );
}
