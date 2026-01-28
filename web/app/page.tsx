import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">WorkingTogether</h1>
        <p className="text-muted-foreground">Glassmorphism Design System Test</p>
      </div>

      {/* Glassmorphism Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card variant="glass">
          <CardHeader>
            <CardTitle>Glass Card</CardTitle>
            <CardDescription>Standard glassmorphism effect</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">This card uses the glass variant with backdrop blur and transparency.</p>
          </CardContent>
        </Card>

        <Card variant="glass-light">
          <CardHeader>
            <CardTitle>Light Glass</CardTitle>
            <CardDescription>Lighter glassmorphism effect</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">This card uses the glass-light variant with more transparency.</p>
          </CardContent>
        </Card>

        <Card variant="glass-strong">
          <CardHeader>
            <CardTitle>Strong Glass</CardTitle>
            <CardDescription>Stronger glassmorphism effect</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">This card uses the glass-strong variant with more opacity.</p>
          </CardContent>
        </Card>
      </div>

      {/* Buttons */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Glassmorphism Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="glass">Glass Button</Button>
          <Button variant="glass-light">Light Glass Button</Button>
          <Button variant="default">Default Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Glassmorphism Inputs</h2>
        <div className="max-w-md space-y-4">
          <Input variant="glass" placeholder="Glass input field" />
          <Input variant="default" placeholder="Default input field" />
        </div>
      </div>

      {/* Default Card for comparison */}
      <div className="max-w-md">
        <Card variant="default">
          <CardHeader>
            <CardTitle>Default Card</CardTitle>
            <CardDescription>Standard card without glassmorphism</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">This is a regular card for comparison.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
