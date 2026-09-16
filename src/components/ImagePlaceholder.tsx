import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  ratio?: "square" | "video" | "wide";
}

const ratioClass: Record<NonNullable<ImagePlaceholderProps["ratio"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[21/9]",
};

// A clearly-marked placeholder box for images that haven't been supplied yet
// (certificate scans, project screenshots, etc). Swap the surrounding <img>
// in once the real asset is available.
export function ImagePlaceholder({ label, className, ratio = "video" }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-muted/40 text-muted-foreground",
        ratioClass[ratio],
        className,
      )}
    >
      <ImageIcon className="h-8 w-8 opacity-50" />
      <span className="text-xs font-mono text-center px-4">{label}</span>
    </div>
  );
}
