import type React from "react";

interface SocialProps {
  url: string;
  children: React.ReactNode;
}
export function Social({ url, children }: SocialProps) {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </div>
  );
}
