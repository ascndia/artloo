/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dcHMh7Uwuii
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

export default function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Pricing Plans
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that fits your needs and budget.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          <div className="rounded-lg border border-input bg-background p-8 shadow-sm">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <h3 className="text-2xl font-bold">Basic</h3>
                <p className="text-muted-foreground">
                  Perfect for individuals and small teams.
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="grid gap-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>1 user</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>5 GB storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>Limited features</span>
                </li>
              </ul>
              <Button size="lg">Get Started</Button>
            </div>
          </div>
          <div className="rounded-lg border border-input bg-background p-8 shadow-sm">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <h3 className="text-2xl font-bold">Advanced</h3>
                <p className="text-muted-foreground">
                  Ideal for growing teams and businesses.
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="grid gap-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>5 users</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>50 GB storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>Advanced features</span>
                </li>
              </ul>
              <Button size="lg">Get Started</Button>
            </div>
          </div>
          <div className="rounded-lg border border-input bg-background p-8 shadow-sm">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-muted-foreground">
                  Tailored for enterprise-level organizations.
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="grid gap-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>Unlimited users</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>1 TB storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  <span>Enterprise-grade features</span>
                </li>
              </ul>
              <Button size="lg">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
