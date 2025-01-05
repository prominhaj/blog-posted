import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex w-full items-center justify-center px-3 py-8 sm:p-20 md:p-24 lg:p-32">
      <SignUp signInUrl="sign-in" />
    </div>
  );
}
