import { useState, useRef, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function StripeTabs() {
  const [activeTab, setActiveTab] = useState("account");
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateClipPath = () => {
      const container = containerRef.current;
      const activeTabElement = activeTabRef.current;

      if (container && activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;
        const containerWidth = container.offsetWidth;

        const leftPercent = (offsetLeft / containerWidth) * 100;
        const rightPercent =
          100 - ((offsetLeft + offsetWidth) / containerWidth) * 100;

        container.style.clipPath = `inset(0 ${rightPercent}% 0 ${leftPercent}% round 24px)`;
      }
    };

    updateClipPath();

    window.addEventListener("resize", updateClipPath);

    return () => window.removeEventListener("resize", updateClipPath);
  }, [activeTab]);

  return (
    <div className="relative w-full">
      {/* Base layer */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full bg-background">
          <TabsTrigger
            value="account"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Account
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Password
          </TabsTrigger>
          <TabsTrigger
            value="billing"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Billing
          </TabsTrigger>
          <TabsTrigger
            value="settings"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
        <TabsContent value="billing">Change your billings here.</TabsContent>
        <TabsContent value="settings">Change your settings here.</TabsContent>
      </Tabs>

      {/* Overlay layer */}
      <div
        ref={containerRef}
        className="absolute top-0 left-0 w-full overflow-hidden transition-[clip-path] duration-300 ease-in-out"
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="h-full w-full bg-blue-500">
            <TabsTrigger
              ref={activeTab === "account" ? activeTabRef : null}
              value="account"
              className="text-white data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              ref={activeTab === "password" ? activeTabRef : null}
              value="password"
              className="text-white data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Password
            </TabsTrigger>
            <TabsTrigger
              ref={activeTab === "billing" ? activeTabRef : null}
              value="billing"
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Billing
            </TabsTrigger>
            <TabsTrigger
              ref={activeTab === "settings" ? activeTabRef : null}
              value="settings"
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Settings
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
