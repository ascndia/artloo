// import FixedLayout from "@/components/FixedLayout";
import dynamic from "next/dynamic";
import Link from "next/link";

const FixedLayout = dynamic(() => import("@/components/FixedLayout"), {
  ssr: false,
});

export default function Component() {
  return (
    <FixedLayout>
      <div className="flex  flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Oops! Page Not Found
          </h1>
          <p className="mt-4 text-muted-foreground">
            The page you're looking for could not be located. Please check the
            URL or try navigating back to the homepage.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </FixedLayout>
  );
}
