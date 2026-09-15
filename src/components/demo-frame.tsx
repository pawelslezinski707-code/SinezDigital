"use client";

import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

const SCROLL_KEYS = new Set([
  " ",
  "PageDown",
  "PageUp",
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
]);

/**
 * Clicking a link inside a same-origin iframe moves focus to the <iframe>
 * element in the outer document, and browsers then auto-scroll the outer
 * page to keep that focused element in view. That has nothing to do with
 * the visitor's intent, so we detect "real" scroll input (wheel/touch/key)
 * and revert any scroll that happens without it while the iframe has focus.
 */
function useIgnoreIframeFocusScroll(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    let lastUserIntent = 0;
    const markIntent = () => {
      lastUserIntent = Date.now();
    };
    const onKeydown = (e: KeyboardEvent) => {
      if (SCROLL_KEYS.has(e.key)) markIntent();
    };

    window.addEventListener("wheel", markIntent, { passive: true });
    window.addEventListener("touchstart", markIntent, { passive: true });
    window.addEventListener("touchmove", markIntent, { passive: true });
    window.addEventListener("mousedown", markIntent);
    window.addEventListener("keydown", onKeydown);

    let saved = { x: window.scrollX, y: window.scrollY };
    let reverting = false;

    const onScroll = () => {
      if (reverting) {
        reverting = false;
        return;
      }
      const iframeIsActive =
        document.activeElement?.tagName === "IFRAME" &&
        containerRef.current?.contains(document.activeElement);
      const recentIntent = Date.now() - lastUserIntent < 200;

      if (iframeIsActive && !recentIntent) {
        reverting = true;
        window.scrollTo({ top: saved.y, left: saved.x, behavior: "instant" });
      } else {
        saved = { x: window.scrollX, y: window.scrollY };
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("wheel", markIntent);
      window.removeEventListener("touchstart", markIntent);
      window.removeEventListener("touchmove", markIntent);
      window.removeEventListener("mousedown", markIntent);
      window.removeEventListener("keydown", onKeydown);
      window.removeEventListener("scroll", onScroll);
    };
  }, [containerRef]);
}

export function DemoFrame({ src, title }: { src: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  useIgnoreIframeFocusScroll(containerRef);

  return (
    <div
      ref={containerRef}
      className="mt-12 overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-xl"
    >
      <div className="flex items-center gap-3 border-b border-surface-border bg-background px-4 py-3">
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-amber-400/70" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
        </div>
        <div className="flex-1 truncate rounded-md bg-surface px-3 py-1 text-center text-xs text-muted">
          {src}
        </div>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Otwórz demo w nowej karcie"
          className="flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-muted transition-colors hover:text-violet-600 dark:hover:text-violet-400"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Pełny ekran</span>
        </a>
      </div>
      <iframe
        src={src}
        title={title}
        className="h-[520px] w-full bg-white sm:h-[640px]"
        loading="lazy"
      />
    </div>
  );
}
