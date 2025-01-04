import { RegisterForm } from "../_components/register-form";

export default function RegisterPage() {
  return (
    <div className="flex w-full items-center justify-center px-3 py-8 sm:p-20 md:p-24 lg:p-32">
      <div className="w-full md:max-w-sm">
        <RegisterForm />
      </div>
    </div>
  );
}
