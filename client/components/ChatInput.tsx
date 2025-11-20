import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSubmit: (message: string) => void;
  isLoading?: boolean;
  placeholder?: string;
}

export function ChatInput({
  onSubmit,
  isLoading = false,
  placeholder = "Tanyakan tentang penerimaan mahasiswa...",
}: ChatInputProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = Math.min(inputRef.current.scrollHeight, 120) + "px";
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSubmit(message);
      setMessage("");
      if (inputRef.current) {
        inputRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <div className="flex-1 relative">
        <textarea
          ref={inputRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(
            "w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground",
            "placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
            "resize-none smooth-transition",
            "min-h-12 max-h-24"
          )}
          disabled={isLoading}
        />
      </div>
      <Button
        type="submit"
        disabled={!message.trim() || isLoading}
        size="icon"
        className="flex-shrink-0 h-12 w-12 smooth-transition"
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
}
