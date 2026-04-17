import { ShieldAlert } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function AccessDeniedScreen() {
  return (
    <div className="container flex items-center justify-center min-h-[60vh] py-12">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-destructive/10 p-3 mx-auto">
            <ShieldAlert className="h-8 w-8 text-destructive" />
          </div>
          <CardTitle className="text-2xl">Access Denied</CardTitle>
          <CardDescription>
            You do not have permission to access this content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-center">
            This content is restricted to authorized users only. If you believe
            you should have access, please contact the administrator.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
