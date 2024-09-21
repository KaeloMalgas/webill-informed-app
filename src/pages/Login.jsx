import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('admin');
  const [errorMessage, setErrorMessage] = useState(''); // To display error messages
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Reset the error message on each login attempt
    setErrorMessage('');

    // Admin login
    if (userType === 'admin') {
      if (
        (email === 'admin@example.com' && password === 'admin123') ||
        (email === 'admin@email.com' && password === '1234@')
      ) {
        navigate('/admin');
        return;
      }
    }

    // Consumer login
    if (userType === 'consumer') {
      if (
        (email === 'consumer@example.com' && password === 'consumer123') ||
        (email === '1@email.com' && password === '12345')
      ) {
        navigate('/consumer');
        return;
      }
    }

    // If credentials are invalid
    setErrorMessage('Invalid email or password');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="p-6 bg-secondary rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-primary">Login</h1>
        
        <form onSubmit={handleLogin}>
          {/* User Type Dropdown */}
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

          {/* Email Input */}
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

          {/* Password Input */}
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

          {/* Error Message */}
          {errorMessage && (
            <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
          )}

          {/* Login Button */}
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
