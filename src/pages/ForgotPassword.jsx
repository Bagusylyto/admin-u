import { Link } from "react-router-dom";
import AuthLayout from "../components/Layouts/AuthLayout";
import LabeledInput from "../components/Elements/LabeledInput";
import Button from "../components/Elements/Button";

const ForgotPasswordPage = () => {
  return (
    <AuthLayout type="forgot password">
      <div className="mt-16 text-center">
        <h2 className="text-lg font-bold">Forgot Password?</h2>
        <p className="text-sm text-gray-03 mt-2">Enter your email address to get the password reset link.</p>
      </div>
      <div className="mt-8">
        <form action="">
          <div className="mb-6">
            <LabeledInput label="Email Address" type="email" placeholder="hello@example.com" name="email" />
          </div>
          <Button variant="bg-primary w-full text-white" type="submit">
            Password Reset
          </Button>
        </form>
      </div>
      <div className="text-center mt-4">
        <Link to="/login" className="text-primary text-sm font-bold">
          Back to login
        </Link>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
