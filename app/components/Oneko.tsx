"use client";

import { useEffect, useRef, useState } from "react";

export default function Oneko() {
  const nekoRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;

    const isReducedMotion =
      globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches === true;

    if (isReducedMotion) return;

    const nekoEl = nekoRef.current;
    if (!nekoEl) return;
    // nekoEl is guaranteed non-null past this point; alias for use in nested functions
    const el = nekoEl;

    let cancelled = false;

    // Start at the neko's position in the header
    const rect = el.getBoundingClientRect();
    let nekoPosX = rect.left + 16;
    let nekoPosY = rect.top + 16;
    let mousePosX = nekoPosX;
    let mousePosY = nekoPosY;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation: string | null = null;
    let idleAnimationFrame = 0;
    let lastFrameTimestamp: number | undefined;

    const nekoSpeed = 10;

    const spriteSets: Record<string, [number, number][]> = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [
        [-5, 0],
        [-6, 0],
        [-7, 0],
      ],
      scratchWallN: [
        [0, 0],
        [0, -1],
      ],
      scratchWallS: [
        [-7, -1],
        [-6, -2],
      ],
      scratchWallE: [
        [-2, -2],
        [-2, -3],
      ],
      scratchWallW: [
        [-4, 0],
        [-4, -1],
      ],
      tired: [[-3, -2]],
      sleeping: [
        [-2, 0],
        [-2, -1],
      ],
      N: [
        [-1, -2],
        [-1, -3],
      ],
      NE: [
        [0, -2],
        [0, -3],
      ],
      E: [
        [-3, 0],
        [-3, -1],
      ],
      SE: [
        [-5, -1],
        [-5, -2],
      ],
      S: [
        [-6, -3],
        [-7, -2],
      ],
      SW: [
        [-5, -3],
        [-6, -1],
      ],
      W: [
        [-4, -2],
        [-4, -3],
      ],
      NW: [
        [-1, 0],
        [-1, -1],
      ],
    };

    function setSprite(name: string, frame: number) {
      const sprite = spriteSets[name][frame % spriteSets[name].length];
      el.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    }

    function resetIdleAnimation() {
      idleAnimation = null;
      idleAnimationFrame = 0;
    }

    function pickIdleAnimation() {
      const animations: string[] = ["sleeping", "scratchSelf"];
      if (nekoPosX < 32) animations.push("scratchWallW");
      if (nekoPosY < 32) animations.push("scratchWallN");
      if (nekoPosX > globalThis.innerWidth - 32)
        animations.push("scratchWallE");
      if (nekoPosY > globalThis.innerHeight - 32)
        animations.push("scratchWallS");
      return animations[Math.floor(Math.random() * animations.length)];
    }

    function idle() {
      idleTime += 1;

      if (
        idleTime > 10 &&
        Math.floor(Math.random() * 200) === 0 &&
        idleAnimation === null
      ) {
        idleAnimation = pickIdleAnimation();
      }

      switch (idleAnimation) {
        case "sleeping":
          if (idleAnimationFrame < 8) {
            setSprite("tired", 0);
            break;
          }
          setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 192) resetIdleAnimation();
          break;
        case "scratchWallN":
        case "scratchWallS":
        case "scratchWallE":
        case "scratchWallW":
        case "scratchSelf":
          setSprite(idleAnimation, idleAnimationFrame);
          if (idleAnimationFrame > 9) resetIdleAnimation();
          break;
        default:
          setSprite("idle", 0);
          return;
      }
      idleAnimationFrame += 1;
    }

    function frame() {
      frameCount += 1;
      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const distance = Math.hypot(diffX, diffY);

      if (distance < nekoSpeed || distance < 48) {
        idle();
        return;
      }

      idleAnimation = null;
      idleAnimationFrame = 0;

      if (idleTime > 1) {
        setSprite("alert", 0);
        idleTime = Math.min(idleTime, 7);
        idleTime -= 1;
        return;
      }

      let direction = "";
      direction += diffY / distance > 0.5 ? "N" : "";
      direction += diffY / distance < -0.5 ? "S" : "";
      direction += diffX / distance > 0.5 ? "W" : "";
      direction += diffX / distance < -0.5 ? "E" : "";
      setSprite(direction, frameCount);

      nekoPosX -= (diffX / distance) * nekoSpeed;
      nekoPosY -= (diffY / distance) * nekoSpeed;

      nekoPosX = Math.min(Math.max(16, nekoPosX), globalThis.innerWidth - 16);
      nekoPosY = Math.min(Math.max(16, nekoPosY), globalThis.innerHeight - 16);

      el.style.left = `${nekoPosX - 16}px`;
      el.style.top = `${nekoPosY - 16}px`;
    }

    function onAnimationFrame(timestamp: number) {
      if (cancelled) return;
      if (!lastFrameTimestamp) lastFrameTimestamp = timestamp;
      if (timestamp - lastFrameTimestamp > 100) {
        lastFrameTimestamp = timestamp;
        frame();
      }
      globalThis.requestAnimationFrame(onAnimationFrame);
    }

    // Switch to fixed positioning for cursor following
    el.style.position = "fixed";
    el.style.left = `${nekoPosX - 16}px`;
    el.style.top = `${nekoPosY - 16}px`;

    const handleMouseMove = (event: MouseEvent) => {
      mousePosX = event.clientX;
      mousePosY = event.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    globalThis.requestAnimationFrame(onAnimationFrame);

    return () => {
      cancelled = true;
      document.removeEventListener("mousemove", handleMouseMove);
      el.style.position = "";
      el.style.left = "";
      el.style.top = "";
      el.style.backgroundPosition = `${-3 * 32}px ${-3 * 32}px`;
    };
  }, [active]);

  return (
    <div style={{ width: 32, height: 32 }}>
      <div
        ref={nekoRef}
        aria-hidden="true"
        onClick={() => setActive((a) => !a)}
        style={{
          width: 32,
          height: 32,
          cursor: "pointer",
          imageRendering: "pixelated",
          zIndex: 2147483647,
          backgroundImage: "url(/oneko.gif)",
          backgroundPosition: `${-3 * 32}px ${-3 * 32}px`,
        }}
      />
    </div>
  );
}
