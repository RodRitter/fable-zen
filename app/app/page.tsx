"use client";
import MainHeader from "@/containers/MainHeader";

export default function Home() {
  return (
    <div className="mt-6 min-h-screen container mx-auto">
      <MainHeader />
      <h1>H1 - Typography</h1>
      <h2>H2 - Typography</h2>
      <h3>H3 - Typography</h3>
      <h4>H4 - Typography</h4>
      <div>Body - Typography</div>
      <div className="typo-book">Book - Typography</div>
    </div>
  );
}
