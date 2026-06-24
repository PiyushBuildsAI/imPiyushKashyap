import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import WhatIBuild from "@/components/sections/what-i-build";
import SelectedWork from "@/components/sections/selected-work";
import WhyClients from "@/components/sections/why-clients";
import WorkingTogether from "@/components/sections/working-together";
import FinalCTA from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatIBuild />
      <SelectedWork />
      <WhyClients />
      <WorkingTogether />
      <FinalCTA />
    </>
  );
}
