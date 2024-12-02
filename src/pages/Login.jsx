import { useNavigate } from 'react-router-dom';
import { signIn } from '@aws-amplify/auth';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('admin');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const user = await signIn({
        username: email,
        password: password,
      });
      
      if (!user) {
        toast.error('Login failed. Please check your credentials.');
        return;
      }

      // Check user group/type from Cognito attributes
      const userGroups = user.signInUserSession?.accessToken?.payload['cognito:groups'] || [];
      const isAdmin = userGroups.includes('admin');
      
      if (userType === 'admin' && !isAdmin) {
        toast.error('You do not have admin privileges');
        return;
      }
      
      toast.success('Login successful!');
      // Navigate based on user type
      navigate(userType === 'admin' ? '/admin' : '/consumer');
      
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="p-6 bg-card rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-foreground">Login</h1>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <select
              className="w-full p-2 border rounded bg-background text-foreground"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              disabled={isLoading}
            >
              <option value="admin">Admin</option>
              <option value="consumer">Consumer</option>
            </select>
          </div>

          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="bg-background text-foreground"
            />
          </div>

          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              className="bg-background text-foreground"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>

          {userType === 'consumer' && (
            <div className="mt-4 text-center">
              <Button
                variant="link"
                onClick={() => navigate('/signup')}
                type="button"
                disabled={isLoading}
              >
                Don't have an account? Sign up
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;