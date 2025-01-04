import { LoginForm } from "../_components/login-form";

export default function LoginPage() {
  return (
    <div className="flex w-full items-center justify-center px-3 py-8 sm:p-20 md:p-24 lg:p-32">
      <div className="w-full md:max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
