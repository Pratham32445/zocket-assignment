import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              TaskMaster
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              AI-powered task management for teams
            </p>
          </div>
          <nav className="flex space-x-4">
            <Link href="/about" className="text-sm text-foreground hover:text-primary">
              About
            </Link>
            <Link href="/privacy" className="text-sm text-foreground hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-foreground hover:text-primary">
              Terms
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TaskMaster. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
