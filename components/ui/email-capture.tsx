"use client";

import { ArrowRightIcon, Loader2 } from "lucide-react";
import { useState } from "react";

import { Button } from "./button";
import { Input } from "./input";

interface EmailCaptureProps {
  placeholder?: string;
  buttonText?: string;
  size?: "default" | "lg";
  className?: string;
  onSubmit?: (email: string) => Promise<void>;
}

export function EmailCapture({
  placeholder = "Enter your email",
  buttonText = "Join Waitlist",
  size = "default",
  className = "",
  onSubmit,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      if (onSubmit) {
        await onSubmit(email);
      } else {
        // Default behavior: log to console (replace with actual API call)
        console.log("Email submitted:", email);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setMessage({
        type: "success",
        text: "Thanks! You're on the waitlist. Check your email.",
      });
      setEmail("");
    } catch (error) {
      setMessage({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
      >
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
          className={
            size === "lg" ? "h-12 text-base" : "h-10"
          }
        />
        <Button
          type="submit"
          disabled={isLoading}
          size={size}
          className="whitespace-nowrap"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Joining...
            </>
          ) : (
            <>
              {buttonText}
              <ArrowRightIcon className="ml-2 size-4" />
            </>
          )}
        </Button>
      </form>
      {message && (
        <p
          className={`mt-3 text-sm ${
            message.type === "success"
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {message.text}
        </p>
      )}
    </div>
  );
}
