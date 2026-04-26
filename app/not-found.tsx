import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-12">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Card className="border-border">
          <CardContent className="py-12 text-center">
            <h1 className="text-2xl font-bold text-foreground">Page not found</h1>
            <p className="mt-2 text-muted-foreground">
              The page you’re looking for doesn’t exist or may have moved.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90">
                <Link href="/">Go to homepage</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/support">Get support</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

