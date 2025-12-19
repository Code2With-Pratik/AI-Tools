import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <SignIn routing="path" path="/sign-in" />
    </div>
  );
}
