
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <h1 className="text-4xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl mb-8">Page Not Found</p>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}
