import type { Metadata } from "next";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple pricing for AI-powered website debugging. Free plan available.",
};

export default function PricingPage() { return <PricingContent />; }
