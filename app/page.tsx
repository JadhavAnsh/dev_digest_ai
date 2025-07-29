import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-devdigest-text">Welcome to DevDigest AI</h1>
        <ThemeToggle />
      </div>
      
      <div className="bg-white dark:bg-gray-900 border-figma rounded-lg shadow-sm p-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-devdigest-text">
              Your AI-Powered Development Companion
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              DevDigest AI helps you stay on top of your development workflow with intelligent insights, 
              automated documentation, and smart project management.
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-devdigest-primary hover:bg-devdigest-secondary text-white">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="border-figma text-devdigest-text hover:bg-devdigest-component dark:hover:bg-gray-800">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-900 border-figma rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-devdigest-text mb-2">Dashboard</h3>
          <p className="text-gray-600 dark:text-gray-400">View your project overview and key metrics at a glance.</p>
        </div>
        <div className="bg-white dark:bg-gray-900 border-figma rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-devdigest-text mb-2">Q&A</h3>
          <p className="text-gray-600 dark:text-gray-400">Get instant answers to your development questions with AI assistance.</p>
        </div>
        <div className="bg-white dark:bg-gray-900 border-figma rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-devdigest-text mb-2">Meetings</h3>
          <p className="text-gray-600 dark:text-gray-400">Manage and track your development meetings and discussions.</p>
        </div>
      </div>
    </div>
  );
}
