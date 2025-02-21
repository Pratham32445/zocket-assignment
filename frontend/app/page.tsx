import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-primary mb-6">
            Supercharge Your Productivity with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            TaskMaster uses cutting-edge AI to help you manage tasks, collaborate in real-time, and boost your teams
            efficiency.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild size="lg">
              <Link href="/register">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/features">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose TaskMaster?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Suggestions",
                description: "Get intelligent task recommendations based on your work patterns.",
              },
              {
                title: "Real-Time Collaboration",
                description: "Work seamlessly with your team with instant updates and notifications.",
              },
              {
                title: "Intuitive Interface",
                description: "Enjoy a clean, user-friendly design that makes task management a breeze.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg">
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Transform Your Workflow?</h2>
          <Button asChild size="lg">
            <Link href="/register">Sign Up Now</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

