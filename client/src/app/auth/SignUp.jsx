import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <SignUp routing="path" path="/sign-up" />
    </div>
  );
}
