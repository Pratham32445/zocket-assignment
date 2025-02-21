"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {

  return (
    <nav className="flex items-center justify-between p-4 bg-background">
      <Link href="/" className="text-2xl font-bold text-primary">
        TaskMaster
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/dashboard" className="text-foreground hover:text-primary">
          Dashboard
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
