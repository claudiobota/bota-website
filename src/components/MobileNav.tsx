"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NAV_ITEMS, type NavKey } from "@/lib/nav";
import { MaterialIcon } from "./MaterialIcon";

type Props = {
  active?: NavKey;
};

export function MobileNav({ active }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const { overflow: htmlOverflow, overscrollBehavior: htmlOverscroll } =
      document.documentElement.style;
    const {
      overflow: bodyOverflow,
      position: bodyPosition,
      top: bodyTop,
      width: bodyWidth,
      overscrollBehavior: bodyOverscroll,
    } = document.body.style;

    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.overscrollBehavior = "none";
    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    const preventBackgroundScroll = (event: TouchEvent) => {
      const panel = document.getElementById("mobile-nav-panel");
      if (panel?.contains(event.target as Node)) return;
      event.preventDefault();
    };

    document.addEventListener("touchmove", preventBackgroundScroll, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchmove", preventBackgroundScroll);
      document.documentElement.style.overflow = htmlOverflow;
      document.documentElement.style.overscrollBehavior = htmlOverscroll;
      document.body.style.overflow = bodyOverflow;
      document.body.style.overscrollBehavior = bodyOverscroll;
      document.body.style.position = bodyPosition;
      document.body.style.top = bodyTop;
      document.body.style.width = bodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const panel =
    open && mounted ? (
      <div
        id="mobile-nav-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="fixed inset-0 top-16 z-[90] bg-surface border-t border-outline-variant/30 shadow-lg md:hidden overflow-y-auto overscroll-contain"
      >
        <nav className="flex flex-col px-margin-mobile py-8 gap-1 max-w-page mx-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = item.key === active;
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className={
                  isActive
                    ? "py-4 text-headline-sm font-display text-primary border-l-2 border-primary pl-4"
                    : "py-4 text-headline-sm font-display text-secondary hover:text-primary transition-colors pl-4"
                }
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="py-4 text-headline-sm font-display text-secondary hover:text-primary transition-colors pl-4"
          >
            Contact
          </Link>
          <Link
            href="/offices"
            onClick={() => setOpen(false)}
            className="py-4 text-headline-sm font-display text-secondary hover:text-primary transition-colors pl-4"
          >
            Global Offices
          </Link>
          <div className="pt-8 mt-4 border-t border-outline-variant/30">
            <Link
              href="/portal"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-primary text-on-primary px-6 py-4 text-label-caps hover:bg-primary/90 transition-all"
            >
              Family Portal
            </Link>
          </div>
        </nav>
      </div>
    ) : null;

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative z-[100] flex items-center justify-center w-10 h-10 text-primary"
      >
        <MaterialIcon name={open ? "close" : "menu"} />
      </button>

      {panel ? createPortal(panel, document.body) : null}
    </div>
  );
}
