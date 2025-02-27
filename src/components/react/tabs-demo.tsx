import React from "react";
import StripeTabs from "./StripeTabs";

export default function TabsDemo() {
  const demoTabs = [
    {
      value: "all",
      label: "All",
      content: <div className="p-4">All items content goes here.</div>,
    },
    {
      value: "corporate",
      label: "Corporate",
      content: <div className="p-4">Corporate content goes here.</div>,
    },
    {
      value: "engineering",
      label: "Engineering",
      content: <div className="p-4">Engineering content goes here.</div>,
    },
    {
      value: "industry",
      label: "Industry",
      content: <div className="p-4">Industry content goes here.</div>,
    },
    {
      value: "product",
      label: "Product",
      content: <div className="p-4">Product content goes here.</div>,
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Stripe Tabs Demo</h1>
      <StripeTabs tabs={demoTabs} defaultTab="engineering" />
    </div>
  );
}
