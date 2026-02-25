"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type SafeImageProps = ImageProps & {
  fallbackClassName?: string;
  fallbackLabel?: string;
};

export function SafeImage({
  alt,
  className,
  fallbackClassName,
  fallbackLabel,
  onError,
  ...props
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        aria-label={fallbackLabel ?? alt}
        className={cn(
          "absolute inset-0 flex items-end bg-gradient-to-br from-slate-300 via-slate-200 to-slate-300 p-4 text-white",
          fallbackClassName,
        )}
        role="img"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/90">Image Loading Fallback</span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={(event) => {
        setHasError(true);
        onError?.(event);
      }}
    />
  );
}
