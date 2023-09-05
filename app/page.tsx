"use client";
import LandingHeader from "@/containers/LandingHeader";

export default function Home() {
  return (
    <div className="mt-6 text-center h-[2000px] container">
      <LandingHeader />
      <h1>H1 - Typography</h1>
      <h2>H2 - Typography</h2>
      <h3>H3 - Typography</h3>
      <h4>H4 - Typography</h4>
      <div>Body - Typography</div>
      <div className="typo-book">Book - Typography</div>
    </div>
  );
}
