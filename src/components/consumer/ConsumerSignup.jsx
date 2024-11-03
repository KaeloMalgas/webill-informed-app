import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp, confirmSignUp } from '@aws-amplify/auth';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ConsumerSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    verificationCode: '',
  });
  const [showVerification, setShowVerification] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    try {
      await signUp({
        username: formData.email,
        password: formData.password,
        attributes: {
          email: formData.email,
        },
        autoSignIn: {
          enabled: true,
        },
      });
      
      setShowVerification(true);
      toast.success("Verification code sent to your email");
    } catch (error) {
      toast.error(error.message || "Error during signup");
    }
  };

  const handleVerification = async (e) => {
    e.preventDefault();
    
    try {
      await confirmSignUp({
        username: formData.email,
        confirmationCode: formData.verificationCode,
      });
      
      toast.success("Account verified successfully!");
      navigate('/login');
    } catch (error) {
      toast.error(error.message || "Error during verification");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Consumer Sign Up</CardTitle>
          <CardDescription>
            Create your account to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!showVerification ? (
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
              <div className="text-center">
                <Button
                  variant="link"
                  onClick={() => navigate('/login')}
                  type="button"
                >
                  Already have an account? Login
                </Button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerification} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="verificationCode"
                  placeholder="Verification Code"
                  value={formData.verificationCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Verify Account
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsumerSignup;