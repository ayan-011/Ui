
"use client"
import React, { useEffect, useState } from "react";

/**
 * Changeimg
 * A resizable image changer: each image holds on screen for a
 * while, then smoothly crossfades into the next one — forever.
 *
 * By default it fills whatever container/size you give it (no more
 * forced fullscreen). Pass `width`/`height` for a fixed size, or
 * just drop it inside a sized parent div and leave them as "100%".
 *
 * Every image is rendered once and stacked; only `opacity` changes,
 * so the crossfade is handled purely by CSS and can't glitch.
 */

export interface ChangeimgProps {
  /** Image URLs to cycle through. */
  images?: string[];
  /** Width of the component. Any valid CSS value, e.g. 400, "400px", "100%". */
  width?: number | string;
  /** Height of the component. Any valid CSS value, e.g. 300, "300px", "60vh". */
  height?: number | string;
  /** Total time (ms) each image "owns" the screen, including the fade. */
  holdMs?: number;
  /** Duration (ms) of the crossfade transition. */
  fadeMs?: number;
  /** Corner rounding, e.g. 12 or "12px". */
  borderRadius?: number | string;
  /** Darkened inner-edge vignette overlay. */
  showVignette?: boolean;
}

const defaultImages: string[] = [
  "https://picsum.photos/id/1015/1600/900",
  "https://picsum.photos/id/1016/1600/900",
  "https://picsum.photos/id/1018/1600/900",
  "https://picsum.photos/id/1020/1600/900",
  "https://picsum.photos/id/1024/1600/900",
  "https://picsum.photos/id/1035/1600/900",
];

function preload(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
}

export default function Changeimg({
  images = defaultImages,
  width = "100%",
  height = "100%",
  holdMs = 3000,
  fadeMs = 1200, 
  showVignette = true,
}: ChangeimgProps) {
  const [ready, setReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Preload everything once, up front, so the very first images
  // shown are never half-loaded.
  useEffect(() => {
    let cancelled = false;
    setReady(false);
    setActiveIndex(0);
    Promise.all(images.map(preload)).then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [images]);

  useEffect(() => {
    if (!ready || images.length < 2) return;
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, holdMs);
    return () => window.clearInterval(id);
  }, [ready, holdMs, images.length]);

  const containerStyle: React.CSSProperties = {
    position: "relative",
    width,
    height,
    overflow: "hidden", 
    background: "#000",
  };

  if (!ready) {
    return <div style={containerStyle} />;
  }

  return (
    <div style={containerStyle}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`slide-${i}`}
          draggable={false}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            userSelect: "none",
            backfaceVisibility: "hidden",
            transition: `opacity ${fadeMs}ms ease-in-out`,
            willChange: "opacity",
            opacity: i === activeIndex ? 1 : 0,
            zIndex: i === activeIndex ? 1 : 0,
          }}
        />
      ))}
      {showVignette && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            pointerEvents: "none",
            boxShadow: "inset 0 0 80px rgba(0,0,0,0.4)",
           
          }}
        />
      )}
    </div>
  );
}