import React, { useState, useRef, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define the tab item type
export type TabItem = {
  value: string;
  label: string;
  content?: React.ReactNode;
};

// Define the props type for the component
type StripTabsProps = {
  tabs: TabItem[];
  defaultTab?: string;
  highlightColor?: string;
  className?: string;
};

export default function StripeTabs({
  tabs,
  defaultTab,
  highlightColor = "bg-blue-500",
  className = "",
}: StripTabsProps) {
  // Set active tab to defaultTab if provided, otherwise use the first tab's value
  const [activeTab, setActiveTab] = useState(defaultTab || (tabs.length > 0 ? tabs[0].value : ""));
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (activeTab && container) {
      const activeTabElement = activeTabRef.current;

      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;

        const clipLeft = offsetLeft;
        const clipRight = offsetLeft + offsetWidth;
        container.style.clipPath = `inset(0 ${Number(100 - (clipRight / container.offsetWidth) * 100).toFixed()}% 0 ${Number((clipLeft / container.offsetWidth) * 100).toFixed()}% round 17px)`;
      }
    }
  }, [activeTab, activeTabRef, containerRef]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Base layer */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full bg-background">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="text-center">
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>

      {/* Overlay layer */}
      <div
        ref={containerRef}
        className={`absolute top-0 left-0 w-full overflow-hidden transition-[clip-path] duration-300 ease-in-out`}
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className={`h-full w-full ${highlightColor}`}>
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                ref={activeTab === tab.value ? activeTabRef : undefined}
                value={tab.value}
                className="text-white data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
