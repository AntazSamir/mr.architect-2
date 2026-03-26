import * as React from "react"
import { useEffect, useRef } from "react";

interface Tab {
  id: string;
  label: string;
  icon?: React.ElementType;
}

export interface AnimatedTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
  className?: string;
}

export function AnimatedTabs({ tabs, activeTab, onTabChange, className }: AnimatedTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container && activeTab) {
      const activeTabElement = activeTabRef.current;
      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;
        
        // Slightly more precise centering
        container.style.clipPath = `inset(0 ${Number(
          100 - ((offsetLeft + offsetWidth) / container.offsetWidth) * 100,
        ).toFixed(2)}% 0 ${Number(
          (offsetLeft / container.offsetWidth) * 100,
        ).toFixed(2)}% round 9999px)`;
      }
    }
  }, [activeTab]);

  return (
    <div className={`relative bg-background/40 backdrop-blur-xl border border-border/50 p-1.5 rounded-full shadow-2xl flex items-center w-fit mx-auto ${className}`}>
      {/* Animated Overlay Layer */}
      <div
        ref={containerRef}
        className="absolute inset-0 z-10 w-full overflow-hidden pointer-events-none [clip-path:inset(0px_75%_0px_0%_round_9999px)] transition-[clip-path] duration-300 ease-in-out"
      >
        <div className="relative flex w-full h-full bg-gradient-to-r from-primary to-accent px-1.5 py-1.5">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className="flex h-10 items-center justify-center px-6 text-sm font-bold text-white whitespace-nowrap gap-2"
              style={{ width: activeTabRef.current?.offsetWidth }}
            >
              {tab.icon && <tab.icon className="w-4 h-4" />}
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      {/* Base Layer */}
      <div className="relative flex w-full">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              ref={isActive ? activeTabRef : null}
              onClick={() => onTabChange(tab.id)}
              className="flex h-10 items-center justify-center px-6 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap gap-2 z-20"
            >
              {tab.icon && <tab.icon className="w-4 h-4" />}
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}