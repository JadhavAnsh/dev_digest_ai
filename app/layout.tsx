import { ThemeProvider } from "@/components/Theme-Provider"
import { Sidebar } from "@/components/Sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DevDigest AI",
  description: "AI-powered development digest platform",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-devdigest-bg">
            <div className="flex h-screen">
              {/* Sidebar container - border and margin are now on the sidebar component itself */}
              <div className="flex-shrink-0">
                <div className="h-screen">
                  <Sidebar className="h-full rounded-xl shadow-lg bg-background" />
                </div>
              </div>
              
              {/* Main content area */}
              <SidebarInset className="flex-1 p-8 overflow-auto bg-background">
                {children}
              </SidebarInset>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
