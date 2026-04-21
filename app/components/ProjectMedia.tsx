"use client";

import Image from "next/image";
import { useState } from "react";
import Spinner from "./Spinner";

const VIDEO_ASSET_PATTERN = /\.(mp4|webm|ogg|mov)(?:\?.*)?$/i;
const GIF_ASSET_PATTERN = /\.gif(?:\?.*)?$/i;

function isVideoAsset(src: string) {
  return VIDEO_ASSET_PATTERN.test(src);
}

function isGifAsset(src: string) {
  return GIF_ASSET_PATTERN.test(src);
}

export default function ProjectMedia({
  src,
  alt,
}: {
  src?: string;
  alt: string;
}) {
  const [loaded, setLoaded] = useState(false);

  if (!src) {
    return (
      <div className="aspect-video w-full rounded-md bg-muted flex items-center justify-center text-muted-foreground text-sm">
        [Project Media]
      </div>
    );
  }

  if (isVideoAsset(src)) {
    return (
      <div className="relative aspect-video w-full rounded-md overflow-hidden bg-muted">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Spinner />
          </div>
        )}
        <video
          src={src}
          aria-label={alt}
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setLoaded(true)}
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full rounded-md overflow-hidden bg-muted">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        unoptimized={isGifAsset(src)}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
