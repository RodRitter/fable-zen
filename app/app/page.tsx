"use client";
import LoggedHeader from "@/containers/LoggedHeader";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-6 min-h-screen container mx-auto">
      <LoggedHeader />
      <Link href="/app/chapter">Chapter</Link>
    </div>
  );
}
