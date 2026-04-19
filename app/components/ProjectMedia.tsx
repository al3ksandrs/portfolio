import Image from "next/image";

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
  if (!src) {
    return (
      <div className="aspect-video w-full rounded-md bg-muted flex items-center justify-center text-muted-foreground text-sm">
        [Project Media]
      </div>
    );
  }

  if (isVideoAsset(src)) {
    return (
      <div className="aspect-video w-full rounded-md overflow-hidden bg-muted">
        <video
          src={src}
          aria-label={alt}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full rounded-md overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        unoptimized={isGifAsset(src)}
      />
    </div>
  );
}
