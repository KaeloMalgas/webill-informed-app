import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('admin');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const user = await Auth.signIn(email, password);
      
      // Check user group/type from Cognito attributes
      const userGroups = user.signInUserSession.accessToken.payload['cognito:groups'] || [];
      const isAdmin = userGroups.includes('admin');
      
      if (userType === 'admin' && !isAdmin) {
        toast.error('You do not have admin privileges');
        return;
      }
      
      // Navigate based on user type
      navigate(userType === 'admin' ? '/admin' : '/consumer');
      
    } catch (error) {
      toast.error(error.message || 'Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="p-6 bg-secondary rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-primary">Login</h1>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <select
              className="w-full p-2 border rounded bg-background text-foreground"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="consumer">Consumer</option>
            </select>
          </div>

          <div className="mb-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background text-foreground"
            />
          </div>

          <div className="mb-4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-background text-foreground"
            />
          </div>

          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;